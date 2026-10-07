import 'dart:ui' show AppExitResponse;
import 'unsaved_page_guard.dart';
import 'photo_processor.dart';
import 'cloaking_progress.dart';
import 'photo_terms.dart';
import 'result_insights.dart';
import 'theme_settings.dart';
import 'cloaking_steps.dart';
import 'pixel_theme.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:file_selector/file_selector.dart';
import 'package:gal/gal.dart';
import 'package:image_picker/image_picker.dart';
import 'package:share_plus/share_plus.dart';
import 'lab_processing.dart';
import 'image_input.dart';
import 'intro_screen.dart';
import 'retro_computer.dart';
import 'perturbation_protection.dart';
import 'research_content.dart';
import 'research_screen.dart';
import 'credits_screen.dart';
export 'credits_screen.dart' show CreditsScreen;
export 'research_screen.dart' show DocsScreen;
import 'share_image_file.dart';

const paper = pixelCream;
const ink = pixelBackground;
const teal = pixelCream;
const muted = pixelMuted;
void main() => runApp(const CsuapApp());

class CsuapApp extends StatelessWidget {
  const CsuapApp({super.key});
  @override
  Widget build(BuildContext context) => AppThemeHost(
    home: IntroScreen(menuBuilder: (_) => const MainMenuScreen()),
  );
}

void openPage(BuildContext context, Widget page) =>
    Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => page));
Widget eyebrow(String text, {Color? color}) => Builder(
  builder: (context) => Text(
    text,
    style: TextStyle(
      fontSize: 11,
      fontWeight: FontWeight.w700,
      letterSpacing: 1.6,
      color: color ?? context.pixelColors.muted,
    ),
  ),
);
Widget heading(BuildContext context, String title, String subtitle) => Padding(
  padding: const EdgeInsets.only(bottom: 28),
  child: Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(title, style: Theme.of(context).textTheme.headlineLarge),
      const SizedBox(height: 14),
      Text(
        subtitle,
        style: TextStyle(color: context.pixelColors.muted, height: 1.5),
      ),
    ],
  ),
);

class PageShell extends StatelessWidget {
  const PageShell({
    super.key,
    required this.label,
    required this.children,
    this.scrollController,
  });
  final String label;
  final List<Widget> children;
  final ScrollController? scrollController;
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(
      title: Text(
        'invisiAI',
        style: TextStyle(
          fontFamily: 'PressStart2P',
          fontSize: 18,
          fontWeight: FontWeight.w800,
          letterSpacing: -1,
          color: context.pixelColors.foreground,
        ),
      ),
      actions: [
        const ThemeModeButton(),
        if (MediaQuery.sizeOf(context).width >= 450)
          Padding(
            padding: const EdgeInsets.only(right: 20),
            child: eyebrow(label),
          ),
      ],
    ),
    body: CustomPaint(
      painter: PixelDitherPainter(color: context.pixelColors.foreground),
      child: SafeArea(
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1080),
            child: ListView(
              controller: scrollController,
              padding: const EdgeInsets.fromLTRB(24, 30, 24, 40),
              children: children,
            ),
          ),
        ),
      ),
    ),
  );
}

class MainMenuScreen extends StatefulWidget {
  const MainMenuScreen({super.key});
  @override
  State<MainMenuScreen> createState() => _MainMenuScreenState();
}

class _MainMenuScreenState extends State<MainMenuScreen> {
  int selected = 0;
  final nodes = List.generate(4, (_) => FocusNode());
  static const labels = ['Start', 'Field guide', 'Research', 'Credits'];
  static const descriptions = [
    'Choose a photo and apply a cloak.',
    'Learn the steps, models, and metrics.',
    'Read the paper and explore the code.',
    'Meet the people behind invisiAI',
  ];

  @override
  void dispose() {
    for (final node in nodes) {
      node.dispose();
    }
    super.dispose();
  }

  void select(int index) {
    if (selected != index) setState(() => selected = index);
  }

