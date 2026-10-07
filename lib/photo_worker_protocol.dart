import 'dart:js_interop';

/// Plain JS objects and typed arrays are structured-cloneable across workers.
extension type PhotoMessage._(JSObject _) implements JSObject {
  external factory PhotoMessage({
    required String type,
    JSUint8Array? bytes,
    JSFloat32Array? vector,
    double? alpha,
    JSUint8Array? clean,
    JSUint8Array? output,
    int? width,
    int? height,
    double? ssim,
    double? psnr,
    JSArray<JSNumber>? bins,
    String? error,
    int? stage,
  });
  external String get type;
  external JSUint8Array? get bytes;
  external JSFloat32Array? get vector;
  external double? get alpha;
  external JSUint8Array? get clean;
  external JSUint8Array? get output;
  external int? get width;
  external int? get height;
  external double? get ssim;
  external double? get psnr;
  external JSArray<JSNumber>? get bins;
  external String? get error;
  external int? get stage;
}

extension type PhotoMessageEvent._(JSObject _) implements JSObject {
  external PhotoMessage get data;
}

@JS('Worker')
extension type PhotoBrowserWorker._(JSObject _) implements JSObject {
  external factory PhotoBrowserWorker(String url);
  external set onmessage(JSFunction? value);
  external set onerror(JSFunction? value);
  external set onmessageerror(JSFunction? value);
  external void postMessage(PhotoMessage message);
  external void terminate();
}
