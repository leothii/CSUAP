# Verification — 2026-09-29

Verified locally using Flutter 3.47.2 / Dart 3.13.2 on Windows.

| Check | Result |
| --- | --- |
| `flutter analyze --no-pub` | No issues |
| `flutter test --no-pub` | 41 tests passed (appearance follow-up) |
| Release web compilation | Passed, including tree-shaken Material and Cupertino icon fonts |
| Vercel configuration | Configured fields validated against the published JSON schema |
| Vercel shell script | Bash syntax and LF line endings verified |
| Bundled perturbation | Exact export of the vector matching the training manifest SHA-256 |
| Edge release-build smoke test | Startup, select photo, apply cloak, download PNG passed |
| Exported pixels | Every RGB pixel matched an independent NumPy calculation at alpha 0.5 |
| Browser sizes | Desktop 1280 × 900 and mobile viewport 390 × 844 checked |
| Responsive widget tests | Screens checked at widths 320, 590, and 1100 with enlarged text |
| Browser errors / failed HTTP requests | None during the smoke test |
| Original Downloads project | Left unchanged |

Startup and portrait-layout follow-up:

- Both project copies passed startup in headless Edge with external HTTPS
  requests blocked; the loader disappeared after Flutter's first frame.
- Blocking CanvasKit downloads displayed startup failure feedback and a retry
  button. The renderer is explicitly served from the website's own assets.
- New widget checks at 320 × 568 and 390 × 844 assert that the PC and all four
  menu actions are visible without scrolling. Enlarged-text checks still pass.
- The 390 × 844 release screenshot was visually inspected: the interactive PC
  sits above the menu and all navigation controls fit in the viewport.
- Reproduce the browser check from the repository root with
  `python scripts/check_web_startup.py deployment/build/web` (Windows Edge and
  Python websocket-client required). Screenshot: `build/browser-check/portrait.png`.

These checks verify local release builds; they do not verify a public Vercel URL.

Appearance follow-up (2026-10-03): saved Light/Dark/System preferences,
system-brightness changes, and route preservation are covered by widget tests.
Both themes and the larger cloaking steps pass narrow-screen and enlarged-text
checks using the bundled fonts. The root application passed 36 tests; the
standalone application passed 41. Root Windows release and both web releases
built successfully. Light desktop step cards and the dark home screen were
visually inspected in Edge. Additional automated screenshot/reload checks timed
out, so a complete browser appearance smoke test is not recorded as passed.

Regression tests include EXIF orientation, 16-bit input conversion, invalid
images, file-size limits, animation rejection, corrupt vectors, intensity bounds,
preview/export consistency, tiling, and independently calculated SSIM/PSNR.

The browser smoke test used a synthetic 320 × 240 RGB image and Flutter's
accessibility actions. Its screenshots, JSON result, and downloaded PNG are in
`build/verification/` (generated, excluded from version control).

Photos were processed locally. The browser requested one Google-hosted Unicode
fallback font; it made no image uploads. Primary fonts and CanvasKit are bundled.

No Vercel deployment was performed. The Linux build script has been syntax
checked, but its full execution inside Vercel remains a preview-deployment check.
Native builds and camera/gallery/share behavior on physical mobile devices have
not been tested. The mobile browser check used desktop Edge with a narrow
viewport, not a physical phone.
