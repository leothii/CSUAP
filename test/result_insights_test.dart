import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:csuap/lab_processing.dart';
import 'package:csuap/photo_terms.dart';
import 'package:csuap/pixel_theme.dart';
import 'package:csuap/result_insights.dart';

void main() {
  test('histogram bins measure actual RGB differences including boundaries',
      () {
    final clean = img.Image(width: 6, height: 1);
    final output = img.Image(width: 6, height: 1);
    const changes = [0, 2, 5, 10, 20, 255];
    for (var x = 0; x < 6; x++) {
      output.setPixelRgb(x, 0, changes[x], changes[x], changes[x]);
    }
    expect(
        pixelChangeHistogram((
          clean: Uint8List.fromList(img.encodePng(clean)),
          output: Uint8List.fromList(img.encodePng(output))
        )),
        [1, 1, 1, 1, 1, 1]);
  });

  testWidgets('agreement requires opt in and cancel returns false',
      (tester) async {
    bool? accepted;
    await tester.pumpWidget(MaterialApp(
        theme: pixelTheme(),
        home: Builder(
            builder: (context) => Scaffold(
                body: TextButton(
                    onPressed: () async {
                      accepted = await confirmPhotoTerms(context);
                    },
                    child: const Text('Open terms'))))));
    await tester.tap(find.text('Open terms'));
    await tester.pumpAndSettle();
    expect(
        tester
            .widget<FilledButton>(
                find.widgetWithText(FilledButton, 'Agree & continue'))
            .onPressed,
        isNull);
    await tester.tap(find.text('Cancel'));
    await tester.pumpAndSettle();
    expect(accepted, false);
    await tester.tap(find.text('Open terms'));
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.byType(Checkbox));
    await tester.tap(find.byType(Checkbox));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Agree & continue'));
    await tester.pumpAndSettle();
    expect(accepted, true);
  });

  testWidgets('mobile insights support swipes and arrows without overflow',
      (tester) async {
    tester.view.physicalSize = const Size(360, 850);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    final bytes =
        Uint8List.fromList(img.encodePng(img.Image(width: 8, height: 8)));
    await tester.pumpWidget(MaterialApp(
        theme: pixelTheme(Brightness.dark),
        home: Scaffold(
            body: SingleChildScrollView(
                child: ResultInsights(
                    result: LabResult(bytes, bytes, 8, 8, 1, double.infinity),
                    alpha: 0,
                    image: const Text('Zoom image'))))));
    await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 300)));
    await tester.pumpAndSettle();
    await tester.drag(
        find.byKey(const ValueKey('result-insights')), const Offset(-300, 0));
    await tester.pumpAndSettle();
    expect(find.text('Where did pixels change?'), findsOneWidget);
    expect(find.text('100.0%'), findsOneWidget);
    await tester.tap(find.byTooltip('Next insight'));
    await tester.pumpAndSettle();
    expect(find.text('AI protection · Not measured'), findsOneWidget);
    await tester.tap(find.byTooltip('Next insight'));
    await tester.pumpAndSettle();
    expect(find.text('Zoom image'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });
}
