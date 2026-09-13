import 'package:flutter/material.dart';

const pixelBackground = Color(0xFF2B2447);
const pixelSurface = Color(0xFF393157);
const pixelGold = Color(0xFFF2B033);
const pixelGreen = Color(0xFF3ABF9C);
const pixelCoral = Color(0xFFE85D5D);
const pixelCream = Color(0xFFF5EFE0);
const pixelMuted = Color(0xFFC5BDD4);
const pixelEdge = Color(0xFF171329);

/// Paints inside the existing bounds without adding padding or changing layout.
class PixelBevelPanel extends StatelessWidget {
  const PixelBevelPanel(
      {super.key,
      required this.child,
      this.fill = pixelSurface,
      this.accent = pixelGold});
  final Widget child;
  final Color fill, accent;
  @override
  Widget build(BuildContext context) => CustomPaint(
        painter: PixelBevelPainter(fill: fill, accent: accent),
        child: child,
      );
}

class PixelBevelPainter extends CustomPainter {
  const PixelBevelPainter({this.fill = pixelSurface, this.accent = pixelGold});
  final Color fill, accent;
  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()..isAntiAlias = false;
    canvas.drawRect(Offset.zero & size, p..color = fill);
    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, 3), p..color = accent);
    canvas.drawRect(Rect.fromLTWH(0, 0, 3, size.height), p);
    canvas.drawRect(
        Rect.fromLTWH(0, size.height - 4, size.width, 4), p..color = pixelEdge);
    canvas.drawRect(Rect.fromLTWH(size.width - 4, 0, 4, size.height), p);
  }

  @override
  bool shouldRepaint(covariant PixelBevelPainter oldDelegate) =>
      fill != oldDelegate.fill || accent != oldDelegate.accent;
}

class PixelDitherPainter extends CustomPainter {
  const PixelDitherPainter();
  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..isAntiAlias = false
      ..color = pixelCream.withValues(alpha: .025);
    for (double y = 0; y < size.height; y += 16) {
      for (double x = (y ~/ 16).isEven ? 0 : 8; x < size.width; x += 16) {
        canvas.drawRect(Rect.fromLTWH(x, y, 2, 2), p);
      }
    }
  }

  @override
  bool shouldRepaint(covariant PixelDitherPainter oldDelegate) => false;
}

/// Placeholder sprites on a 16x16 grid. Keeps the original Icon's footprint.
class PixelIcon extends StatelessWidget {
  const PixelIcon(this.icon, {super.key, this.size, this.color});
  final IconData icon;
  final double? size;
  final Color? color;
  @override
  Widget build(BuildContext context) {
    final theme = IconTheme.of(context);
    return SizedBox.square(
        dimension: size ?? theme.size ?? 24,
        child: CustomPaint(
            painter:
                PixelIconPainter(icon, color ?? theme.color ?? pixelGold)));
  }
}

class PixelIconPainter extends CustomPainter {
  const PixelIconPainter(this.icon, this.color);
  final IconData icon;
  final Color color;
  @override
  void paint(Canvas canvas, Size size) {
    final scale =
        (size.shortestSide / 16).floorToDouble().clamp(1.0, double.infinity);
    canvas.save();
    canvas.translate(
        (size.width - 16 * scale) / 2, (size.height - 16 * scale) / 2);
    canvas.scale(scale);
    final p = Paint()
      ..color = color
      ..isAntiAlias = false;
    void block(double x, double y, double w, double h) =>
        canvas.drawRect(Rect.fromLTWH(x, y, w, h), p);
    void frame(double x, double y, double w, double h) {
      block(x, y, w, 1);
      block(x, y + h - 1, w, 1);
      block(x, y, 1, h);
      block(x + w - 1, y, 1, h);
    }

    if (icon == Icons.camera_alt_outlined) {
      frame(1, 5, 14, 9);
      block(5, 3, 6, 2);
      frame(6, 7, 5, 5);
      block(2, 6, 2, 1);
    } else if (icon == Icons.add_photo_alternate_outlined) {
      frame(1, 3, 13, 11);
      block(3, 5, 2, 2);
      for (var i = 0; i < 5; i++) {
        block(4 + i.toDouble(), 11 - i.toDouble(), 1, 2 + i.toDouble());
      }
      block(12, 0, 1, 5);
      block(10, 2, 5, 1);
    } else if (icon == Icons.download_outlined || icon == Icons.ios_share) {
      block(7, 2, 2, 8);
      for (var i = 0; i < 3; i++) {
        final y = icon == Icons.ios_share ? 2 + i.toDouble() : 9 - i.toDouble();
        block(7 - i.toDouble(), y, 2 + i * 2.0, 1);
      }
      block(2, 11, 1, 3);
      block(13, 11, 1, 3);
      block(2, 14, 12, 1);
    } else if (icon == Icons.people_outline || icon == Icons.person_outline) {
      block(6, 2, 4, 4);
      block(4, 8, 8, 6);
      block(3, 10, 10, 4);
      if (icon == Icons.people_outline) {
        block(1, 4, 3, 3);
        block(0, 9, 3, 4);
        block(12, 4, 3, 3);
        block(13, 9, 3, 4);
      }
    } else if (icon == Icons.auto_stories_outlined) {
      frame(1, 3, 6, 10);
      frame(8, 3, 6, 10);
      block(3, 5, 3, 1);
      block(9, 5, 3, 1);
      block(3, 8, 3, 1);
      block(9, 8, 3, 1);
    } else if (icon == Icons.hub_outlined) {
      frame(6, 6, 4, 4);
      frame(1, 1, 3, 3);
      frame(12, 1, 3, 3);
      frame(1, 12, 3, 3);
      frame(12, 12, 3, 3);
      block(3, 4, 1, 4);
      block(4, 7, 2, 1);
      block(10, 7, 3, 1);
      block(12, 4, 1, 3);
      block(3, 8, 1, 4);
      block(12, 8, 1, 4);
    } else if (icon == Icons.science_outlined) {
      block(5, 1, 6, 2);
      block(6, 3, 1, 5);
      block(9, 3, 1, 5);
      for (var i = 0; i < 5; i++) {
        block(5 - i.toDouble(), 8 + i.toDouble(), 6 + i * 2.0, 1);
      }
      block(1, 13, 14, 2);
    } else if (icon == Icons.north_east || icon == Icons.open_in_new) {
      block(6, 2, 8, 2);
      block(12, 2, 2, 8);
      for (var i = 0; i < 9; i++) {
        block(3 + i.toDouble(), 11 - i.toDouble(), 2, 2);
      }
    } else if (icon == Icons.arrow_back) {
      block(3, 7, 11, 2);
      for (var i = 0; i < 5; i++) {
        block(2 + i.toDouble(), 7 - i.toDouble(), 2, 2);
        block(2 + i.toDouble(), 7 + i.toDouble(), 2, 2);
      }
    } else {
      // Shield/lock: also used for the cloak action and menu artwork.
      block(2, 2, 12, 2);
      block(2, 4, 2, 6);
      block(12, 4, 2, 6);
      block(4, 10, 2, 2);
      block(10, 10, 2, 2);
      block(6, 12, 4, 2);
      frame(6, 5, 4, 3);
      block(5, 8, 6, 3);
    }
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant PixelIconPainter oldDelegate) =>
      icon != oldDelegate.icon || color != oldDelegate.color;
}
