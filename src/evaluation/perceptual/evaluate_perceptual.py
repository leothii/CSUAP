"""Evaluate manifest-paired RGB images at native resolution; run from any directory."""
from __future__ import annotations

import argparse
import csv
from datetime import datetime, timezone
import hashlib
import importlib.metadata
import json
from pathlib import Path
import platform
import time

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from PIL import Image
from skimage.metrics import structural_similarity

ROOT = Path(__file__).resolve().parents[3]
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tif", ".tiff"}
SSIM_OPTIONS = dict(data_range=1.0, channel_axis=-1, gaussian_weights=True,
                    sigma=1.5, use_sample_covariance=False, K1=0.01, K2=0.03)
ISSUE_FIELDS = ["severity", "issue", "source_image", "cloaked_image", "detail"]
PAIR_FIELDS = ["alpha", "source_image", "cloaked_image", "width", "height", "ssim",
               "psnr_db", "mse", "source_sha256", "cloaked_sha256"]


def sha256(path):
    with Path(path).open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest()


def write_csv(path, rows, fields):
    with Path(path).open("w", newline="", encoding="utf-8") as stream:
        writer = csv.DictWriter(stream, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)


def contained_path(root, relative):
    path = (root / relative).resolve()
    if not path.is_relative_to(root.resolve()):
        raise ValueError(f"Path outside image directory: {relative}")
    return path


def validate_manifest(records, reference_dir, cloaked_dir):
    """Validate exact manifest mappings; never infer pairing from numbered filenames."""
    issues, pairs, seen, targets, hashes = [], [], set(), set(), {}

    def issue(severity, kind, row, detail):
        issues.append(dict(severity=severity, issue=kind,
                           source_image=row.get("source_image", ""),
                           cloaked_image=row.get("cloaked_image", ""), detail=detail))

    for row in records:
        try:
            alpha = float(row["alpha"])
            if not np.isfinite(alpha) or not 0 <= alpha <= 1:
                raise ValueError("Alpha must be finite and within [0, 1]")
            source = contained_path(reference_dir, row["source_image"])
            target = contained_path(cloaked_dir, row["cloaked_image"])
            key = (alpha, source)
            if key in seen or target in targets:
                raise ValueError("Duplicate source/alpha pair or reused cloaked image")
            seen.add(key)
            targets.add(target)
            if target.parent.name != f"alpha_{alpha:.2f}":
                raise ValueError("Alpha folder disagrees with manifest")
            if not source.is_file() or not target.is_file():
                raise ValueError("Reference or cloaked image is missing")
            if source not in hashes:
                hashes[source] = sha256(source)
            if hashes[source] != row["source_sha256"]:
                raise ValueError("Reference SHA-256 does not match the cloaking manifest")
            pairs.append(dict(row, alpha=alpha, reference_path=source, test_path=target))
        except (KeyError, TypeError, ValueError, OSError) as exc:
            issue("error", "invalid_pair", row, str(exc))
    alphas = sorted({p["alpha"] for p in pairs})
    sources = {p["reference_path"] for p in pairs}
    for source in sorted(sources):
        actual = {p["alpha"] for p in pairs if p["reference_path"] == source}
        if actual != set(alphas):
            issue("error", "incomplete_alpha_coverage", {"source_image": source.name},
                  f"Present: {sorted(actual)}; expected: {alphas}")
    for path in sorted(reference_dir.rglob("*")):
        if path.is_file() and path.suffix.lower() in EXTENSIONS and path.resolve() not in sources:
            issue("warning", "reference_without_cloaked_pair", {"source_image": path.name},
                  "Excluded: no manifest-mapped cloaked counterpart at any alpha")
    for path in sorted(cloaked_dir.rglob("*")):
        if path.is_file() and path.suffix.lower() in EXTENSIONS and path.resolve() not in targets:
            issue("error", "unlisted_cloaked_image", {"cloaked_image": str(path.relative_to(cloaked_dir))},
                  "Cloaked image is not covered by the manifest")
    if not pairs:
        issue("error", "no_pairs", {}, "No valid comparisons")
    return sorted(pairs, key=lambda p: (p["source_image"], p["alpha"])), issues


