import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:csuap/guest_welcome.dart';
import 'package:csuap/photo_terms.dart';
import 'package:csuap/first_use_tour.dart';
import 'package:csuap/main.dart';
import 'package:csuap/pixel_theme.dart';
import 'package:flutter/services.dart';
import 'package:image/image.dart' as img;
import 'package:image_picker/image_picker.dart';

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));
  Widget welcome() => MaterialApp(
      theme: pixelTheme(),
      home: GuestWelcome(
          menuBuilder: (_) => const Scaffold(body: Text('Guest home'))));

  testWidgets('guest must agree, acceptance survives a new welcome screen',
      (tester) async {
    await tester.pumpWidget(welcome());
    await tester.pumpAndSettle();
    await tester.tap(find.text('Continue as guest'));
    await tester.pumpAndSettle();
    expect(
        tester
            .widget<FilledButton>(
                find.widgetWithText(FilledButton, 'Agree & continue'))
            .onPressed,
        isNull);
    await tester.tap(find.text('Cancel'));
    await tester.pumpAndSettle();
    expect(find.text('Guest home'), findsNothing);
    expect(await photoTermsAccepted(), isFalse);
    await tester.tap(find.text('Continue as guest'));
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.byType(Checkbox));
    await tester.tap(find.byType(Checkbox));
    await tester.pump();
    await tester.tap(find.text('Agree & continue'));
    await tester.pumpAndSettle();
    expect(find.text('Guest home'), findsOneWidget);
    expect(await photoTermsAccepted(), isTrue);
    await tester.pumpWidget(const SizedBox());
    await tester.pumpWidget(welcome());
    await tester.pumpAndSettle();
    expect(find.text('Guest home'), findsOneWidget);
    expect(find.text('Photo use & agreement'), findsNothing);
  });

  testWidgets('previous acceptance bypasses import dialog', (tester) async {
    SharedPreferences.setMockInitialValues({photoTermsPreference: true});
    bool? accepted;
    await tester.pumpWidget(MaterialApp(
        home: Builder(
            builder: (context) => Scaffold(
                body: TextButton(
                    onPressed: () async {
                      accepted = await confirmPhotoTerms(context);
                    },
                    child: const Text('Import'))))));
    await tester.tap(find.text('Import'));
    await tester.pumpAndSettle();
    expect(accepted, isTrue);
    expect(find.byType(AlertDialog), findsNothing);
  });

  testWidgets('welcome fits a narrow screen with enlarged text',
      (tester) async {
    tester.view.physicalSize = const Size(320, 640);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    await tester.pumpWidget(MaterialApp(
        theme: pixelTheme(Brightness.dark),
        builder: (context, child) => MediaQuery(
            data: MediaQuery.of(context)
                .copyWith(textScaler: const TextScaler.linear(1.5)),
            child: child!),
        home: GuestWelcome(menuBuilder: (_) => const SizedBox())));
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.text('Continue as guest'));
    expect(find.text('Continue as guest').hitTestable(), findsOneWidget);
    expect(tester.takeException(), isNull);
  });

  testWidgets('real menu tips highlight controls and complete only once',
      (tester) async {
    SharedPreferences.setMockInitialValues(
        {'onboarding.started': true, photoTermsPreference: true});
    await tester.pumpWidget(
        MaterialApp(theme: pixelTheme(), home: const MainMenuScreen()));
    await tester.pumpAndSettle();
    expect(find.text('Start with a photo'), findsOneWidget);
    await tester.tap(find.text('Next tip'));
    await tester.pumpAndSettle();
    expect(find.text('A guide when you need it'), findsOneWidget);
    await tester.tap(find.text('Got it'));
    await tester.pumpAndSettle();
    expect((await SharedPreferences.getInstance()).getBool('tour.menu.v1'),
        isTrue);
    await tester.pumpWidget(const SizedBox());
    await tester.pumpWidget(
        MaterialApp(theme: pixelTheme(), home: const MainMenuScreen()));
    await tester.pumpAndSettle();
    expect(find.text('Start with a photo'), findsNothing);
    expect(tester.takeException(), isNull);
  });

  testWidgets('skip tips persists without activating highlighted button',
      (tester) async {
    SharedPreferences.setMockInitialValues({'onboarding.started': true});
    final target = GlobalKey();
    var actions = 0;
    await tester.pumpWidget(MaterialApp(
        home: Builder(
            builder: (context) => Scaffold(
                    body: Column(children: [
                  FilledButton(
                      key: target,
                      onPressed: () => actions++,
                      child: const Text('Target')),
                  TextButton(
                      onPressed: () => showFirstUseTour(context, 'skip-test', [
                            TourStop(
                                target, 'Test tip', 'A helpful explanation.')
                          ]),
                      child: const Text('Tour')),
                ])))));
    await tester.tap(find.text('Tour'));
    await tester.pumpAndSettle();
    expect(find.text('Test tip'), findsOneWidget);
    await tester.tap(find.text('Skip tips'));
    await tester.pumpAndSettle();
    expect(actions, 0);
    expect((await SharedPreferences.getInstance()).getBool('tour.skipAll.v1'),
        isTrue);
    await tester.tap(find.text('Tour'));
    await tester.pumpAndSettle();
    expect(find.text('Test tip'), findsNothing);
  });

  testWidgets('contextual photo and save tips follow the actual workflow',
      (tester) async {
    SharedPreferences.setMockInitialValues(
        {'onboarding.started': true, photoTermsPreference: true});
    tester.view.physicalSize = const Size(390, 844);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    final bytes =
        Uint8List.fromList(img.encodePng(img.Image(width: 16, height: 16)));
    await tester.pumpWidget(MaterialApp(
        theme: pixelTheme(),
        home: ProtectionScreen(
            photoPicker: (_) async =>
                XFile.fromData(bytes, name: 'sample.png'))));
    Future<void> waitFor(String text) async {
      for (var i = 0; i < 200 && find.text(text).evaluate().isEmpty; i++) {
        await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 20)));
        await tester.pump(const Duration(milliseconds: 30));
      }
      expect(find.text(text), findsOneWidget);
      await tester.pumpAndSettle();
    }

    await waitFor('Choose your photo');
    await tester.ensureVisible(find.text('Next tip'));
    await tester.tap(find.text('Next tip'));
    await waitFor('Have more than one?');
    await tester.ensureVisible(find.text('Got it'));
    await tester.tap(find.text('Got it'));
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.text('Choose photo'));
    await tester.tap(find.text('Choose photo'));
    await waitFor('Ready to apply?');
    expect(find.text('Photo use & agreement'), findsNothing);
    await tester.ensureVisible(find.text('Got it'));
    await tester.tap(find.text('Got it'));
    await tester.pumpAndSettle();
    await tester.ensureVisible(find.text('Apply cloak'));
    await tester.tap(find.text('Apply cloak'));
    await waitFor('Keep your cloaked copy');
    await tester.ensureVisible(find.text('Got it'));
    await tester.tap(find.text('Got it'));
    await tester.pumpAndSettle();
    final prefs = await SharedPreferences.getInstance();
    for (final id in ['import', 'apply', 'save']) {
      expect(prefs.getBool('tour.$id.v1'), isTrue);
    }
    expect(find.text('Save PNG').hitTestable(), findsOneWidget);
    expect(tester.takeException(), isNull);
  });
}
