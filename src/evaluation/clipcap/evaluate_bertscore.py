"""BERTScore semantic consistency: protected ClipCap captions versus clean captions."""
import argparse
import csv
from datetime import datetime, timezone
import hashlib
import importlib.metadata
import json
from pathlib import Path
import re

import numpy as np

ROOT = Path(__file__).resolve().parents[3]


def read_pairs(path):
    """Require one clean caption and the same alpha coverage for each original."""
    with path.open(newline='', encoding='utf-8-sig') as stream:
        rows = list(csv.DictReader(stream))
    by_image = {}
    for row in rows:
        source, condition, caption = row['source_image'], row['condition'], row['caption'].strip()
        if not source or not caption:
            raise ValueError('Image identifiers and captions must be nonempty')
        if condition != 'clean':
            match = re.fullmatch(r'alpha_(\d+\.\d+)', condition)
            if not match:
                raise ValueError(f'Unknown condition: {condition}')
            alpha = float(row['alpha'])
            if not 0 < alpha <= 1 or alpha != float(match[1]):
                raise ValueError(f'Alpha/condition mismatch: {condition}')
        if condition in by_image.setdefault(source, {}):
            raise ValueError(f'Duplicate caption for {source} / {condition}')
        by_image[source][condition] = caption
    conditions = sorted({condition for group in by_image.values() for condition in group if condition != 'clean'},
                        key=lambda c: float(c[6:]))
    if not by_image or not conditions:
        raise ValueError('Need clean and protected captions')
    pairs = []
    for source, group in sorted(by_image.items()):
        if set(group) != {'clean', *conditions}:
            raise ValueError(f'Incomplete clean/alpha coverage for {source}')
        for condition in ['clean'] + conditions:
            pairs.append(dict(source_image=source, condition=condition,
                              alpha='' if condition == 'clean' else float(condition[6:]),
                              reference_caption=group['clean'], candidate_caption=group[condition]))
    return pairs


def write_csv(path, rows):
    with path.open('w', newline='', encoding='utf-8') as stream:
        writer = csv.DictWriter(stream, fieldnames=list(rows[0]))
        writer.writeheader()
        writer.writerows(rows)


def summarize(rows):
    conditions = ['clean'] + sorted({r['condition'] for r in rows if r['condition'] != 'clean'}, key=lambda c: float(c[6:]))
    summary = []
    for condition in conditions:
        group = [r for r in rows if r['condition'] == condition]
        item = dict(condition=condition, alpha=group[0]['alpha'], n=len(group))
        for metric in ('precision', 'recall', 'f1'):
            values = np.array([r[f'bertscore_{metric}'] for r in group])
            item[f'{metric}_mean'] = float(values.mean())
            item[f'{metric}_std'] = float(values.std(ddof=1)) if len(values) > 1 else ''
        f1 = np.array([r['bertscore_f1'] for r in group])
        item.update(f1_median=float(np.median(f1)), f1_min=float(f1.min()), f1_max=float(f1.max()),
                    identical_caption_pairs=sum(r['candidate_caption'] == r['reference_caption'] for r in group))
        summary.append(item)
    return summary


def plot_summary(summary, output):
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    plt.rcParams.update({'font.family': 'serif', 'font.serif': ['Times New Roman', 'DejaVu Serif'],
                         'font.size': 11, 'axes.spines.top': False, 'axes.spines.right': False,
                         'pdf.fonttype': 42, 'svg.fonttype': 'none'})
    protected = summary[1:]
    x = [r['alpha'] for r in protected]
    means = [r['f1_mean'] for r in protected]
    errors = [r['f1_std'] if r['f1_std'] != '' else np.nan for r in protected]
    fig, ax = plt.subplots(figsize=(6.6, 4.2), layout='constrained')
    ax.errorbar(x, means, yerr=errors, fmt='o-', color='#0072B2', capsize=4,
                markersize=5, linewidth=1.6, label='Protected vs. clean caption (mean ± SD)')
    ax.set(xlabel=r'Perturbation strength ($\alpha$)', ylabel='BERTScore F1')
    ax.set_xticks(x, [f'{a:.2f}' for a in x])
    ax.grid(axis='y', alpha=0.22)
    ax.margins(x=0.08, y=0.15)
    ax.legend(frameon=False, fontsize=9, loc='lower left')
    for extension in ('png', 'pdf', 'svg'):
        fig.savefig(output / f'bertscore_f1_vs_alpha.{extension}', dpi=600, bbox_inches='tight')
    plt.close(fig)


