#Apply a trained CS-UAP perturbation to target images.

from __future__ import annotations

import argparse
import json
import logging
from dataclasses import dataclass
from pathlib import Path

import numpy as np
from PIL import Image

logging.basicConfig(level=logging.INFO, format="%(message)s")
logger = logging.getLogger(__name__)

DEFAULT_ALPHAS = (1.0, 0.9, 0.8, 0.7, 0.6, 0.5)  # matches Table 4

INPUT_DIR = Path("")                 # <- set this to your test images folder
V_PATH = Path("outputs/uap/cs_uap_v.npy")     # <- trained perturbation vector
MODE = "resize"                               # "resize" or "tile"
ALPHAS = DEFAULT_ALPHAS                       # which alpha values to apply

OUTPUT_DIR = Path("outputs/cloaked") / INPUT_DIR.name  # auto-derived, no need to set manually
# ============================================================================


@dataclass
class ApplyConfig:
    mode: str = "resize"  # "resize" or "tile"
    alphas: tuple[float, ...] = DEFAULT_ALPHAS


def transform_perturbation(v: np.ndarray, target_hw: tuple[int, int], mode: str) -> np.ndarray:
    target_h, target_w = target_hw
    native_size = v.shape[0]  # v is square, e.g. 224x224

    if mode == "resize":
        # Uniform scale factor (same for both axes) matching the image's
        # shorter side -- avoids the aspect-ratio distortion that an
        # independent width/height stretch would introduce (Li et al.,
        # 2019, explicitly requires |W'/W - H'/H| to stay small to prevent
        # this). The uniformly-scaled pattern is then tiled to cover the
        # full photo.
        scale = min(target_h, target_w) / native_size
        scaled_size = max(1, round(native_size * scale))
        v_img = Image.fromarray(((v + 0.05) / 0.10 * 255).clip(0, 255).astype(np.uint8))
        v_scaled = v_img.resize((scaled_size, scaled_size), Image.BICUBIC)
        v_scaled_np = np.asarray(v_scaled, dtype=np.float32) / 255.0 * 0.10 - 0.05

        reps_h = -(-target_h // scaled_size)
        reps_w = -(-target_w // scaled_size)
        tiled = np.tile(v_scaled_np, (reps_h, reps_w, 1))
        return tiled[:target_h, :target_w, :]

    if mode == "tile":
        reps_h = -(-target_h // native_size)
        reps_w = -(-target_w // native_size)
        tiled = np.tile(v, (reps_h, reps_w, 1))
        return tiled[:target_h, :target_w, :]

    raise ValueError(f"Unknown mode: {mode}")


def apply_perturbation(image: np.ndarray, v: np.ndarray, alpha: float) -> np.ndarray:
    return np.clip(image + alpha * v, 0.0, 1.0)


def process_directory(
    v_path: Path, input_dir: Path, output_dir: Path, config: ApplyConfig
) -> list[dict]:
    v = np.load(v_path).astype(np.float32)
    output_dir.mkdir(parents=True, exist_ok=True)

    manifest = []
    image_paths = sorted(
        p for p in input_dir.iterdir() if p.suffix.lower() in (".jpg", ".jpeg", ".png")
    )
    logger.info("Found %d input images in %s", len(image_paths), input_dir)

    for image_path in image_paths:
        image = Image.open(image_path).convert("RGB")
        image_np = np.asarray(image, dtype=np.float32) / 255.0
        v_transformed = transform_perturbation(v, image_np.shape[:2], config.mode)

        for alpha in config.alphas:
            alpha_dir = output_dir / f"alpha_{alpha:.2f}"
            alpha_dir.mkdir(parents=True, exist_ok=True)

            cloaked = apply_perturbation(image_np, v_transformed, alpha)
            cloaked_uint8 = (cloaked * 255).round().astype(np.uint8)

            out_name = f"{image_path.stem}_{config.mode}.png"
            out_path = alpha_dir / out_name
            Image.fromarray(cloaked_uint8).save(out_path)

            manifest.append({
                "source_image": image_path.name,
                "cloaked_image": f"alpha_{alpha:.2f}/{out_name}",
                "alpha": alpha,
                "mode": config.mode,
            })

    with open(output_dir / "manifest.json", "w") as f:
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
    process_directory(args.v_path, args.input_dir, args.output_dir, config)


if __name__ == "__main__":
    main()