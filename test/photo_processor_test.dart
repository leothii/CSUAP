import 'dart:typed_data';
import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:csuap/lab_processing.dart';
import 'package:csuap/perturbation_protection.dart';
import 'package:csuap/photo_processor.dart';

void main() {
  final photo = img.Image(width: 32, height: 24);
  img.fill(photo, color: img.ColorRgb8(80, 140, 220));
  final bytes = Uint8List.fromList(img.encodePng(photo));
  final vector = Float32List(perturbationValueCount)
    ..fillRange(0, perturbationValueCount, .02);

  test('managed isolate preserves output and reports ordered stages', () async {
    final processor = PhotoProcessor();
    addTearDown(processor.dispose);
    final stages = <int>[];
    final actual =
        await processor.generate(bytes, vector, .5, onStage: stages.add);
    final expected = generateCloak((bytes: bytes, vector: vector, alpha: .5));
    expect(actual.output, orderedEquals(expected.output));
    expect(actual.ssim, closeTo(expected.ssim!, 1e-10));
    expect(actual.psnr, closeTo(expected.psnr, 1e-10));
    expect(stages, [1, 2]);
  });

  test('cancel during startup, then immediately run another cloak', () async {
    final processor = PhotoProcessor();
    addTearDown(processor.dispose);
    final first = processor.generate(bytes, vector, .5, onStage: (_) {});
    final cancelled =
        expectLater(first, throwsA(isA<PhotoProcessingCancelled>()));
    processor.cancelGeneration();
    final next = processor.generate(bytes, vector, 0, onStage: (_) {});
    await cancelled;
    expect((await next).psnr, double.infinity);
  });

  test('cancel a running stage and prevent further stage delivery', () async {
    final processor = PhotoProcessor();
    addTearDown(processor.dispose);
    final stages = <int>[];
    await expectLater(
        processor.generate(bytes, vector, .5, onStage: (stage) {
          stages.add(stage);
          processor.cancelGeneration();
        }),
        throwsA(isA<PhotoProcessingCancelled>()));
    expect(stages, [1]);
    processor.dispose();
    await expectLater(processor.generate(bytes, vector, .5, onStage: (_) {}),
        throwsStateError);
  });
}
