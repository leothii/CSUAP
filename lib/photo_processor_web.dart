import 'dart:async';
import 'dart:js_interop';
import 'dart:typed_data';
import 'lab_processing.dart';
import 'photo_worker_protocol.dart';
import 'photo_processing_cancelled.dart';

@JS('document.baseURI')
external String get _baseUri;

/// One worker per job: isolated memory, no shared queue, released on completion.
class PhotoProcessor {
  void Function(int)? onProgress;
  final _cancel = <void Function()>[];
  bool _disposed = false;
  void Function()? _cancelGeneration;

  Future<PhotoMessage> _run(PhotoMessage request,
      {void Function(int)? onStage}) async {
    if (_disposed) throw StateError('Photo processor is closed.');
    final worker = PhotoBrowserWorker(
        Uri.parse(_baseUri).resolve('photo_worker.js').toString());
    final result = Completer<PhotoMessage>();
    void cancel() {
      worker.terminate();
      if (!result.isCompleted) {
        result.completeError(PhotoProcessingCancelled());
      }
    }

    _cancel.add(cancel);
    if (request.type == 'generate') _cancelGeneration = cancel;
    final startup = Timer(const Duration(seconds: 20), () {
      if (!result.isCompleted) {
        result.completeError(const FormatException(
            'Photo processing could not start. Refresh the app and try again.'));
      }
    });
    worker.onmessage = ((PhotoMessageEvent event) {
      if (result.isCompleted) return;
      startup.cancel();
      final message = event.data;
      switch (message.type) {
        case 'ready':
          break;
        case 'progress':
          onStage?.call(message.stage!);
        case 'percent':
          onProgress?.call(message.percent!);
        case 'error':
          result.completeError(
              FormatException(message.error ?? 'Photo processing failed.'));
        default:
          result.complete(message);
      }
    }).toJS;
    void fail(JSAny? _) {
      if (!result.isCompleted) {
        result.completeError(const FormatException(
            'Photo processing is unavailable. Refresh the app and try again.'));
      }
    }

    worker.onerror = fail.toJS;
    worker.onmessageerror = fail.toJS;
    try {
      // Clone inputs rather than transfer: the UI still owns the original data.
      worker.postMessage(request);
      return await result.future;
    } finally {
      startup.cancel();
      _cancel.remove(cancel);
      if (identical(_cancelGeneration, cancel)) _cancelGeneration = null;
      worker.onmessage = null;
      worker.onerror = null;
      worker.onmessageerror = null;
      worker.terminate();
    }
  }

  Future<CloakPreview> prepare(Uint8List bytes, Float32List vector) async {
    final response = await _run(
        PhotoMessage(type: 'prepare', bytes: bytes.toJS, vector: vector.toJS));
    return CloakPreview(response.width!, response.height!,
        response.bytes!.toDart, response.vector!.toDart);
  }

  Future<LabResult> generate(Uint8List bytes, Float32List vector, double alpha,
      {required void Function(int) onStage}) async {
    final response = await _run(
        PhotoMessage(
            type: 'generate',
            bytes: bytes.toJS,
            vector: vector.toJS,
            alpha: alpha),
        onStage: onStage);
    onProgress?.call(100);
    return LabResult(response.clean!.toDart, response.output!.toDart,
        response.width!, response.height!, response.ssim, response.psnr!);
  }

  Future<List<int>> histogram(Uint8List clean, Uint8List output) async {
    final response = await _run(PhotoMessage(
        type: 'histogram', clean: clean.toJS, output: output.toJS));
    return response.bins!.toDart.map((value) => value.toDartInt).toList();
  }

  void dispose() {
    _disposed = true;
    for (final cancel in List.of(_cancel)) {
      cancel();
    }
  }

  void cancelGeneration() {
    final cancel = _cancelGeneration;
    _cancelGeneration = null;
    cancel?.call();
  }
}
