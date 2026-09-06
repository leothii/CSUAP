"""Export a fixed UAP array as mobile-friendly assets.

This project stores a universal perturbation, not a per-image model. It does
not need TFLite: Flutter can load the raw float32 array and apply pixel math.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import numpy as np
from PIL import Image


def export_perturbation(input_path: Path, output_dir: Path) -> dict:
    perturbation = np.load(input_path, allow_pickle=False)
    if perturbation.ndim != 3 or perturbation.shape[-1] != 3:
        raise ValueError(
            f"Expected an HWC RGB array, got shape {perturbation.shape}."
        )

    perturbation = np.asarray(perturbation, dtype=np.float32)
    if not np.isfinite(perturbation).all():
        raise ValueError("Perturbation contains NaN or infinite values.")

    output_dir.mkdir(parents=True, exist_ok=True)
    raw_path = output_dir / "cs_uap_v_f32_hwc.bin"
    png_path = output_dir / "cs_uap_v_visualization.png"
    metadata_path = output_dir / "cs_uap_v_metadata.json"

    # Keep the exact values for Flutter. The byte order is explicit so the
    # asset can be decoded consistently on every supported device.
    raw_values = np.ascontiguousarray(perturbation.astype("<f4", copy=False))
    raw_values.tofile(raw_path)

    min_value = float(perturbation.min())
    max_value = float(perturbation.max())
    value_range = max_value - min_value
    if value_range == 0:
        visualization = np.zeros(perturbation.shape, dtype=np.uint8)
    else:
        visualization = np.round(
            (perturbation - min_value) / value_range * 255.0
        ).clip(0, 255).astype(np.uint8)
    Image.fromarray(visualization, mode="RGB").save(png_path)

    metadata = {
        "format": "fixed_universal_adversarial_perturbation",
        "source": input_path.as_posix(),
        "shape": list(perturbation.shape),
        "layout": "HWC",
        "channels": "RGB",
        "dtype": "float32",
        "byte_order": "little_endian",
        "value_min": min_value,
        "value_max": max_value,
        "raw_binary": raw_path.name,
        "visualization_png": png_path.name,
        "tflite_required": False,
        "flutter_decode": (
            "Read 224*224*3 little-endian float32 values in HWC RGB order. "
            "Use image_rgb_normalized + alpha * perturbation, then clamp to [0, 1]."
        ),
    }
    metadata_path.write_text(json.dumps(metadata, indent=2) + "\n", encoding="utf-8")
    return metadata


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--input",
        type=Path,
        default=Path("outputs/uap/cs_uap_v.npy"),
        help="Fixed HWC RGB perturbation stored as a NumPy .npy array.",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("outputs/mobile_perturbation"),
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    metadata = export_perturbation(args.input, args.output_dir)
    print(f"Input shape: {tuple(metadata['shape'])}")
    print(f"Input dtype: {metadata['dtype']}")
    print(f"Value range: [{metadata['value_min']}, {metadata['value_max']}]")
    print(f"Raw asset: {args.output_dir / metadata['raw_binary']}")
    print(f"Visualization: {args.output_dir / metadata['visualization_png']}")
    print("TFLite required: no")


if __name__ == "__main__":
    main()