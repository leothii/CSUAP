import 'dart:io';
import 'dart:typed_data';

import 'package:path_provider/path_provider.dart';
import 'package:share_plus/share_plus.dart';

Future<XFile> createShareImageFile(Uint8List bytes) async {
  final directory = await getTemporaryDirectory();
  final file = File(
    '${directory.path}${Platform.pathSeparator}csuap_protected_${DateTime.now().millisecondsSinceEpoch}.png',
  );
  await file.writeAsBytes(bytes, flush: true);
  return XFile(file.path, mimeType: 'image/png');
}