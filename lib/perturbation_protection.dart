import 'dart:typed_data';

import 'package:image/image.dart' as img;

const int perturbationSize = 224;
const int perturbationChannels = 3;
const int perturbationValueCount =
    perturbationSize * perturbationSize * perturbationChannels;
const int perturbationByteCount = perturbationValueCount * 4;

/// Decodes the exported little-endian HWC RGB float32 asset.
Float32List loadPerturbationAsset(Uint8List assetBytes) {
  if (assetBytes.lengthInBytes != perturbationByteCount) {
    throw FormatException(
      'Expected $perturbationByteCount bytes, got ${assetBytes.lengthInBytes}.',
    );
  }

  final values = Float32List(perturbationValueCount);
  final bytes = ByteData.sublistView(assetBytes);
  for (var index = 0; index < values.length; index++) {
    values[index] = bytes.getFloat32(index * 4, Endian.little);
  }
  return values;
}

/// Repeats the 224x224 HWC perturbation using modulo indexing.
Float32List tilePerturbation(
  Float32List perturbation,
  int targetWidth,
  int targetHeight,
) {
  _validatePerturbation(perturbation);
  if (targetWidth < 0 || targetHeight < 0) {
    throw ArgumentError('Target dimensions must be non-negative.');
  }

  final tiled = Float32List(targetWidth * targetHeight * perturbationChannels);
  for (var y = 0; y < targetHeight; y++) {
    final sourceY = y % perturbationSize;
    for (var x = 0; x < targetWidth; x++) {
      final sourceX = x % perturbationSize;
      final sourceOffset =
          (sourceY * perturbationSize + sourceX) * perturbationChannels;
      final targetOffset =
          (y * targetWidth + x) * perturbationChannels;
      tiled[targetOffset] = perturbation[sourceOffset];
      tiled[targetOffset + 1] = perturbation[sourceOffset + 1];
      tiled[targetOffset + 2] = perturbation[sourceOffset + 2];
    }
  }
  return tiled;
}

/// Applies a fixed UAP to an image at its original decoded resolution.
class PerturbationProtector {
  PerturbationProtector(Float32List perturbation)
      : perturbation = Float32List.fromList(
          _validatePerturbation(perturbation),
        );

  final Float32List perturbation;

  Uint8List applyProtection(Uint8List imageBytes, double alpha) {
    if (!alpha.isFinite || alpha < 0.0 || alpha > 1.0) {
      throw RangeError.value(alpha, 'alpha', 'must be between 0.0 and 1.0');
    }

    final decoded = img.decodeImage(imageBytes);
    if (decoded == null) {
      throw const FormatException('Unable to decode the input image.');
    }

    return _applyToDecodedImage(decoded, alpha);
  }

  Uint8List _applyToDecodedImage(img.Image decoded, double alpha) {
    final input = decoded.convert(numChannels: 3);
    final output = img.Image(width: input.width, height: input.height);
    final sourceBytes = input.data!.toUint8List();
    final outputBytes = output.data!.toUint8List();
    final sourceStride = input.data!.rowStride;
    final targetStride = output.data!.rowStride;

    for (var y = 0; y < input.height; y++) {
      for (var x = 0; x < input.width; x++) {
        final sourceOffset = y * sourceStride + x * perturbationChannels;
        final perturbationOffset =
            ((y % perturbationSize) * perturbationSize +
                    (x % perturbationSize)) *
                perturbationChannels;
        final outputOffset = y * targetStride + x * perturbationChannels;

        outputBytes[outputOffset] = _blendChannel(
          sourceBytes[sourceOffset],
          perturbation[perturbationOffset],
          alpha,
        );
        outputBytes[outputOffset + 1] = _blendChannel(
          sourceBytes[sourceOffset + 1],
          perturbation[perturbationOffset + 1],
          alpha,
        );
        outputBytes[outputOffset + 2] = _blendChannel(
          sourceBytes[sourceOffset + 2],
          perturbation[perturbationOffset + 2],
          alpha,
        );
      }
    }

    return Uint8List.fromList(img.encodePng(output));
  }
}

/// Creates the bounded image used for live slider previews.
Uint8List createPreviewBytes(Uint8List imageBytes, {int maxDimension = 400}) {
  final decoded = img.decodeImage(imageBytes);
  if (decoded == null) {
    throw const FormatException('Unable to decode the selected image.');
  }
  if (decoded.width <= maxDimension && decoded.height <= maxDimension) {
    return imageBytes;
  }

  final scale = maxDimension /
      (decoded.width > decoded.height ? decoded.width : decoded.height);
  final resized = img.copyResize(
    decoded,
    width: (decoded.width * scale).round(),
    height: (decoded.height * scale).round(),
  );
  return Uint8List.fromList(img.encodePng(resized));
}

/// Convenience form for callers that do not need to retain a protector.
Uint8List applyProtection(
  Uint8List imageBytes,
  double alpha,
  Float32List perturbation,
) {
  return PerturbationProtector(perturbation).applyProtection(imageBytes, alpha);
}

Float32List _validatePerturbation(Float32List perturbation) {
  if (perturbation.length != perturbationValueCount) {
    throw FormatException(
      'Expected $perturbationValueCount float32 values, got ${perturbation.length}.',
    );
  }
  for (final value in perturbation) {
    if (!value.isFinite) {
      throw const FormatException('Perturbation contains a non-finite value.');
    }
  }
  return perturbation;
}

int _blendChannel(int pixel, double perturbation, double alpha) {
  final blended = pixel / 255.0 + alpha * perturbation;
  return (blended.clamp(0.0, 1.0) * 255.0).round();
}