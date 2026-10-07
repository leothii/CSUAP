import 'dart:async';
import 'dart:isolate';
import 'package:flutter/foundation.dart';
import 'lab_processing.dart';
import 'pixel_histogram.dart';
import 'photo_processing_cancelled.dart';

typedef _CloakJob = ({
  SendPort replies,
  Uint8List bytes,
  Float32List vector,
  double alpha
});

class PhotoProcessor {
  void Function()? _cancelGeneration;
  bool _disposed = false;
  Future<CloakPreview> prepare(Uint8List bytes, Float32List vector) =>
      compute(prepareCloakPreview, (bytes: bytes, vector: vector));

  /// Managed isolates can be killed during synchronous decoding or encoding.
  Future<LabResult> generate(Uint8List bytes, Float32List vector, double alpha,
      {required void Function(int) onStage}) async {
    if (_disposed) throw StateError('Photo processor is closed.');
    if (_cancelGeneration != null) {
      throw StateError('A cloak is already running.');
    }
    final completion = Completer<LabResult>();
    final replies = ReceivePort();
    Isolate? worker;
    void cancel() {
      worker?.kill(priority: Isolate.immediate);
      if (!completion.isCompleted) {
        completion.completeError(PhotoProcessingCancelled());
      }
    }

    _cancelGeneration = cancel;
    final subscription = replies.listen((message) {
      if (completion.isCompleted) return;
      if (message is LabResult) {
        completion.complete(message);
      } else if (message is (String, int) && message.$1 == 'progress') {
        onStage(message.$2);
      } else if (message is (String, String) && message.$1 == 'error') {
        completion.completeError(FormatException(message.$2));
      } else {
        completion.completeError(
            StateError('Photo processing stopped unexpectedly.'));
      }
    });
    // Listen immediately, including cancellation while spawn is still starting.
    unawaited(Isolate.spawn<_CloakJob>(
            _generate,
            (
              replies: replies.sendPort,
              bytes: bytes,
              vector: vector,
              alpha: alpha,
            ),
            onError: replies.sendPort,
            onExit: replies.sendPort)
        .then((isolate) {
      worker = isolate;
      if (completion.isCompleted) isolate.kill(priority: Isolate.immediate);
    }, onError: (Object error, StackTrace stack) {
      if (!completion.isCompleted) completion.completeError(error, stack);
    }));
    try {
      return await completion.future;
    } finally {
      if (identical(_cancelGeneration, cancel)) _cancelGeneration = null;
      worker?.kill(priority: Isolate.immediate);
      await subscription.cancel();
      replies.close();
    }
  }

  void cancelGeneration() {
    final cancel = _cancelGeneration;
    _cancelGeneration = null;
    cancel?.call();
  }

  Future<List<int>> histogram(Uint8List clean, Uint8List output) =>
      compute(pixelChangeHistogram, (clean: clean, output: output));

  void dispose() {
    _disposed = true;
    cancelGeneration();
  }
}

void _generate(_CloakJob job) {
  try {
    final clean = preparePhoto(job.bytes);
    job.replies.send(('progress', 1));
    final output =
        cloakPhoto((bytes: clean, vector: job.vector, alpha: job.alpha));
    job.replies.send(('progress', 2));
    job.replies.send(inspectPhoto((clean: clean, output: output)));
  } catch (error) {
    job.replies.send((
      'error',
      error is FormatException
          ? error.message
          : 'Could not process this image. Try a smaller PNG or JPEG.'
    ));
  }
}
