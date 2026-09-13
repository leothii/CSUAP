import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:google_fonts/google_fonts.dart';

import 'pixel_theme.dart';

/// A launch-only route. Replacement removes it from the session's back stack.
class IntroScreen extends StatefulWidget {
  const IntroScreen({super.key, required this.menuBuilder});

  final WidgetBuilder menuBuilder;

  @override
  State<IntroScreen> createState() => _IntroScreenState();
}

class _IntroScreenState extends State<IntroScreen> {
  static const _sequenceDuration = Duration(milliseconds: 2700);
  bool _leaving = false;
  bool _reducedMotion = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _reducedMotion = MediaQuery.disableAnimationsOf(context);
    if (_reducedMotion) {
      WidgetsBinding.instance.addPostFrameCallback((_) => _finish(skip: true));
    }
  }

  void _finish({bool skip = false}) {
    // Completion and a last-moment tap must never push two menu routes.
    if (!mounted || _leaving) return;
    _leaving = true;
    Navigator.of(context).pushReplacement<void, void>(PageRouteBuilder<void>(
      pageBuilder: (context, animation, secondaryAnimation) =>
          widget.menuBuilder(context),
      transitionDuration: skip || _reducedMotion
          ? Duration.zero
          : const Duration(milliseconds: 250),
      reverseTransitionDuration: Duration.zero,
      transitionsBuilder: (context, animation, secondaryAnimation, child) =>
          FadeTransition(opacity: animation, child: child),
    ));
  }

  @override
  Widget build(BuildContext context) {
    final content = SizedBox.expand(
      child: Stack(
        children: [
          const Positioned.fill(
            child: RepaintBoundary(
              child: CustomPaint(painter: PixelDitherPainter()),
            ),
          ),
          SafeArea(
            child: Center(
              child: Padding(
                padding: const EdgeInsets.all(32),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    FittedBox(
                      fit: BoxFit.scaleDown,
                      child: Text(
                        'shield.',
                        style: GoogleFonts.pressStart2p(
                          fontSize: 88,
                          fontWeight: FontWeight.w700,
                          letterSpacing: -2,
                          height: 1,
                          color: pixelCream,
                        ),
                      ),
                    ).animate(autoPlay: !_reducedMotion).custom(
                          duration: 700.ms,
                          builder: (context, value, child) => ClipRect(
                            clipBehavior: Clip.hardEdge,
                            clipper: _PixelRevealClipper(value),
                            child: child,
                          ),
                        ),
                    const SizedBox(height: 24),
                    Text(
                      'A PRIVACY EXPERIMENT',
                      textAlign: TextAlign.center,
                      style: GoogleFonts.vt323(
                        fontSize: 14,
                        letterSpacing: 2,
                        color: pixelCream,
                      ),
                    )
                        .animate(autoPlay: !_reducedMotion)
                        .fadeIn(delay: 850.ms, duration: 500.ms),
                  ],
                ),
              ),
            ),
          ),
          SafeArea(
            child: Align(
              alignment: Alignment.bottomCenter,
              child: Padding(
                padding: const EdgeInsets.all(28),
                child: Text(
                  'TAP TO SKIP',
                  style: GoogleFonts.vt323(
                    color: pixelMuted,
                    fontSize: 12,
                    letterSpacing: 2,
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );

    return Scaffold(
      backgroundColor: pixelBackground,
      body: CallbackShortcuts(
        bindings: {
          const SingleActivator(LogicalKeyboardKey.enter): () =>
              _finish(skip: true),
          const SingleActivator(LogicalKeyboardKey.space): () =>
              _finish(skip: true),
        },
        child: Focus(
          autofocus: true,
          child: Semantics(
            button: true,
            label: 'Skip intro',
            onTap: () => _finish(skip: true),
            child: GestureDetector(
              behavior: HitTestBehavior.opaque,
              excludeFromSemantics: true,
              onTap: () => _finish(skip: true),
              child: content
                  .animate(
                      autoPlay: !_reducedMotion, onComplete: (_) => _finish())
                  .custom(
                    duration: _sequenceDuration,
                    // Retain the original launch timing after the row reveal.
                    builder: (context, value, child) => child,
                  ),
            ),
          ),
        ),
      ),
    );
  }
}

/// Reveals the wordmark in discrete rows, without changing its layout size.
class _PixelRevealClipper extends CustomClipper<Rect> {
  const _PixelRevealClipper(this.progress);
  final double progress;
  @override
  Rect getClip(Size size) => Rect.fromLTWH(
      0, 0, size.width, size.height * (progress * 12).floor() / 12);
  @override
  bool shouldReclip(covariant _PixelRevealClipper oldClipper) =>
      progress != oldClipper.progress;
}
