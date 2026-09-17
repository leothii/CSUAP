# shield. / CS-UAP

Flutter research application for applying a bundled context-specific universal adversarial perturbation locally. The interface adapts the supplied VengeanceUI / Codrops staggered-grid reference into native Flutter cards, with hover/focus feedback, touch navigation, staggered entrance motion, and reduced-motion support.

## Try it

```sh
flutter pub get
flutter run -d windows
```

Start opens the photo lab. Choose a photo, select an intensity, and generate. Inspect the original and cloaked PNG individually or side by side; zoom to inspect pixels. Save uses a destination picker on desktop, a download on web, and the photo gallery on Android/iOS. Share uses the platform share surface. Camera input is offered on Android/iOS.

## Research content

Edit `lib/research_content.dart` to replace the explicitly labeled team placeholders, roles, and portrait asset paths. Register portraits under Flutter assets in `pubspec.yaml`. The repository node links to this project's Git remote. Supply the paper and optional resource URLs at launch/build time:

```sh
flutter run --dart-define=RESEARCH_PAPER_URL=https://example.org/paper --dart-define=EXTRA_RESOURCE_URL=https://example.org/supplement
```

Unconfigured resources show “Link pending”. The Field guide explains the workflow and models. Docs is an interactive research map; Credits reveals a profile on hover, keyboard focus, or tap.

## What the results mean

`lib/lab_processing.dart` normalizes EXIF orientation, applies the fixed 224×224 HWC RGB float32 vector by tiling, and computes quality on the exact full-resolution 8-bit PNG offered for export. Native platforms run this work using Flutter `compute`; on web, compute uses the main event loop and large images may temporarily pause interaction.

SSIM is the mean of full-resolution 7×7 uniform sliding windows per RGB channel, using sample covariance, K1=0.01, K2=0.03, and data range 255. PSNR uses full-resolution RGB mean squared error. These follow the [scikit-image metric conventions](https://scikit-image.org/docs/stable/api/skimage.metrics.html). Images smaller than 7 pixels on either side have unavailable SSIM; identical images have infinite PSNR. Targets are SSIM ≥ 0.95 and PSNR ≥ 30 dB. The training script evaluates floating-point images before export quantization, so its values need not exactly match exported-PNG values.

CLIP Score, ClipCap/BERTScore F1, and downstream SDXL Clean/Cloaked LoRA CLIP Score and FID are explicitly unmeasured in the app. There are no bundled semantic/caption evaluation models or evaluation service. FID needs generated image sets, not a single photo pair. Image-quality success does not imply verified semantic protection.

## Project scan

- `lib/`: Flutter UI, local perturbation application, quality metrics, and sharing helpers.
- `src/preprocessing/`: MS-COCO portrait filtering.
- `src/training/train_csuap.py`: frozen CLIP ViT-B/32 perturbation training and image-quality evaluation.
- `src/application/`: Python application and export of perturbation assets.
- `src/evaluation/lora_training.ipynb`: downstream research notebook, separate from the app.
- `assets/` and `outputs/`: bundled vector, NumPy training output, visualization, and metadata.
- Android, iOS, desktop, and web host projects.

Existing research issue found during the scan: `train_cs_uap_scale_augmented.py` passes `scale_augment` and `scale_augment_min_scale` to `TrainConfig`, which currently does not declare those fields. That experiment needs a separate training implementation fix before use.

## Checks

```sh
flutter analyze
flutter test
```

Widget tests cover navigation, research nodes, credits selection, and narrow/desktop layouts with enlarged text. Processing tests cover known quality values, identical/small images, dimension validation, and exported PNG perturbation tiling. Gallery, camera, sharing, and save dialogs still require device/platform smoke tests.
