import 'package:csuap/main.dart';
import 'package:csuap/cloaking_steps.dart';
import 'package:csuap/pixel_theme.dart';
import 'package:csuap/theme_settings.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  testWidgets(
      'readable text toggles without leaving the page and survives restart',
      (tester) async {
    await tester.pumpWidget(const AppThemeHost(home: ProtectionScreen()));
    await tester.pumpAndSettle();
    await tester.tap(find.byTooltip('Appearance'));
    await tester.pumpAndSettle();
    await tester.tap(
        find.widgetWithText(CheckedPopupMenuItem<ThemeMode>, 'Readable text'));
    await tester.pumpAndSettle();
    expect(find.byType(ProtectionScreen), findsOneWidget);
    final theme = Theme.of(tester.element(find.byType(ProtectionScreen)));
    expect(theme.textTheme.bodyMedium!.fontFamily, 'Rajdhani');
    expect(theme.textTheme.headlineMedium!.fontFamily, 'PressStart2P');
    expect(
        (await SharedPreferences.getInstance())
            .getBool('appearance.readableText'),
        true);
    await tester.pumpWidget(const SizedBox());
    await tester.pumpWidget(const AppThemeHost(home: ProtectionScreen()));
    await tester.pumpAndSettle();
    expect(
        Theme.of(tester.element(find.byType(ProtectionScreen)))
            .textTheme
            .bodyMedium!
            .fontFamily,
        'Rajdhani');
    await tester.tap(find.byTooltip('Appearance'));
    await tester.pumpAndSettle();
    await tester.tap(
        find.widgetWithText(CheckedPopupMenuItem<ThemeMode>, 'Readable text'));
    await tester.pumpAndSettle();
    expect(
        Theme.of(tester.element(find.byType(ProtectionScreen)))
            .textTheme
            .bodyMedium!
            .fontFamily,
        'VT323');
    expect(tester.takeException(), isNull);
  });

  testWidgets('readable text fits narrow screens with enlarged text',
      (tester) async {
    tester.view.physicalSize = const Size(320, 900);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    for (final screen in [
      const MainMenuScreen(),
      const ProtectionScreen(),
      const GuideScreen(),
      const DocsScreen(),
      const CreditsScreen()
    ]) {
      await tester.pumpWidget(MaterialApp(
        theme: pixelTheme(Brightness.light, true),
        home: MediaQuery(
            data: const MediaQueryData(
                size: Size(320, 900), textScaler: TextScaler.linear(1.5)),
            child: screen),
      ));
      await tester.pumpAndSettle();
      expect(tester.takeException(), isNull);
    }
  });

  testWidgets('theme restores, changes on a nested route, and persists',
      (tester) async {
    SharedPreferences.setMockInitialValues({'appearance.themeMode': 'dark'});
    await tester.pumpWidget(const AppThemeHost(home: MainMenuScreen()));
    await tester.pumpAndSettle();
    expect(Theme.of(tester.element(find.byType(MainMenuScreen))).brightness,
        Brightness.dark);
    await tester.tap(find.text('Start'));
    await tester.pumpAndSettle();
    expect(find.byType(ProtectionScreen), findsOneWidget);
    await tester.tap(find.byTooltip('Appearance'));
    await tester.pumpAndSettle();
    await tester.tap(
        find.widgetWithText(CheckedPopupMenuItem<ThemeMode>, 'Light mode'));
    await tester.pumpAndSettle();
    expect(find.byType(ProtectionScreen), findsOneWidget);
    expect(Theme.of(tester.element(find.byType(ProtectionScreen))).brightness,
        Brightness.light);
    expect(
        (await SharedPreferences.getInstance())
            .getString('appearance.themeMode'),
        'light');
    await tester.pumpWidget(const SizedBox());
    await tester.pumpWidget(const AppThemeHost(home: MainMenuScreen()));
    await tester.pumpAndSettle();
    expect(Theme.of(tester.element(find.byType(MainMenuScreen))).brightness,
        Brightness.light);
    expect(tester.takeException(), isNull);
  });

  testWidgets(
      'system theme follows device brightness; explicit light overrides it',
      (tester) async {
    tester.platformDispatcher.platformBrightnessTestValue = Brightness.dark;
    addTearDown(tester.platformDispatcher.clearPlatformBrightnessTestValue);
    await tester.pumpWidget(const AppThemeHost(home: MainMenuScreen()));
    await tester.pumpAndSettle();
    expect(Theme.of(tester.element(find.byType(MainMenuScreen))).brightness,
        Brightness.dark);
    await tester.tap(find.byTooltip('Appearance'));
    await tester.pumpAndSettle();
    await tester.tap(
        find.widgetWithText(CheckedPopupMenuItem<ThemeMode>, 'Light mode'));
    await tester.pumpAndSettle();
    expect(Theme.of(tester.element(find.byType(MainMenuScreen))).brightness,
        Brightness.light);
    await tester.tap(find.byTooltip('Appearance'));
    await tester.pumpAndSettle();
    await tester.tap(
        find.widgetWithText(CheckedPopupMenuItem<ThemeMode>, 'Follow system'));
    await tester.pumpAndSettle();
    expect(Theme.of(tester.element(find.byType(MainMenuScreen))).brightness,
        Brightness.dark);
    tester.platformDispatcher.platformBrightnessTestValue = Brightness.light;
    await tester.pumpAndSettle();
    expect(Theme.of(tester.element(find.byType(MainMenuScreen))).brightness,
        Brightness.light);
  });

  for (final width in [320.0, 590.0, 1100.0]) {
    testWidgets('dark screens and large step titles fit width $width',
        (tester) async {
      tester.view.physicalSize = Size(width, 900);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      for (final screen in [
        const MainMenuScreen(),
        const ProtectionScreen(),
        const GuideScreen(),
        const DocsScreen(),
        const CreditsScreen()
      ]) {
        await tester.pumpWidget(MaterialApp(
            theme: pixelTheme(Brightness.dark),
            home: MediaQuery(
                data: MediaQueryData(
                    size: Size(width, 900),
                    textScaler: const TextScaler.linear(1.5)),
                child: screen)));
        await tester.pumpAndSettle();
        expect(tester.takeException(), isNull);
      }
      for (var current = 0; current < 3; current++) {
        await tester.pumpWidget(MaterialApp(
            theme: pixelTheme(Brightness.dark),
            home: Scaffold(body: CloakingSteps(currentStep: current))));
        await tester.pumpAndSettle();
        expect(find.text('STEP ${current + 1}'), findsOneWidget);
        final selected = tester
            .widgetList<Semantics>(find.byType(Semantics))
            .where((widget) => widget.properties.selected == true);
        expect(
            selected.single.properties.label, 'Step ${current + 1}, current');
        expect(tester.takeException(), isNull);
      }
    });
  }
}
