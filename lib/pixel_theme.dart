import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'pixel_art.dart';
export 'pixel_art.dart';

ThemeData pixelTheme() {
  GoogleFonts.config.allowRuntimeFetching = false;
  final base = ThemeData(brightness: Brightness.light, useMaterial3: true);
  final body = GoogleFonts.vt323TextTheme(base.textTheme)
      .apply(bodyColor: pixelCream, displayColor: pixelCream);
  final shortText =
      GoogleFonts.pressStart2p(fontSize: 10, height: 1.5, color: pixelCream);
  final button = ButtonStyle(
    backgroundColor: WidgetStateProperty.resolveWith((states) =>
        states.contains(WidgetState.disabled) ? pixelSurface : pixelGold),
    foregroundColor: WidgetStateProperty.resolveWith((states) =>
        states.contains(WidgetState.disabled) ? pixelMuted : pixelCream),
    side: WidgetStateProperty.resolveWith((states) => BorderSide(
        width: 1,
        color: states.contains(WidgetState.focused) ||
                states.contains(WidgetState.hovered)
            ? pixelCream
            : pixelEdge)),
    shape: const WidgetStatePropertyAll(BeveledRectangleBorder()),
    elevation: const WidgetStatePropertyAll(0),
    shadowColor: const WidgetStatePropertyAll(Colors.transparent),
    overlayColor: WidgetStatePropertyAll(pixelCream.withValues(alpha: .18)),
    textStyle: WidgetStatePropertyAll(shortText),
  );
  return base.copyWith(
    scaffoldBackgroundColor: pixelBackground,
    splashFactory: NoSplash.splashFactory,
    colorScheme: const ColorScheme.light(
        primary: pixelGold,
        onPrimary: pixelCream,
        secondary: pixelGreen,
        onSecondary: pixelCream,
        surface: pixelSurface,
        onSurface: pixelCream,
        error: pixelCoral,
        onError: pixelCream),
    textTheme: body.copyWith(
      // Long editorial headings use the readable pixel face; short titles/logo
      // use Press Start 2P locally to avoid dense, overflowing text blocks.
      headlineLarge: GoogleFonts.vt323(
          fontSize: 44,
          height: 1.02,
          fontWeight: FontWeight.w800,
          letterSpacing: -2,
          color: pixelCream),
      headlineMedium: GoogleFonts.pressStart2p(fontSize: 20, color: pixelCream),
      headlineSmall: GoogleFonts.pressStart2p(fontSize: 16, color: pixelCream),
      bodyMedium:
          GoogleFonts.vt323(fontSize: 20, height: 1.125, color: pixelCream),
    ),
    appBarTheme: AppBarTheme(
        backgroundColor: pixelBackground,
        foregroundColor: pixelCream,
        surfaceTintColor: Colors.transparent,
        titleTextStyle:
            GoogleFonts.pressStart2p(fontSize: 18, color: pixelCream)),
    actionIconTheme: ActionIconThemeData(
        backButtonIconBuilder: (_) => const PixelIcon(Icons.arrow_back)),
    filledButtonTheme: FilledButtonThemeData(
        style: button.copyWith(
            padding: const WidgetStatePropertyAll(
                EdgeInsets.symmetric(horizontal: 22, vertical: 19)))),
    outlinedButtonTheme: OutlinedButtonThemeData(style: button),
    textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
            foregroundColor: pixelCream,
            shape: const BeveledRectangleBorder(),
            textStyle: shortText)),
    iconTheme: const IconThemeData(color: pixelCream),
    dividerTheme: const DividerThemeData(color: pixelGreen, thickness: 2),
    chipTheme: base.chipTheme.copyWith(
        backgroundColor: pixelSurface,
        selectedColor: pixelGreen,
        disabledColor: pixelSurface,
        shape: const BeveledRectangleBorder(),
        side: const BorderSide(color: pixelEdge, width: 1),
        checkmarkColor: pixelCream,
        labelStyle: GoogleFonts.vt323(fontSize: 16, color: pixelCream),
        elevation: 0,
        pressElevation: 0,
        shadowColor: Colors.transparent,
        secondaryLabelStyle:
            GoogleFonts.vt323(fontSize: 16, color: pixelCream)),
    expansionTileTheme: const ExpansionTileThemeData(
        iconColor: pixelCream,
        collapsedIconColor: pixelMuted,
        textColor: pixelCream,
        collapsedTextColor: pixelCream),
    progressIndicatorTheme: const ProgressIndicatorThemeData(
        color: pixelGreen,
        linearTrackColor: pixelEdge,
        borderRadius: BorderRadius.zero),
    sliderTheme: base.sliderTheme.copyWith(
        trackHeight: 8,
        activeTrackColor: pixelGold,
        inactiveTrackColor: pixelEdge,
        thumbColor: pixelGreen,
        trackShape: const RectangularSliderTrackShape(),
        thumbShape: const PixelThumbShape(),
        overlayShape: SliderComponentShape.noOverlay,
        valueIndicatorColor: pixelSurface,
        valueIndicatorTextStyle: GoogleFonts.vt323(color: pixelCream),
        valueIndicatorShape: const RectangularSliderValueIndicatorShape()),
    snackBarTheme: SnackBarThemeData(
        backgroundColor: pixelSurface,
        shape: const BeveledRectangleBorder(
            side: BorderSide(color: pixelCoral, width: 1)),
        elevation: 0,
        contentTextStyle: GoogleFonts.vt323(fontSize: 20, color: pixelCream)),
  );
}

class PixelThumbShape extends SliderComponentShape {
  const PixelThumbShape();
  @override
  Size getPreferredSize(bool isEnabled, bool isDiscrete) => const Size(18, 22);
  @override
  void paint(
    PaintingContext context,
    Offset center, {
    required Animation<double> activationAnimation,
    required Animation<double> enableAnimation,
    required bool isDiscrete,
    required TextPainter? labelPainter,
    required RenderBox parentBox,
    required SliderThemeData sliderTheme,
    required TextDirection textDirection,
    required double value,
    required double textScaleFactor,
    required Size sizeWithOverflow,
  }) {
    context.canvas.save();
    context.canvas.translate(center.dx - 9, center.dy - 11);
    PixelBevelPainter(
            fill: Color.lerp(pixelMuted, sliderTheme.thumbColor ?? pixelGreen,
                enableAnimation.value)!,
            accent: pixelCream)
        .paint(context.canvas, const Size(18, 22));
    context.canvas.restore();
  }
}
