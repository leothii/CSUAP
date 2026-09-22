"""Prepare uniform LoRA captions for explicitly selected image collections.

Relative input paths resolve from the project root, independent of launch directory.
These are training captions, not semantic evaluation descriptions.
"""
from __future__ import annotations

import argparse
from dataclasses import dataclass
from pathlib import Path
import tempfile

from PIL import Image

PROJECT_ROOT = Path(__file__).resolve().parents[3]
TRIGGER = "ohwx person"
CAPTION = TRIGGER  # Matches UNIFORM_CAPTION in lora_finetuning.ipynb.
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp"}
DATASET_DIRS = {
    # Select one condition; avoid mixing alpha folders and copied training sets.
    "cloaked": Path("outputs/cloaked/test/alpha_0.90"),
}


@dataclass(frozen=True)
class CaptionTask:
    image: Path
    sidecar: Path
    action: str  # create, replace, unchanged


def normalize_caption(caption: str) -> str:
    caption = " ".join(caption.split())
    if not caption or "\x00" in caption:
        raise ValueError("Caption must contain nonempty text without null characters")
    return caption


def plan_captions(root_dir: Path, caption: str, *, recursive: bool = False,
                  overwrite: bool = False, expected_count: int | None = None) -> list[CaptionTask]:
    """Validate the complete selected collection before writing any captions."""
    caption = normalize_caption(caption)
    root_dir = Path(root_dir)
    root_dir = (PROJECT_ROOT / root_dir).resolve() if not root_dir.is_absolute() else root_dir.resolve()
    if not root_dir.is_dir():
        raise FileNotFoundError(f"Image directory not found: {root_dir}")
    if expected_count is not None and expected_count < 1:
        raise ValueError("expected_count must be positive")
    paths = root_dir.rglob("*") if recursive else root_dir.iterdir()
    images = sorted(p for p in paths if p.is_file() and p.suffix.lower() in IMAGE_EXTENSIONS)
    if not images:
        raise ValueError(f"No supported images in {root_dir}. Select the image folder or use --recursive explicitly.")
    if expected_count is not None and len(images) != expected_count:
        raise ValueError(f"Expected {expected_count} images in {root_dir}, found {len(images)}")
    tasks = []
    destinations = set()
    for image in images:
        sidecar = image.with_suffix(".txt")
        key = str(sidecar).casefold()
        if key in destinations:
            raise ValueError(f"Images share a caption filename: {sidecar}")
        destinations.add(key)
        if image.is_symlink() or sidecar.is_symlink():
            raise ValueError(f"Use regular image and caption files, not symbolic links: {image}")
        if sidecar.exists() and not sidecar.is_file():
            raise ValueError(f"Caption path is not a file: {sidecar}")
        with Image.open(image) as opened:
            opened.load()  # Detect unreadable/truncated images without modifying pixels.
        action = "create"
        if sidecar.exists():
            existing = sidecar.read_text(encoding="utf-8-sig").strip()
            if existing == caption:
                action = "unchanged"
            elif overwrite:
                action = "replace"
            else:
                raise FileExistsError(f"Different caption already exists: {sidecar}. "
                                      "Use --overwrite to deliberately replace existing captions.")
        tasks.append(CaptionTask(image, sidecar, action))
    return tasks


def apply_caption_plan(tasks: list[CaptionTask], caption: str, *, dry_run: bool = False) -> int:
    caption = normalize_caption(caption)
    changed = 0
    for task in tasks:
        if task.action == "unchanged":
            continue
        if not dry_run:
            if task.action == "create":
                # Refuse to overwrite a file created after preflight.
                with task.sidecar.open("x", encoding="utf-8", newline="\n") as stream:
                    stream.write(caption + "\n")
            else:
                temporary = None
                try:
                    with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8", newline="\n",
                            dir=task.sidecar.parent, suffix=".tmp", delete=False) as stream:
                        temporary = Path(stream.name)
                        stream.write(caption + "\n")
                    temporary.replace(task.sidecar)
                finally:
                    if temporary is not None:
                        temporary.unlink(missing_ok=True)
        changed += 1
    return changed


def write_captions(root_dir: Path, label: str, *, caption: str = CAPTION,
                   recursive: bool = False, overwrite: bool = False,
                   expected_count: int | None = None, dry_run: bool = False) -> int:
    tasks = plan_captions(root_dir, caption, recursive=recursive,
                          overwrite=overwrite, expected_count=expected_count)
    changed = apply_caption_plan(tasks, caption, dry_run=dry_run)
    print(f"[{label}] images={len(tasks)}, {'would_write' if dry_run else 'written'}={changed}, "
          f"unchanged={len(tasks) - changed}")
    return changed


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input-dir", type=Path, nargs="+", help="Image folders; relative paths use the project root")
    parser.add_argument("--caption", default=CAPTION, help="Uniform caption shared across selected conditions")
    parser.add_argument("--recursive", action="store_true", help="Include nested folders only when intended")
    parser.add_argument("--expected-count", type=int, help="Required image count per directory")
    parser.add_argument("--overwrite", action="store_true", help="Replace existing captions that differ")
    parser.add_argument("--dry-run", action="store_true", help="Validate and summarize without writing")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    caption = normalize_caption(args.caption)
    collections = [(str(p), p) for p in args.input_dir] if args.input_dir else list(DATASET_DIRS.items())
    plans = []
    selected = set()
    for label, root_dir in collections:
        tasks = plan_captions(root_dir, caption, recursive=args.recursive,
            overwrite=args.overwrite, expected_count=args.expected_count)
        keys = {str(task.sidecar.resolve()).casefold() for task in tasks}
        if selected & keys:
            raise ValueError("Selected image collections overlap; specify each collection once")
        selected.update(keys)
        plans.append((label, tasks))
    print(f"Caption text: {caption!r}")
    total = 0
    # Preflight every collection before starting writes.
    for label, tasks in plans:
        changed = apply_caption_plan(tasks, caption, dry_run=args.dry_run)
        total += changed
        print(f"[{label}] images={len(tasks)}, {'would_write' if args.dry_run else 'written'}={changed}, "
              f"unchanged={len(tasks) - changed}")
    print(f"{'Dry run complete' if args.dry_run else 'Complete'}: {total} captions "
          f"{'would be written' if args.dry_run else 'written'}.")


if __name__ == "__main__":
    main()
