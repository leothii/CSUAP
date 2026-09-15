#Write DreamBooth-style captions for LoRA training images.

from __future__ import annotations

from pathlib import Path

TRIGGER = "ohwx person"  # identifier first, then class noun (Ruiz et al., 2023)
CAPTION = f"a photo of {TRIGGER}"

IMAGE_EXTENSIONS = (".jpg", ".jpeg", ".png")

DATASET_DIRS = {
    #"clean": Path("evaluation/portrait/clean"),
    "cloaked": Path("outputs/cloaked/test")
}


def write_captions(root_dir: Path, label: str) -> int:
    if not root_dir.exists():
        print(f"  [{label}] NOT FOUND: {root_dir}")
        print(f"           resolved to: {root_dir.resolve()}")
        print(f"           (check this path exists, and that you're running "
              f"the script from the project root, not from inside src/)")
        return 0

    image_paths = [p for p in root_dir.rglob("*") if p.suffix.lower() in IMAGE_EXTENSIONS]
    if not image_paths:
        print(f"  [{label}] directory exists but contains no matching images: {root_dir.resolve()}")
        return 0

    for image_path in image_paths:
        caption_path = image_path.with_suffix(".txt")
        caption_path.write_text(CAPTION)

    print(f"  [{label}] wrote {len(image_paths)} caption files under {root_dir}")
    return len(image_paths)


def main() -> None:
    print(f"Caption text: \"{CAPTION}\"\n")
    total = 0
    for label, root_dir in DATASET_DIRS.items():
        total += write_captions(root_dir, label)
    print(f"\nDone -- {total} caption files written across all datasets")


if __name__ == "__main__":
    main()