def load_rgb(path):
    # Match apply_perturbation.py: no EXIF transpose, resizing or color-profile transform.
    with Image.open(path) as image:
        return np.asarray(image.convert("RGB"), dtype=np.float32) / 255.0


def compute_metrics(reference, cloaked):
    if reference.shape != cloaked.shape:
        raise ValueError(f"Shape mismatch: {reference.shape} versus {cloaked.shape}; no resizing allowed")
    if reference.ndim != 3 or reference.shape[-1] != 3 or min(reference.shape[:2]) < 11:
        raise ValueError("RGB images must be at least 11 x 11 for Gaussian SSIM")
    # Float64 accumulation prevents rounding error in the global RGB MSE.
    difference = reference.astype(np.float64) - cloaked
    mse = float(np.mean(difference * difference))
    del difference
    psnr = float("inf") if mse == 0 else float(10 * np.log10(1.0 / mse))
    ssim = float(structural_similarity(reference, cloaked, **SSIM_OPTIONS))
    return dict(ssim=ssim, psnr_db=psnr, mse=mse)


def summarize(results):
    summary = []
    for alpha in sorted({r["alpha"] for r in results}):
        group = [r for r in results if r["alpha"] == alpha]
        row = dict(alpha=alpha, n=len(group))
        for metric in ("ssim", "psnr_db"):
            values = np.array([r[metric] for r in group])
            row.update({f"{metric}_mean": float(values.mean()),
                        f"{metric}_std": float(values.std(ddof=1)) if len(values) > 1 and np.isfinite(values).all() else "",
                        f"{metric}_median": float(np.median(values)),
                        f"{metric}_min": float(values.min()),
                        f"{metric}_max": float(values.max())})
        row["identical_pairs"] = sum(r["mse"] == 0 for r in group)
        summary.append(row)
    return summary


def save_figures(results, summary, output):
    plt.rcParams.update({"font.family": "serif", "font.serif": ["Times New Roman", "DejaVu Serif"],
                         "font.size": 10, "axes.spines.top": False, "axes.spines.right": False,
                         "pdf.fonttype": 42, "svg.fonttype": "none"})
    alphas = [r["alpha"] for r in summary]
    for distribution in (False, True):
        fig, axes = plt.subplots(1, 2, figsize=(8, 3.6), layout="constrained")
        for ax, metric, label, color in zip(axes, ("ssim", "psnr_db"),
                                           ("SSIM", "PSNR (dB)"), ("#0072B2", "#D55E00")):
            if distribution:
                groups = [np.array([r[metric] for r in results if r["alpha"] == a]) for a in alphas]
                finite = [g[np.isfinite(g)] for g in groups]
                ax.boxplot(finite, positions=alphas, widths=0.045, patch_artist=True,
                           boxprops=dict(facecolor=color, alpha=0.3),
                           medianprops=dict(color="black"), showfliers=False)
                for alpha, group in zip(alphas, groups):
                    valid = group[np.isfinite(group)]
                    # Fixed offsets make the raw observations reproducible.
                    ax.scatter(alpha + np.linspace(-0.012, 0.012, len(valid)), valid,
                               s=9, color=color, alpha=0.65, zorder=3)
            else:
                means = np.array([r[f"{metric}_mean"] for r in summary])
                std = np.array([r[f"{metric}_std"] if r[f"{metric}_std"] != "" else np.nan for r in summary])
                valid = np.isfinite(means)
                ax.errorbar(np.array(alphas)[valid], means[valid], yerr=std[valid],
                            fmt="o-", color=color, capsize=4, markersize=4, linewidth=1.5)
            if any(np.isinf(r[metric]) for r in results):
                ax.text(0.03, 0.03, "Infinite values omitted; see CSV", transform=ax.transAxes, fontsize=8)
            ax.set(xlabel=r"Perturbation strength ($\alpha$)", ylabel=label,
                   title=f"{'(a)' if metric == 'ssim' else '(b)'} {label}")
            ax.set_xticks(alphas, [f"{a:.2f}" for a in alphas])
            ax.set_xlim(min(alphas) - 0.07, max(alphas) + 0.07)
            ax.grid(axis="y", alpha=0.22)
            ax.set_axisbelow(True)
        name = "perceptual_distributions" if distribution else "perceptual_vs_alpha"
        for ext in ("png", "pdf", "svg"):
            fig.savefig(output / f"{name}.{ext}", dpi=600, bbox_inches="tight")
        plt.close(fig)


