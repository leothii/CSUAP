#Train a Context-Specific Universal Adversarial Perturbation (CS-UAP) against a frozen CLIP ViT-B/32 encoder, using I-FGSM.

from __future__ import annotations

import argparse
import csv
import hashlib
import importlib.metadata
import json
import logging
import os
import random
import time
from dataclasses import dataclass
from pathlib import Path

import numpy as np
import open_clip
import torch
import torch.nn.functional as F
from PIL import Image
from torch.utils.data import DataLoader, Dataset
from torchvision.transforms import functional as TF, InterpolationMode

logging.basicConfig(level=logging.INFO, format="%(message)s")
logger = logging.getLogger(__name__)

CLIP_INPUT_SIZE = 224  # fixed by ViT-B/32; this is where v actually lives
CLIP_MEAN = (0.48145466, 0.4578275, 0.40821073)
CLIP_STD = (0.26862954, 0.26130258, 0.27577711)
TRAINING_LOG_COLUMNS = ("Epoch", "Mean Loss", "Mean CLIP Similarity", "||v||_inf", "Epoch Time (s)")


def configure_cpu_parallelism(device: str) -> None:
    if device != "cpu":
        return
    cores = os.cpu_count() or 1
    torch.set_num_threads(cores)
    torch.set_num_interop_threads(min(2, cores))
    logger.info("CPU parallelism: %d intra-op threads, %d inter-op threads", cores, min(2, cores))


def detect_device() -> str:
    if torch.cuda.is_available():
        return "cuda"
    if hasattr(torch, "xpu") and torch.xpu.is_available():
        return "xpu"
    return "cpu"


@dataclass
class TrainConfig:
    epsilon: float = 0.05
    step_size: float = 0.01
    epochs: int = 20
    batch_size: int = 32
    loss_type: str = "image_text"  # "image_text" or "image_image"
    random_seed: int = 42
    device: str = ""
    num_workers: int = 0
    scale_augment: bool = False
    scale_augment_min_scale: float = 0.5
    quantization_aware: bool = False
    rms_budget: float | None = None

    def __post_init__(self) -> None:
        if not self.device:
            self.device = detect_device()
        if not np.isfinite(self.epsilon) or not 0 < self.epsilon <= 1:
            raise ValueError("epsilon must be finite and in (0, 1]")
        if not np.isfinite(self.step_size) or self.step_size <= 0:
            raise ValueError("step_size must be positive and finite")
        if min(self.epochs, self.batch_size) < 1 or self.num_workers < 0:
            raise ValueError("epochs and batch_size must be positive; num_workers nonnegative")
        if self.loss_type not in {"image_text", "image_image"}:
            raise ValueError("Unknown loss_type")
        if not np.isfinite(self.scale_augment_min_scale) or not 0 < self.scale_augment_min_scale <= 1:
            raise ValueError("scale_augment_min_scale must be in (0, 1]")
        if self.rms_budget is not None and (not np.isfinite(self.rms_budget) or self.rms_budget <= 0):
            raise ValueError("rms_budget must be positive and finite")


class ManifestDataset(Dataset):
    def __init__(self, manifest_path: Path, image_dir: Path):
        with open(manifest_path, encoding="utf-8") as f:
            self.entries = json.load(f)
        self.image_dir = image_dir.resolve()
        if not isinstance(self.entries, list) or not self.entries:
            raise ValueError("Manifest must be a nonempty list of image-caption entries")
        self.paths = []
        for entry in self.entries:
            path = (self.image_dir / entry["cropped_file"]).resolve()
            if not path.is_relative_to(self.image_dir) or not path.is_file():
                raise ValueError(f"Image missing or outside image_dir: {path}")
            captions = entry.get("captions")
            if not isinstance(captions, list) or not captions or not isinstance(captions[0], str) or not captions[0].strip():
                raise ValueError(f"A nonempty first caption is required: {path}")
            self.paths.append(path)
        if len(set(self.paths)) != len(self.paths):
            raise ValueError("Manifest contains duplicate image paths")

    def __len__(self) -> int:
        return len(self.entries)

    def __getitem__(self, idx: int) -> tuple[torch.Tensor, str]:
        entry = self.entries[idx]
        with Image.open(self.paths[idx]) as source:
            image = TF.resize(source.convert("RGB"), CLIP_INPUT_SIZE, InterpolationMode.BICUBIC)
            image = TF.center_crop(image, [CLIP_INPUT_SIZE, CLIP_INPUT_SIZE])
            tensor = TF.to_tensor(image)
        caption = entry["captions"][0].strip()
        return tensor, caption


