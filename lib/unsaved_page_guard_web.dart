import 'dart:js_interop';

@JS('window.addEventListener')
external void _add(String type, JSFunction callback);
@JS('window.removeEventListener')
external void _remove(String type, JSFunction callback);

extension type _BeforeUnload._(JSObject _) implements JSObject {
  external void preventDefault();
  external set returnValue(String value);
}

/// The browser controls the text and availability of its reload/close prompt.
class UnsavedPageGuard {
  bool _active = false;
  final _listener = ((_BeforeUnload event) {
    event.preventDefault();
    event.returnValue = '';
  }).toJS;

  void setActive(bool active) {
    if (active == _active) return;
    _active = active;
    if (active) {
      _add('beforeunload', _listener);
    } else {
      _remove('beforeunload', _listener);
    }
  }

  void dispose() => setActive(false);
}
