import 'dart:math' as math;
import 'dart:typed_data';
import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:csuap/lab_processing.dart';
import 'package:csuap/perturbation_protection.dart';
import 'package:csuap/image_input.dart';

void main() {
  test('invalid and oversized encoded inputs fail with a useful error', () {
    expect(
      () => decodePhoto(Uint8List.fromList([1, 2, 3])),
      throwsFormatException,
    );
    expect(
      () => decodePhoto(Uint8List(maxPhotoBytes + 1)),
      throwsA(
        isA<FormatException>().having(
          (e) => e.message,
          'message',
          contains('30 MB'),
        ),
      ),
    );
    final animation = img.Image(width: 8, height: 8);
    animation.addFrame(img.Image(width: 8, height: 8));
    expect(
      () => decodePhoto(Uint8List.fromList(img.encodeGif(animation))),
      throwsA(
        isA<FormatException>().having(
          (e) => e.message,
          'message',
          contains('still photo'),
        ),
      ),
    );
  });

  test('EXIF orientation is applied exactly once across the pipeline', () {
    final photo = img.Image(width: 12, height: 8);
    for (final pixel in photo) {
      pixel.setRgb(pixel.x * 20, pixel.y * 30, 80);
    }
    photo.exif.imageIfd.orientation = 6;
    final bytes = Uint8List.fromList(img.encodeJpg(photo));
    final result = generateCloak((
      bytes: bytes,
      vector: Float32List(perturbationValueCount),
      alpha: 0.0,
    ));
    expect((result.width, result.height), (8, 12));
    expect(result.ssim, closeTo(1, 1e-12));
    expect(result.psnr, double.infinity);
    expect(img.decodePng(result.output)!.exif.imageIfd.orientation, isNull);
  });

  test(
    'direct protection normalizes 16-bit inputs without corrupting bytes',
    () {
      final photo = img.Image(width: 9, height: 8, format: img.Format.uint16);
      for (final pixel in photo) {
        pixel.setRgb(32768, 65535, 0);
      }
      final bytes = Uint8List.fromList(img.encodePng(photo));
      final actual = img.decodePng(
        applyProtection(bytes, 0, Float32List(perturbationValueCount)),
      )!;
      expect(actual.getPixel(0, 0).r, inInclusiveRange(127, 128));
      expect(actual.getPixel(0, 0).g, 255);
      expect(actual.getPixel(0, 0).b, 0);
    },
  );

  test(
    'corrupt vectors and invalid intensity fail before producing output',
    () {
      final raw = Uint8List(perturbationByteCount);
      ByteData.sublistView(raw).setFloat32(0, double.nan, Endian.little);
      expect(() => loadPerturbationAsset(raw), throwsFormatException);
      expect(() => loadPerturbationAsset(Uint8List(4)), throwsFormatException);
      final protector = PerturbationProtector(
        Float32List(perturbationValueCount),
      );
      for (final alpha in [-.1, 1.1, double.nan, double.infinity]) {
        expect(
          () => protector.applyToImage(img.Image(width: 8, height: 8), alpha),
          throwsRangeError,
        );
      }
    },
  );

  test('sliding SSIM matches independently computed RGB windows', () {
    final a = img.Image(width: 13, height: 11);
    final b = img.Image(width: 13, height: 11);
    for (final pixel in a) {
      pixel.setRgb(
        (pixel.x * 17 + pixel.y * 3) % 256,
        (pixel.y * 23) % 256,
        (pixel.x * pixel.y * 5) % 256,
      );
      b.setPixelRgb(
        pixel.x,
        pixel.y,
        (pixel.r + 7).clamp(0, 255),
        (pixel.g - 11).clamp(0, 255),
        (pixel.b + 19).clamp(0, 255),
      );
    }
    var total = 0.0, error = 0.0;
    var windows = 0;
    for (var c = 0; c < 3; c++) {
      for (var y = 0; y < a.height; y++) {
        for (var x = 0; x < a.width; x++) {
          final diff = a.getPixel(x, y)[c] - b.getPixel(x, y)[c];
          error += diff * diff;
          if (x + 7 > a.width || y + 7 > a.height) continue;
          final aa = <double>[], bb = <double>[];
          for (var dy = 0; dy < 7; dy++) {
            for (var dx = 0; dx < 7; dx++) {
              aa.add(a.getPixel(x + dx, y + dy)[c].toDouble());
              bb.add(b.getPixel(x + dx, y + dy)[c].toDouble());
            }
          }
          final ma = aa.reduce((a, b) => a + b) / 49;
          final mb = bb.reduce((a, b) => a + b) / 49;
          var va = 0.0, vb = 0.0, cov = 0.0;
          for (var i = 0; i < 49; i++) {
            va += (aa[i] - ma) * (aa[i] - ma) / 48;
            vb += (bb[i] - mb) * (bb[i] - mb) / 48;
            cov += (aa[i] - ma) * (bb[i] - mb) / 48;
          }
          total +=
              ((2 * ma * mb + 6.5025) * (2 * cov + 58.5225)) /
              ((ma * ma + mb * mb + 6.5025) * (va + vb + 58.5225));
          windows++;
        }
      }
    }
    final measured = measureQuality(a, b);
    expect(measured.$1, closeTo(total / windows, 1e-10));
    final mse = error / (a.width * a.height * 3);
    expect(measured.$2, closeTo(10 * math.log(65025 / mse) / math.ln10, 1e-10));
  });

  test(
    'preview pixels match sampled full-resolution output at every intensity',
    () {
      final photo = img.Image(width: 803, height: 17);
      for (final pixel in photo) {
        pixel.setRgb(pixel.x % 256, pixel.y * 15, 245);
      }
      final bytes = Uint8List.fromList(img.encodePng(photo));
      final vector = Float32List(perturbationValueCount);
      for (var i = 0; i < vector.length; i++) {
        vector[i] = (i % 31 - 15) / 100;
      }
      final preview = prepareCloakPreview((bytes: bytes, vector: vector));
      expect(preview.width, 400);
      expect(preview.height, 8);
      for (final alpha in [0.0, .5, 1.0]) {
        final small = img.decodePng(
          renderCloakPreview((preview: preview, alpha: alpha)),
        )!;
        final full = img.decodePng(
          cloakPhoto((bytes: bytes, vector: vector, alpha: alpha)),
        )!;
        for (final pixel in small) {
          final original = full.getPixel(
            pixel.x * full.width ~/ small.width,
            pixel.y * full.height ~/ small.height,
          );
          expect(
            [pixel.r, pixel.g, pixel.b],
            [original.r, original.g, original.b],
          );
        }
      }
    },
  );

  test('preview preserves small images and supports extreme aspect ratios', () {
    for (final size in [(3, 2), (1, 1000), (1000, 1)]) {
      final bytes = Uint8List.fromList(
        img.encodePng(img.Image(width: size.$1, height: size.$2)),
      );
      final preview = prepareCloakPreview((
        bytes: bytes,
        vector: Float32List(perturbationValueCount),
      ));
      expect(preview.width, inInclusiveRange(1, 400));
      expect(preview.height, inInclusiveRange(1, 400));
      expect(
        img.decodePng(renderCloakPreview((preview: preview, alpha: 0.0))),
        isNotNull,
      );
    }
  });

  test(
    'reported MSE matches exported pixel error including an identical pair',
    () {
      final photo = img.Image(width: 8, height: 8);
      img.fill(photo, color: img.ColorRgb8(100, 100, 100));
      final bytes = Uint8List.fromList(img.encodePng(photo));
      final vector = Float32List(perturbationValueCount)
        ..fillRange(0, perturbationValueCount, 10 / 255);
      expect(
        generateCloak((bytes: bytes, vector: vector, alpha: 1.0)).mse,
        closeTo(100, 1e-9),
      );
      expect(generateCloak((bytes: bytes, vector: vector, alpha: 0.0)).mse, 0);
    },
  );

  test('staged processing preserves output and quality measurements', () {
    final photo = img.Image(width: 12, height: 10);
    img.fill(photo, color: img.ColorRgb8(100, 130, 180));
    final bytes = Uint8List.fromList(img.encodePng(photo));
    final vector = Float32List(perturbationValueCount)
      ..fillRange(0, perturbationValueCount, .02);
    final expected = generateCloak((bytes: bytes, vector: vector, alpha: .5));
    final clean = preparePhoto(bytes);
    final output = cloakPhoto((bytes: clean, vector: vector, alpha: .5));
    final actual = inspectPhoto((clean: clean, output: output));
    expect(actual.clean, expected.clean);
    expect(actual.output, expected.output);
    expect(actual.ssim, expected.ssim);
    expect(actual.psnr, expected.psnr);
  });
  test('16-bit inputs normalize to the exported 8-bit RGB baseline', () {
    final a = img.Image(width: 8, height: 8, format: img.Format.uint16);
    for (final pixel in a) {
      pixel.setRgb(32768, 32768, 32768);
    }
    final result = generateCloak((
      bytes: Uint8List.fromList(img.encodePng(a)),
      vector: Float32List(perturbationValueCount),
      alpha: 0.0,
    ));
    expect(
      img.decodePng(result.output)!.getPixel(0, 0).r,
      inInclusiveRange(127, 128),
    );
    expect(result.ssim, closeTo(1, 1e-12));
    expect(result.psnr, double.infinity);
  });
  test('identical images have perfect SSIM and infinite PSNR', () {
    final a = img.Image(width: 12, height: 10);
    img.fill(a, color: img.ColorRgb8(100, 130, 180));
    final result = measureQuality(a, a);
    expect(result.$1, closeTo(1, 1e-12));
    expect(result.$2, double.infinity);
  });
  test('constant offset agrees with analytic SSIM and PSNR', () {
    final a = img.Image(width: 9, height: 8);
    final b = img.Image(width: 9, height: 8);
    img.fill(a, color: img.ColorRgb8(100, 100, 100));
    img.fill(b, color: img.ColorRgb8(110, 110, 110));
    final result = measureQuality(a, b);
    expect(result.$1, closeTo((22000 + 6.5025) / (22100 + 6.5025), 1e-10));
    expect(result.$2, closeTo(10 * math.log(650.25) / math.ln10, 1e-10));
  });
  test('small images report unavailable SSIM and mismatches fail', () {
    final a = img.Image(width: 3, height: 4);
    expect(measureQuality(a, a).$1, isNull);
    expect(
      () => measureQuality(a, img.Image(width: 4, height: 4)),
      throwsArgumentError,
    );
  });
  test('generation measures the actual full-size PNG and tiles vector', () {
    final a = img.Image(width: 225, height: 8);
    img.fill(a, color: img.ColorRgb8(100, 100, 100));
    final vector = Float32List(perturbationValueCount);
    vector[0] = .04;
    final result = generateCloak((
      bytes: Uint8List.fromList(img.encodePng(a)),
      vector: vector,
      alpha: 1.0,
    ));
    final b = img.decodePng(result.output)!;
    expect(result.width, 225);
    expect(b.getPixel(0, 0).r, 110);
    expect(b.getPixel(224, 0).r, 110);
    expect(b.getPixel(1, 0).r, 100);
    expect(result.ssim, lessThan(1));
    expect(result.psnr, isNot(double.infinity));
    expect(img.decodePng(result.clean)!.getPixel(0, 0).r, 100);
  });
}