def clip_normalize(x: torch.Tensor, device: str) -> torch.Tensor:
    mean = torch.tensor(CLIP_MEAN, device=device).view(1, 3, 1, 1)
    std = torch.tensor(CLIP_STD, device=device).view(1, 3, 1, 1)
    return (x - mean) / std


class CSUAPTrainer:
    def __init__(self, config: TrainConfig):
        self.config = config
        random.seed(config.random_seed)
        np.random.seed(config.random_seed)
        torch.manual_seed(config.random_seed)

        model, _, _ = open_clip.create_model_and_transforms("ViT-B-32-quickgelu", pretrained="openai")
        self.tokenizer = open_clip.get_tokenizer("ViT-B-32-quickgelu")
        self.model = model.to(config.device).eval()
        for param in self.model.parameters():
            param.requires_grad = False

        self.v = torch.empty(
            1, 3, CLIP_INPUT_SIZE, CLIP_INPUT_SIZE, device=config.device
        ).uniform_(-config.epsilon, config.epsilon)
        self.mean = torch.tensor(CLIP_MEAN, device=config.device).view(1, 3, 1, 1)
        self.std = torch.tensor(CLIP_STD, device=config.device).view(1, 3, 1, 1)
        self.text_cache: dict[str, torch.Tensor] = {}
        self.history: list[dict] = []
        self._project()

    def _encode_images(self, x: torch.Tensor) -> torch.Tensor:
        normalized = (x - self.mean) / self.std
        features = self.model.encode_image(normalized)
        return F.normalize(features, dim=-1)

    @torch.no_grad()
    def _encode_text(self, captions: list[str]) -> torch.Tensor:
        # Cache frozen normalized embeddings on CPU; no repeated text forward pass per epoch.
        missing = list(dict.fromkeys(c for c in captions if c not in self.text_cache))
        for start in range(0, len(missing), self.config.batch_size):
            batch = missing[start:start + self.config.batch_size]
            features = F.normalize(self.model.encode_text(
                self.tokenizer(batch).to(self.config.device)
            ), dim=-1).cpu()
            self.text_cache.update(zip(batch, features.unbind()))
        return torch.stack([self.text_cache[c] for c in captions]).to(self.config.device)

    @torch.no_grad()
    def _project(self) -> None:
        self.v.clamp_(-self.config.epsilon, self.config.epsilon)
        if self.config.rms_budget is not None:
            rms = self.v.square().mean().sqrt()
            self.v.mul_((self.config.rms_budget / rms.clamp_min(1e-12)).clamp(max=1))

    def _training_view(self, images: torch.Tensor) -> torch.Tensor:
        # Optional differentiable approximation to resampling and PNG export.
        # This is an ablation, not proof of robustness to arbitrary deployment transforms.
        if self.config.scale_augment:
            side = random.randint(max(1, round(CLIP_INPUT_SIZE * self.config.scale_augment_min_scale)), CLIP_INPUT_SIZE)
            images = F.interpolate(images, size=(side, side), mode="bicubic", align_corners=False, antialias=True)
            images = F.interpolate(images, size=(CLIP_INPUT_SIZE, CLIP_INPUT_SIZE), mode="bicubic", align_corners=False, antialias=True)
        images = images.clamp(0, 1)
        if self.config.quantization_aware:
            rounded = images.mul(255).round().div(255)
            images = images + (rounded - images).detach()  # straight-through gradient estimator
        return images

    def _batch_loss(
        self, x: torch.Tensor, captions: list[str], x_adv: torch.Tensor
    ) -> tuple[torch.Tensor, torch.Tensor]:
        adv_features = self._encode_images(x_adv)
        text_features = self._encode_text(list(captions))
        # Reuse the same forward pass for training progress; no evaluation pass.
        mean_similarity = (adv_features.detach() * text_features).sum(dim=-1).mean()
        if self.config.loss_type == "image_text":
            similarity = (adv_features * text_features).sum(dim=-1)
            return -similarity.mean(), mean_similarity  # ascent minimizes caption similarity
        with torch.no_grad():
            clean_features = self._encode_images(x)
        return F.mse_loss(adv_features, clean_features), mean_similarity

    def train(
        self, dataset: ManifestDataset, checkpoint_path: Path | None = None,
        log_path: Path | None = None,
    ) -> torch.Tensor:
        cfg = self.config
        num_workers = cfg.num_workers
        loader = DataLoader(
            dataset,
            batch_size=cfg.batch_size,
            shuffle=True,
            drop_last=False,
            num_workers=num_workers,
            persistent_workers=num_workers > 0,
            generator=torch.Generator().manual_seed(cfg.random_seed),
            pin_memory=cfg.device == "cuda",
        )
        if len(loader) == 0:
            raise ValueError("Training dataset must contain at least one image")
        if log_path is None and checkpoint_path is not None:
            log_path = checkpoint_path.parent / "training_log.csv"
        if log_path is not None:
            log_path.parent.mkdir(parents=True, exist_ok=True)
            with log_path.open("x", encoding="utf-8", newline="") as stream:
                csv.writer(stream).writerow(TRAINING_LOG_COLUMNS)
            logger.info("Epoch log: %s", log_path)
        logger.info("%5s | %12s | %20s | %12s | %14s", *TRAINING_LOG_COLUMNS)

        def synchronize_device() -> None:
            # Include completed accelerator work in wall-clock timings.
            device_type = torch.device(cfg.device).type
            if device_type == "cuda":
                torch.cuda.synchronize()
            elif device_type == "xpu":
                torch.xpu.synchronize()

        for epoch in range(cfg.epochs):
            synchronize_device()
            epoch_start = time.monotonic()
            epoch_loss = 0.0
            epoch_similarity = 0.0
            seen = 0
            for images, captions in loader:
                images = images.to(cfg.device, non_blocking=cfg.device == "cuda")
                self.v.requires_grad_(True)

                x_adv = torch.clamp(images + self.v, 0.0, 1.0)
                # Apply the same random transform to clean and protected images.
                views = self._training_view(torch.cat([images, x_adv], dim=0))
                clean_view, adv_view = views.chunk(2)
                loss, mean_similarity = self._batch_loss(clean_view, captions, adv_view)
                gradient, = torch.autograd.grad(loss, self.v)
                if not torch.isfinite(loss) or not torch.isfinite(mean_similarity) or not torch.isfinite(gradient).all():
                    raise FloatingPointError("Non-finite loss, similarity or gradient; refusing to export")

                with torch.no_grad():
                    self.v += cfg.step_size * gradient.sign()
                    self._project()
                self.v = self.v.detach()

                epoch_loss += loss.item() * len(images)
                epoch_similarity += mean_similarity.item() * len(images)
                seen += len(images)

            synchronize_device()
            epoch_seconds = time.monotonic() - epoch_start
            record = {
                "epoch": epoch + 1, "mean_loss": epoch_loss / seen,
                "mean_clip_similarity": epoch_similarity / seen,
                "v_linf": self.v.abs().max().item(),
                "epoch_time_s": epoch_seconds, "images_seen": seen,
            }
            self.history.append(record)
            row = [record[key] for key in
                   ("epoch", "mean_loss", "mean_clip_similarity", "v_linf", "epoch_time_s")]
            logger.info(
                "%5d | %12.6f | %20.6f | %12.6f | %14.2f", *row,
            )
            if log_path is not None:
                # Close after each epoch so completed rows survive an interrupted run.
                with log_path.open("a", encoding="utf-8", newline="") as stream:
                    csv.writer(stream).writerow(row)

            if checkpoint_path is not None:
                checkpoint_path.parent.mkdir(parents=True, exist_ok=True)
                np.save(checkpoint_path, self.v.squeeze(0).permute(1, 2, 0).cpu().numpy())

        return self.v.detach()


