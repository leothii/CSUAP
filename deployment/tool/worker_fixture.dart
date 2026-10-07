import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'package:image/image.dart' as img;
import 'package:csuap/lab_processing.dart';
import 'package:csuap/perturbation_protection.dart';
import 'package:csuap/pixel_histogram.dart';

void main() {
  final photo = img.Image(width: 640, height: 480);
  for (final p in photo) {
    p.setRgb((p.x * 17 + p.y) % 256, (p.y * 13) % 256, (p.x + p.y * 7) % 256);
  }
  final bytes = Uint8List.fromList(img.encodePng(photo));
  final asset = File('assets/cs_uap_v_f32_hwc.bin').readAsBytesSync();
  final vector = loadPerturbationAsset(asset);
  final result = generateCloak((bytes: bytes, vector: vector, alpha: .5));
  final preview = prepareCloakPreview((bytes: bytes, vector: vector));
  Directory('build/worker-check').createSync(recursive: true);
  File('build/worker-check/fixture.json').writeAsStringSync(
    jsonEncode({
      'bytes': base64Encode(bytes),
      'vector': base64Encode(asset),
      'output': base64Encode(
        img.decodePng(result.output)!.getBytes(order: img.ChannelOrder.rgb),
      ),
      'clean': base64Encode(
        img.decodePng(result.clean)!.getBytes(order: img.ChannelOrder.rgb),
      ),
      'ssim': result.ssim,
      'psnr': result.psnr,
      'preview': base64Encode(preview.rgb),
      'bins': pixelChangeHistogram((
        clean: result.clean,
        output: result.output,
      )),
    }),
  );
}
