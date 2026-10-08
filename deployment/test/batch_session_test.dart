import 'dart:async';
import 'dart:typed_data';
import 'package:archive/archive.dart';
import 'package:file_selector/file_selector.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:csuap/batch_session.dart';
import 'package:csuap/batch_screen.dart';
import 'package:csuap/lab_processing.dart';
import 'package:csuap/photo_processor.dart';

class Controlled extends PhotoProcessor {
  final jobs = <Completer<LabResult>>[];
  @override
  Future<LabResult> generate(Uint8List bytes, Float32List vector, double alpha,
      {required void Function(int) onStage}) {
    final job = Completer<LabResult>();
    jobs.add(job);
    return job.future;
  }
  @override
  void cancelGeneration() {}
}

Future<void> turn() => Future<void>.delayed(Duration.zero);
void main() {
  final bytes = Uint8List.fromList([1, 2, 3]);
  final result = LabResult(bytes, bytes, 1, 1, 1, 99);
  XFile file() => XFile.fromData(bytes, name: 'same.png');
  test('ten photo limit rejects an oversized addition atomically', () {
    final session = BatchSession();
    addTearDown(session.dispose);
    session.add(List.generate(10, (_) => file()));
    expect(() => session.add([file()]), throwsFormatException);
    expect(session.photos.length, 10);
  });
  test('sequential jobs report progress, isolate failures and retry unfinished', () async {
    final processor = Controlled();
    final session = BatchSession(processor: processor)..add([file(), file()]);
    addTearDown(session.dispose);
    final run = session.run(Float32List(0), .5);
    await turn();
    expect(processor.jobs.length, 1);
    processor.onProgress!(50);
    expect(session.percent, 25);
    processor.jobs[0].completeError(const FormatException('Invalid image'));
    await turn();
    expect(processor.jobs.length, 2);
    processor.jobs[1].complete(result);
    await run;
    expect(session.photos.first.error, 'Invalid image');
    expect(session.photos.last.result, result);
    expect(session.percent, 100);
    final retry = session.run(Float32List(0), .9);
    await turn();
    expect(session.appliedAlpha, .5);
    processor.jobs.last.complete(result);
    await retry;
    expect(session.photos.every((p) => p.result != null), isTrue);
    expect(session.unsaved, isTrue);
    for (final p in session.photos) { session.markSaved(p); }
    expect(session.unsaved, isFalse);
  });
  test('cancel preserves completed photos and ignores late results', () async {
    final processor = Controlled();
    final session = BatchSession(processor: processor)..add([file(), file()]);
    addTearDown(session.dispose);
    final run = session.run(Float32List(0), .5);
    await turn();
    processor.jobs.first.complete(result);
    await turn();
    session.cancel();
    processor.jobs.last.complete(result);
    await run;
    expect(session.photos.first.result, result);
    expect(session.photos.last.result, isNull);
    expect(session.busy, isFalse);
  });
  test('ZIP keeps duplicate input names unique and preserves bytes', () {
    final zip = ZipDecoder().decodeBytes(batchZip([
      (name: 'same.jpg', bytes: bytes), (name: 'same.jpg', bytes: bytes)]));
    expect(zip.length, 2);
    expect(zip.files.map((f) => f.name).toSet().length, 2);
    expect(zip.files.first.content, orderedEquals(bytes));
  });
}
