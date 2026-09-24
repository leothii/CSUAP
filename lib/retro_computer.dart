import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'pixel_theme.dart';

/// A small, locally rendered 3D scene. No network assets or continuous ticker.
class RetroComputer extends StatefulWidget {
  const RetroComputer({super.key});

  @override
  State<RetroComputer> createState() => _RetroComputerState();
}

class _RetroComputerState extends State<RetroComputer> {
  Offset tilt = Offset.zero;
  bool cloaked = false;

  @override
  Widget build(BuildContext context) {
    final reduced = MediaQuery.disableAnimationsOf(context);
    return Column(mainAxisSize: MainAxisSize.min, children: [
      const Text('THE LITTLE PRIVACY LAB',
          style: TextStyle(color: pixelMuted, letterSpacing: 2, fontSize: 14)),
      AspectRatio(
        aspectRatio: 1.25,
        child: LayoutBuilder(builder: (context, bounds) {
          return MouseRegion(
            onHover: reduced
                ? null
                : (event) => setState(() {
                      tilt = Offset(
                        (event.localPosition.dx / bounds.maxWidth - .5) * .5,
                        (event.localPosition.dy / bounds.maxHeight - .5) * .25,
                      );
                    }),
            onExit: (_) => setState(() => tilt = Offset.zero),
            child: TweenAnimationBuilder<Offset>(
              tween: Tween(end: reduced ? Offset.zero : tilt),
              duration:
                  reduced ? Duration.zero : const Duration(milliseconds: 180),
              builder: (context, value, _) => Semantics(
                image: true,
                label:
                    'Retro computer showing a pixel landscape${cloaked ? ' with an illustrative cloak pattern' : ''}',
                child: RepaintBoundary(
                    child: CustomPaint(
                  painter: _ComputerPainter(value, cloaked),
                  size: Size.infinite,
                )),
              ),
            ),
          );
        }),
      ),
      OutlinedButton.icon(
        onPressed: () => setState(() => cloaked = !cloaked),
        icon: Icon(cloaked ? Icons.visibility_outlined : Icons.auto_awesome,
            size: 18),
        label: Text(cloaked ? 'Show original' : 'Preview cloak'),
      ),
      const SizedBox(height: 12),
      const Text('A playful illustration of the process.',
          textAlign: TextAlign.center,
          style: TextStyle(color: pixelMuted, fontSize: 16)),
    ]);
  }
}

class _Point {
  const _Point(this.x, this.y, this.z);
  final double x, y, z;
}

class _Face {
  const _Face(this.points, this.color);
  final List<_Point> points;
  final Color color;
}

class _ComputerPainter extends CustomPainter {
  const _ComputerPainter(this.tilt, this.cloaked);
  final Offset tilt;
  final bool cloaked;

