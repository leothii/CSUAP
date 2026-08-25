# Filter MS-COCO train2017 into a portrait subset for CS-UAP training.

from __future__ import annotations

import argparse
import json
import logging
import random
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Optional

from PIL import Image
from pycocotools.coco import COCO

logging.basicConfig(level=logging.INFO, format="%(message)s")
logger = logging.getLogger(__name__)


@dataclass
class FilterConfig:
    min_bbox_area_ratio: float = 0.15
    max_person_instances: int = 2
    min_crop_side_px: int = 200
    max_aspect_ratio: float = 1.6
    crop_margin_frac: float = 0.18
    required_keypoints: tuple[str, ...] = ("nose",)
    one_of_keypoints: tuple[str, ...] = ("left_eye", "right_eye")
    target_size: int = 512
    target_count: int = 2000
    random_seed: int = 42


@dataclass
class Candidate:
    image_id: int
    file_name: str
    bbox_area_ratio: float
    crop_box: tuple[int, int, int, int]
    face_keypoints: dict[str, tuple[float, float]]
    captions: list[str]


@dataclass
class CropTransform:
    scale: float
    resized_size: tuple[int, int]
    center_crop_xy: tuple[int, int]

#preprocessing function to resize and center crop an image to a target size, returning the cropped image and the transformation parameters.
def resize_and_center_crop(image: Image.Image, target_size: int) -> tuple[Image.Image, CropTransform]:
    w, h = image.size
    scale = target_size / min(w, h)
    new_w, new_h = round(w * scale), round(h * scale)
    resized = image.resize((new_w, new_h), Image.BICUBIC)

    left = (new_w - target_size) // 2
    top = (new_h - target_size) // 2
    cropped = resized.crop((left, top, left + target_size, top + target_size))

    return cropped, CropTransform(scale, (new_w, new_h), (left, top))


def keypoint_survives_crop(
    point: tuple[float, float],
    crop_origin: tuple[int, int],
    transform: CropTransform,
    target_size: int,
) -> bool:
    x, y = point
    crop_x0, crop_y0 = crop_origin
    x = (x - crop_x0) * transform.scale - transform.center_crop_xy[0]
    y = (y - crop_y0) * transform.scale - transform.center_crop_xy[1]
    return 0 <= x <= target_size and 0 <= y <= target_size


