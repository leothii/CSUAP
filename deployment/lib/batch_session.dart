import 'package:flutter/foundation.dart';
import 'package:file_selector/file_selector.dart';
import 'image_input.dart';
import 'lab_processing.dart';
import 'photo_processor.dart';

const maxBatchPhotos = 10;
const maxBatchResultBytes = 192 * 1024 * 1024;

class BatchPhoto {
  BatchPhoto(this.file);
  final XFile file;
  LabResult? result;
  String? error;
  bool saved = false;
  int percent = 0;
  int elapsedMs = 0;
}

class BatchSession extends ChangeNotifier {
  BatchSession({PhotoProcessor? processor})
    : processor = processor ?? PhotoProcessor();
  final PhotoProcessor processor;
  final photos = <BatchPhoto>[];
  bool busy = false;
  bool _disposed = false;
  int _run = 0;
  int activeIndex = -1;
  int percent = 0;
  double appliedAlpha = .5;
  bool get unsaved => photos.any((p) => p.result != null && !p.saved);

  void add(List<XFile> files) {
    if (busy) throw StateError('Wait for the current batch.');
    if (photos.length + files.length > maxBatchPhotos) {
      throw const FormatException('Choose up to 10 photos in one batch.');
    }
    photos.addAll(files.map(BatchPhoto.new));
    notifyListeners();
  }

  void remove(BatchPhoto photo) {
    if (busy) return;
    photos.remove(photo);
    notifyListeners();
  }

  void markSaved(BatchPhoto photo) {
    photo.saved = true;
    notifyListeners();
  }

  Future<void> run(Float32List vector, double alpha) async {
    if (busy || photos.isEmpty || _disposed) return;
    final queue = photos.where((p) => p.result == null).toList();
    if (queue.isEmpty) return;
    // Retrying unfinished photos uses the same intensity as the retained results.
    if (!photos.any((p) => p.result != null)) appliedAlpha = alpha;
    final run = ++_run;
    busy = true;
    percent = 1;
    notifyListeners();
    var attempted = 0;
    var retainedBytes = photos.fold<int>(
      0,
      (n, p) =>
          n +
          (p.result == null
              ? 0
              : p.result!.clean.length + p.result!.output.length),
    );
    for (final photo in queue) {
      if (run != _run || _disposed) break;
      activeIndex = photos.indexOf(photo);
      photo.error = null;
      photo.percent = 1;
      final watch = Stopwatch()..start();
      processor.onProgress = (value) {
        if (run != _run || _disposed) return;
        photo.percent = value;
        percent = ((attempted * 100 + value) / queue.length).floor().clamp(
          1,
          99,
        );
        notifyListeners();
      };
      notifyListeners();
      try {
        if (await photo.file.length() > maxPhotoBytes) {
          throw const FormatException('Choose a photo smaller than 30 MB.');
        }
        final bytes = await photo.file.readAsBytes();
        if (run != _run || _disposed) break;
        final result = await processor.generate(
          bytes,
          vector,
          appliedAlpha,
          onStage: (_) {},
        );
        if (run != _run || _disposed) break;
        final size = result.clean.length + result.output.length;
        if (retainedBytes + size > maxBatchResultBytes) {
          throw const FormatException(
            'Batch result memory limit reached. Process this photo separately.',
          );
        }
        retainedBytes += size;
        photo.result = result;
        photo.percent = 100;
      } on PhotoProcessingCancelled {
        if (run == _run && !_disposed) {
          photo.error = 'Cancelled. Ready to retry.';
        }
        break;
      } catch (error) {
        if (run != _run || _disposed) break;
        photo.error = error is FormatException
            ? error.message.toString()
            : 'Could not process this photo. Try a PNG or JPEG.';
      } finally {
        watch.stop();
        if (run == _run && !_disposed) {
          photo.elapsedMs = watch.elapsedMilliseconds;
        }
      }
      attempted++;
      percent = (attempted * 100 / queue.length).floor();
      if (!_disposed) notifyListeners();
    }
    if (run == _run && !_disposed) {
      busy = false;
      activeIndex = -1;
      percent = 100;
      notifyListeners();
    }
  }

  void cancel() {
    if (!busy) return;
    _run++;
    processor.cancelGeneration();
    if (activeIndex >= 0) {
      photos[activeIndex].error = 'Cancelled. Ready to retry.';
    }
    busy = false;
    activeIndex = -1;
    notifyListeners();
  }

  @override
  void dispose() {
    _disposed = true;
    _run++;
    processor.dispose();
    super.dispose();
  }
}
