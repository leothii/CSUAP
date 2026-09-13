import 'dart:math' as math;
import 'dart:typed_data';
import 'package:image/image.dart' as img;
import 'perturbation_protection.dart';

class LabResult {
  const LabResult(
      this.clean, this.output, this.width, this.height, this.ssim, this.psnr);
  final Uint8List clean, output;
  final int width, height;
  final double? ssim;
  final double psnr;
}

LabResult generateCloak(
    ({Uint8List bytes, Float32List vector, double alpha}) job) {
  final decoded = img.decodeImage(job.bytes);
  if (decoded == null) {
    throw const FormatException(
        'This image format could not be read. Try a PNG or JPEG.');
  }
  final clean = img
      .bakeOrientation(decoded)
      .convert(format: img.Format.uint8, numChannels: 3);
  final cleanBytes = Uint8List.fromList(img.encodePng(clean));
  final output = applyProtection(cleanBytes, job.alpha, job.vector);
  final quality = measureQuality(clean, img.decodePng(output)!);
  return LabResult(
      cleanBytes, output, clean.width, clean.height, quality.$1, quality.$2);
}

/// Full-resolution RGB PSNR and mean 7x7 sliding-window SSIM, sample covariance.
/// Matches skimage defaults on 8-bit RGB (data_range=255, channel_axis=-1).
/// Uses seven rows of column sums so working memory is proportional to width.
(double?, double) measureQuality(img.Image a, img.Image b) {
  if (a.width != b.width || a.height != b.height) {
    throw ArgumentError('Image dimensions must match.');
  }
  double squaredError = 0, ssimSum = 0;
  var windows = 0;
  const n = 49.0, c1 = 6.5025, c2 = 58.5225;
  for (var channel = 0; channel < 3; channel++) {
    final columns = List.generate(5, (_) => Float64List(a.width));
    for (var y = 0; y < a.height; y++) {
      for (var x = 0; x < a.width; x++) {
        final av = a.getPixel(x, y)[channel].toDouble();
        final bv = b.getPixel(x, y)[channel].toDouble();
        squaredError += (av - bv) * (av - bv);
        final values = [av, bv, av * av, bv * bv, av * bv];
        for (var k = 0; k < 5; k++) {
          columns[k][x] += values[k];
        }
        if (y >= 7) {
          final oldA = a.getPixel(x, y - 7)[channel].toDouble();
          final oldB = b.getPixel(x, y - 7)[channel].toDouble();
          final old = [oldA, oldB, oldA * oldA, oldB * oldB, oldA * oldB];
          for (var k = 0; k < 5; k++) {
            columns[k][x] -= old[k];
          }
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
        ssimSum += ((2 * ma * mb + c1) * (2 * cov + c2)) /
            ((ma * ma + mb * mb + c1) * (va + vb + c2));
        windows++;
      }
    }
  }
  final mse = squaredError / (a.width * a.height * 3);
  return (
    windows == 0 ? null : ssimSum / windows,
    mse == 0 ? double.infinity : 10 * math.log(255 * 255 / mse) / math.ln10
  );
}
