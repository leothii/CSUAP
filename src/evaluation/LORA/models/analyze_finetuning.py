"""Recover LoRA console training histories and export Chapter 4 comparisons.

Run: python src/evaluation/LORA/models/analyze_finetuning.py
Requires numpy and matplotlib. Never modifies the original logs or adapters.
"""
from pathlib import Path
import argparse
import csv
from datetime import datetime, timezone
import hashlib
import json
import re

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np

MODELS = Path(__file__).resolve().parent
ROOT = MODELS.parents[3]
NUMBER = r"[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?"
PROGRESS = re.compile(r"steps:.*?\|\s*(\d+)/(\d+)\s+\[([\d:]+)<[^\]\r\n]*?avr_loss=(" + NUMBER + r")")
SETTINGS = ["ss_base_model_version", "ss_new_sd_model_hash", "ss_network_dim",
            "ss_network_alpha", "ss_learning_rate", "ss_optimizer", "ss_lr_scheduler",
            "ss_lr_warmup_steps", "ss_seed", "ss_gradient_accumulation_steps",
            "ss_max_train_steps", "ss_num_train_images", "ss_num_batches_per_epoch"]


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def parse_log(text):
    """Keep last rounded display at each optimizer-step counter, including provenance."""
    by_step, counts, expected, previous = {}, {}, None, -1
    for line_number, line in enumerate(text.splitlines(), 1):
        match = PROGRESS.search(line)
        if not match:
            continue
        step, total, elapsed, loss = match.groups()
        step, total, loss = int(step), int(total), float(loss)
        if expected is not None and total != expected:
            raise ValueError("Changing step totals: multiple training sessions may be concatenated")
        if step < previous:
            raise ValueError("Step counter reset: split concatenated/restarted sessions before analysis")
        if not np.isfinite(loss) or loss < 0 or step > total:
            raise ValueError("Invalid training progress value")
        seconds = 0
        for part in elapsed.split(":"):
            seconds = seconds * 60 + int(part)
        expected, previous = total, step
        counts[step] = counts.get(step, 0) + 1
        by_step[step] = dict(step=step, avr_loss=loss, elapsed_seconds=seconds, log_line=line_number)
    if expected is None:
        raise ValueError("No avr_loss progress records found")
    if set(by_step) - {0} != set(range(1, expected + 1)):
        raise ValueError("Incomplete step coverage; expected every step from 1 to the configured total")
    if "model saved." not in text:
        raise ValueError("Missing final model-saved confirmation")
    return [dict(by_step[s], display_records=counts[s]) for s in range(1, expected + 1)]


def adapter_metadata(folder):
    files = list(folder.glob("*.safetensors"))
    if len(files) != 1:
        raise ValueError(f"Expected one final adapter in {folder}; found {len(files)}")
    with files[0].open("rb") as stream:
        length = int.from_bytes(stream.read(8), "little")
        if not 0 < length < 50_000_000:
            raise ValueError("Invalid safetensors header size")
        header = stream.read(length)
    return dict(file=files[0].name, header_sha256=hashlib.sha256(header).hexdigest(),
                metadata=json.loads(header).get("__metadata__", {}))


def write_csv(path, rows):
    with path.open("w", newline="", encoding="utf-8") as stream:
        writer = csv.DictWriter(stream, fieldnames=list(rows[0]))
        writer.writeheader()
        writer.writerows(rows)


