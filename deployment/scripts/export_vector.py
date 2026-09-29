"""Export the study's verified HWC vector into the Flutter asset bundle.

Run manually after retraining; requires numpy. Vercel uses the exported asset
and does not install Python, load datasets, or train a model.
"""
import argparse
import hashlib
import json
from pathlib import Path

import numpy as np


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--workspace", type=Path, default=Path(__file__).resolve().parents[2])
    args = parser.parse_args()
    app = Path(__file__).resolve().parents[1]
    source = args.workspace / "outputs/uap/cs_uap_v.npy"
    manifest = json.loads((source.parent / "manifest.json").read_text(encoding="utf-8"))
    source_hash = hashlib.sha256(source.read_bytes()).hexdigest()
    if source_hash != manifest["perturbation_sha256"]:
        raise ValueError("Vector does not match the training manifest SHA-256")
    vector = np.load(source, allow_pickle=False)
    if vector.shape != (224, 224, 3) or not np.isfinite(vector).all():
        raise ValueError("Expected finite 224 x 224 x 3 HWC RGB values")
    if np.max(np.abs(vector)) > manifest["config"]["epsilon"] + 1e-7:
        raise ValueError("Vector exceeds its recorded training epsilon")
    data = vector.astype("<f4").tobytes(order="C")
    (app / "assets/cs_uap_v_f32_hwc.bin").write_bytes(data)
    provenance = {
        "source": "outputs/uap/cs_uap_v.npy",
        "source_sha256": source_hash,
        "asset_sha256": hashlib.sha256(data).hexdigest(),
        "shape": list(vector.shape),
        "encoding": "little-endian float32 HWC RGB",
        "epsilon": manifest["config"]["epsilon"],
        "application": "tile at original image resolution",
    }
    (app / "assets/vector_metadata.json").write_text(
        json.dumps(provenance, indent=2) + "\n", encoding="utf-8"
    )
    snapshot = app / "research_snapshot.json"
    if snapshot.exists():
        content = json.loads(snapshot.read_text(encoding="utf-8"))
        content["bundled_vector_sha256"] = provenance["asset_sha256"]
        snapshot.write_text(json.dumps(content, indent=2) + "\n", encoding="utf-8")
    print(f"Exported {len(data):,} bytes: {provenance['asset_sha256']}")


if __name__ == "__main__":
    main()
