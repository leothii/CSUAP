#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
flutter_version="$(tr -d '\r\n' < .flutter-version)"
flutter_revision="d3b14c876900e553bc736ca19295fc09e3853e8e"
sdk_dir="${XDG_CACHE_HOME:-$HOME/.cache}/invisai/flutter-${flutter_version}"
export CI=true
export FLUTTER_SUPPRESS_ANALYTICS=true
export DART_SUPPRESS_ANALYTICS=true

if [[ ! -d "$sdk_dir/.git" ]]; then
  mkdir -p "$(dirname "$sdk_dir")"
  git clone --depth 1 --branch "$flutter_version" https://github.com/flutter/flutter.git "$sdk_dir"
fi
if [[ "$(git -C "$sdk_dir" rev-parse HEAD)" != "$flutter_revision" ]]; then
  echo 'Cached Flutter revision does not match the pinned release.' >&2
  exit 1
fi

export PATH="$sdk_dir/bin:$PATH"
flutter config --no-analytics --enable-web
flutter precache --web
flutter pub get --enforce-lockfile
flutter analyze --no-pub
flutter test --no-pub
flutter build web --release --no-pub --no-web-resources-cdn
test -s build/web/main.dart.js
test -s build/web/assets/assets/cs_uap_v_f32_hwc.bin