def write_report(summary, issues, output):
    count = summary[0]["n"]
    lines = ["# Perceptual fidelity evaluation", "",
             f"Evaluated {count} original images at each of {len(summary)} alpha levels "
             f"({sum(r['n'] for r in summary)} comparisons).", "",
             "| Alpha | Images | SSIM (mean ± SD) | PSNR, dB (mean ± SD) |",
             "| --- | ---: | ---: | ---: |"]
    for row in summary:
        def format_metric(metric):
            mean, sd = row[f"{metric}_mean"], row[f"{metric}_std"]
            return f"{mean:.4f} ± {sd:.4f}" if sd != "" else f"{mean:.4f} (SD undefined)"
        lines.append(f"| {row['alpha']:.2f} | {row['n']} | {format_metric('ssim')} | {format_metric('psnr_db')} |")
    lines += ["", "## Chapter 4 presentation", "",
              "Use the table above for exact values and `perceptual_vs_alpha.png` (or vector PDF) "
              "for the trend. The distribution figure is optional supporting material.", "",
              "**Suggested caption — Figure 4.X. Perceptual fidelity at different perturbation strengths.** "
              f"Mean (a) RGB SSIM and (b) PSNR over the same {count} images at each alpha. "
              "Error bars show ±1 sample standard deviation across images, not confidence intervals. "
              "Higher values indicate closer agreement with the original images. Lines connect tested strengths only.", "",
              "**Distribution caption.** Boxes show the median and interquartile range; whiskers extend "
              "to the most extreme observations within 1.5 IQR. Dots show all finite image-level scores. "
              "The same originals are reused across alpha levels.", "",
              "## Method", "",
              "Pairs come from `outputs/cloaked/test/manifest.json`, with source SHA-256 verification. "
              "Images are decoded with Pillow into RGB float32 in [0, 1] at native resolution, "
              "without resizing, EXIF rotation or additional color-profile conversion, matching the cloaking pipeline. "
              "SSIM averages the RGB channel scores using Gaussian weights (sigma 1.5, an 11-pixel window), "
              "population covariance, K1=0.01, K2=0.03 and data_range=1. "
              "PSNR is 10 log10(1/MSE) using MSE across all RGB pixels. "
              "Each image contributes equally to the summaries; mean PSNR is the mean of image-level dB values. "
              "Identical pairs yield infinite PSNR and are explicitly counted in the CSV; "
              "undefined SD is left blank. No significance test is implied.", "",
              "These scores measure fidelity of the saved cloaked images, including clipping and PNG quantization. "
              "They do not by themselves establish visual imperceptibility or protection against model training. "
              "There is no universal pass/fail threshold applied here.", "",
              "Metric reference: https://scikit-image.org/docs/stable/api/skimage.metrics.html", "",
              "## Coverage and exclusions", ""]
    lines += [f"- {r['severity']}: {r['source_image'] or r['cloaked_image']} — {r['detail']}" for r in issues]
    if not issues:
        lines.append("No validation issues.")
    (output / "chapter4_perceptual_report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--reference-dir", type=Path, default=ROOT / "data/test")
    parser.add_argument("--cloaked-dir", type=Path, default=ROOT / "outputs/cloaked/test")
    parser.add_argument("--output-dir", type=Path, default=ROOT / "outputs/evaluation/perceptual")
    args = parser.parse_args(argv)
    output = args.output_dir.resolve()
    output.mkdir(parents=True, exist_ok=True)
    manifest = args.cloaked_dir / "manifest.json"
    records = json.loads(manifest.read_text(encoding="utf-8"))
    pairs, issues = validate_manifest(records, args.reference_dir.resolve(), args.cloaked_dir.resolve())
    write_csv(output / "validation_issues.csv", issues, ISSUE_FIELDS)
    metadata = dict(status="validating", started_utc=datetime.now(timezone.utc).isoformat(),
                    reference_dir=str(args.reference_dir.resolve()), cloaked_dir=str(args.cloaked_dir.resolve()),
                    manifest_sha256=sha256(manifest), evaluator_sha256=sha256(Path(__file__)),
                    python=platform.python_version(),
                    packages={name: importlib.metadata.version(name) for name in ("numpy", "Pillow", "scikit-image", "matplotlib")},
                    ssim=SSIM_OPTIONS, psnr="10*log10(1 / global RGB MSE); data_range=1",
                    orientation="stored pixel orientation", resizing=False,
                    aggregation="equal image weighting; sample SD (ddof=1)",
                    validation_errors=sum(r["severity"] == "error" for r in issues),
                    validation_warnings=sum(r["severity"] == "warning" for r in issues))

    def save_metadata(status):
        metadata["status"] = status
        (output / "evaluation_metadata.json").write_text(json.dumps(metadata, indent=2) + "\n", encoding="utf-8")

    if metadata["validation_errors"]:
        save_metadata("validation_failed")
        raise RuntimeError("Validation failed; see validation_issues.csv. No aggregate results generated.")
    save_metadata("running")
    print(f"Validated {len(pairs)} pairs; {metadata['validation_warnings']} coverage warnings.", flush=True)
    results, errors = [], []
    started = time.monotonic()
    previous, reference = None, None
    for index, row in enumerate(pairs, 1):
        try:
            if previous != row["reference_path"]:
                reference = load_rgb(row["reference_path"])
                previous = row["reference_path"]
            cloaked = load_rgb(row["test_path"])
            scores = compute_metrics(reference, cloaked)
            del cloaked
            results.append(dict(alpha=row["alpha"], source_image=row["source_image"],
                                cloaked_image=row["cloaked_image"], width=reference.shape[1], height=reference.shape[0],
                                **scores, source_sha256=row["source_sha256"], cloaked_sha256=sha256(row["test_path"])))
        except (OSError, ValueError) as exc:
            errors.append(dict(severity="error", issue="metric_error", source_image=row["source_image"],
                               cloaked_image=row["cloaked_image"], detail=str(exc)))
        write_csv(output / "per_image_metrics.csv", results, PAIR_FIELDS)
        if index % 6 == 0 or index == len(pairs):
            print(f"Processed {index}/{len(pairs)} pairs ({time.monotonic()-started:.0f}s)", flush=True)
    write_csv(output / "metric_errors.csv", errors, ISSUE_FIELDS)
    metadata.update(comparisons=len(results), metric_errors=len(errors), elapsed_seconds=time.monotonic()-started)
    if errors:
        save_metadata("metric_failed")
        raise RuntimeError("Metric errors found; aggregate figures withheld. See metric_errors.csv.")
    summary = summarize(results)
    write_csv(output / "alpha_summary.csv", summary, list(summary[0]))
    save_figures(results, summary, output)
    write_report(summary, issues, output)
    metadata["completed_utc"] = datetime.now(timezone.utc).isoformat()
    metadata["figure_renderer_sha256"] = sha256(Path(__file__))
    save_metadata("complete")
    for row in summary:
        print(f"alpha={row['alpha']:.2f}: n={row['n']}, SSIM={row['ssim_mean']:.4f}, PSNR={row['psnr_db_mean']:.4f} dB")
    return summary


if __name__ == "__main__":
    main()
