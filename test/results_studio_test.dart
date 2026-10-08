import 'dart:io';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:csuap/main.dart';
import 'package:csuap/lab_processing.dart';
import 'package:csuap/pixel_theme.dart';
import 'package:csuap/results_studio.dart';

void main() {
  for (final width in [320.0, 390.0, 1280.0]) {
    for (final brightness in Brightness.values) {
      testWidgets('result studio controls and layout $width $brightness',
          (tester) async {
        tester.view.physicalSize = Size(width, 900);
        tester.view.devicePixelRatio = 1;
        addTearDown(tester.view.resetPhysicalSize);
        addTearDown(tester.view.resetDevicePixelRatio);
        await (FontLoader('MaterialIcons')
              ..addFont(Future.value(ByteData.sublistView(
                  File('build/unit_test_assets/fonts/MaterialIcons-Regular.otf')
                      .readAsBytesSync()))))
            .load();
        final photo = img.Image(width: 240, height: 180);
        for (final p in photo) {
          p.setRgb(p.x, p.y, 140);
        }
        final bytes = Uint8List.fromList(img.encodePng(photo));
        final key = GlobalKey();
        var saves = 0;
        await tester.pumpWidget(RepaintBoundary(
            key: key,
            child: MaterialApp(
              debugShowCheckedModeBanner: false,
              theme: pixelTheme(brightness),
              builder: (context, child) => MediaQuery(
                  data: MediaQuery.of(context).copyWith(
                      textScaler: TextScaler.linear(width == 320 ? 1.5 : 1)),
                  child: child!),
              home: ResultsStudio(
                  result: LabResult(bytes, bytes, 240, 180, 1, double.infinity),
                  alpha: .5,
                  filename: 'sample.png',
                  saved: false,
                  retained: false,
                  locked: false,
                  exporting: false,
                  confirmDownload: false,
                  onSave: (_) => saves++,
                  onShare: (_) {},
                  onBack: () {},
                  onMarkSaved: () {}),
            )));
        await tester.runAsync(() => precacheImage(
            MemoryImage(bytes), tester.element(find.byType(ResultsStudio))));
        await tester.pumpAndSettle();
        expect(tester.takeException(), isNull);
        expect(find.byType(PhotoComparison), findsOneWidget);
        expect(find.text('Save PNG').hitTestable(), findsOneWidget);
        await tester.tap(find.text('Save PNG'));
        expect(saves, 1);
        await tester.ensureVisible(find.widgetWithText(ChoiceChip, 'Cloaked'));
        await tester.tap(find.widgetWithText(ChoiceChip, 'Cloaked'));
        await tester.pumpAndSettle();
        expect(find.byType(PhotoComparison), findsNothing);
        await tester.ensureVisible(find.byTooltip('Zoom in'));
        await tester.tap(find.byTooltip('Zoom in'));
        await tester.pumpAndSettle();
        expect(find.text('1.5x'), findsOneWidget);
        await tester.tap(find.text('Reset view'));
        await tester.pumpAndSettle();
        expect(find.text('1.0x'), findsOneWidget);
        await tester.ensureVisible(find.widgetWithText(ChoiceChip, 'Compare'));
        await tester.tap(find.widgetWithText(ChoiceChip, 'Compare'));
        await tester.pumpAndSettle();
        await tester.ensureVisible(find.text('What do the scores mean?'));
        await tester.tap(find.text('What do the scores mean?'));
        await tester.pumpAndSettle();
        expect(find.textContaining('do not prove protection'), findsOneWidget);
        expect(find.text('Save PNG').hitTestable(), findsOneWidget);
        expect(tester.takeException(), isNull);
        await tester.tap(find.text('What do the scores mean?'));
        await tester.ensureVisible(find.text('Your photo. Cloak applied.'));
        await tester.pumpAndSettle();
        await tester.runAsync(() async {
          final boundary =
              key.currentContext!.findRenderObject()! as RenderRepaintBoundary;
          final image = await boundary.toImage();
          final png = await image.toByteData(format: ui.ImageByteFormat.png);
          final directory = Directory('build/results-studio-preview')
            ..createSync(recursive: true);
          File('${directory.path}/${width.toInt()}_${brightness.name}.png')
              .writeAsBytesSync(png!.buffer.asUint8List());
          image.dispose();
        });
      });
    }
  }
}
