import 'dart:math' as math;
import 'dart:typed_data';
import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:csuap/lab_processing.dart';
import 'package:csuap/perturbation_protection.dart';

void main() {
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
      alpha: 0.0
    ));
    expect(img.decodePng(result.output)!.getPixel(0, 0).r,
        inInclusiveRange(127, 128));
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
    expect(() => measureQuality(a, img.Image(width: 4, height: 4)),
        throwsArgumentError);
  });
  test('generation measures the actual full-size PNG and tiles vector', () {
    final a = img.Image(width: 225, height: 8);
    img.fill(a, color: img.ColorRgb8(100, 100, 100));
    final vector = Float32List(perturbationValueCount);
    vector[0] = .04;
    final result = generateCloak((
      bytes: Uint8List.fromList(img.encodePng(a)),
      vector: vector,
      alpha: 1.0
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
