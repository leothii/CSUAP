#Train a Context-Specific Universal Adversarial Perturbation (CS-UAP) against a frozen CLIP ViT-B/32 encoder, using I-FGSM.

from __future__ import annotations

import argparse
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
from skimage.metrics import peak_signal_noise_ratio, structural_similarity
from torch.utils.data import DataLoader, Dataset

logging.basicConfig(level=logging.INFO, format="%(message)s")
logger = logging.getLogger(__name__)

CLIP_INPUT_SIZE = 224  # fixed by ViT-B/32; this is where v actually lives
CLIP_MEAN = (0.4815, 0.4578, 0.4082)
CLIP_STD = (0.2686, 0.2613, 0.2758)


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
    ssim_threshold: float = 0.95
    psnr_threshold_db: float = 30.0
    random_seed: int = 42
    device: str = ""

    def __post_init__(self) -> None:
        if not self.device:
            self.device = detect_device()


class ManifestDataset(Dataset):
    def __init__(self, manifest_path: Path, image_dir: Path):
        with open(manifest_path) as f:
            self.entries = json.load(f)
        self.image_dir = image_dir

    def __len__(self) -> int:
        return len(self.entries)

    def __getitem__(self, idx: int) -> tuple[torch.Tensor, str]:
        entry = self.entries[idx]
        image = Image.open(self.image_dir / entry["cropped_file"]).convert("RGB")
        image = image.resize((CLIP_INPUT_SIZE, CLIP_INPUT_SIZE), Image.BICUBIC)
        tensor = torch.from_numpy(np.asarray(image, dtype=np.float32) / 255.0)
        tensor = tensor.permute(2, 0, 1)  # HWC -> CHW
        caption = entry["captions"][0]
        return tensor, caption


def clip_normalize(x: torch.Tensor, device: str) -> torch.Tensor:
    mean = torch.tensor(CLIP_MEAN, device=device).view(1, 3, 1, 1)
    std = torch.tensor(CLIP_STD, device=device).view(1, 3, 1, 1)
    return (x - mean) / std


