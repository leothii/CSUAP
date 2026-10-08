import 'dart:typed_data';
import 'package:image/image.dart' as img;
import 'image_input.dart';
import 'lab_processing.dart';
import 'perturbation_protection.dart';

/// Weighted work completion, not elapsed-time prediction. Encoding has checkpoints
/// because the PNG encoder does not expose incremental progress callbacks.
LabResult generateWithProgress(
  Uint8List bytes,
  Float32List vector,
  double alpha, {
  required void Function(int) onProgress,
  required void Function(int) onStage,
}) {
  if (vector.length != perturbationValueCount ||
      vector.any((v) => !v.isFinite)) {
    throw const FormatException('Invalid perturbation vector.');
  }
  if (!alpha.isFinite || alpha < 0 || alpha > 1) {
    throw RangeError.range(alpha, 0, 1, 'alpha');
  }
  var last = 0;
  void report(int value) {
    if (value > last) {
      last = value;
      onProgress(value);
    }
  }

  report(1);
  final clean = decodePhoto(bytes);
  report(8);
  onStage(1);
  final output = img.Image(width: clean.width, height: clean.height);
  final input = clean.data!.toUint8List();
  final target = output.data!.toUint8List();
  for (var y = 0; y < clean.height; y++) {
    for (var x = 0; x < clean.width; x++) {
      final vi = ((y % 224) * 224 + x % 224) * 3;
      final src = y * clean.data!.rowStride + x * 3;
      final dst = y * output.data!.rowStride + x * 3;
      for (var c = 0; c < 3; c++) {
        target[dst + c] =
            ((input[src + c] / 255 + alpha * vector[vi + c]).clamp(0, 1) * 255)
                .round();
      }
    }
    report(8 + (37 * (y + 1) / clean.height).floor());
  }
  onStage(2);
  final quality = measureQuality(
    clean,
    output,
    onProgress: (fraction) => report(45 + (45 * fraction).floor()),
  );
  report(90);
  final cleanPng = Uint8List.fromList(img.encodePng(clean));
  report(94);
  final outputPng = Uint8List.fromList(img.encodePng(output));
  report(99);
  // The receiving processor reports 100 only once it has the complete result.
  return LabResult(
    cleanPng,
    outputPng,
    clean.width,
    clean.height,
    quality.$1,
    quality.$2,
  );
}
