import 'dart:io';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:file_selector/file_selector.dart';
import 'package:image/image.dart' as img;
import 'package:csuap/batch_session.dart';
import 'package:csuap/batch_screen.dart';
import 'package:csuap/cloaking_progress.dart';
import 'package:csuap/main.dart';
import 'package:csuap/pixel_theme.dart';
import 'package:csuap/progressive_cloak.dart';
import 'package:csuap/perturbation_protection.dart';

void main() {
  testWidgets('evidence: result and batch layouts in portrait and desktop themes', (tester) async {
    await (FontLoader('MaterialIcons')..addFont(Future.value(ByteData.sublistView(File('build/unit_test_assets/fonts/MaterialIcons-Regular.otf').readAsBytesSync())))).load();
    final photo = img.Image(width: 320, height: 240);
    for (final p in photo) {
      p.setRgb((p.x * 17 + p.y) % 256, (p.y * 13) % 256, (p.x + p.y * 7) % 256);
    }
    final bytes = Uint8List.fromList(img.encodePng(photo));
    final vector = loadPerturbationAsset(File('assets/cs_uap_v_f32_hwc.bin').readAsBytesSync());
    final progress = <int>[];
    final result = generateWithProgress(bytes, vector, .5, onProgress: progress.add, onStage: (_) {});
    expect(progress.first, 1);
    expect(progress.last, 99);
    expect(progress.length, greaterThan(50));
    for (var i = 1; i < progress.length; i++) { expect(progress[i], greaterThan(progress[i-1])); }
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetDevicePixelRatio);
    addTearDown(tester.view.resetPhysicalSize);
    final directory = Directory('Thesis Evidence/2026-10-08/screenshots')..createSync(recursive: true);
    for (final width in [390.0, 1280.0]) {
      tester.view.physicalSize = Size(width, 900);
      for (final brightness in Brightness.values) {
        final session = BatchSession()..add(List.generate(10, (i) => XFile.fromData(bytes, name: 'synthetic_${i+1}.png', path: 'synthetic_${i+1}.png')));
        session.photos.first.result = result;
        final screens = <String, Widget>{
          'results': CloakResultsScreen(result: result, alpha: .5, filename: 'synthetic.png', retained: true),
          'batch': BatchCloakingScreen(vector: vector, session: session),
          'progress': Scaffold(body: Center(child: Padding(padding: const EdgeInsets.all(24), child: CloakingProgress(completedStages: 2, percent: 67)))),
        };
        for (final entry in screens.entries) {
          final key = GlobalKey();
          await tester.pumpWidget(RepaintBoundary(key: key, child: MaterialApp(debugShowCheckedModeBanner: false, theme: pixelTheme(brightness), home: entry.value)));
          await tester.pump(const Duration(seconds: 1));
          expect(tester.takeException(), isNull);
          await tester.runAsync(() async {
            final boundary = key.currentContext!.findRenderObject()! as RenderRepaintBoundary;
            final image = await boundary.toImage();
            final png = await image.toByteData(format: ui.ImageByteFormat.png);
            File('${directory.path}/${entry.key}_${width.toInt()}_${brightness.name}.png').writeAsBytesSync(png!.buffer.asUint8List());
            image.dispose();
          });
          await tester.pumpWidget(const SizedBox.shrink());
        }

      }
    }
  });
}
