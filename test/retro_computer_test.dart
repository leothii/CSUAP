import 'package:csuap/main.dart';
import 'package:csuap/pixel_theme.dart';
import 'package:csuap/retro_computer.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  for (final size in [const Size(320, 568), const Size(390, 844)]) {
    testWidgets('portrait $size shows PC and all navigation without scrolling',
        (tester) async {
      tester.view.physicalSize = size;
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      await tester.pumpWidget(
          MaterialApp(theme: pixelTheme(), home: const MainMenuScreen()));
      await tester.pumpAndSettle();
      expect(find.byType(RetroComputer), findsOneWidget);
      for (final target in [
        find.byType(RetroComputer),
        find.text('Start'),
        find.text('Field guide'),
        find.text('Research'),
        find.text('Credits')
      ]) {
        final rect = tester.getRect(target);
        expect(rect.top, greaterThanOrEqualTo(0));
        expect(rect.bottom, lessThanOrEqualTo(size.height));
      }
      await tester.tap(find.text('Preview cloak'));
      await tester.pumpAndSettle();
      expect(find.text('Show original'), findsOneWidget);
      expect(tester.takeException(), isNull);
    });
  }
  testWidgets('scene toggles with reduced motion and preserves navigation',
      (tester) async {
    tester.view.physicalSize = const Size(1280, 900);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    await tester.pumpWidget(MaterialApp(
        theme: pixelTheme(),
        home: const MediaQuery(
            data: MediaQueryData(disableAnimations: true),
            child: MainMenuScreen())));
    await tester.pumpAndSettle();
    expect(find.byType(RetroComputer), findsOneWidget);
    await tester.tap(find.text('Preview cloak'));
    await tester.pumpAndSettle();
    expect(find.text('Show original'), findsOneWidget);
    await tester.tap(find.text('Show original'));
    await tester.pumpAndSettle();
    expect(find.text('Preview cloak'), findsOneWidget);
    await tester.tap(find.text('Start'));
    await tester.pumpAndSettle();
    expect(find.byType(ProtectionScreen), findsOneWidget);
    expect(tester.takeException(), isNull);
  });

  testWidgets('narrow home keeps menu first and scene scrollable at large text',
      (tester) async {
    tester.view.physicalSize = const Size(320, 640);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    await tester.pumpWidget(MaterialApp(
        theme: pixelTheme(),
        home: const MediaQuery(
            data: MediaQueryData(textScaler: TextScaler.linear(1.5)),
            child: MainMenuScreen())));
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.text('Preview cloak'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Preview cloak'));
    await tester.pumpAndSettle();
    expect(find.text('Show original'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });
}
