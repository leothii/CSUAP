import 'dart:typed_data';

import 'package:share_plus/share_plus.dart';

Future<XFile> createShareImageFile(Uint8List bytes) async {
  return XFile.fromData(
    bytes,
    mimeType: 'image/png',
    name: 'invisiai_protected.png',
  );
}
