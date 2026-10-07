import 'dart:math' as math;
import 'dart:typed_data';
import 'package:image/image.dart' as img;

/// Six bins of mean absolute RGB change, sampled on a uniform image grid.
List<int> pixelChangeHistogram(({Uint8List clean, Uint8List output}) data) {
  final a = img.decodePng(data.clean)!;
  final b = img.decodePng(data.output)!;
  if (a.width != b.width || a.height != b.height) {
    throw ArgumentError('Image dimensions must match');
  }
  final counts = List.filled(6, 0);
  final step = math.max(1, math.sqrt(a.width * a.height / 65536).ceil());
  for (var y = 0; y < a.height; y += step) {
    for (var x = 0; x < a.width; x += step) {
      final p = a.getPixel(x, y), q = b.getPixel(x, y);
      final d = ((p.r - q.r).abs() + (p.g - q.g).abs() + (p.b - q.b).abs()) / 3;
      counts[d == 0
          ? 0
          : d <= 2
          ? 1
          : d <= 5
          ? 2
          : d <= 10
          ? 3
          : d <= 20
          ? 4
          : 5]++;
    }
  }
  return counts;
}
