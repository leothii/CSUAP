// This is a basic Flutter widget test.
//
// To perform an interaction with the widget tree, read the widget tree, or
// verify that values appear in the widget tree.

// Removed unused Material import
import 'package:flutter_test/flutter_test.dart';

import 'package:csuap/main.dart';

void main() {
  testWidgets('protection screen renders', (WidgetTester tester) async {
    await tester.pumpWidget(const CsuapApp());

    expect(find.text('shield.'), findsOneWidget);
    expect(find.text('New'), findsOneWidget);
    expect(find.text('Docs'), findsOneWidget);
    expect(find.text('Credits'), findsOneWidget);
  });
}
