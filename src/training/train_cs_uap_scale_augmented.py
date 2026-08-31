#Train a CS-UAP with scale-augmentation always enabled.

from __future__ import annotations

import argparse
from pathlib import Path

from train_csuap import (
    CSUAPTrainer,
    ManifestDataset,
    TrainConfig,
    configure_cpu_parallelism,
    logger,
    save_training_output,
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", type=Path, default=Path("data/MS-COCO/processed_portraits/manifest.json"))
    parser.add_argument("--image-dir", type=Path, default=Path("data/MS-COCO/processed_portraits"))
    parser.add_argument("--out-dir", type=Path, default=Path("outputs/uap_scale_augmented"))
    parser.add_argument("--epsilon", type=float, default=0.05)
    parser.add_argument("--step-size", type=float, default=0.01)
    parser.add_argument("--epochs", type=int, default=20)
    parser.add_argument("--batch-size", type=int, default=32)
    parser.add_argument("--loss-type", choices=["image_text", "image_image"], default="image_text")
    parser.add_argument("--device", choices=["cuda", "xpu", "cpu"], default=None)
    parser.add_argument("--scale-augment-min-scale", type=float, default=0.5)
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
        scale_augment=True,
        scale_augment_min_scale=args.scale_augment_min_scale,
    )
    configure_cpu_parallelism(config.device)
    logger.info("Using device: %s", config.device)
    logger.info("Scale augmentation enabled (min_scale=%.2f)", config.scale_augment_min_scale)

    dataset = ManifestDataset(args.manifest, args.image_dir)
    logger.info("Loaded %d training images.", len(dataset))

    trainer = CSUAPTrainer(config)
    checkpoint_path = args.out_dir / "cs_uap_v_checkpoint.npy"
    v = trainer.train(dataset, checkpoint_path=checkpoint_path)
    metrics = trainer.evaluate_quality(dataset)

    save_training_output(v, metrics, config, args.out_dir)


if __name__ == "__main__":
    main()
