#Apply a trained CS-UAP perturbation to target images.

from __future__ import annotations

import argparse
import hashlib
import json
import logging
from dataclasses import dataclass
from pathlib import Path

import numpy as np
from PIL import Image

logging.basicConfig(level=logging.INFO, format="%(message)s")
logger = logging.getLogger(__name__)

DEFAULT_ALPHAS = (1.0, 0.9, 0.8, 0.7, 0.6, 0.5)  # matches Table 4

INPUT_DIR = Path("data/test")                 # <- set this to your test images folder
V_PATH = Path("outputs/uap/cs_uap_v.npy")     # <- trained perturbation vector
MODE = "resize"                               # "resize" or "tile"
ALPHAS = DEFAULT_ALPHAS                       # which alpha values to apply

OUTPUT_DIR: Path | None = None  # None derives outputs/cloaked/<input directory name>.
# ============================================================================


@dataclass
class ApplyConfig:
    mode: str = "resize"  # "resize" or "tile"
    alphas: tuple[float, ...] = DEFAULT_ALPHAS

    def __post_init__(self) -> None:
        if self.mode not in {"resize", "tile"}:
            raise ValueError("mode must be resize or tile")
        if not self.alphas or any(not np.isfinite(a) or not 0 <= a <= 1 for a in self.alphas):
            raise ValueError("alphas must be finite values in [0, 1]")
        if len({f"{a:.2f}" for a in self.alphas}) != len(self.alphas):
            raise ValueError("alphas must have distinct two-decimal output names")


def validate_perturbation(v: np.ndarray) -> np.ndarray:
    v = np.asarray(v, dtype=np.float32)
    if v.ndim != 3 or v.shape[2] != 3 or v.shape[0] != v.shape[1] or v.shape[0] < 1:
        raise ValueError("Perturbation must have square (H, W, 3) shape")
    if not np.isfinite(v).all() or np.max(np.abs(v)) > 1:
        raise ValueError("Perturbation must be finite and within [-1, 1]")
    return v


def load_rgb(path: Path) -> np.ndarray:
    # Preserve stored pixel orientation to match existing reference-image evaluation.
    with Image.open(path) as image:
        return np.asarray(image.convert("RGB"), dtype=np.float32) / 255.0


def quantize_rgb(image: np.ndarray) -> np.ndarray:
    """The only quantization step: export the final protected image as uint8 PNG."""
    return np.rint(np.clip(image, 0, 1) * 255).astype(np.uint8)


def transform_perturbation(v: np.ndarray, target_hw: tuple[int, int], mode: str) -> np.ndarray:
    v = validate_perturbation(v)
    target_h, target_w = target_hw
    if target_h < 1 or target_w < 1:
        raise ValueError("Target dimensions must be positive")
    native_size = v.shape[0]  # v is square, e.g. 224x224

    if mode == "resize":
        # Scale the square pattern to the shorter side, then tile to cover the photo.
        scale = min(target_h, target_w) / native_size
        scaled_size = max(1, round(native_size * scale))
        # Pillow mode F preserves signed float values and supports bicubic resizing.
        # Clamp interpolation overshoot to the actual asset bound, not a hardcoded epsilon.
        if scaled_size == native_size:
            v_scaled_np = v
        else:
            v_scaled_np = np.stack([
                np.asarray(Image.fromarray(v[..., c]).resize(
                    (scaled_size, scaled_size), Image.Resampling.BICUBIC
                ), dtype=np.float32) for c in range(3)
            ], axis=-1)
            bound = float(np.max(np.abs(v)))
            v_scaled_np = np.clip(v_scaled_np, -bound, bound)

        return v_scaled_np[np.arange(target_h)[:, None] % scaled_size,
                           np.arange(target_w)[None, :] % scaled_size]

    if mode == "tile":
        return v[np.arange(target_h)[:, None] % native_size,
                 np.arange(target_w)[None, :] % native_size]

    raise ValueError(f"Unknown mode: {mode}")


def apply_perturbation(image: np.ndarray, v: np.ndarray, alpha: float) -> np.ndarray:
    if image.shape != v.shape or image.ndim != 3 or image.shape[-1] != 3:
        raise ValueError("Image and transformed perturbation must have matching RGB shapes")
    if not np.isfinite(alpha) or not 0 <= alpha <= 1:
        raise ValueError("alpha must be finite and in [0, 1]")
    if not np.isfinite(image).all() or not np.isfinite(v).all() or image.min() < 0 or image.max() > 1:
        raise ValueError("Image must be finite in [0, 1]; perturbation must be finite")
    return np.clip(image + alpha * v, 0.0, 1.0)


def process_directory(
    v_path: Path, input_dir: Path, output_dir: Path, config: ApplyConfig
) -> list[dict]:
    v = validate_perturbation(np.load(v_path, allow_pickle=False))

    manifest = []
    image_paths = sorted(
        p for p in input_dir.iterdir() if p.is_file() and p.suffix.lower() in (".jpg", ".jpeg", ".png")
    )
    if not image_paths:
        raise ValueError(f"No supported images found in {input_dir}")
    if output_dir.exists() and any(output_dir.iterdir()):
        raise FileExistsError(f"Use a fresh output directory to avoid stale experiment files: {output_dir}")
    output_dir.mkdir(parents=True, exist_ok=True)
    asset_hash = hashlib.sha256(v_path.read_bytes()).hexdigest()
    logger.info("Found %d input images in %s", len(image_paths), input_dir)

    for image_index, image_path in enumerate(image_paths, start=1):
        image_np = load_rgb(image_path)
        source_hash = hashlib.sha256(image_path.read_bytes()).hexdigest()
        v_transformed = transform_perturbation(v, image_np.shape[:2], config.mode)

        for alpha in config.alphas:
            alpha_dir = output_dir / f"alpha_{alpha:.2f}"
            alpha_dir.mkdir(parents=True, exist_ok=True)

            cloaked = apply_perturbation(image_np, v_transformed, alpha)
            cloaked_uint8 = quantize_rgb(cloaked)

            out_name = f"img{image_index}.png"
            out_path = alpha_dir / out_name
            Image.fromarray(cloaked_uint8).save(out_path)

            manifest.append({
                "source_image": image_path.name,
                "cloaked_image": f"alpha_{alpha:.2f}/{out_name}",
                "alpha": alpha,
                "mode": config.mode,
                "source_sha256": source_hash,
                "perturbation_sha256": asset_hash,
                "perturbation_linf": float(np.max(np.abs(v))),
                "saved_pixel_linf": float(np.max(np.abs(cloaked_uint8 / 255.0 - image_np))),
            })

    with open(output_dir / "manifest.json", "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    logger.info("Wrote %d cloaked images to %s", len(manifest), output_dir)
    return manifest


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--v-path", type=Path, default=V_PATH)
    parser.add_argument("--input-dir", type=Path, default=INPUT_DIR,
                         help="Directory of target images to protect (e.g. the 30-image eval set).")
    parser.add_argument("--output-dir", type=Path, default=OUTPUT_DIR)
    parser.add_argument("--mode", choices=["resize", "tile"], default=MODE)
    parser.add_argument("--alphas", type=float, nargs="+", default=list(ALPHAS))
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    config = ApplyConfig(mode=args.mode, alphas=tuple(args.alphas))
    output_dir = args.output_dir or Path("outputs/cloaked") / args.input_dir.name
    process_directory(args.v_path, args.input_dir, output_dir, config)


if __name__ == "__main__":
    main()
