<p align="center">
  <img src="deployment/web/icon.svg" alt="invisAI pixel icon" width="96" />
</p>

# CS-UAP · invisAI

**Context-specific universal adversarial perturbations for portrait images, with a local photo-cloaking app.**

This repository contains the CS-UAP research pipeline and **invisAI**, its Flutter
application. The research learns a reusable, bounded RGB perturbation against a
frozen CLIP image encoder, then evaluates protected images at different
perturbation strengths. invisAI applies the exported pattern to photos through a
pixel-art interface with live previews, image-quality measurements, and PNG export.

[Run the app](#run-invisai) · [Research workflow](#research-workflow) ·
[Evaluation](#evaluation) · [Project structure](#project-structure)

## What is included

| Component | Purpose |
| --- | --- |
| Portrait preprocessing | Prepare an MS-COCO portrait subset and caption manifest. |
| CS-UAP training | Optimize a shared 224 × 224 RGB perturbation against frozen OpenAI CLIP ViT-B/32. |
| Perturbation application | Export protected images at multiple alpha values with source-to-output mappings and hashes. |
| Perceptual evaluation | Measure SSIM and PSNR against the matching clean images. |
| Caption consistency | Compare protected-image ClipCap captions with clean-image captions using BERTScore F1. |
| LoRA experiments | Prepare captions, fine-tune adapters, generate images, and analyze training logs. |
| invisAI | Select a photo, preview the cloak, apply it locally, compare image quality, and save or share a PNG. |

## Run invisAI

The app is self-contained in [`deployment/`](deployment/README.md), including its
trained perturbation asset. No research datasets or Python environment are
needed to use it.

With **Flutter 3.47.2** on your `PATH`, run these commands from the repository root:

```shell
cd deployment
flutter pub get --enforce-lockfile
flutter run -d web-server --web-port 8080
```

Open **http://localhost:8080**. On Windows, you can instead use
`flutter run -d edge` to launch Edge automatically.

For Windows web development without desktop plugin symlinks, set
`$env:FLUTTER_WINDOWS = 'false'` in PowerShell before running Flutter. The
[app setup guide](deployment/README.md#run-on-windows) includes commands for the
SDK installed in the existing CSUAP workspace.

Photos are processed on the device and exported as full-resolution, 8-bit RGB
PNGs. The app supports still images up to **30 MiB** and **24 megapixels**.
Primary fonts and the rendering runtime are bundled; Flutter may fetch fallback
fonts for Unicode symbols. Photos are not uploaded.

### Production web build

For VS Code Live Server in this repository workspace, `.vscode/settings.json`
sets the server root to `build/web`, the compiled root app. After changing this
setting, stop Live Server and click **Go Live** again. Open the server's root URL
(usually `http://127.0.0.1:5500/`), without `/web/index.html` in the address.
Live Server cannot compile Dart. Refresh this preview after app changes by running
`flutter build web --release --no-pub --no-web-resources-cdn` from the repository
root. Use `flutter run -d edge` for Flutter development with hot reload.

From `deployment/`:

```shell
flutter build web --release --no-pub --no-web-resources-cdn
```

The generated site is written to `deployment/build/web/`. Serve this compiled
folder over HTTP rather than opening the source `web/index.html` directly.

For the prepared Vercel setup:

| Setting | Value |
| --- | --- |
| Root Directory | `deployment` |
| Framework Preset | `Other` |
| Build Command | `bash scripts/vercel-build.sh` |
| Output Directory | `build/web` |

[`vercel.json`](deployment/vercel.json) supplies the build settings. The build
script pins Flutter, installs locked dependencies, runs analysis and tests, and
compiles the web app. See the [deployment guide](deployment/README.md#deploy-to-vercel-later)
and [verification record](deployment/VERIFICATION.md) for the tested scope.

Android, iOS, Windows, macOS, and Linux project sources are also included.
Native builds require the corresponding platform toolchains and device testing;
Vercel hosts the browser version.

## Research workflow

Run research commands from the repository root. Python dependencies and model
downloads are separate from the Flutter application.

### 1. Set up Python

```shell
git clone https://github.com/leothii/CSUAP.git
cd CSUAP
python -m venv .venv
```

Activate the environment with `.\.venv\Scripts\Activate.ps1` in PowerShell, or
`source .venv/bin/activate` on Linux/macOS. Then install the core dependencies:

```shell
python -m pip install -r requirements.text
```

The dependency file is named **`requirements.text`**. Evaluation-specific
dependencies are listed in the corresponding guides below. Training downloads
the pretrained CLIP weights on first use if they are not cached.

### 2. Place the datasets

```text
data/
├── MS-COCO/
│   ├── train2017/                    # Original COCO training images
│   ├── annotations/
│   │   ├── instances_train2017.json
│   │   ├── person_keypoints_train2017.json
│   │   └── captions_train2017.json
│   └── processed_portraits/          # Generated portraits and manifest.json
└── test/                             # Clean images for evaluation
```

Obtain the images and annotations separately; a repository clone should not be
assumed to contain the complete datasets or model weights. Keep evaluation
images separate from the perturbation-training corpus.

Prepare the training subset:

```shell
python src/preprocessing/prepare_mscoco_portraits.py
```

### 3. Train a perturbation

```shell
python src/training/train_csuap.py --out-dir outputs/uap_run01
```

The default experiment uses epsilon **0.05**, step size **0.01**, **20 epochs**,
batch size **32**, and seed **42**. Training writes the perturbation, epoch log,
checkpoints, and reproducibility manifest to the selected output directory.

Use a fresh directory for each experiment. The
[training guide](src/training/CSUAP_USAGE.md) explains the objective, preprocessing,
device selection, and optional training variations.

### 4. Apply it to clean images

```shell
python src/application/apply_perturbation.py --v-path outputs/uap_run01/cs_uap_v.npy --input-dir data/test --output-dir outputs/cloaked/test_run01
```

The default strengths are **α = 0.5, 0.6, 0.7, 0.8, 0.9, and 1.0**. Each run
produces folders such as `alpha_0.50/` and `alpha_1.00/`, plus a `manifest.json`
mapping protected images to their clean originals. Preserve that manifest for
paired evaluation.

The existing study uses `outputs/cloaked/test/`. The commands above use separate
`run01` directories so a new experiment does not replace the recorded outputs.

## Evaluation

| Evaluation | Inputs and interpretation | Guide |
| --- | --- | --- |
| SSIM and PSNR | Paired clean/protected pixels; higher values indicate closer image fidelity. | [Perceptual fidelity](src/evaluation/perceptual/README.md) |
| BERTScore F1 | Protected-image captions compared with clean-image captions from the same ClipCap model; higher values indicate greater semantic consistency. | [Caption consistency](src/evaluation/clipcap/README.md) |
| LoRA training logs | Clean and protected fine-tuning runs; summarizes recorded loss histories and training settings. | [Fine-tuning analysis](src/evaluation/LORA/models/README_finetuning_analysis.md) |

To evaluate the new perceptual run above:

```shell
python -m pip install -r src/evaluation/perceptual/requirements.txt
python src/evaluation/perceptual/evaluate_perceptual.py --reference-dir data/test --cloaked-dir outputs/cloaked/test_run01 --output-dir outputs/evaluation/perceptual_run01
```

The evaluator writes per-image scores, summary tables, figures, validation
reports, and method metadata. Running it without arguments evaluates the
existing `outputs/cloaked/test/` collection.

ClipCap caption generation uses a separately configured pretrained-model
workspace. This repository's BERTScore evaluator consumes the resulting
`outputs/evaluation/clipcap/captions.csv`; the
[caption evaluation guide](src/evaluation/clipcap/README.md) documents its
dependencies and scoring settings. Clean-image captions are the reference, so
this comparison measures caption consistency rather than accuracy against human
annotations.

The [LoRA fine-tuning notebook](src/evaluation/LORA/lora_finetuning.ipynb),
[generation notebook](src/evaluation/LORA/lora_generation.ipynb), and
[caption preparation guide](src/evaluation/LORA/CAPTIONS.md) cover the downstream
experiment. Keep the base model, captions, training settings, and generation
protocol consistent across clean and protected conditions.

## Project structure

```text
CSUAP/
├── deployment/                 # invisAI Flutter app and Vercel configuration
├── src/
│   ├── preprocessing/          # Portrait dataset preparation
│   ├── training/               # CS-UAP optimization
│   ├── application/            # Apply a saved perturbation
│   └── evaluation/
│       ├── perceptual/         # SSIM / PSNR evaluation
│       ├── clipcap/            # BERTScore caption comparison
│       └── LORA/               # Fine-tuning, generation, and log analysis
├── data/                       # Local datasets
├── outputs/                    # Experiment artifacts, reports, and figures
├── tests/                      # Python regression tests
└── requirements.text           # Core research dependencies
```

## Validation

For the core Python regression tests, from the repository root:

```shell
python -m unittest discover -s tests -v
```

For the Flutter app, from `deployment/` after installing its dependencies:

```shell
flutter analyze --no-pub
flutter test --no-pub
```

Evaluation-specific test commands appear in their respective guides. The
[app verification record](deployment/VERIFICATION.md) documents the completed
local checks, browser export test, and remaining platform checks.

## Interpreting the results

CS-UAP investigates whether a reusable perturbation can disrupt model behavior
while retaining image fidelity. SSIM and PSNR describe pixel-level fidelity;
BERTScore describes caption consistency; LoRA loss describes optimization
during fine-tuning. These measurements answer different questions and do not,
individually, establish reliable protection against all models or workflows.

The recorded Python study resizes the perturbation to each image and uses
Gaussian-window SSIM. invisAI tiles the perturbation at its original scale and
uses uniform 7 × 7 SSIM windows. Its per-photo measurements should therefore be
reported separately from the study's aggregate results. Preserve input hashes,
manifests, model versions, settings, and split definitions when reproducing or
comparing experiments.

