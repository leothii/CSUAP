import 'dart:typed_data';

import 'package:image/image.dart' as img;

// Bound memory use on phones and browsers without silently resizing photos.
const maxPhotoBytes = 30 * 1024 * 1024;
const maxPhotoPixels = 24 * 1000 * 1000;

img.Image decodePhoto(Uint8List bytes) {
  if (bytes.lengthInBytes < 16) {
    throw const FormatException(
      'This image could not be read. Try a PNG or JPEG.',
    );
  }
  if (bytes.lengthInBytes > maxPhotoBytes) {
    throw const FormatException('Choose a photo smaller than 30 MB.');
  }
  final decoder = img.findDecoderForData(bytes);
  final info = decoder?.startDecode(bytes);
  if (info == null) {
    throw const FormatException(
      'This image could not be read. Try a PNG or JPEG.',
    );
  }
  if (info.width < 1 ||
      info.height < 1 ||
      info.width * info.height > maxPhotoPixels) {
    throw const FormatException('Choose a photo with at most 24 megapixels.');
  }
  if (info.numFrames > 1) {
    throw const FormatException(
      'Choose a still photo instead of an animated or multipage image.',
    );
  }
  final image = decoder!.decodeFrame(0);
  if (image == null) {
    throw const FormatException(
      'This image could not be read. Try a PNG or JPEG.',
    );
  }
  return normalizePhoto(image);
}

/// Reuse normalized buffers. Callers must treat the returned image as read-only.
img.Image rgb8(img.Image image) =>
    image.format == img.Format.uint8 &&
        image.numChannels == 3 &&
        image.palette == null
    ? image
    : image.convert(format: img.Format.uint8, numChannels: 3);

img.Image normalizePhoto(img.Image image) {
  final orientation = image.exif.imageIfd.orientation;
  return rgb8(
    orientation != null && orientation != 1
        ? img.bakeOrientation(image)
        : image,
  );
}
