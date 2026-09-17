import 'package:csuap/pixel_theme.dart';
import 'package:csuap/intro_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

class _RouteObserver extends NavigatorObserver {
  int replacements = 0;
  @override
  void didReplace({Route<dynamic>? newRoute, Route<dynamic>? oldRoute}) {
    replacements++;
  }
}

Widget _app({_RouteObserver? observer, bool reducedMotion = false}) =>
    MaterialApp(
      theme: pixelTheme(),
      navigatorObservers: [if (observer != null) observer],
      builder: (context, child) => MediaQuery(
        data: MediaQuery.of(context).copyWith(disableAnimations: reducedMotion),
        child: child!,
      ),
      home: IntroScreen(
          menuBuilder: (_) => const Scaffold(body: Text('Menu destination'))),
    );

void main() {
  testWidgets('intro completes its timeline and replaces itself with a fade',
      (tester) async {
    await tester.pumpWidget(_app());
    await tester.pump();
    expect(find.byType(IntroScreen), findsOneWidget);
    expect(find.text('Menu destination'), findsNothing);
    await tester.pump(const Duration(milliseconds: 2600));
    expect(find.text('Menu destination'), findsNothing);
    await tester.pump(const Duration(milliseconds: 100));
    await tester.pumpAndSettle();
    expect(find.text('Menu destination'), findsOneWidget);
    expect(find.byType(IntroScreen), findsNothing);
    expect(Navigator.of(tester.element(find.text('Menu destination'))).canPop(),
        isFalse);
  });

  testWidgets(
      'tapping empty space skips immediately and completion cannot navigate twice',
      (tester) async {
    final observer = _RouteObserver();
    await tester.pumpWidget(_app(observer: observer));
    await tester.tapAt(const Offset(5, 5));
    await tester.pump();
    expect(find.text('Menu destination'), findsOneWidget);
    await tester.pumpAndSettle();
    await tester.pump(const Duration(seconds: 3));
    expect(observer.replacements, 1);
    expect(find.byType(IntroScreen), findsNothing);
  });

  testWidgets('Enter skips the intro for keyboard users', (tester) async {
    await tester.pumpWidget(_app());
    await tester.pump();
    await tester.sendKeyEvent(LogicalKeyboardKey.enter);
    await tester.pumpAndSettle();
    expect(find.text('Menu destination'), findsOneWidget);
  });

  testWidgets('reduced motion bypasses the animation', (tester) async {
    await tester.pumpWidget(_app(reducedMotion: true));
    await tester.pumpAndSettle();
    expect(find.text('Menu destination'), findsOneWidget);
    expect(find.byType(IntroScreen), findsNothing);
  });

  testWidgets('disposing mid-sequence leaves no late navigation',
      (tester) async {
    await tester.pumpWidget(_app());
    await tester.pump(const Duration(milliseconds: 500));
    await tester.pumpWidget(const SizedBox());
    await tester.pump(const Duration(seconds: 4));
    expect(tester.takeException(), isNull);
  });
}