  void enter(int index) {
    select(index);
    openPage(
      context,
      [
        const ProtectionScreen(),
        const GuideScreen(),
        const DocsScreen(),
        const CreditsScreen(),
      ][index],
    );
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(toolbarHeight: 48, actions: const [ThemeModeButton()]),
    body: SafeArea(
      child: LayoutBuilder(
        builder: (context, constraints) {
          final compact = constraints.maxWidth < 848;
          return SingleChildScrollView(
            child: ConstrainedBox(
              constraints: BoxConstraints(minHeight: constraints.maxHeight),
              child: Padding(
                padding: EdgeInsets.symmetric(
                  horizontal: 24,
                  vertical: compact ? 16 : 40,
                ),
                child: Center(
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 1080),
                    child: HomeStage(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          if (!compact)
                            PixelIcon(
                              Icons.shield_outlined,
                              size: 48,
                              color: context.pixelColors.muted,
                            ),
                          SizedBox(height: compact ? 8 : 24),
                          FittedBox(
                            fit: BoxFit.scaleDown,
                            child: Text(
                              'invisiAI',
                              style: TextStyle(
                                fontFamily: 'PressStart2P',
                                fontSize: compact ? 26 : 34,
                                height: 1.2,
                                color: context.pixelColors.foreground,
                              ),
                            ),
                          ),
                          const SizedBox(height: 12),
                          Text(
                            'a little privacy for your photos',
                            style: TextStyle(
                              color: context.pixelColors.muted,
                              fontSize: 19,
                            ),
                            textAlign: TextAlign.center,
                          ),
                          if (compact)
                            Padding(
                              padding: const EdgeInsets.symmetric(vertical: 8),
                              child: SizedBox(
                                width: (constraints.maxHeight * .29).clamp(
                                  140.0,
                                  220.0,
                                ),
                                child: const RetroComputer(compact: true),
                              ),
                            )
                          else
                            const SizedBox(height: 44),
                          Focus(
                            onKeyEvent: (_, event) {
                              if (event is KeyDownEvent ||
                                  event is KeyRepeatEvent) {
                                final direction =
                                    event.logicalKey ==
                                        LogicalKeyboardKey.arrowDown
                                    ? 1
                                    : event.logicalKey ==
                                          LogicalKeyboardKey.arrowUp
                                    ? -1
                                    : 0;
                                if (direction != 0) {
                                  final index =
                                      (selected + direction) % labels.length;
                                  select(index);
                                  nodes[index].requestFocus();
                                  return KeyEventResult.handled;
                                }
                              }
                              return KeyEventResult.ignored;
                            },
                            child: Column(
                              children: [
                                for (var i = 0; i < labels.length; i++)
                                  Semantics(
                                    selected: selected == i,
                                    child: Padding(
                                      padding: const EdgeInsets.only(bottom: 4),
                                      child: TextButton(
                                        focusNode: nodes[i],
                                        autofocus: i == 0,
                                        onHover: (hovered) {
                                          if (hovered) select(i);
                                        },
                                        onFocusChange: (focused) {
                                          if (focused) select(i);
                                        },
                                        onPressed: () => enter(i),
                                        style: TextButton.styleFrom(
                                          backgroundColor: selected == i
                                              ? context.pixelColors.gold
                                              : Colors.transparent,
                                          foregroundColor:
                                              context.pixelColors.foreground,
                                          minimumSize: Size(
                                            double.infinity,
                                            compact ? 48 : 52,
                                          ),
                                          padding: EdgeInsets.symmetric(
                                            horizontal: 16,
                                            vertical: compact ? 10 : 16,
                                          ),
                                          shape: const BeveledRectangleBorder(),
                                          textStyle: TextStyle(
                                            fontFamily: 'PressStart2P',
                                            fontSize: 12,
                                            height: 1.6,
                                          ),
                                        ),
                                        child: Row(
                                          children: [
                                            SizedBox(
                                              width: 20,
                                              height: 16,
                                              child: selected == i
                                                  ? CustomPaint(
                                                      painter:
                                                          _MenuArrowPainter(
                                                            context
                                                                .pixelColors
                                                                .foreground,
                                                          ),
                                                    )
                                                  : null,
                                            ),
                                            const SizedBox(width: 16),
                                            Expanded(child: Text(labels[i])),
                                          ],
                                        ),
                                      ),
                                    ),
                                  ),
                              ],
                            ),
                          ),
                          SizedBox(height: compact ? 8 : 24),
                          ConstrainedBox(
                            constraints: const BoxConstraints(minHeight: 54),
                            child: Text(
                              descriptions[selected],
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: context.pixelColors.muted,
                                fontSize: 20,
                              ),
                            ),
                          ),
                          SizedBox(height: compact ? 8 : 40),
                          Text(
                            'ON-DEVICE PROCESSING · CS-UAP',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 13,
                              color: context.pixelColors.muted,
                              letterSpacing: .8,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        },
      ),
    ),
  );
}

class _MenuArrowPainter extends CustomPainter {
  const _MenuArrowPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = color
      ..isAntiAlias = false;
    for (var row = 0; row < 7; row++) {
      final width = (row <= 3 ? row + 1 : 7 - row) * 2.0;
      canvas.drawRect(Rect.fromLTWH(3, row * 2.0 + 1, width, 2), p);
    }
  }

  @override
  bool shouldRepaint(covariant _MenuArrowPainter oldDelegate) =>
      color != oldDelegate.color;
}

class SignalPainter extends CustomPainter {
  const SignalPainter();
  @override
  void paint(Canvas canvas, Size size) {
    PixelIconPainter(
      Icons.shield_outlined,
      pixelGreen.withValues(alpha: .35),
    ).paint(canvas, size);
  }

  @override
  bool shouldRepaint(covariant SignalPainter oldDelegate) => false;
}

class GuideScreen extends StatefulWidget {
  const GuideScreen({super.key});
  @override
  State<GuideScreen> createState() => _GuideScreenState();
}

class _GuideScreenState extends State<GuideScreen> {
  final scrollController = ScrollController();
  int step = 0;
  int intensity = 0;
  bool showPattern = false;
  bool? answer;
  static const steps = ['Choose', 'Cloak', 'Inspect'];

  void selectStep(int value) {
    setState(() => step = value);
    if (scrollController.hasClients) scrollController.jumpTo(0);
  }

  @override
  void dispose() {
    scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final result = perceptualResults[intensity];
    return PageShell(
      scrollController: scrollController,
      label: '03 / FIELD GUIDE',
      children: [
        heading(
          context,
          'Small changes.\nSee how they work.',
          'A hands-on tour of your first cloak. No photo needed.',
        ),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            for (var i = 0; i < steps.length; i++)
              ChoiceChip(
                key: ValueKey('guide-step-$i'),
                label: Text('${i + 1}. ${steps[i]}'),
                selected: step == i,
                onSelected: (_) => selectStep(i),
              ),
          ],
        ),
        const SizedBox(height: 16),
        LinearProgressIndicator(
          value: (step + 1) / steps.length,
          semanticsLabel: 'Walkthrough step ${step + 1} of 3',
        ),
        const SizedBox(height: 20),
        Panel(
          color: context.pixelColors.green,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              eyebrow('TRY IT / 0${step + 1}'),
              const SizedBox(height: 12),
              Text(
                [
                  'Your photo, with a tiny extra layer.',
                  'Turn the intensity. Read the trade-off.',
                  'Good quality. What does that tell us?',
                ][step],
                style: Theme.of(context).textTheme.headlineLarge,
              ),
              const SizedBox(height: 16),
              if (step == 0) ...[
                const Text(
                  'A cloak adds a trained pattern of small pixel changes. '
                  'The app repeats that pattern across your photo and saves a new image.',
                ),
                const SizedBox(height: 20),
                Semantics(
                  label: showPattern
                      ? 'Illustration of a photo with a visible pixel pattern'
                      : 'Illustration of the original photo',
                  image: true,
                  child: SizedBox(
                    width: double.infinity,
                    height: 170,
                    child: CustomPaint(
                      painter: _GuidePhotoPainter(showPattern),
                    ),
                  ),
                ),
                SwitchListTile.adaptive(
                  contentPadding: EdgeInsets.zero,
                  title: const Text('Reveal the pattern'),
                  subtitle: const Text(
                    'Illustration only • pattern exaggerated',
                  ),
                  value: showPattern,
                  onChanged: (value) => setState(() => showPattern = value),
                ),
                const Text(
                  'In the lab: choose a photo from your device. Your original stays unchanged.',
                ),
              ],
              if (step == 1) ...[
                const Text(
                  'More intensity means larger pixel changes. Move the slider '
                  'to explore the recorded test results.',
                ),
                const SizedBox(height: 20),
                Text(
                  'Intensity α = ${result.alpha}',
                  style: const TextStyle(fontSize: 28),
                ),
                Slider(
                  key: const ValueKey('guide-intensity'),
                  value: intensity.toDouble(),
                  min: 0,
                  max: 5,
                  divisions: 5,
                  label: result.alpha,
                  semanticFormatterCallback: (value) =>
                      'Intensity ${perceptualResults[value.round()].alpha}',
                  onChanged: (value) =>
                      setState(() => intensity = value.round()),
                ),
                const Text('RECORDED MEANS • 30 IMAGES PER INTENSITY'),
                const SizedBox(height: 12),
                _guideMetric(
                  'SSIM',
                  result.ssim,
                  'How similar is the structure?',
                  'Target ≥ 0.95',
                  intensity <= 1,
                ),
                _guideMetric(
                  'PSNR',
                  '${result.psnr} dB',
                  'How small is the pixel error?',
                  'Target ≥ 30 dB',
                  intensity <= 3,
                ),
                Text(
                  intensity <= 1
                      ? 'Both averages meet the quality targets. Individual photos can still fall below them.'
                      : 'At this intensity, at least one average falls below its quality target.',
                ),
                const SizedBox(height: 12),
                const Text(
                  'These are study results, not a prediction for your photo. '
                  'Higher intensity does not prove stronger protection.',
                ),
                const ExpansionTile(
                  tilePadding: EdgeInsets.zero,
                  title: Text('Where do these numbers come from?'),
                  children: [
                    Text(perceptualResultsMethod),
                    SizedBox(height: 8),
                    Text(
                      'Source: outputs/evaluation/perceptual/alpha_summary.csv',
                    ),
                  ],
                ),
              ],
              if (step == 2) ...[
                const Text(
                  'SSIM checks structure. PSNR checks pixel error. Higher '
                  'values mean less visual change. Neither measures whether '
                  'an AI model was disrupted.',
                ),
                const SizedBox(height: 20),
                eyebrow('QUICK CHECK'),
                const SizedBox(height: 8),
                const Text(
                  'Both quality targets pass. Is semantic protection proven?',
                ),
                const SizedBox(height: 12),
                Wrap(
                  spacing: 10,
                  runSpacing: 10,
                  children: [
                    ChoiceChip(
                      label: const Text('Yes, protected'),
                      selected: answer == true,
                      onSelected: (_) => setState(() => answer = true),
                    ),
                    ChoiceChip(
                      label: const Text('Not yet'),
                      selected: answer == false,
                      onSelected: (_) => setState(() => answer = false),
                    ),
                  ],
                ),
                if (answer != null) ...[
                  const SizedBox(height: 12),
                  Semantics(
                    liveRegion: true,
                    child: Text(
                      answer == false
                          ? 'Exactly. Quality passed; semantic protection still needs separate model evaluation.'
                          : 'Not quite. A photo can look similar without disrupting a model. Quality and protection need different tests.',
                    ),
                  ),
                ],
                const SizedBox(height: 20),
                const Text(
                  'In the lab: generate, compare both images, zoom in, and '
                  'check your photo’s metrics. Save PNG when you are happy with the result.',
                ),
              ],
              const SizedBox(height: 24),
              Wrap(
                spacing: 12,
                runSpacing: 12,
                children: [
                  if (step > 0)
                    OutlinedButton(
                      onPressed: () => selectStep(step - 1),
                      child: const Text('Back'),
                    ),
                  FilledButton(
                    onPressed: () => step < 2
                        ? selectStep(step + 1)
                        : openPage(context, const ProtectionScreen()),
                    child: Text(step < 2 ? 'Next step' : 'Try the photo lab'),
                  ),
                ],
              ),
            ],
          ),
        ),
        const SizedBox(height: 28),
        eyebrow('CURIOUS? GO A LITTLE DEEPER'),
        const SizedBox(height: 8),
        const Text(
          'The tour is all you need to start. Tap a term for the research behind it.',
        ),
        const SizedBox(height: 12),
        for (final entry in glossary.entries)
          ExpansionTile(
            title: Text(
              entry.key,
              style: const TextStyle(fontWeight: FontWeight.w700),
            ),
            childrenPadding: const EdgeInsets.fromLTRB(16, 0, 16, 22),
            expandedCrossAxisAlignment: CrossAxisAlignment.start,
            children: [Text(entry.value)],
          ),
      ],
    );
  }

  Widget _guideMetric(
    String name,
    String value,
    String explanation,
    String target,
    bool passes,
  ) => Padding(
    padding: const EdgeInsets.only(bottom: 16),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('$name  $value', style: const TextStyle(fontSize: 28)),
        Text(explanation),
        Text('$target · ${passes ? 'Mean meets target' : 'Mean below target'}'),
      ],
    ),
  );
}