  @override
  void paint(Canvas canvas, Size size) {
    final faces = <_Face>[];
    final screenDetails = <_Face>[];
    void panel(double x, double y, double z, double w, double h, Color color) {
      screenDetails.add(_Face([
        _Point(x, y, z),
        _Point(x + w, y, z),
        _Point(x + w, y + h, z),
        _Point(x, y + h, z)
      ], color));
    }

    void box(double x, double y, double z, double w, double h, double d,
        Color color) {
      final a = _Point(x, y, z), b = _Point(x + w, y, z);
      final c = _Point(x + w, y + h, z), e = _Point(x, y + h, z);
      final f = _Point(x, y, z - d), g = _Point(x + w, y, z - d);
      final i = _Point(x + w, y + h, z - d), j = _Point(x, y + h, z - d);
      Color shade(double factor) => Color.lerp(color, pixelCream, factor)!;
      faces.addAll([
        _Face([f, g, i, j], shade(.25)),
        _Face([a, f, j, e], shade(.16)),
        _Face([b, g, i, c], shade(.25)),
        _Face([a, b, g, f], shade(.04)),
        _Face([e, c, i, j], shade(.32)),
        _Face([a, b, c, e], color),
      ]);
    }

    // Geometry uses a shared coordinate system; all details rotate with the shell.
    box(-1.6, 1.05, 1.1, 3.2, .18, 2.3, pixelGreen);
    box(-.48, .44, .1, .96, .58, .65, const Color(0xFFD1C6AC));
    box(-1.35, -1.45, .38, 2.7, 1.95, 1.05, const Color(0xFFF4E8CC));
    panel(-1.13, -1.24, .39, 2.26, 1.36, pixelCream);
    panel(-1.02, -1.13, .40, 2.04, 1.14, const Color(0xFF88B7A0));
    // Pixel landscape, sun and foreground, all on the monitor surface.
    panel(.49, -.99, .41, .26, .26, pixelGold);
    for (var x = 0; x < 17; x++) {
      final hill = .18 + .30 * math.sin(x * .43).abs();
      panel(-1.02 + x * .12, -.10 - hill, .415, .121, hill + .11,
          const Color(0xFF496E59));
    }
    if (cloaked) {
      for (var y = 0; y < 9; y++) {
        for (var x = 0; x < 17; x++) {
          if ((x * 7 + y * 11) % 5 < 2) {
            panel(-1.02 + x * .12, -1.12 + y * .12, .43, .07, .05,
                (x + y).isEven ? pixelGold.withValues(alpha: .65) : pixelGreen);
          }
        }
      }
    }
    panel(.95, .27, .41, .1, .07, const Color(0xFF699577));
    for (var n = 0; n < 5; n++) {
      panel(-1.06 + n * .13, .26, .41, .07, .04, pixelMuted);
    }
    box(-1.19, .82, 1.05, 2.38, .17, .69, const Color(0xFFE9DCC0));
    for (var row = 0; row < 3; row++) {
      for (var key = 0; key < 10; key++) {
        box(-1.08 + key * .215, .775, .51 + row * .17, .17, .045, .12,
            key == 9 ? pixelGold : const Color(0xFFFFF6DF));
      }
    }

    final yaw = -.36 + tilt.dx, pitch = -.16 + tilt.dy;
    _Point rotate(_Point p) {
      final x = p.x * math.cos(yaw) + p.z * math.sin(yaw);
      final z = -p.x * math.sin(yaw) + p.z * math.cos(yaw);
      return _Point(x, p.y * math.cos(pitch) - z * math.sin(pitch),
          p.y * math.sin(pitch) + z * math.cos(pitch));
    }

    final scale = math.min(size.width / 4.4, size.height / 3.7);
    Offset project(_Point p) {
      final perspective = 7 / (7 - p.z);
      return Offset(size.width / 2 + p.x * scale * perspective,
          size.height * .48 + p.y * scale * perspective);
    }

    canvas.drawOval(
        Rect.fromCenter(
            center: Offset(size.width * .5, size.height * .89),
            width: scale * 3.1,
            height: scale * .25),
        Paint()..color = pixelGreen.withValues(alpha: .3));
    final transformed = faces
        .map((face) => _Face(face.points.map(rotate).toList(), face.color))
        .toList();
    double depth(_Face f) =>
        f.points.fold<double>(0, (sum, p) => sum + p.z) / f.points.length;
    transformed.sort((a, b) => depth(a).compareTo(depth(b)));
    // The bounded camera always faces the screen. Composite its coplanar
    // details in layer order so average-depth sorting cannot hide half a pixel.
    transformed.addAll(screenDetails
        .map((face) => _Face(face.points.map(rotate).toList(), face.color)));
    for (final face in transformed) {
      final points = face.points.map(project).toList();
      final path = Path()..addPolygon(points, true);
      canvas.drawPath(
          path,
          Paint()
            ..color = face.color
            ..isAntiAlias = true);
    }
  }

  @override
  bool shouldRepaint(_ComputerPainter oldDelegate) =>
      tilt != oldDelegate.tilt || cloaked != oldDelegate.cloaked;
}

/// Keeps the existing menu intact and adds a responsive scene beside it.
class HomeStage extends StatelessWidget {
  const HomeStage({super.key, required this.child});
  final Widget child;

  @override
  Widget build(BuildContext context) =>
      LayoutBuilder(builder: (context, bounds) {
        final menu = ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 320), child: child);
        if (bounds.maxWidth < 800) {
          return Column(mainAxisSize: MainAxisSize.min, children: [
            menu,
            const SizedBox(height: 36),
            const SizedBox(width: 390, child: RetroComputer()),
          ]);
        }
        return Row(mainAxisAlignment: MainAxisAlignment.center, children: [
          Flexible(child: menu),
          const SizedBox(width: 72),
          const Flexible(child: SizedBox(width: 480, child: RetroComputer())),
        ]);
      });
}
