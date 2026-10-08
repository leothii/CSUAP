import 'package:csuap/unsaved_page_guard_web.dart';
import 'package:csuap/photo_processing_cancelled.dart';
// Browser integration checks against the native reference fixture.
import 'dart:async';
import 'dart:convert';
import 'dart:js_interop';
import 'package:image/image.dart' as img;
import 'package:csuap/photo_processor_web.dart';
import 'package:csuap/perturbation_protection.dart';

@JS('runPhotoChecks')
external set _runChecks(JSFunction value);
@JS('checkUnavailable')
external set _checkUnavailable(JSFunction value);

void require(bool value, String message) {
  if (!value) throw StateError(message);
}

Future<JSString> check(String fixture) async {
  final data = jsonDecode(fixture) as Map<String, dynamic>;
  final bytes = base64Decode(data['bytes'] as String);
  final vector = loadPerturbationAsset(base64Decode(data['vector'] as String));
  final processor = PhotoProcessor();
  var beats = 0, beatsAtFirstStage = 0;
  final timer = Timer.periodic(
    const Duration(milliseconds: 10),
    (_) => beats++,
  );
  try {
    final preview = await processor.prepare(bytes, vector);
    require(
      base64Encode(preview.rgb) == data['preview'],
      'Preview pixels differ',
    );
    final stages = <int>[];
    final percentages = <int>[];
    processor.onProgress = percentages.add;
    final watch = Stopwatch()..start();
    final result = await processor.generate(
      bytes,
      vector,
      .5,
      onStage: (stage) {
        stages.add(stage);
        if (stage == 1) beatsAtFirstStage = beats;
      },
    );
    watch.stop();
    final elapsedMs = watch.elapsedMilliseconds;
    final progressCount = percentages.length;
    require(percentages.first == 1 && percentages.last == 100, 'Progress endpoints differ');
    require(progressCount > 50, 'Too few progress updates');
    for (var i = 1; i < percentages.length; i++) {
      require(percentages[i] > percentages[i - 1], 'Progress moved backwards');
    }
    final activeBeats = beats - beatsAtFirstStage;
    require(
      activeBeats >= 2,
      'UI event loop did not advance during processing',
    );
    require(stages.join(',') == '1,2', 'Stage updates are out of order');
    require(
      base64Encode(
            img.decodePng(result.output)!.getBytes(order: img.ChannelOrder.rgb),
          ) ==
          data['output'],
      'Output pixels differ',
    );
    require(
      base64Encode(
            img.decodePng(result.clean)!.getBytes(order: img.ChannelOrder.rgb),
          ) ==
          data['clean'],
      'Clean pixels differ',
    );
    require(
      (result.ssim! - (data['ssim'] as num)).abs() < 1e-8,
      'SSIM differs',
    );
    require((result.psnr - (data['psnr'] as num)).abs() < 1e-8, 'PSNR differs');
    final bins = await processor.histogram(result.clean, result.output);
    require(jsonEncode(bins) == jsonEncode(data['bins']), 'Histogram differs');
    final cancelled = processor.generate(bytes, vector, .5, onStage: (_) {});
    processor.cancelGeneration();
    try {
      await cancelled;
      throw StateError('Cancelled browser job unexpectedly completed');
    } on PhotoProcessingCancelled {
      /* A new job must still work below. */
    }
    final identity = await processor.generate(
      bytes,
      vector,
      0,
      onStage: (_) {},
    );
    require(
      identity.ssim == 1 && identity.psnr.isInfinite,
      'Identity metrics differ',
    );
    try {
      await processor.prepare(base64Decode('AAAA'), vector);
      throw StateError('Invalid input unexpectedly succeeded');
    } on FormatException {
      /* Expected: worker errors reach the caller. */
    }
    final closing = PhotoProcessor();
    final pending = closing.generate(bytes, vector, .5, onStage: (_) {});
    closing.dispose();
    try {
      await pending;
      throw FormatException('Disposed job unexpectedly completed');
    } on StateError {
      /* Expected: leaving the screen releases the worker. */
    }
    return jsonEncode({
      'passed': true,
      'processingMs': elapsedMs,
      'progressUpdates': progressCount,
      'heartbeatTicksDuringProcessing': activeBeats,
      'checks':
          'preview, pixels, SSIM, PSNR, histogram, stage order, identity, invalid input, cancel and restart, dispose',
    }).toJS;
  } finally {
    timer.cancel();
    processor.dispose();
  }
}

Future<JSString> unavailable() async {
  final processor = PhotoProcessor();
  try {
    await processor.histogram(base64Decode('AAAA'), base64Decode('AAAA'));
    throw StateError('Missing worker unexpectedly succeeded');
  } on FormatException catch (error) {
    require(
      error.message.contains('unavailable') ||
          error.message.contains('could not start'),
      'Wrong missing-worker error: $error',
    );
    return 'PASS: missing worker reports an error without running on the UI thread'
        .toJS;
  } finally {
    processor.dispose();
  }
}

@JS('setPageProtection')
external set _setPageProtection(JSFunction value);

void main() {
  final pageGuard = UnsavedPageGuard();
  _setPageProtection = ((bool active) => pageGuard.setActive(active)).toJS;
  _runChecks =
      ((String fixture) => check(fixture)
              .catchError(
                (Object error, StackTrace stack) => jsonEncode({
                  'passed': false,
                  'error': error.toString(),
                  'stack': stack.toString(),
                }).toJS,
              )
              .toJS)
          .toJS;
  _checkUnavailable = (() => unavailable().toJS).toJS;
}