class CSUAPTrainer:
    def __init__(self, config: TrainConfig):
        self.config = config
        random.seed(config.random_seed)
        torch.manual_seed(config.random_seed)

        model, _, _ = open_clip.create_model_and_transforms("ViT-B-32-quickgelu", pretrained="openai")
        self.tokenizer = open_clip.get_tokenizer("ViT-B-32-quickgelu")
        self.model = model.to(config.device).eval()
        for param in self.model.parameters():
            param.requires_grad = False

        self.v = torch.empty(
            1, 3, CLIP_INPUT_SIZE, CLIP_INPUT_SIZE, device=config.device
        ).uniform_(-config.epsilon, config.epsilon)

    def _encode_images(self, x: torch.Tensor) -> torch.Tensor:
        normalized = clip_normalize(x, self.config.device)
        features = self.model.encode_image(normalized)
        return F.normalize(features, dim=-1)

    def _encode_text(self, captions: list[str]) -> torch.Tensor:
        tokens = self.tokenizer(captions).to(self.config.device)
        features = self.model.encode_text(tokens)
        return F.normalize(features, dim=-1)

    def _batch_loss(self, x: torch.Tensor, captions: list[str], x_adv: torch.Tensor) -> torch.Tensor:
        adv_features = self._encode_images(x_adv)
        if self.config.loss_type == "image_text":
            text_features = self._encode_text(list(captions))
            similarity = (adv_features * text_features).sum(dim=-1)
            return -similarity.mean()  # ascent on -similarity minimizes similarity to the true caption
        clean_features = self._encode_images(x).detach()
        return F.mse_loss(adv_features, clean_features)  # ascent maximizes embedding divergence

    def train(self, dataset: ManifestDataset, checkpoint_path: Path | None = None) -> torch.Tensor:
        cfg = self.config
        num_workers = min(4, os.cpu_count() or 1) if cfg.device == "cpu" else 0
        loader = DataLoader(
            dataset,
            batch_size=cfg.batch_size,
            shuffle=True,
            drop_last=True,
            num_workers=num_workers,
            persistent_workers=num_workers > 0,
        )

        for epoch in range(cfg.epochs):
            epoch_start = time.monotonic()
            epoch_loss = 0.0
            for images, captions in loader:
                images = images.to(cfg.device)
                self.v.requires_grad_(True)

                x_adv = torch.clamp(images + self.v, 0.0, 1.0)
                loss = self._batch_loss(images, captions, x_adv)
                loss.backward()

                with torch.no_grad():
                    self.v += cfg.step_size * self.v.grad.sign()
                    self.v.clamp_(-cfg.epsilon, cfg.epsilon)
                self.v.grad = None
                self.v = self.v.detach()

                epoch_loss += loss.item()

            epoch_seconds = time.monotonic() - epoch_start
            logger.info(
                "Epoch %d/%d — mean loss: %.4f — %.1fs (%.1fs/batch)",
                epoch + 1, cfg.epochs, epoch_loss / len(loader),
                epoch_seconds, epoch_seconds / len(loader),
            )

            if checkpoint_path is not None:
                checkpoint_path.parent.mkdir(parents=True, exist_ok=True)
                np.save(checkpoint_path, self.v.squeeze(0).permute(1, 2, 0).cpu().numpy())

        return self.v.detach()

    def evaluate_quality(self, dataset: ManifestDataset, n_samples: int = 30) -> dict:
        cfg = self.config
        ssim_scores, psnr_scores = [], []

        indices = random.sample(range(len(dataset)), min(n_samples, len(dataset)))
        for idx in indices:
            image, _ = dataset[idx]
            image_np = image.permute(1, 2, 0).numpy()
            adv_np = torch.clamp(image + self.v.squeeze(0).cpu(), 0.0, 1.0).permute(1, 2, 0).numpy()

            ssim_scores.append(structural_similarity(image_np, adv_np, channel_axis=-1, data_range=1.0))
            psnr_scores.append(peak_signal_noise_ratio(image_np, adv_np, data_range=1.0))

        mean_ssim, mean_psnr = float(np.mean(ssim_scores)), float(np.mean(psnr_scores))
        passes = mean_ssim >= cfg.ssim_threshold and mean_psnr >= cfg.psnr_threshold_db

        logger.info("Mean SSIM: %.4f (threshold %.2f)", mean_ssim, cfg.ssim_threshold)
        logger.info("Mean PSNR: %.2f dB (threshold %.1f dB)", mean_psnr, cfg.psnr_threshold_db)
        if not passes:
            logger.warning(
                "Quality gate not met at epsilon=%.3f. Perturbation is still exported; "
                "report this trade-off explicitly rather than treating the gate as blocking.",
                cfg.epsilon,
            )

        return {"mean_ssim": mean_ssim, "mean_psnr": mean_psnr, "passes_gate": passes}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", type=Path, default=Path("data/MS-COCO/processed_portraits/manifest.json"))
    parser.add_argument("--image-dir", type=Path, default=Path("data/MS-COCO/processed_portraits"))
    parser.add_argument("--out-dir", type=Path, default=Path("outputs/uap"))
    parser.add_argument("--epsilon", type=float, default=0.05)
    parser.add_argument("--step-size", type=float, default=0.01)
    parser.add_argument("--epochs", type=int, default=20)
    parser.add_argument("--batch-size", type=int, default=32)
    parser.add_argument("--loss-type", choices=["image_text", "image_image"], default="image_text")
    parser.add_argument("--device", choices=["cuda", "xpu", "cpu"], default=None,
                         help="Override auto-detected device (cuda > xpu > cpu).")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    config = TrainConfig(
        epsilon=args.epsilon,
        step_size=args.step_size,
        epochs=args.epochs,
        batch_size=args.batch_size,
        loss_type=args.loss_type,
        device=args.device or "",
    )
    configure_cpu_parallelism(config.device)
    logger.info("Using device: %s", config.device)

    dataset = ManifestDataset(args.manifest, args.image_dir)
    logger.info("Loaded %d training images.", len(dataset))

    trainer = CSUAPTrainer(config)
    checkpoint_path = args.out_dir / "cs_uap_v_checkpoint.npy"
    v = trainer.train(dataset, checkpoint_path=checkpoint_path)
    metrics = trainer.evaluate_quality(dataset)

    args.out_dir.mkdir(parents=True, exist_ok=True)
    v_path = args.out_dir / "cs_uap_v.npy"
    np.save(v_path, v.squeeze(0).permute(1, 2, 0).cpu().numpy())  # save as (H,W,C)

    with open(args.out_dir / "manifest.json", "w") as f:
        json.dump({"config": vars(config), "metrics": metrics}, f, indent=2, default=str)

    logger.info("Saved perturbation to %s", v_path)


if __name__ == "__main__":
    main()