def write_report(summary, metadata, output):
    lines = ['# BERTScore: caption semantic consistency', '',
             'Reference: the caption generated from the clean version of the same original image. '
             'Candidate: the caption generated from its protected version. Each image has equal weight.', '',
             '| Condition | Images | BERTScore F1 (mean ± SD) | Identical caption pairs |',
             '| --- | ---: | ---: | ---: |']
    for row in summary:
        condition = 'Clean self-comparison' if row['condition'] == 'clean' else f"Alpha {row['alpha']:.2f}"
        sd = f"{row['f1_std']:.4f}" if row['f1_std'] != '' else 'undefined'
        lines.append(f"| {condition} | {row['n']} | {row['f1_mean']:.4f} ± {sd} | {row['identical_caption_pairs']} |")
    lines += ['', '**Suggested caption — Figure 4.X. Semantic consistency of ClipCap captions across perturbation strengths.** '
              f"Mean raw BERTScore F1 across {summary[0]['n']} matched originals at each alpha, "
              'using clean-image captions as references. Error bars represent ±1 sample standard deviation across images. '
              'Higher scores indicate greater semantic consistency.', '',
              '## Interpretation', '',
              'Lower F1 indicates a greater semantic change from the clean caption. It does not by itself establish '
              'that the protected caption is incorrect: clean captions are generated by a model and can also be incorrect. '
              'These results measure consistency, not accuracy against human annotations or overall protection effectiveness. '
              'F1 is not a percentage of correct words. There is no universal pass/fail threshold. '
              'The clean self-comparison is approximately 1 by construction and is not an independent performance estimate.', '',
              '## Reproducible settings', '',
              '- Encoder: roberta-large; layer 17; English.',
              '- IDF weighting: disabled. Baseline rescaling: disabled (raw scores).',
              f"- Fast tokenizer: {metadata['tokenizer_class']}; actual is_fast={metadata['actual_fast_tokenizer']}.",
              '- Precision, recall and F1 are computed per caption pair. The reported F1 is the arithmetic '
              'mean of pair-level F1 scores, not F1 recomputed from mean precision and recall.',
              '- Standard deviation is descriptive image-to-image variation, not a confidence interval.',
              f"- BERTScore configuration hash: `{metadata['bertscore_hash']}`.",
              f"- Model revision: `{metadata['model_revision']}`.",
              '- Input and evaluator hashes and package versions are saved in bertscore_metadata.json.', '',
              'Method: [BERTScore official implementation](https://github.com/Tiiiger/bert_score).', '']
    (output / 'chapter4_bertscore_report.md').write_text('\n'.join(lines), encoding='utf-8')


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--captions', type=Path, default=ROOT / 'outputs/evaluation/clipcap/captions.csv')
    parser.add_argument('--output-dir', type=Path, default=ROOT / 'outputs/evaluation/clipcap/bertscore')
    parser.add_argument('--device', default='auto')
    parser.add_argument('--batch-size', type=int, default=8)
    args = parser.parse_args(argv)
    if args.batch_size < 1:
        parser.error('batch-size must be positive')
    rows = read_pairs(args.captions)
    import torch
    import bert_score
    from bert_score import BERTScorer
    torch.set_num_threads(min(4, torch.get_num_threads()))
    device = ('cuda' if torch.cuda.is_available() else 'cpu') if args.device == 'auto' else args.device
    print(f'Scoring {len(rows)} caption pairs, including clean self-comparisons, on {device}.', flush=True)
    scorer = BERTScorer(model_type='roberta-large', num_layers=17, lang='en', device=device,
                        batch_size=args.batch_size, idf=False, rescale_with_baseline=False,
                        use_fast_tokenizer=True)
    precision, recall, f1 = scorer.score([r['candidate_caption'] for r in rows],
                                        [r['reference_caption'] for r in rows],
                                        batch_size=args.batch_size, verbose=True)
    for row, p, r, f in zip(rows, precision.tolist(), recall.tolist(), f1.tolist()):
        if not all(np.isfinite([p, r, f])):
            raise ValueError('Nonfinite BERTScore result')
        row.update(bertscore_precision=p, bertscore_recall=r, bertscore_f1=f)
        if row['candidate_caption'] == row['reference_caption'] and not np.isclose(f, 1.0, atol=1e-5):
            raise ValueError('BERTScore self-comparison sanity check failed')
    output = args.output_dir.resolve()
    output.mkdir(parents=True, exist_ok=True)
    metadata = dict(created_utc=datetime.now(timezone.utc).isoformat(), status='complete',
                    reference='clean-image ClipCap caption for the same source_image',
                    interpretation='semantic consistency, not human-reference accuracy',
                    encoder='roberta-large', num_layers=17, idf=False, rescale_with_baseline=False,
                    requested_fast_tokenizer=True, tokenizer_class=type(scorer._tokenizer).__name__,
                    actual_fast_tokenizer=bool(scorer._tokenizer.is_fast),
                    model_revision=scorer._model.config._commit_hash, bertscore_hash=scorer.hash,
                    bertscore_module_version=bert_score.__version__, device=device, batch_size=args.batch_size,
                    pairs=len(rows), input=str(args.captions.resolve()),
                    input_sha256=hashlib.sha256(args.captions.read_bytes()).hexdigest(),
                    evaluator_sha256=hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
                    packages={p: importlib.metadata.version(p) for p in ('bert-score', 'transformers', 'torch', 'numpy', 'matplotlib')})
    summary = summarize(rows)
    write_csv(output / 'bertscore_per_image.csv', rows)
    write_csv(output / 'bertscore_summary.csv', summary)
    plot_summary(summary, output)
    write_report(summary, metadata, output)
    (output / 'bertscore_metadata.json').write_text(json.dumps(metadata, indent=2) + '\n', encoding='utf-8')
    for row in summary:
        print(f"{row['condition']}: n={row['n']}, F1={row['f1_mean']:.4f}, SD={row['f1_std']:.4f}")
    print(f'Saved results to {output}')


if __name__ == '__main__':
    main()
