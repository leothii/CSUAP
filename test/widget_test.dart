import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:csuap/main.dart';
import 'package:csuap/pixel_theme.dart';
import 'package:image/image.dart' as img;

void main() {
  testWidgets('character selection supports swipes, keys and wraparound',
      (tester) async {
    await tester.pumpWidget(
        MaterialApp(theme: pixelTheme(), home: const CreditsScreen()));
    await tester.pumpAndSettle();
    final card = find.byKey(const ValueKey('character-card'));
    await tester.ensureVisible(card);
    await tester.pumpAndSettle();
    await tester.drag(card, const Offset(-200, 0));
    await tester.pumpAndSettle();
    expect(find.text('EVALUATION & ANALYSIS'), findsOneWidget);
    await tester.drag(card, const Offset(200, 0));
    await tester.pumpAndSettle();
    expect(find.text('MODEL DEVELOPMENT'), findsOneWidget);
    await tester.sendKeyEvent(LogicalKeyboardKey.arrowLeft);
    await tester.pumpAndSettle();
    expect(find.text('RESEARCH GUIDANCE'), findsOneWidget);
    await tester.sendKeyEvent(LogicalKeyboardKey.arrowLeft);
    await tester.pumpAndSettle();
    expect(find.text('RESEARCH SUPPORT'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });
  testWidgets('guide explores intensity, explains quality, and opens lab',
      (tester) async {
    await tester.pumpWidget(
        MaterialApp(theme: pixelTheme(), home: const GuideScreen()));
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.byType(Switch));
    await tester.pumpAndSettle();
    await tester.tap(find.byType(Switch));
    await tester.pumpAndSettle();
    expect(tester.widget<Switch>(find.byType(Switch)).value, isTrue);
    await tester.ensureVisible(find.text('Next step'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Next step'));
    await tester.pumpAndSettle();
    expect(find.text('SSIM  0.9699'), findsOneWidget);
    final slider = find.byKey(const ValueKey('guide-intensity'));
    await tester.ensureVisible(slider);
    await tester.pumpAndSettle();
    await tester.drag(slider, const Offset(600, 0));
    await tester.pumpAndSettle();
    expect(find.text('SSIM  0.8967'), findsOneWidget);
    expect(find.text('PSNR  28.75 dB'), findsOneWidget);
    await tester.ensureVisible(find.text('Next step'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Next step'));
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.text('Not yet'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Not yet'));
    await tester.pumpAndSettle();
    expect(find.textContaining('Exactly. Quality passed'), findsOneWidget);
    await tester.ensureVisible(find.text('Try the photo lab'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Try the photo lab'));
    await tester.pumpAndSettle();
    expect(find.byType(ProtectionScreen), findsOneWidget);
    expect(tester.takeException(), isNull);
  });

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
    await tester.scrollUntilVisible(find.text('Resources'), 200);
    await tester.pumpAndSettle();
    await tester.tap(find.text('Resources'));
    await tester.pumpAndSettle();
    await tester.scrollUntilVisible(find.text('Research paper'), 200);
    await tester.pumpAndSettle();
    await tester.tap(find.text('Research paper'));
    await tester.pumpAndSettle();
    expect(find.text('Link pending'), findsOneWidget);
    await tester.scrollUntilVisible(find.text('GitHub repository'), 200);
    await tester.pumpAndSettle();
    await tester.tap(find.text('GitHub repository'));
    await tester.pumpAndSettle();
    expect(find.text('Open resource'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });

  testWidgets('team supports tap selection', (tester) async {
    await tester.pumpWidget(const MaterialApp(home: CreditsScreen()));
    await tester.pumpAndSettle();
    await tester.scrollUntilVisible(find.text('Adviser'), 200);
    await tester.pumpAndSettle();
    await tester.tap(find.text('Adviser'));
    await tester.pumpAndSettle();
    expect(find.text('RESEARCH GUIDANCE'), findsOneWidget);
    expect(find.text('PORTRAIT TO COME'), findsOneWidget);
  });

  testWidgets('research explores metrics and pipeline stages', (tester) async {
    await tester
        .pumpWidget(MaterialApp(theme: pixelTheme(), home: const DocsScreen()));
    await tester.pumpAndSettle();
    await tester.scrollUntilVisible(find.text('The evidence'), 200);
    await tester.pumpAndSettle();
    await tester.tap(find.text('The evidence'));
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.text('PSNR'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('PSNR'));
    await tester.pumpAndSettle();
    expect(find.text('α 0.5 · 35.00 dB'), findsOneWidget);
    final last = find.byKey(const ValueKey('research-alpha-5'));
    await tester.ensureVisible(last);
    await tester.pumpAndSettle();
    await tester.tap(last);
    await tester.pumpAndSettle();
    await tester.scrollUntilVisible(
        find.text('Both means fall below the quality targets.'), 200);
    expect(find.text('Both means fall below the quality targets.'),
        findsOneWidget);
    await tester.scrollUntilVisible(find.text('The method'), -300);
    await tester.scrollUntilVisible(find.text('The method'), 200);
    await tester.pumpAndSettle();
    await tester.tap(find.text('The method'));
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.text('03 / APPLY'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('03 / APPLY'));
    await tester.pumpAndSettle();
    expect(find.text('Reuse the pattern locally.'), findsOneWidget);
    expect(tester.takeException(), isNull);
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
        if (page is DocsScreen) {
          for (var section = 1; section < 4; section++) {
            final chip = find.byKey(ValueKey('research-section-$section'));
            await tester.scrollUntilVisible(chip, -300);
            await tester.pumpAndSettle();
            await tester.tap(chip);
            await tester.pumpAndSettle();
            await tester.drag(
                find.byType(ListView).first, const Offset(0, -450));
            await tester.pumpAndSettle();
            expect(tester.takeException(), isNull,
                reason: 'Research section $section at $width');
          }
        }
        if (page is GuideScreen) {
          for (var step = 1; step < 3; step++) {
            final chip = find.byKey(ValueKey('guide-step-$step'));
            await tester.ensureVisible(chip);
            await tester.tap(chip);
            await tester.pumpAndSettle();
            expect(tester.takeException(), isNull,
                reason: 'Guide step $step at $width');
          }
        }
      }
    });
  }
}
