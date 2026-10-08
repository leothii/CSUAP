import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'pixel_theme.dart';

class TourStop {
  const TourStop(this.target, this.title, this.description);
  final GlobalKey target;
  final String title, description;
}

bool _tourOpen = false;
final _seenThisSession = <String>{};

/// Scrolls real controls into view before highlighting them. No input is sent
/// through the overlay, so explaining Apply/Save can never trigger either one.
Future<void> showFirstUseTour(
  BuildContext context,
  String id,
  List<TourStop> stops,
) async {
  if (_tourOpen || _seenThisSession.contains(id)) return;
  SharedPreferences prefs;
  try {
    prefs = await SharedPreferences.getInstance();
    if (prefs.getBool('onboarding.started') != true ||
        prefs.getBool('tour.$id.v1') == true ||
        prefs.getBool('tour.skipAll.v1') == true) {
      return;
    }
  } catch (_) {
    return;
  }
  if (!context.mounted ||
      ModalRoute.of(context)?.isCurrent != true ||
      _tourOpen) {
    return;
  }
  _tourOpen = true;
  try {
    await WidgetsBinding.instance.endOfFrame;
    for (var i = 0; i < stops.length; i++) {
      final stop = stops[i];
      final target = stop.target.currentContext;
      if (!context.mounted || target == null || !target.mounted) return;
      await Scrollable.ensureVisible(
        target,
        alignment: .45,
        duration: Duration.zero,
      );
      await WidgetsBinding.instance.endOfFrame;
      if (!context.mounted || !target.mounted) return;
      final box = target.findRenderObject();
      if (box is! RenderBox || !box.hasSize) return;
      final rect = box.localToGlobal(Offset.zero) & box.size;
      final next = await showGeneralDialog<bool>(
        context: context,
        barrierDismissible: false,
        barrierLabel: 'Button tour',
        barrierColor: Colors.transparent,
        transitionDuration: Duration.zero,
        pageBuilder: (context, _, __) =>
            _TourOverlay(rect: rect, stop: stop, index: i, total: stops.length),
      );
      if (next != true) {
        await prefs.setBool('tour.skipAll.v1', true);
        break;
      }
    }
    _seenThisSession.add(id);
    await prefs.setBool('tour.$id.v1', true);
  } catch (_) {
    /* A dismissed route or unavailable storage must not block use. */
  } finally {
    _tourOpen = false;
  }
}

class _TourOverlay extends StatelessWidget {
  const _TourOverlay({
    required this.rect,
    required this.stop,
    required this.index,
    required this.total,
  });
  final Rect rect;
  final TourStop stop;
  final int index, total;
  @override
  Widget build(BuildContext context) => Material(
    type: MaterialType.transparency,
    child: LayoutBuilder(
      builder: (context, bounds) {
        final safe = MediaQuery.paddingOf(context);
        final above = rect.top - safe.top - 28;
        final below = bounds.maxHeight - rect.bottom - safe.bottom - 28;
        final top = above > below;
        final available = (top ? above : below).clamp(
          80.0,
          bounds.maxHeight * .48,
        );
        return Stack(
          children: [
            Positioned.fill(child: CustomPaint(painter: _Spotlight(rect))),
            SafeArea(
              child: Align(
                alignment: top ? Alignment.topCenter : Alignment.bottomCenter,
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: ConstrainedBox(
                    constraints: BoxConstraints(
                      maxWidth: 480,
                      maxHeight: available,
                    ),
                    child: Material(
                      color: context.pixelColors.surface,
                      elevation: 8,
                      child: SingleChildScrollView(
                        padding: const EdgeInsets.all(20),
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'QUICK TOUR  ${index + 1} / $total',
                              style: TextStyle(
                                color: context.pixelColors.muted,
                              ),
                            ),
                            const SizedBox(height: 8),
                            Semantics(
                              header: true,
                              liveRegion: true,
                              child: Text(
                                stop.title,
                                style: Theme.of(context).textTheme.titleLarge,
                              ),
                            ),
                            const SizedBox(height: 8),
                            Text(stop.description),
                            const SizedBox(height: 16),
                            Wrap(
                              spacing: 12,
                              children: [
                                TextButton(
                                  onPressed: () =>
                                      Navigator.pop(context, false),
                                  child: const Text('Skip tips'),
                                ),
                                FilledButton(
                                  autofocus: true,
                                  onPressed: () => Navigator.pop(context, true),
                                  child: Text(
                                    index + 1 == total ? 'Got it' : 'Next tip',
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        );
      },
    ),
  );
}

class _Spotlight extends CustomPainter {
  _Spotlight(this.rect);
  final Rect rect;
  @override
  void paint(Canvas canvas, Size size) {
    final hole = RRect.fromRectAndRadius(
      rect.inflate(5),
      const Radius.circular(6),
    );
    final path = Path()
      ..fillType = PathFillType.evenOdd
      ..addRect(Offset.zero & size)
      ..addRRect(hole);
    canvas.drawPath(path, Paint()..color = Colors.black.withValues(alpha: .7));
    canvas.drawRRect(
      hole,
      Paint()
        ..color = const Color(0xFFFFDD80)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3,
    );
  }

  @override
  bool shouldRepaint(_Spotlight oldDelegate) => oldDelegate.rect != rect;
}
