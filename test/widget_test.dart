import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:csuap/main.dart';
import 'package:csuap/pixel_theme.dart';
import 'package:image/image.dart' as img;

void main() {
  testWidgets('comparison responds to dragging and slider controls',
      (tester) async {
    final bytes =
        Uint8List.fromList(img.encodePng(img.Image(width: 12, height: 10)));
    await tester.pumpWidget(MaterialApp(
        theme: pixelTheme(),
        home: Scaffold(
          body: PhotoComparison(clean: bytes, output: bytes),
        )));
    await tester.pumpAndSettle();
    expect(tester.widget<Slider>(find.byType(Slider)).value, .5);
    await tester.dragFrom(const Offset(400, 160), const Offset(150, 0));
    await tester.pump();
    expect(tester.widget<Slider>(find.byType(Slider)).value, greaterThan(.5));
    await tester.tap(find.byType(Slider));
    await tester.pump();
    expect(tester.widget<Slider>(find.byType(Slider)).value, closeTo(.5, .02));
    expect(tester.takeException(), isNull);
  });
  testWidgets('title menu selects with arrow keys and opens the field guide',
      (tester) async {
    await tester.pumpWidget(
        MaterialApp(theme: pixelTheme(), home: const MainMenuScreen()));
    await tester.pumpAndSettle();
    expect(find.text('Choose a photo and apply a cloak.'), findsOneWidget);
    await tester.sendKeyEvent(LogicalKeyboardKey.arrowDown);
    await tester.pump();
    expect(find.text('Learn the steps, models, and metrics.'), findsOneWidget);
    await tester.sendKeyEvent(LogicalKeyboardKey.enter);
    await tester.pumpAndSettle();
    expect(find.byType(GuideScreen), findsOneWidget);
  });

  testWidgets('research menu option opens the existing research screen',
      (tester) async {
    await tester.pumpWidget(
        MaterialApp(theme: pixelTheme(), home: const MainMenuScreen()));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Research'));
    await tester.pumpAndSettle();
    expect(find.byType(DocsScreen), findsOneWidget);
  });
  testWidgets(
      'menu routes into the lab with export unavailable before generation',
      (tester) async {
    await tester.pumpWidget(const CsuapApp());
    await tester.pumpAndSettle();
    expect(find.text('Start'), findsOneWidget);
    await tester.tap(find.text('Start'));
    await tester.pumpAndSettle();
    expect(find.text('Choose photo'), findsOneWidget);
    expect(find.text('Save PNG'), findsNothing);
    expect(tester.takeException(), isNull);
  });

  testWidgets('research nodes reveal resources and pending paper',
      (tester) async {
    await tester.pumpWidget(const MaterialApp(home: DocsScreen()));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Research paper'));
    await tester.pumpAndSettle();
    expect(find.text('Link pending'), findsOneWidget);
    await tester.tap(find.text('GitHub repository'));
    await tester.pumpAndSettle();
    expect(find.text('Open resource'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });

  testWidgets('team supports tap selection', (tester) async {
    await tester.pumpWidget(const MaterialApp(home: CreditsScreen()));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Adviser'));
    await tester.pumpAndSettle();
    expect(find.text('RESEARCH GUIDANCE'), findsOneWidget);
    expect(find.text('PORTRAIT TO COME'), findsOneWidget);
  });

  for (final width in [320.0, 590.0, 1100.0]) {
    testWidgets('screens fit width $width with enlarged text', (tester) async {
      tester.view.physicalSize = Size(width, 850);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      for (final page in [
        const MainMenuScreen(),
        const DocsScreen(),
        const CreditsScreen(),
        const GuideScreen(),
        const ProtectionScreen()
      ]) {
        await tester.pumpWidget(MaterialApp(
            theme: pixelTheme(),
            home: MediaQuery(
                data: MediaQueryData(
                    size: Size(width, 850),
                    textScaler: const TextScaler.linear(1.5),
                    disableAnimations: true),
                child: page)));
        await tester.pumpAndSettle();
        expect(tester.takeException(), isNull, reason: '$page at $width');
      }
    });
  }
}