def dataset_fingerprints(dataset: ManifestDataset) -> list[dict]:
    return [{"file": str(path), "sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
             "caption": entry["captions"][0].strip()}
            for path, entry in zip(dataset.paths, dataset.entries)]


def save_training_output(v: torch.Tensor, config: TrainConfig, out_dir: Path,
                         extra: dict | None = None) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    array = v.detach().squeeze(0).permute(1, 2, 0).cpu().numpy()
    if not np.isfinite(array).all() or np.max(np.abs(array)) > config.epsilon + 1e-7:
        raise ValueError("Invalid perturbation; export refused")
    np.save(out_dir / "cs_uap_v.npy", array)
    versions = {name: importlib.metadata.version(name) for name in
                ("torch", "open_clip_torch", "numpy", "Pillow")}
    payload = {"config": vars(config), "packages": versions,
               "model": "ViT-B-32-quickgelu", "pretrained": "openai",
               "perturbation_sha256": hashlib.sha256((out_dir / "cs_uap_v.npy").read_bytes()).hexdigest(),
               "source_sha256": {str(path.name): hashlib.sha256(path.read_bytes()).hexdigest()
                   for path in (Path(__file__), Path(__file__).parents[1] / "application" / "apply_perturbation.py")},
               **(extra or {})}
    (out_dir / "manifest.json").write_text(json.dumps(payload, indent=2, allow_nan=False), encoding="utf-8")


