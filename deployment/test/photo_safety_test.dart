import 'package:shared_preferences/shared_preferences.dart';
import 'dart:async';
import 'dart:io';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:image_picker/image_picker.dart';
import 'package:csuap/lab_processing.dart';
import 'package:csuap/main.dart';
import 'package:csuap/photo_processor.dart';
import 'package:csuap/pixel_theme.dart';

class _ControlledProcessor extends PhotoProcessor {
  final jobs = <Completer<LabResult>>[];
  int cancellations = 0;
  @override
  Future<CloakPreview> prepare(Uint8List bytes, Float32List vector) async =>
      prepareCloakPreview((bytes: bytes, vector: vector));
  @override
  Future<LabResult> generate(
    Uint8List bytes,
    Float32List vector,
    double alpha, {
    required void Function(int) onStage,
  }) {
    final job = Completer<LabResult>();
    jobs.add(job);
    onStage(1);
    return job.future;
  }

  @override
  void cancelGeneration() => cancellations++;
  @override
  void dispose() {
    for (final job in jobs) {
      if (!job.isCompleted) job.completeError(PhotoProcessingCancelled());
    }
    super.dispose();
  }
}

Future<void> waitFor(WidgetTester tester, Finder finder) async {
  for (var i = 0; i < 150 && finder.evaluate().isEmpty; i++) {
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 20)),
    );
    await tester.pump();
  }
  expect(finder, findsOneWidget);
}

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));
  final bytes = Uint8List.fromList(
    img.encodePng(img.Image(width: 16, height: 16)),
  );
  final output = LabResult(bytes, bytes, 16, 16, 1, double.infinity);

  Future<_ControlledProcessor> openLab(WidgetTester tester) async {
    tester.view.physicalSize = const Size(1000, 3000);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    final processor = _ControlledProcessor();
    await tester.pumpWidget(
      MaterialApp(
        theme: pixelTheme(),
        home: Builder(
          builder: (context) => Scaffold(
            body: TextButton(
              onPressed: () => openPage(
                context,
                ProtectionScreen(
                  photoProcessor: processor,
                  photoPicker: (_) async =>
                      XFile.fromData(bytes, name: 'photo.png'),
                ),
              ),
              child: const Text('Open lab'),
            ),
          ),
        ),
      ),
    );
    await tester.tap(find.text('Open lab'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Choose photo'));
    await tester.pump(const Duration(milliseconds: 350));
    await tester.tap(find.byType(Checkbox));
    await tester.pump();
    await tester.tap(find.text('Agree & continue'));
    await waitFor(tester, find.textContaining('Live preview'));
    await tester.ensureVisible(find.text('Apply cloak'));
    await tester.pumpAndSettle();
    return processor;
  }

  Future<void> finish(
    WidgetTester tester,
    _ControlledProcessor processor,
  ) async {
    await tester.tap(find.text('Apply cloak'));
    await tester.pump();
    processor.jobs.last.complete(output);
    await waitFor(tester, find.text('Unsaved result'));
    await tester.pumpAndSettle();
  }

  testWidgets(
    'cancel keeps the original and ignores a late result during a retry',
    (tester) async {
      final processor = await openLab(tester);
      await tester.tap(find.text('Apply cloak'));
      await tester.pump();
      await tester.tap(find.text('Cancel cloaking'));
      await tester.pump();
      expect(processor.cancellations, 1);
      expect(find.text('Save PNG'), findsNothing);
      expect(find.text('Change photo'), findsOneWidget);
      await tester.tap(find.text('Apply cloak'));
      await tester.pump();
      processor.jobs.first.complete(output);
      await tester.pump();
      expect(find.text('Cancel cloaking'), findsOneWidget);
      expect(find.text('Save PNG'), findsNothing);
      processor.jobs.last.complete(output);
      await waitFor(tester, find.text('Save PNG'));
      expect(tester.takeException(), isNull);
    },
  );

  testWidgets('results back actions protect unsaved output and return to lab', (
    tester,
  ) async {
    final processor = await openLab(tester);
    await finish(tester, processor);
    await tester.ensureVisible(find.text('Back to photo lab'));
    await tester.tap(find.text('Back to photo lab'));
    await tester.pumpAndSettle();
    expect(find.text('Discard unsaved result?'), findsOneWidget);
    await tester.tap(find.text('Keep working'));
    await tester.pumpAndSettle();
    expect(find.text('Unsaved result'), findsOneWidget);
    await tester.pageBack();
    await tester.pumpAndSettle();
    expect(find.text('Discard unsaved result?'), findsOneWidget);
    await tester.tap(find.text('Keep working'));
    await tester.pumpAndSettle();
    expect(find.byType(CloakResultsScreen), findsOneWidget);
    await tester.pageBack();
    await tester.pumpAndSettle();
    await tester.tap(find.text('Discard result'));
    await tester.pumpAndSettle();
    expect(find.byType(CloakResultsScreen), findsNothing);
    expect(find.byType(ProtectionScreen), findsOneWidget);
    expect(tester.takeException(), isNull);
  });

  testWidgets(
    'leaving during processing requires confirmation and stops the job',
    (tester) async {
      final processor = await openLab(tester);
      await tester.tap(find.text('Apply cloak'));
      await tester.pump();
      await tester.pageBack();
      await tester.pump(const Duration(milliseconds: 350));
      expect(find.text('Stop cloaking and leave?'), findsOneWidget);
      await tester.tap(find.text('Keep working'));
      await tester.pump(const Duration(milliseconds: 350));
      expect(processor.cancellations, 0);
      await tester.pageBack();
      await tester.pump(const Duration(milliseconds: 350));
      await tester.tap(find.text('Stop & leave'));
      await tester.pumpAndSettle();
      expect(processor.cancellations, greaterThanOrEqualTo(1));
      expect(find.byType(ProtectionScreen), findsNothing);
      expect(tester.takeException(), isNull);
    },
  );

  testWidgets(
    'cancelled or failed saves remain unsaved; successful save clears guard',
    (tester) async {
      final directory = Directory.systemTemp.createTempSync('cloak-save-test-');
      addTearDown(() {
        final saved = File('${directory.path}/output.png');
        if (saved.existsSync()) saved.deleteSync();
        directory.deleteSync();
      });
      const channel = MethodChannel('plugins.flutter.io/file_selector');
      String? destination;
      var fail = false;
      tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(channel, (
        _,
      ) async {
        if (fail) throw PlatformException(code: 'save-failed');
        return destination;
      });
      addTearDown(
        () => tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          channel,
          null,
        ),
      );
      final processor = await openLab(tester);
      await finish(tester, processor);
      await tester.ensureVisible(find.text('Save PNG'));
      await tester.tap(find.text('Save PNG'));
      await tester.pumpAndSettle();
      expect(find.text('Unsaved result'), findsOneWidget);
      fail = true;
      await tester.tap(find.text('Save PNG'));
      await tester.pumpAndSettle();
      expect(find.text('Unsaved result'), findsOneWidget);
      fail = false;
      destination = '${directory.path}/output.png';
      await tester.tap(find.text('Save PNG'));
      await waitFor(tester, find.text('PNG saved'));
      await tester.pumpAndSettle();
      expect(File(destination).readAsBytesSync(), orderedEquals(bytes));
      await tester.pageBack();
      await tester.pumpAndSettle();
      expect(find.text('Discard unsaved result?'), findsNothing);
      expect(find.byType(ProtectionScreen), findsOneWidget);
      expect(tester.takeException(), isNull);
    },
    variant: TargetPlatformVariant.only(TargetPlatform.windows),
  );
}
