import 'package:flutter/material.dart';
import 'pixel_art.dart';
export 'pixel_art.dart';

ThemeData pixelTheme([Brightness brightness = Brightness.light]) {
  final palette = PixelPalette(brightness);
  final pixelBackground = palette.background,
      pixelSurface = palette.surface,
      pixelCream = palette.foreground,
      pixelMuted = palette.muted,
      pixelGold = palette.gold,
      pixelGreen = palette.green,
      pixelCoral = palette.coral,
      pixelEdge = palette.edge;
  final base = ThemeData(brightness: brightness, useMaterial3: true);
  final body = base.textTheme
      .apply(fontFamily: 'VT323')
      .apply(bodyColor: pixelCream, displayColor: pixelCream);
  final shortText = TextStyle(
    fontFamily: 'PressStart2P',
    fontSize: 10,
    height: 1.5,
    color: pixelCream,
  );
  final button = ButtonStyle(
    backgroundColor: WidgetStateProperty.resolveWith(
      (states) =>
          states.contains(WidgetState.disabled) ? pixelSurface : pixelGold,
    ),
    foregroundColor: WidgetStateProperty.resolveWith(
      (states) =>
          states.contains(WidgetState.disabled) ? pixelMuted : pixelCream,
    ),
    side: WidgetStateProperty.resolveWith(
      (states) => BorderSide(
        width: 1,
        color:
            states.contains(WidgetState.focused) ||
                states.contains(WidgetState.hovered)
            ? pixelCream
            : pixelEdge,
      ),
    ),
    shape: const WidgetStatePropertyAll(BeveledRectangleBorder()),
    elevation: const WidgetStatePropertyAll(0),
    shadowColor: const WidgetStatePropertyAll(Colors.transparent),
    overlayColor: WidgetStatePropertyAll(pixelCream.withValues(alpha: .18)),
    textStyle: WidgetStatePropertyAll(shortText),
  );
  return base.copyWith(
    scaffoldBackgroundColor: pixelBackground,
    splashFactory: NoSplash.splashFactory,
    colorScheme: ColorScheme(
      brightness: brightness,
      primary: pixelGold,
      onPrimary: pixelCream,
      secondary: pixelGreen,
      onSecondary: pixelCream,
      surface: pixelSurface,
      onSurface: pixelCream,
      error: pixelCoral,
      onError: pixelCream,
    ),
    textTheme: body.copyWith(
      // Long editorial headings use the readable pixel face; short titles/logo
      // use Press Start 2P locally to avoid dense, overflowing text blocks.
      headlineLarge: TextStyle(
        fontFamily: 'VT323',
        fontSize: 44,
        height: 1.02,
        fontWeight: FontWeight.w800,
        letterSpacing: -2,
        color: pixelCream,
      ),
      headlineMedium: TextStyle(
        fontFamily: 'PressStart2P',
        fontSize: 20,
        color: pixelCream,
      ),
      headlineSmall: TextStyle(
        fontFamily: 'PressStart2P',
        fontSize: 16,
        color: pixelCream,
      ),
      bodyMedium: TextStyle(
        fontFamily: 'VT323',
        fontSize: 20,
        height: 1.125,
        color: pixelCream,
      ),
    ),
    appBarTheme: AppBarTheme(
      backgroundColor: pixelBackground,
      foregroundColor: pixelCream,
      surfaceTintColor: Colors.transparent,
      titleTextStyle: TextStyle(
        fontFamily: 'PressStart2P',
        fontSize: 18,
        color: pixelCream,
      ),
    ),
    actionIconTheme: ActionIconThemeData(
      backButtonIconBuilder: (_) => const PixelIcon(Icons.arrow_back),
    ),
    filledButtonTheme: FilledButtonThemeData(
      style: button.copyWith(
        padding: const WidgetStatePropertyAll(
          EdgeInsets.symmetric(horizontal: 22, vertical: 19),
        ),
      ),
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(style: button),
    textButtonTheme: TextButtonThemeData(
      style: TextButton.styleFrom(
        foregroundColor: pixelCream,
        shape: const BeveledRectangleBorder(),
        textStyle: shortText,
      ),
    ),
    iconTheme: IconThemeData(color: pixelCream),
    dividerTheme: DividerThemeData(color: pixelGreen, thickness: 2),
    chipTheme: base.chipTheme.copyWith(
      backgroundColor: pixelSurface,
      selectedColor: pixelGreen,
      disabledColor: pixelSurface,
      shape: const BeveledRectangleBorder(),
      side: BorderSide(color: pixelEdge, width: 1),
      checkmarkColor: pixelCream,
      labelStyle: TextStyle(
        fontFamily: 'VT323',
        fontSize: 16,
        color: pixelCream,
      ),
      elevation: 0,
      pressElevation: 0,
      shadowColor: Colors.transparent,
      secondaryLabelStyle: TextStyle(
        fontFamily: 'VT323',
        fontSize: 16,
        color: pixelCream,
      ),
    ),
    expansionTileTheme: ExpansionTileThemeData(
      iconColor: pixelCream,
      collapsedIconColor: pixelMuted,
      textColor: pixelCream,
      collapsedTextColor: pixelCream,
    ),
    progressIndicatorTheme: ProgressIndicatorThemeData(
      color: pixelGreen,
      linearTrackColor: pixelEdge,
      borderRadius: BorderRadius.zero,
    ),
    sliderTheme: base.sliderTheme.copyWith(
      trackHeight: 8,
      activeTrackColor: pixelGold,
      inactiveTrackColor: pixelEdge,
      thumbColor: pixelGreen,
      trackShape: const RectangularSliderTrackShape(),
      thumbShape: const PixelThumbShape(),
      overlayShape: SliderComponentShape.noOverlay,
      valueIndicatorColor: pixelSurface,
      valueIndicatorTextStyle: TextStyle(
        fontFamily: 'VT323',
        color: pixelCream,
      ),
      valueIndicatorShape: const RectangularSliderValueIndicatorShape(),
    ),
    snackBarTheme: SnackBarThemeData(
      backgroundColor: pixelSurface,
      shape: BeveledRectangleBorder(
        side: BorderSide(color: pixelCoral, width: 1),
      ),
      elevation: 0,
      contentTextStyle: TextStyle(
        fontFamily: 'VT323',
        fontSize: 20,
        color: pixelCream,
      ),
    ),
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
      fill: Color.lerp(
        pixelMuted,
        sliderTheme.thumbColor ?? pixelGreen,
        enableAnimation.value,
      )!,
      accent: pixelCream,
    ).paint(context.canvas, const Size(18, 22));
    context.canvas.restore();
  }
}
