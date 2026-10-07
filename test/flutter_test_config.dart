import 'dart:async';
import 'dart:io';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

/// Use the bundled fonts for layout checks, matching the shipped application.
Future<void> testExecutable(FutureOr<void> Function() testMain) async {
  TestWidgetsFlutterBinding.ensureInitialized();
  for (final family in ['VT323', 'PressStart2P', 'Rajdhani']) {
    final bytes = await File('assets/fonts/$family-Regular.ttf').readAsBytes();
    await (FontLoader(family)
          ..addFont(Future.value(ByteData.sublistView(bytes))))
        .load();
  }
  await testMain();
}
