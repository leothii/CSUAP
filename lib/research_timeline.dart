import 'package:flutter/material.dart';
import 'pixel_theme.dart';

/// Ordered research chapters, not dates or claims of experiment completion.
class ResearchTimeline extends StatelessWidget {
  const ResearchTimeline(
      {super.key, required this.selected, required this.onSelect});
  final int selected;
  final ValueChanged<int> onSelect;
  static const titles = [
    'The question',
    'The method',
    'The evidence',
    'Resources'
  ];

  @override
  Widget build(BuildContext context) => Column(children: [
        TweenAnimationBuilder<double>(
          tween: Tween(end: selected.toDouble()),
          duration: MediaQuery.disableAnimationsOf(context)
              ? Duration.zero
              : const Duration(milliseconds: 450),
          curve: Curves.easeInOutCubic,
          builder: (context, value, _) => Semantics(
            image: true,
            label:
                'Research journey, chapter ${selected + 1}: ${titles[selected]}',
            child: SizedBox(
                height: 150,
                width: double.infinity,
                child: CustomPaint(painter: _TimelineWorld(value))),
          ),
        ),
        const SizedBox(height: 12),
        for (var i = 0; i < titles.length; i++)
          IntrinsicHeight(
              child: Row(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                SizedBox(
                    width: 30,
                    child: Column(children: [
                      Container(
                          width: 18,
                          height: 18,
                          margin: const EdgeInsets.only(top: 14),
                          decoration: BoxDecoration(
                              color: selected == i ? pixelGold : pixelGreen,
                              border: Border.all(color: pixelCream, width: 2))),
                      if (i < titles.length - 1)
                        Expanded(child: Container(width: 2, color: pixelEdge)),
                    ])),
                Expanded(
                    child: Padding(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: OutlinedButton(
                    key: ValueKey('research-section-$i'),
                    style: OutlinedButton.styleFrom(
                        alignment: Alignment.centerLeft,
                        backgroundColor:
                            selected == i ? pixelGold : pixelSurface),
                    onPressed: () => onSelect(i),
                    child: Semantics(
                        selected: selected == i, child: Text(titles[i])),
                  ),
                )),
              ])),
        const SizedBox(height: 8),
        Text('CHAPTER ${selected + 1} / 4 · Select a stop on the timeline'),
      ]);
}

class _TimelineWorld extends CustomPainter {
  const _TimelineWorld(this.position);
  final double position;
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..isAntiAlias = false;
    final unit = size.width / 5;
    for (var i = 0; i < 4; i++) {
      final x = unit * (i + 1);
      const y = 86.0;
      final half = unit * .38;
      canvas.drawPath(
          Path()
            ..moveTo(x - half, y)
            ..lineTo(x, y + 15)
            ..lineTo(x + half, y)
            ..lineTo(x + half, y + 20)
            ..lineTo(x, y + 35)
            ..lineTo(x - half, y + 20)
            ..close(),
          paint..color = pixelEdge);
      canvas.drawPath(
          Path()
            ..moveTo(x, y - 15)
            ..lineTo(x + half, y)
            ..lineTo(x, y + 15)
            ..lineTo(x - half, y)
            ..close(),
          paint..color = (position - i).abs() < .5 ? pixelGold : pixelGreen);
      if (i < 3) {
        canvas.drawRect(Rect.fromLTWH(x + half, y, unit - 2 * half, 3),
            paint..color = pixelCream);
      }
      for (var block = 0; block <= i; block++) {
        canvas.drawRect(Rect.fromLTWH(x - 8, y - 24 - block * 10, 16, 8),
            paint..color = pixelCream);
      }
    }
    final cursor = unit * (position + 1);
    canvas.drawRect(
        Rect.fromLTWH(cursor - 5, 10, 10, 10), paint..color = pixelCoral);
    canvas.drawRect(Rect.fromLTWH(cursor - 2, 20, 4, 5), paint);
  }

  @override
  bool shouldRepaint(covariant _TimelineWorld oldDelegate) =>
      oldDelegate.position != position;
}