def save_figure(fig, output, name):
    for extension in ("png", "pdf", "svg"):
        fig.savefig(output / f"{name}.{extension}", dpi=600, bbox_inches="tight")
    plt.close(fig)


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--models-dir", type=Path, default=MODELS)
    parser.add_argument("--output-dir", type=Path, default=ROOT / "outputs/evaluation/LORA/finetuning")
    args = parser.parse_args(argv)
    folders = [("Clean", "", args.models_dir / "clean")]
    folders += [(f"CS-UAP {float(p.name[3:]):.2f}", float(p.name[3:]), p)
                for p in args.models_dir.iterdir() if p.is_dir() and re.fullmatch(r"run\d+(?:\.\d+)?", p.name)]
    folders[1:] = sorted(folders[1:], key=lambda item: item[1])
    if len(folders) < 2:
        raise ValueError("Need clean and at least one alpha run")
    curves, summaries, provenance, warnings = {}, [], {}, []
    all_rows = []
    for label, alpha, folder in folders:
        log = folder / "train.log"
        rows = parse_log(log.read_text(encoding="utf-8", errors="replace"))
        adapter = adapter_metadata(folder)
        metadata = adapter["metadata"]
        if int(metadata["ss_steps"]) != rows[-1]["step"]:
            raise ValueError(f"Adapter/log step disagreement for {label}")
        empty_csvs = [p.name for p in folder.glob("*training_log.csv") if not p.read_text(encoding="utf-8-sig").strip()]
        if empty_csvs:
            warnings.append(f"{label}: empty CSV export; recovered history from train.log")
        curves[label] = rows
        all_rows.extend(dict(condition=label, alpha=alpha, **row) for row in rows)
        tail = rows[-50:]
        summaries.append(dict(condition=label, alpha=alpha, completed_steps=rows[-1]["step"],
                              final_logged_avr_loss=rows[-1]["avr_loss"],
                              tail_start_step=tail[0]["step"], tail_end_step=tail[-1]["step"],
                              last_50_displays_mean=float(np.mean([r["avr_loss"] for r in tail])),
                              progress_elapsed_minutes=rows[-1]["elapsed_seconds"] / 60))
        provenance[label] = dict(log=str(log.resolve()), log_sha256=digest(log), adapter=adapter,
                                 empty_csv_exports=empty_csvs)
    clean_settings = provenance["Clean"]["adapter"]["metadata"]
    settings_rows = []
    for setting in SETTINGS:
        values = {label: provenance[label]["adapter"]["metadata"].get(setting, "MISSING") for label in curves}
        consistent = len(set(values.values())) == 1 and "MISSING" not in values.values()
        settings_rows.append(dict(setting=setting, **values, consistent=consistent))
        if not consistent:
            warnings.append(f"Training setting differs or is missing: {setting}")
    if len({r["completed_steps"] for r in summaries}) != 1:
        raise ValueError("Run lengths differ: select a common training endpoint before comparing")
    baseline = summaries[0]["final_logged_avr_loss"]
    for row in summaries:
        row["final_difference_from_clean"] = row["final_logged_avr_loss"] - baseline
        row["final_relative_change_percent"] = 100 * (row["final_logged_avr_loss"] - baseline) / baseline if baseline else ""
    output = args.output_dir.resolve()
    output.mkdir(parents=True, exist_ok=True)
    write_csv(output / "training_history.csv", all_rows)
    write_csv(output / "finetuning_summary.csv", summaries)
    write_csv(output / "training_settings.csv", settings_rows)

    plt.rcParams.update({"font.family": "serif", "font.serif": ["Times New Roman", "DejaVu Serif"],
                         "font.size": 10, "axes.spines.top": False, "axes.spines.right": False,
                         "pdf.fonttype": 42, "svg.fonttype": "none"})
    protected = folders[1:]
    nrows = (len(protected) + 1) // 2
    fig, axes = plt.subplots(nrows, 2, figsize=(8.2, 2.2 * nrows), sharex=True, sharey=True,
                             squeeze=False, layout="constrained")
    clean = curves["Clean"]
    for ax, (label, alpha, _) in zip(axes.flat, protected):
        rows = curves[label]
        ax.plot([r["step"] for r in clean], [r["avr_loss"] for r in clean],
                color="#333333", linestyle="--", linewidth=1.1, label="Clean")
        ax.plot([r["step"] for r in rows], [r["avr_loss"] for r in rows],
                color="#0072B2", linewidth=1.2, label="CS-UAP")
        ax.set_title(rf"$\alpha={alpha:.2f}$")
        ax.grid(axis="y", alpha=0.22)
        ax.legend(frameon=False, fontsize=9)
    for ax in list(axes.flat)[len(protected):]:
        ax.set_visible(False)
    fig.supxlabel("Displayed optimizer step")
    fig.supylabel("Logged average training loss (avr_loss)")
    save_figure(fig, output, "training_loss_curves")

    fig, ax = plt.subplots(figsize=(6.4, 3.8), layout="constrained")
    x = [r["alpha"] for r in summaries[1:]]
    y = [r["final_logged_avr_loss"] for r in summaries[1:]]
    ax.plot(x, y, "o-", color="#0072B2", label="CS-UAP", markersize=5)
    ax.axhline(baseline, color="#333333", linestyle="--", label=f"Clean ({baseline:.3f})")
    for alpha, loss in zip(x, y):
        ax.annotate(f"{loss:.3f}", (alpha, loss), xytext=(0, 8), textcoords="offset points", ha="center", fontsize=9)
    ax.set(xlabel=r"Perturbation strength ($\alpha$)", ylabel="Final logged average training loss")
    ax.set_xticks(x, [f"{a:.2f}" for a in x])
    ax.margins(y=0.2, x=0.08)
    ax.grid(axis="y", alpha=0.22)
    ax.legend(frameon=False, loc="lower right")
    save_figure(fig, output, "final_loss_vs_alpha")

    report = ["# LoRA fine-tuning comparison", "",
              "| Condition | Steps | Final logged average loss | Mean of last 50 step displays | Change from clean (%) |",
              "| --- | ---: | ---: | ---: | ---: |"]
    for row in summaries:
        change = row["final_relative_change_percent"]
        change_text = f"{change:+.1f}" if change != "" else "undefined"
        report.append(f"| {row['condition']} | {row['completed_steps']} | {row['final_logged_avr_loss']:.3f} | "
                      f"{row['last_50_displays_mean']:.3f} | {change_text} |")
    report += ["", "## Chapter 4 figures", "",
               "**Figure 4.X. LoRA fine-tuning loss histories.** Each panel compares the clean run "
               "with one CS-UAP strength, on shared axes. Curves show the last recorded `avr_loss` "
               "display at each optimizer-step counter. No additional smoothing is applied.", "",
               "**Figure 4.Y. Final logged average loss versus perturbation strength.** "
               "Markers show the final displayed `avr_loss`; the dashed line is the clean baseline. "
               "Lines connect the tested strengths only. There is one run per condition and no error bars.", "",
               "Use the summary table and the six-panel loss figure in the main chapter. "
               "The final-loss figure is optional if space is limited.", "",
               "## Method and interpretation", "",
               "The existing training CSV exports are not used: console `train.log` is the source. "
               "Repeated progress records are deduplicated by retaining the last display for each step. "
               "Step 0 is excluded because its loss already reflects training microbatches, not an untrained baseline. "
               "Every step from 1 to the configured total and a model-saved message are required. "
               "The exported history retains source line numbers, elapsed display time and duplicate counts.", "",
               "In sd-scripts v0.10.6, `avr_loss` is the LossRecorder moving average: the recorder grows "
               "during the first epoch, then replaces losses at batch positions in subsequent epochs. "
               "It is not raw batch loss, validation loss, or a cumulative mean over all training. "
               "During gradient accumulation, several updates share one displayed optimizer-step counter. "
               "These histories therefore represent sampled console displays, not exact optimizer-boundary losses. "
               "Values are rounded by the console; averaging the last 50 displays is descriptive only, "
               "not 50 independent runs or a reconstruction of raw losses.", "",
               "Training loss alone does not establish protection effectiveness or generated-image quality. "
               "The conditions use different input images; evaluate generated outputs separately. "
               "No significance tests or confidence intervals are inferred from one run per condition. "
               "Elapsed time is the progress-bar duration, which can include checkpoint overhead, not total job time.", "",
               "Sources: [trainer logging](https://github.com/kohya-ss/sd-scripts/blob/v0.10.6/train_network.py#L1343-L1385) "
               "and [LossRecorder](https://github.com/kohya-ss/sd-scripts/blob/v0.10.6/library/train_util.py#L6277-L6296).", "",
               "## Settings and provenance", "",
               "`training_settings.csv` compares actual adapter metadata, rather than current notebook defaults. "
               "`ss_num_train_images` includes repeats; it is not a count of unique originals. "
               "LoRA network alpha is a separate hyperparameter from the CS-UAP perturbation strength. "
               "`analysis_metadata.json` includes source hashes and full saved adapter metadata. "
               "Agreement of the listed fields does not establish that every experimental detail is identical.", ""]
    report += [f"- {warning}" for warning in warnings]
    (output / "chapter4_finetuning_report.md").write_text("\n".join(report) + "\n", encoding="utf-8")
    (output / "analysis_metadata.json").write_text(json.dumps(dict(
        created_utc=datetime.now(timezone.utc).isoformat(), script_sha256=digest(Path(__file__)),
        source_metric="console avr_loss", deduplication="last display per step; exclude step 0",
        additional_smoothing=False, runs=provenance, warnings=warnings,
        numpy_version=np.__version__, matplotlib_version=matplotlib.__version__), indent=2) + "\n", encoding="utf-8")
    for row in summaries:
        print(f"{row['condition']}: {row['completed_steps']} steps, final avr_loss={row['final_logged_avr_loss']:.3f}")
    print(f"Saved tables and figures to {output}")


if __name__ == "__main__":
    main()
