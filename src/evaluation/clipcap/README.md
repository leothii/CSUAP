# BERTScore F1 for clean versus protected captions

Run from PowerShell (the existing ClipCap environment contains BERTScore):

```powershell
cd C:\CSUAP
C:\CLIP_prefix_caption\.venv\Scripts\python.exe src/evaluation/clipcap/evaluate_bertscore.py
```

Input: `outputs/evaluation/clipcap/captions.csv`. Output:
`outputs/evaluation/clipcap/bertscore`. Each run regenerates the named score files
and figures, without modifying the original captions.

Every protected caption is matched to the clean caption by `source_image`.
Duplicate pairs, missing alpha levels, missing clean captions and empty captions
are rejected. Clean-versus-clean scores provide a numerical sanity check.

The metric measures semantic consistency relative to the clean **model-generated**
caption. It is not caption accuracy against human references. Use the summary
table (mean ± sample SD) and the F1-versus-alpha plot for Chapter 4; suggested
caption and method details are in the generated report.

Settings: `roberta-large`, layer 17, English, fast tokenizer, IDF disabled, baseline
rescaling disabled. Precision/recall/F1, model revision, actual tokenizer class, BERTScore
hash and dependency versions are recorded. Do not compare scores from different
model/tokenizer/rescaling settings as if they were interchangeable.

Dependencies: `bert-score`, `torch`, `transformers`, `numpy`, `matplotlib`.
First use downloads the encoder if not already cached. `--device cpu` explicitly
selects CPU; `--batch-size 4` reduces memory use. Alternate input/output files can
be selected with `--captions` and `--output-dir`.

Reference: https://github.com/Tiiiger/bert_score