class _GuidePhotoPainter extends CustomPainter {
  const _GuidePhotoPainter(this.showPattern);
  final bool showPattern;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = pixelBackground;
    canvas.drawRect(Offset.zero & size, paint);
    paint.color = pixelGold;
    canvas.drawRect(Rect.fromLTWH(size.width * .7, 25, 30, 30), paint);
    paint.color = pixelGreen;
    canvas.drawPath(
      Path()
        ..moveTo(0, size.height)
        ..lineTo(size.width * .32, 50)
        ..lineTo(size.width * .58, 120)
        ..lineTo(size.width * .8, 80)
        ..lineTo(size.width, size.height)
        ..close(),
      paint,
    );
    if (showPattern) {
      for (var y = 0; y < size.height; y += 10) {
        for (var x = 0; x < size.width; x += 10) {
          paint.color = ((x + y) % 30 == 0 ? pixelCoral : pixelCream)
              .withValues(alpha: .3);
          canvas.drawRect(
            Rect.fromLTWH(x.toDouble(), y.toDouble(), 4, 4),
            paint,
          );
        }
      }
    }
  }

  @override
  bool shouldRepaint(covariant _GuidePhotoPainter oldDelegate) =>
      oldDelegate.showPattern != showPattern;
}

class Panel extends StatelessWidget {
  const Panel({super.key, required this.child, this.color = teal});
  final Widget child;
  final Color color;
  @override
  Widget build(BuildContext context) => PixelBevelPanel(
    accent: color,
    child: Container(
      width: double.infinity,
      padding: const EdgeInsets.all(24),
      child: child,
    ),
  );
}

