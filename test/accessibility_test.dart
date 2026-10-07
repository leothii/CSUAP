import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:csuap/cloaking_progress.dart';
import 'package:csuap/lab_processing.dart';
import 'package:csuap/pixel_theme.dart';
import 'package:csuap/result_insights.dart';

double contrast(Color a, Color b) {
  final x = a.computeLuminance(), y = b.computeLuminance();
  return ((x > y ? x : y) + .05) / ((x > y ? y : x) + .05);
}

void main() {
  test('chart marks and focus outlines contrast with both themes', () {
    for (final brightness in Brightness.values) {
      final colors = PixelPalette(brightness);
      for (final mark in [colors.chartGreen, colors.chartGold]) {
        expect(contrast(mark, colors.surface), greaterThanOrEqualTo(3));
      }
      expect(contrast(colors.muted, colors.surface), greaterThanOrEqualTo(4.5));
      final style = pixelTheme(brightness).filledButtonTheme.style!;
      final focused = style.side!.resolve({WidgetState.focused})!;
      expect(focused.width, 3);
      expect(contrast(focused.color, colors.gold), greaterThanOrEqualTo(3));
    }
  });

  testWidgets(
      'progress has one announcement and no spinner with reduced motion',
      (tester) async {
    final semantics = tester.ensureSemantics();
    await tester.pumpWidget(MaterialApp(
        home: MediaQuery(
      data: const MediaQueryData(disableAnimations: true),
      child: const Scaffold(body: CloakingProgress(completedStages: 1)),
    )));
    expect(find.byType(CircularProgressIndicator), findsNothing);
    expect(
        find.bySemanticsLabel(
            'Applying cloak. 33 percent. 1 of 3 stages complete.'),
        findsOneWidget);
    expect(find.bySemanticsLabel('Cloaking progress'), findsNothing);
    semantics.dispose();
  });

  testWidgets(
      'large text results have keyboard buttons and reduced motion at 320 pixels',
      (tester) async {
    tester.view.physicalSize = const Size(320, 1000);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    final bytes =
        Uint8List.fromList(img.encodePng(img.Image(width: 8, height: 8)));
    await tester.pumpWidget(MaterialApp(
      theme: pixelTheme(Brightness.light, true),
      home: MediaQuery(
          data: const MediaQueryData(
              disableAnimations: true, textScaler: TextScaler.linear(2)),
          child: Scaffold(
              body: SingleChildScrollView(
                  child: ResultInsights(
            result: LabResult(bytes, bytes, 8, 8, 1, double.infinity),
            alpha: 0,
            image: const Text('Zoom image'),
          )))),
    ));
    await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 300)));
    await tester.pumpAndSettle();
    for (final title in [
      'Pixel changes, page 2 of 4',
      'Output details, page 3 of 4',
      'Zoom in, page 4 of 4'
    ]) {
      final button = find.byTooltip(title);
      await tester.ensureVisible(button);
      await tester.pumpAndSettle();
      final size = tester.getSize(button);
      expect(size.width, greaterThanOrEqualTo(48));
      expect(size.height, greaterThanOrEqualTo(48));
      final icon =
          find.descendant(of: button, matching: find.byType(AnimatedContainer));
      Focus.of(tester.element(icon)).requestFocus();
      await tester.pump();
      await tester.sendKeyEvent(LogicalKeyboardKey.enter);
      await tester.pumpAndSettle();
      expect(tester.takeException(), isNull);
    }
    expect(find.text('Zoom image'), findsOneWidget);
    expect(find.byType(AnimatedSize), findsNothing);
  });
}