def parse_args(scale_augment_default: bool = False) -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", type=Path, default=Path("data/MS-COCO/processed_portraits/manifest.json"))
    parser.add_argument("--image-dir", type=Path, default=Path("data/MS-COCO/processed_portraits"))
    parser.add_argument("--out-dir", type=Path, default=Path(
        "outputs/uap_scale_augmented" if scale_augment_default else "outputs/uap"))
    parser.add_argument("--epsilon", type=float, default=0.05)
    parser.add_argument("--step-size", type=float, default=0.01)
    parser.add_argument("--epochs", type=int, default=20)
    parser.add_argument("--batch-size", type=int, default=32)
    parser.add_argument("--loss-type", choices=["image_text", "image_image"], default="image_text")
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--num-workers", type=int, default=0)
    parser.add_argument("--scale-augment", action="store_true", default=scale_augment_default,
                        help="Optional resampling robustness ablation")
    parser.add_argument("--scale-augment-min-scale", type=float, default=0.5)
    parser.add_argument("--quantization-aware", action="store_true", help="Use a straight-through PNG quantization approximation")
    parser.add_argument("--rms-budget", type=float, default=None, help="Optional native perturbation RMS cap; does not guarantee SSIM")
    parser.add_argument("--device", choices=["cuda", "xpu", "cpu"], default=None,
                         help="Override auto-detected device (cuda > xpu > cpu).")
    return parser.parse_args()


def main(*, scale_augment_default: bool = False) -> None:
    args = parse_args(scale_augment_default)
    config = TrainConfig(
        epsilon=args.epsilon,
        step_size=args.step_size,
        epochs=args.epochs,
        batch_size=args.batch_size,
        loss_type=args.loss_type,
        device=args.device or "",
        random_seed=args.seed, num_workers=args.num_workers,
        scale_augment=args.scale_augment, scale_augment_min_scale=args.scale_augment_min_scale,
        quantization_aware=args.quantization_aware, rms_budget=args.rms_budget,
    )
    configure_cpu_parallelism(config.device)
    logger.info("Using device: %s", config.device)

    dataset = ManifestDataset(args.manifest, args.image_dir)
    logger.info("Loaded %d training images.", len(dataset))
    if args.out_dir.exists() and any(args.out_dir.iterdir()):
        raise FileExistsError("Use a fresh --out-dir to preserve existing experiment artifacts")

    trainer = CSUAPTrainer(config)
    checkpoint_path = args.out_dir / "cs_uap_v_checkpoint.npy"
    v = trainer.train(dataset, checkpoint_path=checkpoint_path)

    extra = {"history": trainer.history, "training_images": dataset_fingerprints(dataset)}
    save_training_output(v, config, args.out_dir, extra)
    logger.info("Saved perturbation to %s", args.out_dir / "cs_uap_v.npy")


if __name__ == "__main__":
    main()
