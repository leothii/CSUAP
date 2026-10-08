import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'package:image/image.dart' as img;
import 'package:csuap/progressive_cloak.dart';
import 'package:csuap/perturbation_protection.dart';

void main(List<String> args) {
  final width = int.parse(args[0]), height = int.parse(args[1]);
  final count = int.parse(args[2]);
  final vector = loadPerturbationAsset(File('assets/cs_uap_v_f32_hwc.bin').readAsBytesSync());
  final photo = img.Image(width: width, height: height);
  for (final p in photo) {
    p.setRgb((p.x * 17 + p.y) % 256, (p.y * 13) % 256, (p.x + p.y * 7) % 256);
  }
  final bytes = Uint8List.fromList(img.encodePng(photo));
  final retained = <Object>[];
  final rows = <Map<String, Object?>>[];
  final total = Stopwatch()..start();
  for (var i = 0; i < count; i++) {
    final progress = <int>[];
    final watch = Stopwatch()..start();
    final result = generateWithProgress(bytes, vector, .5, onProgress: progress.add, onStage: (_) {});
    watch.stop();
    retained.add(result);
    rows.add({'photo': i + 1, 'elapsed_ms': watch.elapsedMicroseconds / 1000,
      'ssim': result.ssim, 'psnr_db': result.psnr, 'output_bytes': result.output.length,
      'progress_updates': progress.length, 'progress_monotonic': List.generate(progress.length - 1, (j) => progress[j] < progress[j+1]).every((v) => v),
      'progress_first': progress.first, 'progress_last_before_delivery': progress.last});
  }
  total.stop();
  stdout.writeln(jsonEncode({'width': width, 'height': height, 'count': count, 'alpha': .5,
    'input_bytes': bytes.length, 'total_ms': total.elapsedMicroseconds / 1000,
    'process_peak_rss_bytes': ProcessInfo.maxRss, 'retained_results': retained.length, 'photos': rows}));
}
