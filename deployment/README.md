# invisAI

Flutter photo-cloaking app with the original pixel-art interface. Photos are
processed locally; there is no upload endpoint, inference server, API key, or
database. The `deployment` folder is a standalone app. Research datasets,
training scripts, model checkpoints, and prior build caches are not required.

## Run on Windows

Use Flutter **3.47.2** (Dart 3.13.2), pinned in `.flutter-version`. The SDK installed
for this workspace is `C:\CSUAP\.tools\flutter`.

```powershell
cd C:\CSUAP\deployment
$env:Path = "C:\CSUAP\.tools\flutter\bin;$env:Path"
# Web development does not require Windows desktop plugin symlinks.
$env:FLUTTER_WINDOWS = 'false'
flutter pub get --enforce-lockfile
flutter run -d edge
```

If Edge is not detected, use `flutter run -d web-server --web-port 8080` and open
the printed URL. Do not open `web/index.html` directly or use Live Server on it.

## Verify and build

```powershell
flutter analyze --no-pub
flutter test --no-pub
flutter build web --release --no-pub --no-web-resources-cdn
python -m http.server 8080 --bind 127.0.0.1 --directory build/web
```

Open `http://localhost:8080`. `build/web` is generated output and should not be
committed. The primary fonts, perturbation, and CanvasKit are hosted with the app.
Flutter can fetch fallback fonts for missing Unicode symbols from Google Fonts;
this does not upload photos. The
app does not register a service worker; offline startup is not guaranteed.

## Deploy to Vercel later

1. Commit this app's source, assets, `pubspec.lock`, and configuration files.
2. Import the repository into Vercel. If importing the CSUAP repository, set
   **Root Directory** to **`deployment`**. For a repository containing only this
   folder's contents, use its repository root.
3. Select **Other** for Framework Preset. `vercel.json` supplies the build command
   `bash scripts/vercel-build.sh` and output directory `build/web`. No install
   command or environment secrets are required.
4. Build a preview deployment and check photo selection, preview intensity,
   applying the cloak, saving the PNG, and sharing on your target browsers.

The build script installs the exact Flutter release and verifies its commit,
enforces the dependency lockfile, runs analysis and tests, and builds release
assets. Build failures stop deployment. Source photos never go to Vercel.
The first build downloads Flutter, so it takes longer than a cached build.
Navigation currently uses Flutter's in-app navigator; no server-side routes or
catch-all rewrite are needed. Static files revalidate to avoid stale app assets.

References: [Flutter web deployment](https://docs.flutter.dev/deployment/web),
[Vercel build configuration](https://vercel.com/docs/builds/configure-a-build),
[Vercel project configuration](https://vercel.com/docs/project-configuration/vercel-json).

## Image behavior and research provenance

- Use still images, preferably PNG or JPEG, up to 30 MiB and 24 megapixels.
  Unsupported, animated, multipage, and oversized files produce an error.
- Orientation is applied before processing. Outputs are 8-bit RGB PNGs at the
  oriented image dimensions; transparency is removed. Original files are untouched.
- The fixed 224 × 224 RGB perturbation is tiled at its original scale. Intensity
  is alpha in `[0, 1]`. Preview samples use the same coordinates as export.
- `assets/vector_metadata.json` records the trained vector's source and hash.
  To export a newly trained vector, run
  `python scripts/export_vector.py --workspace C:\CSUAP` with NumPy installed.
  Commit both the asset and metadata.
- `research_snapshot.json` records the current evaluation CSV and values shown in
  `lib/research_content.dart`; refresh that display after rerunning evaluations.
  Study outputs use resized perturbations and Gaussian SSIM; the app uses tiling
  and uniform 7 × 7 SSIM with sample covariance. These are different protocols.
- The lab reports full-resolution RGB SSIM and PSNR. SSIM is unavailable below
  7 × 7 pixels; identical pairs have infinite PSNR. These metrics measure image
  fidelity, not proof of protection from captioning, training, or generation.
- Native processing uses background isolates. Flutter web `compute` uses the
  browser's main thread, so large photos can briefly pause interaction despite
  the optimized pipeline. Use smaller photos on memory-constrained phones.

## Native platforms

Android, iOS, Windows, macOS, and Linux project sources are retained. Vercel
deploys the browser app only. Native builds require their platform SDKs and
device testing. To build Windows, unset `FLUTTER_WINDOWS` and enable Windows
Developer Mode for plugin symlinks. iOS/macOS builds require Xcode on macOS.
Camera capture is available on Android/iOS; desktop and web use file selection.
Saving/sharing permissions and browser Web Share support vary by platform.

The internal Dart package name and native bundle IDs remain `csuap` to preserve
the existing project; user-facing titles and exported filenames use invisAI.
Set your own bundle IDs and signing credentials before native store releases.