class PortraitDatasetBuilder:
    def __init__(self, coco_root: Path, config: FilterConfig):
        self.coco_root = coco_root
        self.config = config
        self.instances = COCO(str(coco_root / "annotations" / "instances_train2017.json"))
        self.keypoints = COCO(str(coco_root / "annotations" / "person_keypoints_train2017.json"))
        self.captions = COCO(str(coco_root / "annotations" / "captions_train2017.json"))
        self.person_cat_id = self.instances.getCatIds(catNms=["person"])[0]
        self.keypoint_names = self.keypoints.loadCats(self.person_cat_id)[0]["keypoints"]

    def _keypoint_coords(self, ann: dict) -> dict[str, tuple[float, float]]:
        kp = ann.get("keypoints", [])
        coords = {}
        for i, name in enumerate(self.keypoint_names):
            if i * 3 + 2 < len(kp):
                x, y, v = kp[i * 3], kp[i * 3 + 1], kp[i * 3 + 2]
                if v == 2:
                    coords[name] = (x, y)
        return coords

    def _passes_face_visibility(self, coords: dict[str, tuple[float, float]]) -> bool:
        cfg = self.config
        if not all(name in coords for name in cfg.required_keypoints):
            return False
        return any(name in coords for name in cfg.one_of_keypoints)

    def _expand_bbox(
        self, x: float, y: float, w: float, h: float, img_w: int, img_h: int
    ) -> tuple[int, int, int, int]:
        margin = self.config.crop_margin_frac
        mx, my = w * margin, h * margin
        x0 = max(0, x - mx)
        y0 = max(0, y - my)
        x1 = min(img_w, x + w + mx)
        y1 = min(img_h, y + h + my)
        return int(x0), int(y0), int(x1), int(y1)

    def _build_candidate(self, image_id: int, anns: list[dict]) -> Optional[Candidate]:
        cfg = self.config
        if not (1 <= len(anns) <= cfg.max_person_instances):
            return None

        img_info = self.instances.loadImgs(image_id)[0]
        img_w, img_h = img_info["width"], img_info["height"]
        img_area = img_w * img_h
        if img_area == 0:
            return None

        main_ann = max(anns, key=lambda a: a["area"])
        x, y, w, h = main_ann["bbox"]
        if w <= 0 or h <= 0:
            return None

        bbox_area_ratio = (w * h) / img_area
        if bbox_area_ratio < cfg.min_bbox_area_ratio:
            return None
        if max(w, h) / max(1, min(w, h)) > cfg.max_aspect_ratio:
            return None

        kp_anns = self.keypoints.loadAnns(
            self.keypoints.getAnnIds(imgIds=[image_id], catIds=[self.person_cat_id])
        )
        kp_match = next((k for k in kp_anns if k["id"] == main_ann["id"]), None)
        if kp_match is None:
            return None
        face_keypoints = self._keypoint_coords(kp_match)
        if not self._passes_face_visibility(face_keypoints):
            return None

        crop_box = self._expand_bbox(x, y, w, h, img_w, img_h)
        if (crop_box[2] - crop_box[0]) < cfg.min_crop_side_px:
            return None
        if (crop_box[3] - crop_box[1]) < cfg.min_crop_side_px:
            return None

        caption_anns = self.captions.loadAnns(self.captions.getAnnIds(imgIds=[image_id]))
        captions = [a["caption"].strip() for a in caption_anns if a.get("caption")]
        if not captions:
            return None

        return Candidate(
            image_id=image_id,
            file_name=img_info["file_name"],
            bbox_area_ratio=round(bbox_area_ratio, 4),
            crop_box=crop_box,
            face_keypoints=face_keypoints,
            captions=captions,
        )

    def find_candidates(self) -> list[Candidate]:
        anns_by_image = defaultdict(list)
        for ann in self.instances.loadAnns(self.instances.getAnnIds(catIds=[self.person_cat_id])):
            anns_by_image[ann["image_id"]].append(ann)

        candidates = []
        for image_id, anns in anns_by_image.items():
            candidate = self._build_candidate(image_id, anns)
            if candidate is not None:
                candidates.append(candidate)

        random.Random(self.config.random_seed).shuffle(candidates)
        return candidates

    def build(self, out_dir: Path) -> list[dict]:
        cfg = self.config
        out_dir.mkdir(parents=True, exist_ok=True)
        img_dir = self.coco_root / "train2017"

        candidates = self.find_candidates()
        logger.info("Found %d candidates passing filtering.", len(candidates))

        manifest = []
        skipped_missing_file = 0
        skipped_keypoint_clip = 0

        for candidate in candidates:
            if len(manifest) >= cfg.target_count:
                break

            src_path = img_dir / candidate.file_name
            if not src_path.exists():
                skipped_missing_file += 1
                continue

            image = Image.open(src_path).convert("RGB")
            x0, y0, x1, y1 = candidate.crop_box
            cropped = image.crop((x0, y0, x1, y1))
            square, transform = resize_and_center_crop(cropped, cfg.target_size)

            required_visible = all(
                name in candidate.face_keypoints
                and keypoint_survives_crop(
                    candidate.face_keypoints[name], (x0, y0), transform, cfg.target_size
                )
                for name in cfg.required_keypoints
            )
            if not required_visible:
                skipped_keypoint_clip += 1
                continue

            out_name = f"{candidate.image_id:012d}.jpg"
            square.save(out_dir / out_name, quality=95)

            manifest.append({
                "image_id": candidate.image_id,
                "source_file": candidate.file_name,
                "cropped_file": out_name,
                "crop_box": candidate.crop_box,
                "bbox_area_ratio": candidate.bbox_area_ratio,
                "crop_transform": {
                    "scale": transform.scale,
                    "resized_size": transform.resized_size,
                    "center_crop_xy": transform.center_crop_xy,
                },
                "canvas_size": cfg.target_size,
                "captions": candidate.captions,
            })

        with open(out_dir / "manifest.json", "w") as f:
            json.dump(manifest, f, indent=2)

        logger.info("Wrote %d portraits to %s", len(manifest), out_dir)
        logger.info("Skipped (missing file): %d", skipped_missing_file)
        logger.info("Skipped (keypoint clipped by center-crop): %d", skipped_keypoint_clip)
        if len(manifest) < cfg.target_count:
            logger.warning(
                "Only %d images available, below target_count=%d. "
                "Report the actual count used in the methodology.",
                len(manifest), cfg.target_count,
            )

        return manifest


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--coco-root", type=Path, default=Path("data/MS-COCO"))
    parser.add_argument("--out-dir", type=Path, default=Path("data/MS-COCO/processed_portraits"))
    parser.add_argument("--target-count", type=int, default=2000)
    parser.add_argument("--target-size", type=int, default=512)
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    config = FilterConfig(target_count=args.target_count, target_size=args.target_size)
    builder = PortraitDatasetBuilder(args.coco_root, config)
    builder.build(args.out_dir)


if __name__ == "__main__":
    main()