/// Both layers share the same bounds so the divider never shifts the photo.
class PhotoComparison extends StatefulWidget {
  const PhotoComparison({super.key, required this.clean, required this.output});
  final Uint8List clean, output;

  @override
  State<PhotoComparison> createState() => _PhotoComparisonState();
}

class _PhotoComparisonState extends State<PhotoComparison> {
  double position = .5;

  @override
  Widget build(BuildContext context) => Column(
    children: [
      Container(
        color: context.pixelColors.surface,
        height: 320,
        child: LayoutBuilder(
          builder: (context, box) {
            void move(double x) =>
                setState(() => position = (x / box.maxWidth).clamp(0.0, 1.0));
            return GestureDetector(
              onHorizontalDragUpdate: (event) => move(event.localPosition.dx),
              onTapDown: (event) => move(event.localPosition.dx),
              child: Stack(
                fit: StackFit.expand,
                children: [
                  Image.memory(
                    widget.output,
                    fit: BoxFit.contain,
                    gaplessPlayback: true,
                  ),
                  ClipRect(
                    clipper: _ComparisonClipper(position),
                    child: Image.memory(
                      widget.clean,
                      fit: BoxFit.contain,
                      gaplessPlayback: true,
                    ),
                  ),
                  Positioned(left: 10, top: 10, child: _tag('ORIGINAL')),
                  Positioned(right: 10, top: 10, child: _tag('CLOAKED')),
                  Positioned(
                    left: (box.maxWidth - 2) * position,
                    top: 0,
                    bottom: 0,
                    child: Container(
                      width: 2,
                      color: context.pixelColors.foreground,
                    ),
                  ),
                  Positioned(
                    left: (box.maxWidth - 36) * position,
                    top: 142,
                    child: Container(
                      width: 36,
                      height: 36,
                      color: context.pixelColors.gold,
                      child: const Icon(
                        Icons.swap_horiz,
                        textDirection: TextDirection.ltr,
                      ),
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      ),
      Semantics(
        label: 'Before and after comparison',
        child: Slider(
          value: position,
          semanticFormatterCallback: (value) =>
              '${(value * 100).round()} percent original visible',
          onChanged: (value) => setState(() => position = value),
        ),
      ),
      Text(
        'Drag to compare • Original / Cloaked',
        style: TextStyle(color: context.pixelColors.muted, fontSize: 16),
      ),
    ],
  );

  Widget _tag(String label) => Container(
    color: context.pixelColors.background,
    padding: const EdgeInsets.all(6),
    child: Text(label, style: const TextStyle(fontSize: 14)),
  );
}

class _ComparisonClipper extends CustomClipper<Rect> {
  const _ComparisonClipper(this.position);
  final double position;
  @override
  Rect getClip(Size size) =>
      Rect.fromLTWH(0, 0, size.width * position, size.height);
  @override
  bool shouldReclip(_ComparisonClipper oldClipper) =>
      position != oldClipper.position;
}

class ProtectionScreen extends StatefulWidget {
  const ProtectionScreen({super.key, this.photoPicker, this.photoProcessor});
  final Future<XFile?> Function(ImageSource source)? photoPicker;
  final PhotoProcessor? photoProcessor;
  @override
  State<ProtectionScreen> createState() => _ProtectionScreenState();
}

class _ProtectionScreenState extends State<ProtectionScreen>
    with WidgetsBindingObserver {
  late final processor = widget.photoProcessor ?? PhotoProcessor();
  final pageGuard = UnsavedPageGuard();
  bool resultSaved = false, downloadStarted = false;
  bool confirming = false, allowLeave = false;
  int generation = 0;
  bool get hasUnsavedResult => result != null && !resultSaved;

  Future<bool> confirmAction(
    String title,
    String message,
    String action,
  ) async {
    if (confirming || !mounted) return false;
    setState(() => confirming = true);
    try {
      return await showDialog<bool>(
            context: context,
            builder: (dialogContext) => AlertDialog(
              title: Text(title),
              scrollable: true,
              content: Text(message),
              actions: [
                TextButton(
                  autofocus: true,
                  onPressed: () => Navigator.pop(dialogContext, false),
                  child: const Text('Keep working'),
                ),
                FilledButton(
                  onPressed: () => Navigator.pop(dialogContext, true),
                  child: Text(action),
                ),
              ],
            ),
          ) ??
          false;
    } finally {
      if (mounted) setState(() => confirming = false);
    }
  }

  Future<bool> confirmDiscard(String action) async =>
      !hasUnsavedResult ||
      await confirmAction(
        'Discard unsaved result?',
        '$action will discard this result. Save your PNG first if you want to keep it.',
        'Discard result',
      );

  Future<bool> confirmLeave() async {
    if (exporting || picking || confirming) {
      if (mounted && !confirming) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Please finish the current photo action before leaving.',
            ),
          ),
        );
      }
      return false;
    }
    if (busy) {
      final leave = await confirmAction(
        'Stop cloaking and leave?',
        'This run will stop and its result will be discarded. Your original photo stays unchanged.',
        'Stop & leave',
      );
      if (leave && mounted) cancelCloaking(notify: false);
      return leave;
    }
    return confirmDiscard('Leaving the photo lab');
  }

  Future<void> requestLeave() async {
    if (!await confirmLeave() || !mounted) return;
    setState(() => allowLeave = true);
    pageGuard.setActive(false);
    await WidgetsBinding.instance.endOfFrame;
    if (mounted) Navigator.of(context).pop();
  }

  @override
  Future<AppExitResponse> didRequestAppExit() async {
    if (!await confirmLeave() || !mounted) return AppExitResponse.cancel;
    pageGuard.setActive(false);
    return AppExitResponse.exit;
  }

  void cancelCloaking({bool notify = true}) {
    if (!busy) return;
    generation++;
    processor.cancelGeneration();
    setState(() {
      busy = false;
      completedStages = 0;
      error = null;
    });
    if (notify) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text(
            'Cloaking cancelled. Your original photo is ready to try again.',
          ),
        ),
      );
    }
  }

