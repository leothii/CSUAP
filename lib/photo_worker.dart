// Compiled separately with dart compile js; this entry point imports no Flutter.
import 'dart:js_interop';
import 'lab_processing.dart';
import 'pixel_histogram.dart';
import 'photo_worker_protocol.dart';

@JS('self.onmessage')
external set _onMessage(JSFunction handler);
@JS('self.postMessage')
external void _send(PhotoMessage message);

void main() {
  _onMessage = ((PhotoMessageEvent event) {
    _send(PhotoMessage(type: 'ready'));
    try {
      final request = event.data;
      switch (request.type) {
        case 'prepare':
          final preview = prepareCloakPreview((
            bytes: request.bytes!.toDart,
            vector: request.vector!.toDart,
          ));
          _send(PhotoMessage(
              type: 'preview',
              width: preview.width,
              height: preview.height,
              bytes: preview.rgb.toJS,
              vector: preview.vector.toJS));
        case 'generate':
          final clean = preparePhoto(request.bytes!.toDart);
          _send(PhotoMessage(type: 'progress', stage: 1));
          final output = cloakPhoto((
            bytes: clean,
            vector: request.vector!.toDart,
            alpha: request.alpha!
          ));
          _send(PhotoMessage(type: 'progress', stage: 2));
          final result = inspectPhoto((clean: clean, output: output));
          _send(PhotoMessage(
              type: 'result',
              clean: result.clean.toJS,
              output: result.output.toJS,
              width: result.width,
              height: result.height,
              ssim: result.ssim,
              psnr: result.psnr));
        case 'histogram':
          final bins = pixelChangeHistogram(
              (clean: request.clean!.toDart, output: request.output!.toDart));
          _send(PhotoMessage(
              type: 'histogram',
              bins: bins.map((value) => value.toJS).toList().toJS));
        default:
          throw const FormatException('Unknown photo operation.');
      }
    } catch (error) {
      _send(PhotoMessage(
          type: 'error',
          error: error is FormatException
              ? error.message
              : 'Could not process this image. Try a smaller PNG or JPEG.'));
    }
  }).toJS;
}
