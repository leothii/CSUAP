"""Create Chapter 4 figures from the adjacent training_log.csv.

Run: python outputs/uap/plot_training.py
Dependencies: numpy, matplotlib.
"""
from pathlib import Path
import csv
import json

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.ticker import FormatStrFormatter, MaxNLocator
import numpy as np


def main():
    folder = Path(__file__).resolve().parent
    with (folder / "training_log.csv").open(newline="", encoding="utf-8-sig") as stream:
        rows = list(csv.DictReader(stream))
    columns = ["Epoch", "Mean CLIP Similarity"]
    data = {key: np.array([float(row[key]) for row in rows]) for key in columns}
    if not rows or not all(np.isfinite(values).all() for values in data.values()):
        raise ValueError("The log must contain finite observations.")
    epoch = data["Epoch"]
    if not (np.diff(epoch) > 0).all():
        raise ValueError("Epochs must be strictly increasing; check for combined runs.")
    similarity = data["Mean CLIP Similarity"]
    plt.rcParams.update({
        "font.family": "serif", "font.serif": ["Times New Roman", "DejaVu Serif"],
        "font.size": 11, "axes.titlesize": 12, "axes.labelsize": 11,
        "axes.spines.top": False, "axes.spines.right": False,
        "pdf.fonttype": 42, "ps.fonttype": 42, "svg.fonttype": "none",
        "savefig.facecolor": "white",
    })
    fig, ax = plt.subplots(figsize=(6.5, 4), layout="constrained")
    color = "#0072B2"
    ax.plot(epoch, similarity, color=color, marker="o", markersize=3.6, linewidth=1.6)
    ax.set(xlabel="Epoch", ylabel="Mean CLIP similarity")
    ax.set_xlim(epoch[0] - 0.6, epoch[-1] + 0.6)
    ax.xaxis.set_major_locator(MaxNLocator(nbins=10, integer=True))
    ax.yaxis.set_major_formatter(FormatStrFormatter("%.2f"))
    ax.grid(axis="y", color="0.88", linewidth=0.6)
    ax.set_axisbelow(True)
    ax.margins(y=0.22)
    for idx, offset in [(0, (8, 10 if similarity[0] > similarity[-1] else -18)),
                        (-1, (-8, -18 if similarity[0] > similarity[-1] else 10))]:
        ax.annotate(f"{similarity[idx]:.4f}", (epoch[idx], similarity[idx]),
                    xytext=offset, textcoords="offset points", fontsize=10,
                    ha="left" if idx == 0 else "right", color=color)
    for extension in ("png", "pdf", "svg"):
        fig.savefig(folder / f"chapter4_training_curves.{extension}", dpi=600, bbox_inches="tight")
    plt.close(fig)
    reduction = 100 * (similarity[0] - similarity[-1]) / similarity[0]
    summary = {
        "epochs": len(epoch), "initial_similarity": float(similarity[0]),
        "final_similarity": float(similarity[-1]), "relative_reduction_percent": float(reduction),
    }
    (folder / "chapter4_training_summary.json").write_text(json.dumps(summary, indent=2) + "\n", encoding="utf-8")
    caption = (
        "# Chapter 4 training figure\n\n"
        "**Suggested caption — Figure 4.X. Mean CLIP similarity during CS-UAP training.** "
        f"Mean CLIP image–text similarity over {len(epoch)} epochs. "
        "Markers represent recorded epoch means; connecting lines are visual guides, with no smoothing.\n\n"
        "**Suggested discussion.** "
        f"Mean CLIP similarity decreased from {similarity[0]:.4f} at epoch {epoch[0]:g} "
        f"to {similarity[-1]:.4f} at epoch {epoch[-1]:g}, a relative reduction of {reduction:.2f}%. "
        "The largest changes occurred early in training, followed by smaller changes in later epochs. "
        "These observations describe the training run; they do not independently establish "
        "held-out protection effectiveness or statistical convergence.\n\n"
        "**Files.** Use the 600-dpi PNG in Word, or the vector PDF/SVG for scalable output. "
        "Replace Figure 4.X with your chapter's figure number. "
        "Run `python outputs/uap/plot_training.py` from the repository root to regenerate.\n"
    )
    (folder / "chapter4_training_caption.md").write_text(caption, encoding="utf-8")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