  Future<void> changeIntensity(double value) async {
    if (locked || value == alpha) return;
    if (!await confirmDiscard('Changing the intensity') || !mounted || locked) {
      return;
    }
    setState(() {
      alpha = value;
      result = null;
      resultSaved = false;
      downloadStarted = false;
    });
    refreshPreview();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    pageGuard.dispose();
    generation++;
    processor.dispose();
    super.dispose();
  }

  Float32List? vector;
  Uint8List? source;
  LabResult? result;
  CloakPreview? preview;
  Uint8List? previewBytes;
  double? previewAlpha;
  bool renderingPreview = false;
  String? previewError;
  String? error;
  String filename = '';
  double alpha = .5;
  bool busy = false, exporting = false, picking = false, loading = true;
  int completedStages = 0;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    loadVector();
  }

  Future<void> loadVector() async {
    setState(() {
      loading = true;
      error = null;
    });
    try {
      final asset = await rootBundle.load('assets/cs_uap_v_f32_hwc.bin');
      final loaded = loadPerturbationAsset(
        asset.buffer.asUint8List(asset.offsetInBytes, asset.lengthInBytes),
      );
      if (mounted) {
        setState(() {
          vector = loaded;
          loading = false;
        });
      }
    } catch (_) {
      if (mounted) {
        setState(() {
          loading = false;
          error = 'The perturbation could not load. Retry to enter the lab.';
        });
      }
    }
  }

  Future<void> pick(ImageSource from) async {
    if (locked || vector == null) return;
    if (!await confirmDiscard('Choosing another photo') || !mounted || locked) {
      return;
    }
    setState(() {
      picking = true;
      error = null;
    });
    try {
      final agreed = await confirmPhotoTerms(context);
      if (!mounted || !agreed) return;
      final photo =
          await (widget.photoPicker?.call(from) ??
              ImagePicker().pickImage(source: from));
      if (photo == null) return;
      if (await photo.length() > maxPhotoBytes) {
        throw const FormatException('Choose a photo smaller than 30 MB.');
      }
      final bytes = await photo.readAsBytes();
      final prepared = vector == null
          ? null
          : await processor.prepare(bytes, vector!);
      if (mounted) {
        setState(() {
          source = bytes;
          filename = photo.name;
          result = null;
          resultSaved = false;
          downloadStarted = false;
          preview = prepared;
          previewBytes = null;
          previewAlpha = null;
          previewError = null;
        });
        refreshPreview();
      }
    } on FormatException catch (exception) {
      if (mounted) setState(() => error = exception.message);
    } catch (_) {
      if (mounted) {
        setState(
          () => error =
              'Could not open the photo. Check access permissions or try another image.',
        );
      }
    } finally {
      if (mounted) setState(() => picking = false);
    }
  }

  Future<void> refreshPreview() async {
    if (renderingPreview || preview == null) return;
    renderingPreview = true;
    try {
      // Keep a single job in flight and coalesce moves to the newest intensity.
      while (mounted && preview != null) {
        final current = preview!;
        final intensity = alpha;
        final bytes = await compute(renderCloakPreview, (
          preview: current,
          alpha: intensity,
        ));
        if (!mounted) return;
        if (identical(current, preview)) {
          setState(() {
            previewBytes = bytes;
            previewAlpha = intensity;
            previewError = null;
          });
          if (intensity == alpha) break;
        }
      }
    } catch (_) {
      if (mounted) {
        setState(
          () => previewError =
              'Live preview unavailable. Apply cloak to process the full photo.',
        );
      }
    } finally {
      renderingPreview = false;
    }
  }

  Future<void> generate() async {
    if (source == null || vector == null || locked) return;
    if (!await confirmDiscard('Applying another cloak') || !mounted || locked) {
      return;
    }
    final job = ++generation;
    final bytes = source!;
    final perturbation = vector!;
    final intensity = alpha;
    setState(() {
      busy = true;
      completedStages = 0;
      error = null;
      result = null;
      resultSaved = false;
      downloadStarted = false;
    });
    try {
      final output = await processor.generate(
        bytes,
        perturbation,
        intensity,
        onStage: (stage) {
          if (mounted && job == generation) {
            setState(() => completedStages = stage);
          }
        },
      );
      if (mounted && job == generation) {
        setState(() {
          result = output;
          completedStages = 3;
        });
      }
    } on PhotoProcessingCancelled {
      // Cancellation is expected; late results cannot replace a newer run.
    } catch (failure) {
      if (mounted && job == generation) {
        setState(
          () => error = failure is FormatException
              ? failure.message
              : 'Could not process this image. Try a smaller PNG or JPEG.',
        );
      }
    } finally {
      if (mounted && job == generation) setState(() => busy = false);
    }
  }

  Future<void> export(bool share, BuildContext buttonContext) async {
    final output = result;
    if (output == null || exporting) return;
    final box = buttonContext.findRenderObject() as RenderBox?;
    final origin = box == null
        ? null
        : box.localToGlobal(Offset.zero) & box.size;
    setState(() {
      exporting = true;
      error = null;
    });
    try {
      if (share) {
        await Share.shareXFiles([
          await createShareImageFile(output.output),
        ], sharePositionOrigin: origin);
      } else if (!kIsWeb &&
          (defaultTargetPlatform == TargetPlatform.android ||
              defaultTargetPlatform == TargetPlatform.iOS)) {
        await Gal.putImageBytes(
          output.output,
          name: 'invisiai_${DateTime.now().millisecondsSinceEpoch}',
        );
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Cloaked PNG saved to your gallery.')),
          );
        }
      } else {
        final name = 'invisiai_${DateTime.now().millisecondsSinceEpoch}.png';
        final file = XFile.fromData(
          output.output,
          mimeType: 'image/png',
          name: name,
        );
        if (kIsWeb) {
          await file.saveTo(name);
        } else {
          final destination = await getSaveLocation(
            suggestedName: name,
            acceptedTypeGroups: [
              const XTypeGroup(label: 'PNG image', extensions: ['png']),
            ],
          );
          if (destination == null) return;
          await file.saveTo(destination.path);
        }
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text(
                kIsWeb
                    ? 'Download started. Confirm once your PNG is saved.'
                    : 'Cloaked PNG exported.',
              ),
            ),
          );
        }
      }
      if (!share && mounted && identical(result, output)) {
        setState(() {
          resultSaved = !kIsWeb;
          downloadStarted = kIsWeb;
        });
      }
    } catch (_) {
      if (mounted) {
        setState(
          () => error =
              'Export could not complete. Check permissions or try saving to another location.',
        );
      }
    } finally {
      if (mounted) setState(() => exporting = false);
    }
  }

  bool get locked => busy || exporting || picking || confirming;
  @override
  Widget build(BuildContext context) {
    pageGuard.setActive(!allowLeave && (hasUnsavedResult || busy || exporting));
    return PopScope<void>(
      canPop:
          allowLeave ||
          (!hasUnsavedResult && !busy && !exporting && !picking && !confirming),
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop) requestLeave();
      },
      child: PageShell(
        label: '01 / PHOTO LAB',
        children: [
          eyebrow('YOUR PHOTO. YOUR SIGNAL.'),
          const SizedBox(height: 10),
          Text(
            'A little less readable.\nStill entirely you.',
            style: Theme.of(context).textTheme.headlineLarge,
          ),
          const SizedBox(height: 12),
          Text(
            'Choose a photo. Tune the cloak. Compare the pixels.',
            style: TextStyle(color: context.pixelColors.muted),
          ),
          const SizedBox(height: 24),
          CloakingSteps(
            currentStep: result != null
                ? 2
                : source != null
                ? 1
                : 0,
          ),
          const SizedBox(height: 24),
          if (loading) const LinearProgressIndicator(),
          if (!loading && vector == null)
            TextButton(
              onPressed: loadVector,
              child: const Text(
                'Retry loading perturbation',
                style: TextStyle(fontFamily: 'VT323', fontSize: 18),
              ),
            ),
          if (source == null)
            Container(
              decoration: BoxDecoration(
                color: context.pixelColors.surface,
                border: Border.all(color: context.pixelColors.edge),
              ),
              child: Column(
                children: [
                  Container(
                    width: double.infinity,
                    color: context.pixelColors.green,
                    padding: const EdgeInsets.all(12),
                    child: eyebrow('PHOTO LAB / AWAITING YOUR IMAGE'),
                  ),
                  const SizedBox(height: 30),
                  Container(
                    width: 112,
                    height: 120,
                    decoration: BoxDecoration(
                      color: context.pixelColors.background,
                      border: Border.all(
                        color: context.pixelColors.foreground,
                        width: 4,
                      ),
                      boxShadow: [
                        BoxShadow(
                          color: context.pixelColors.gold,
                          offset: const Offset(8, 8),
                        ),
                      ],
                    ),
                    child: Center(
                      child: PixelIcon(
                        Icons.add_photo_alternate_outlined,
                        size: 64,
                        color: context.pixelColors.muted,
                      ),
                    ),
                  ),
                  const SizedBox(height: 30),
                  const Text(
                    'Start with something worth keeping.',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 16),
                  photoButtons(),
                  Padding(
                    padding: const EdgeInsets.all(20),
                    child: Text(
                      'Processed on your device. Original stays untouched.',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: context.pixelColors.muted,
                        fontSize: 16,
                      ),
                    ),
                  ),
                ],
              ),
            )
          else ...[
            Container(
              color: context.pixelColors.surface,
              padding: const EdgeInsets.all(12),
              child: Row(
                children: [
                  const Icon(Icons.image_outlined, size: 20),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Text(
                      filename,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                  const SizedBox(width: 8),
                  eyebrow(
                    result != null
                        ? 'READY'
                        : busy
                        ? 'WORKING'
                        : 'LIVE PREVIEW',
                  ),
                ],
              ),
            ),
            if (result != null)
              PhotoComparison(clean: result!.clean, output: result!.output)
            else
              Container(
                color: context.pixelColors.surface,
                height: 320,
                width: double.infinity,
                child: Image.memory(
                  previewBytes ?? source!,
                  gaplessPlayback: true,
                  fit: BoxFit.contain,
                  errorBuilder: (_, e, s) => const Center(
                    child: Text('Preview unavailable. Try a PNG or JPEG.'),
                  ),
                ),
              ),
            if (result == null && !busy)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8),
                child: Text(
                  previewError ??
                      (previewAlpha == null
                          ? 'Preparing live preview…'
                          : 'Live preview · ${(previewAlpha! * 100).round()}% intensity · Reduced resolution'),
                  style: TextStyle(
                    color: context.pixelColors.muted,
                    fontSize: 16,
                  ),
                ),
              ),
            const SizedBox(height: 18),
            Panel(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Expanded(child: eyebrow('CLOAK INTENSITY')),
                      Text(
                        '${(alpha * 100).round()}%',
                        style: const TextStyle(fontSize: 30),
                      ),
                    ],
                  ),
                  Slider(
                    key: const ValueKey('cloak-intensity'),
                    value: alpha,
                    divisions: 100,
                    label: '${(alpha * 100).round()}%',
                    semanticFormatterCallback: (value) =>
                        '${(value * 100).round()} percent intensity',
                    onChanged: locked ? null : changeIntensity,
                  ),
                  const Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [Text('Subtle'), Text('Full vector')],
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'Preview updates as you slide. Apply cloak to create the full-resolution PNG and measure its quality.',
                    style: TextStyle(
                      fontSize: 16,
                      color: context.pixelColors.muted,
                    ),
                  ),
                  const SizedBox(height: 18),
                  SizedBox(
                    width: double.infinity,
                    child: FilledButton.icon(
                      onPressed: locked || vector == null ? null : generate,
                      icon: const Icon(Icons.auto_awesome_outlined, size: 18),
                      label: Text(
                        busy
                            ? 'Cloaking ${(completedStages / 3 * 100).round()}%'
                            : 'Apply cloak',
                      ),
                    ),
                  ),
                  const SizedBox(height: 10),
                  if (busy || result != null) ...[
                    CloakingProgress(completedStages: completedStages),
                    if (busy)
                      Padding(
                        padding: const EdgeInsets.only(top: 12),
                        child: OutlinedButton.icon(
                          onPressed: cancelCloaking,
                          icon: const Icon(Icons.stop_circle_outlined),
                          label: const Text('Cancel cloaking'),
                        ),
                      ),
                    const SizedBox(height: 12),
                  ],
                  Center(child: photoButtons()),
                ],
              ),
            ),
          ],
          if (exporting || picking)
            const Padding(
              padding: EdgeInsets.symmetric(vertical: 16),
              child: LinearProgressIndicator(),
            ),
          if (error != null)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 16),
              child: Semantics(
                liveRegion: true,
                child: Text(
                  error!,
                  style: TextStyle(color: Theme.of(context).colorScheme.error),
                ),
              ),
            ),
          if (result != null) ...results(context),
        ],
      ),
    );
  }

  Widget photoButtons() => Wrap(
    alignment: WrapAlignment.center,
    spacing: 12,
    runSpacing: 10,
    children: [
      OutlinedButton.icon(
        onPressed: locked || vector == null
            ? null
            : () => pick(ImageSource.gallery),
        icon: const PixelIcon(Icons.add_photo_alternate_outlined),
        label: Text(source == null ? 'Choose photo' : 'Change photo'),
      ),
      if (!kIsWeb &&
          (defaultTargetPlatform == TargetPlatform.android ||
              defaultTargetPlatform == TargetPlatform.iOS))
        OutlinedButton.icon(
          onPressed: locked || vector == null
              ? null
              : () => pick(ImageSource.camera),
          icon: const PixelIcon(Icons.camera_alt_outlined),
          label: const Text('Camera'),
        ),
    ],
  );
  List<Widget> results(BuildContext context) {
    final r = result!;
    return [
      const SizedBox(height: 32),
      Text(
        resultSaved ? 'PNG saved' : 'Unsaved result',
        style: TextStyle(color: context.pixelColors.muted),
      ),
      const SizedBox(height: 12),
      if (kIsWeb && downloadStarted && !resultSaved) ...[
        const Text('Once your PNG has downloaded, mark this result as saved.'),
        Align(
          alignment: Alignment.centerLeft,
          child: TextButton(
            onPressed: locked ? null : () => setState(() => resultSaved = true),
            child: const Text('Mark as saved'),
          ),
        ),
        const SizedBox(height: 16),
      ],
      ResultInsights(
        result: r,
        alpha: alpha,
        image: imagePanel(r.output, 'CLOAKED / OUTPUT'),
      ),
      const SizedBox(height: 28),
      const Divider(height: 1),
      const SizedBox(height: 24),
      Builder(
        builder: (buttonContext) => LayoutBuilder(
          builder: (context, bounds) {
            final save = FilledButton.icon(
              onPressed: locked ? null : () => export(false, buttonContext),
              icon: const PixelIcon(Icons.download_outlined),
              label: const Text('Save PNG'),
            );
            final share = OutlinedButton.icon(
              onPressed: locked ? null : () => export(true, buttonContext),
              style: OutlinedButton.styleFrom(
                backgroundColor: Colors.transparent,
              ),
              icon: const PixelIcon(Icons.ios_share),
              label: const Text('Share output'),
            );
            if (bounds.maxWidth < 440 ||
                MediaQuery.textScalerOf(context).scale(1) > 1.3) {
              return Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [save, const SizedBox(height: 12), share],
              );
            }
            return Row(
              children: [
                Expanded(child: save),
                const SizedBox(width: 16),
                Expanded(child: share),
              ],
            );
          },
        ),
      ),
    ];
  }

  Widget imagePanel(Uint8List bytes, String label) => ClipRRect(
    borderRadius: BorderRadius.zero,
    child: Container(
      color: context.pixelColors.background,
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(12),
            child: eyebrow(label, color: context.pixelColors.foreground),
          ),
          SizedBox(
            height: 300,
            width: double.infinity,
            child: InteractiveViewer(
              minScale: 1,
              maxScale: 5,
              child: Image.memory(bytes, fit: BoxFit.contain),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(10),
            child: Text(
              'Pinch or scroll to inspect',
              style: TextStyle(
                color: context.pixelColors.foreground,
                fontSize: 11,
              ),
            ),
          ),
        ],
      ),
    ),
  );
  Widget metric(String title, String value, String target, bool? passes) =>
      SizedBox(
        width: 225,
        child: Panel(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              eyebrow(title),
              const SizedBox(height: 12),
              Text(
                value,
                style: const TextStyle(
                  fontSize: 32,
                  fontWeight: FontWeight.w800,
                ),
              ),
              Text(target),
              const SizedBox(height: 12),
              Text(
                passes == null
                    ? 'Unavailable'
                    : passes
                    ? '✓ Target met'
                    : 'Below target',
                style: TextStyle(
                  fontWeight: FontWeight.w700,
                  color: passes == true
                      ? Theme.of(context).brightness == Brightness.dark
                            ? const Color(0xFF9CDAB4)
                            : const Color(0xFF377254)
                      : context.pixelColors.coral,
                ),
              ),
            ],
          ),
        ),
      );
}
