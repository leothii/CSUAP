import 'dart:math' as math;
import 'dart:typed_data';
import 'package:image/image.dart' as img;
import 'perturbation_protection.dart';
import 'image_input.dart';

class LabResult {
  const LabResult(
    this.clean,
    this.output,
    this.width,
    this.height,
    this.ssim,
    this.psnr,
  );
  final Uint8List clean, output;
  final int width, height;
  final double? ssim;
  final double psnr;

  double get mse => psnr.isInfinite ? 0 : 255 * 255 / math.pow(10, psnr / 10);
}

/// Cached nearest-neighbor samples of the full-size image and tiled vector.
/// Sampling both at the same coordinates preserves the exported pattern scale.
class CloakPreview {
  const CloakPreview(this.width, this.height, this.rgb, this.vector);
  final int width, height;
  final Uint8List rgb;
  final Float32List vector;
}

CloakPreview prepareCloakPreview(({Uint8List bytes, Float32List vector}) job) {
  final clean = decodePhoto(job.bytes);
  final scale = math.min(1.0, 400 / math.max(clean.width, clean.height));
  final width = math.max(1, (clean.width * scale).round());
  final height = math.max(1, (clean.height * scale).round());
  final rgb = Uint8List(width * height * 3);
  final vector = Float32List(rgb.length);
  for (var y = 0; y < height; y++) {
    final sy = y * clean.height ~/ height;
    for (var x = 0; x < width; x++) {
      final sx = x * clean.width ~/ width;
      final pixel = clean.getPixel(sx, sy);
      final offset = (y * width + x) * 3;
      final vi =
          ((sy % perturbationSize) * perturbationSize + sx % perturbationSize) *
          3;
      for (var c = 0; c < 3; c++) {
        rgb[offset + c] = pixel[c].toInt();
        vector[offset + c] = job.vector[vi + c];
      }
    }
  }
  return CloakPreview(width, height, rgb, vector);
}

Uint8List renderCloakPreview(({CloakPreview preview, double alpha}) job) {
  final p = job.preview;
  final output = img.Image(width: p.width, height: p.height);
  final rgb = output.data!.toUint8List();
  for (var i = 0; i < rgb.length; i++) {
    rgb[i] = ((p.rgb[i] / 255 + job.alpha * p.vector[i]).clamp(0, 1) * 255)
        .round();
  }
  // No compression work during a drag; only the bounded preview is encoded.
  return Uint8List.fromList(img.encodePng(output, level: 0));
}

Uint8List preparePhoto(Uint8List bytes) {
  return Uint8List.fromList(img.encodePng(decodePhoto(bytes)));
}

Uint8List cloakPhoto(
  ({Uint8List bytes, Float32List vector, double alpha}) job,
) => applyProtection(job.bytes, job.alpha, job.vector);

LabResult inspectPhoto(({Uint8List clean, Uint8List output}) job) {
  final clean = img.decodePng(job.clean)!;
  final quality = measureQuality(clean, img.decodePng(job.output)!);
  return LabResult(
    job.clean,
    job.output,
    clean.width,
    clean.height,
    quality.$1,
    quality.$2,
  );
}

LabResult generateCloak(
  ({Uint8List bytes, Float32List vector, double alpha}) job,
) {
  final clean = preparePhotoImage(job.bytes);
  final output = cloakPhotoImage((
    image: clean,
    vector: job.vector,
    alpha: job.alpha,
  ));
  return inspectPhotoImages((clean: clean, output: output));
}

/// Keep decoded RGB data between stages instead of repeatedly transcoding PNGs.
img.Image preparePhotoImage(Uint8List bytes) {
  return decodePhoto(bytes);
}

img.Image cloakPhotoImage(
  ({img.Image image, Float32List vector, double alpha}) job,
) => PerturbationProtector(job.vector).applyToImage(job.image, job.alpha);

LabResult inspectPhotoImages(({img.Image clean, img.Image output}) job) {
  final quality = measureQuality(job.clean, job.output);
  return LabResult(
    Uint8List.fromList(img.encodePng(job.clean)),
    Uint8List.fromList(img.encodePng(job.output)),
    job.clean.width,
    job.clean.height,
    quality.$1,
    quality.$2,
  );
}

/// Full-resolution RGB PSNR and mean 7x7 sliding-window SSIM, sample covariance.
/// Matches skimage defaults on 8-bit RGB (data_range=255, channel_axis=-1).
/// Uses seven rows of column sums so working memory is proportional to width.
(double?, double) measureQuality(img.Image a, img.Image b) {
  if (a.width != b.width || a.height != b.height) {
    throw ArgumentError('Image dimensions must match.');
  }
  a = rgb8(a);
  b = rgb8(b);
  final aBytes = a.data!.toUint8List(), bBytes = b.data!.toUint8List();
  final aStride = a.data!.rowStride, bStride = b.data!.rowStride;
  double squaredError = 0, ssimSum = 0;
  var windows = 0;
  const n = 49.0, c1 = 6.5025, c2 = 58.5225;
  for (var channel = 0; channel < 3; channel++) {
    final columns = List.generate(5, (_) => Float64List(a.width));
    for (var y = 0; y < a.height; y++) {
      for (var x = 0; x < a.width; x++) {
        final av = aBytes[y * aStride + x * 3 + channel].toDouble();
        final bv = bBytes[y * bStride + x * 3 + channel].toDouble();
        squaredError += (av - bv) * (av - bv);
        columns[0][x] += av;
        columns[1][x] += bv;
        columns[2][x] += av * av;
        columns[3][x] += bv * bv;
        columns[4][x] += av * bv;
        if (y >= 7) {
          final oldA = aBytes[(y - 7) * aStride + x * 3 + channel].toDouble();
          final oldB = bBytes[(y - 7) * bStride + x * 3 + channel].toDouble();
          columns[0][x] -= oldA;
          columns[1][x] -= oldB;
          columns[2][x] -= oldA * oldA;
          columns[3][x] -= oldB * oldB;
          columns[4][x] -= oldA * oldB;
        }
      }
      if (y < 6) continue;
      final sums = Float64List(5);
      for (var x = 0; x < a.width; x++) {
        for (var k = 0; k < 5; k++) {
          sums[k] += columns[k][x];
          if (x >= 7) sums[k] -= columns[k][x - 7];
        }
        if (x < 6) continue;
        final ma = sums[0] / n, mb = sums[1] / n;
        final va = (sums[2] - sums[0] * ma) / (n - 1);
        final vb = (sums[3] - sums[1] * mb) / (n - 1);
        final cov = (sums[4] - sums[0] * mb) / (n - 1);
        ssimSum +=
            ((2 * ma * mb + c1) * (2 * cov + c2)) /
            ((ma * ma + mb * mb + c1) * (va + vb + c2));
        windows++;
      }
    }
  }
  final mse = squaredError / (a.width * a.height * 3);
  return (
    windows == 0 ? null : ssimSum / windows,
    mse == 0 ? double.infinity : 10 * math.log(255 * 255 / mse) / math.ln10,
  );
}
