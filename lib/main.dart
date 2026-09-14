import 'dart:math' as math;
import 'package:google_fonts/google_fonts.dart';
import 'pixel_theme.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:file_selector/file_selector.dart';
import 'package:gal/gal.dart';
import 'package:image_picker/image_picker.dart';
import 'package:share_plus/share_plus.dart';
import 'package:url_launcher/url_launcher.dart';
import 'lab_processing.dart';
import 'intro_screen.dart';
import 'perturbation_protection.dart';
import 'research_content.dart';
import 'share_image_file.dart';

const paper = pixelCream;
const ink = pixelBackground;
const teal = pixelCream;
const muted = pixelMuted;
void main() => runApp(const CsuapApp());

class CsuapApp extends StatelessWidget {
  const CsuapApp({super.key});
  @override
  Widget build(BuildContext context) => MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'shield. / CS-UAP',
      theme: pixelTheme(),
      home: IntroScreen(menuBuilder: (_) => const MainMenuScreen()));
}

void openPage(BuildContext context, Widget page) =>
    Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => page));
Widget eyebrow(String text, {Color color = muted}) => Text(text,
    style: TextStyle(
        fontSize: 11,
        fontWeight: FontWeight.w700,
        letterSpacing: 1.6,
        color: color));
Widget heading(BuildContext context, String title, String subtitle) => Padding(
    padding: const EdgeInsets.only(bottom: 28),
    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Text(title, style: Theme.of(context).textTheme.headlineLarge),
      const SizedBox(height: 14),
      Text(subtitle, style: const TextStyle(color: muted, height: 1.5)),
    ]));

class PageShell extends StatelessWidget {
  const PageShell({super.key, required this.label, required this.children});
  final String label;
  final List<Widget> children;
  @override
  Widget build(BuildContext context) => Scaffold(
      appBar: AppBar(
          title: Text('shield.',
              style: GoogleFonts.pressStart2p(
                  fontSize: 18,
                  fontWeight: FontWeight.w800,
                  letterSpacing: -1,
                  color: teal)),
          actions: [
            if (MediaQuery.sizeOf(context).width >= 450)
              Padding(
                  padding: const EdgeInsets.only(right: 20),
                  child: eyebrow(label))
          ]),
      body: CustomPaint(
          painter: const PixelDitherPainter(),
          child: SafeArea(
              child: Center(
                  child: ConstrainedBox(
                      constraints: const BoxConstraints(maxWidth: 1080),
                      child: ListView(
                          padding: const EdgeInsets.fromLTRB(24, 30, 24, 40),
                          children: children))))));
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
    'Meet the people behind shield.',
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
          const CreditsScreen()
        ][index]);
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        body: SafeArea(
          child: LayoutBuilder(
              builder: (context, constraints) => SingleChildScrollView(
                    child: ConstrainedBox(
                      constraints:
                          BoxConstraints(minHeight: constraints.maxHeight),
                      child: Padding(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 24, vertical: 40),
                        child: Center(
                          child: ConstrainedBox(
                            constraints: const BoxConstraints(maxWidth: 320),
                            child: Column(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  const PixelIcon(Icons.shield_outlined,
                                      size: 48, color: pixelMuted),
                                  const SizedBox(height: 24),
                                  FittedBox(
                                      fit: BoxFit.scaleDown,
                                      child: Text('shield.',
                                          style: GoogleFonts.pressStart2p(
                                              fontSize: 34,
                                              height: 1.2,
                                              color: pixelCream))),
                                  const SizedBox(height: 12),
                                  const Text('a little privacy for your photos',
                                      style: TextStyle(
                                          color: pixelMuted, fontSize: 19),
                                      textAlign: TextAlign.center),
                                  const SizedBox(height: 44),
                                  Focus(
                                    onKeyEvent: (_, event) {
                                      if (event is KeyDownEvent ||
                                          event is KeyRepeatEvent) {
                                        final direction = event.logicalKey ==
                                                LogicalKeyboardKey.arrowDown
                                            ? 1
                                            : event.logicalKey ==
                                                    LogicalKeyboardKey.arrowUp
                                                ? -1
                                                : 0;
                                        if (direction != 0) {
                                          final index = (selected + direction) %
                                              labels.length;
                                          select(index);
                                          nodes[index].requestFocus();
                                          return KeyEventResult.handled;
                                        }
                                      }
                                      return KeyEventResult.ignored;
                                    },
                                    child: Column(children: [
                                      for (var i = 0; i < labels.length; i++)
                                        Semantics(
                                            selected: selected == i,
                                            child: Padding(
                                              padding: const EdgeInsets.only(
                                                  bottom: 4),
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
                                                      ? const Color(0xFFFFF3D9)
                                                      : Colors.transparent,
                                                  foregroundColor: pixelCream,
                                                  minimumSize: const Size(
                                                      double.infinity, 52),
                                                  padding: const EdgeInsets
                                                      .symmetric(
                                                      horizontal: 16,
                                                      vertical: 16),
                                                  shape:
                                                      const BeveledRectangleBorder(),
                                                  textStyle:
                                                      GoogleFonts.pressStart2p(
                                                          fontSize: 12,
                                                          height: 1.6),
                                                ),
                                                child: Row(children: [
                                                  SizedBox(
                                                      width: 20,
                                                      height: 16,
                                                      child: selected == i
                                                          ? const CustomPaint(
                                                              painter:
                                                                  _MenuArrowPainter())
                                                          : null),
                                                  const SizedBox(width: 16),
                                                  Expanded(
                                                      child: Text(labels[i])),
                                                ]),
                                              ),
                                            )),
                                    ]),
                                  ),
                                  const SizedBox(height: 24),
                                  ConstrainedBox(
                                      constraints:
                                          const BoxConstraints(minHeight: 54),
                                      child: Text(descriptions[selected],
                                          textAlign: TextAlign.center,
                                          style: const TextStyle(
                                              color: pixelMuted,
                                              fontSize: 20))),
                                  const SizedBox(height: 40),
                                  const Text('ON-DEVICE PROCESSING ? CS-UAP',
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                          fontSize: 13,
                                          color: pixelMuted,
                                          letterSpacing: .8)),
                                ]),
                          ),
                        ),
                      ),
                    ),
                  )),
        ),
      );
}

class _MenuArrowPainter extends CustomPainter {
  const _MenuArrowPainter();
  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = const Color(0xFF946C20)
      ..isAntiAlias = false;
    for (var row = 0; row < 7; row++) {
      final width = (row <= 3 ? row + 1 : 7 - row) * 2.0;
      canvas.drawRect(Rect.fromLTWH(3, row * 2.0 + 1, width, 2), p);
    }
  }

  @override
  bool shouldRepaint(covariant _MenuArrowPainter oldDelegate) => false;
}

class SignalPainter extends CustomPainter {
  const SignalPainter();
  @override
  void paint(Canvas canvas, Size size) {
    PixelIconPainter(Icons.shield_outlined, pixelGreen.withValues(alpha: .35))
        .paint(canvas, size);
  }

  @override
  bool shouldRepaint(covariant SignalPainter oldDelegate) => false;
}

class DocsScreen extends StatefulWidget {
  const DocsScreen({super.key});
  @override
  State<DocsScreen> createState() => _DocsScreenState();
}

class _DocsScreenState extends State<DocsScreen> {
  int selected = 0;
  static const titles = [
    'The method',
    'Research paper',
    'GitHub repository',
    'More to come'
  ];
  static const details = [
    'Train one context-specific vector with I-FGSM against frozen CLIP ViT-B/32. Apply it locally, assess image quality, then evaluate semantic disruption and downstream persistence in the research pipeline.',
    'The full study: objectives, methodology, experiments, and findings. The paper link will appear here when it is ready.',
    'Explore the Flutter application, portrait preprocessing, perturbation training, and export code.',
    'A space for the next research resource: a dataset, demo, poster, or supplementary results.',
  ];
  @override
  Widget build(BuildContext context) =>
      PageShell(label: '02 / RESEARCH MAP', children: [
        heading(context, 'Connected by curiosity.',
            'Tap a node to follow the study. Every part has a purpose.'),
        LayoutBuilder(
            builder: (context, box) => SizedBox(
                height: 360,
                child: Stack(children: [
                  const Positioned.fill(
                      child: CustomPaint(painter: MapPainter())),
                  const Align(
                      alignment: Alignment.center,
                      child: SizedBox.square(
                          dimension: 88,
                          child: PixelBevelPanel(
                              accent: pixelGreen,
                              child: Center(
                                  child: Text('CS-UAP',
                                      style: TextStyle(
                                          color: teal,
                                          fontWeight: FontWeight.w800)))))),
                  for (var i = 0; i < titles.length; i++)
                    Align(
                        alignment: [
                          const Alignment(-1, -.85),
                          const Alignment(1, -.85),
                          const Alignment(-1, .85),
                          const Alignment(1, .85)
                        ][i],
                        child: SizedBox(
                            width: math.min(190, box.maxWidth * .45),
                            child: Semantics(
                                selected: selected == i,
                                child: FilledButton.tonal(
                                    onPressed: () =>
                                        setState(() => selected = i),
                                    style: FilledButton.styleFrom(
                                        backgroundColor: selected == i
                                            ? pixelGold
                                            : pixelSurface,
                                        foregroundColor: paper,
                                        side: BorderSide(
                                            width: 3,
                                            color: selected == i
                                                ? pixelGreen
                                                : teal.withValues(alpha: .4)),
                                        padding: const EdgeInsets.symmetric(
                                            horizontal: 12, vertical: 20)),
                                    child: Text(titles[i],
                                        textAlign: TextAlign.center))))),
                ]))),
        const SizedBox(height: 20),
        Panel(
            child: AnimatedSize(
                duration: MediaQuery.disableAnimationsOf(context)
                    ? Duration.zero
                    : const Duration(milliseconds: 200),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      eyebrow('SELECTED NODE / 0${selected + 1}'),
                      const SizedBox(height: 12),
                      Text(titles[selected],
                          style: const TextStyle(
                              fontSize: 26,
                              fontWeight: FontWeight.bold,
                              fontFamily: 'VT323')),
                      const SizedBox(height: 10),
                      Text(details[selected]),
                      const SizedBox(height: 20),
                      if (selected == 0)
                        FilledButton(
                            onPressed: () =>
                                openPage(context, const GuideScreen()),
                            child: const Text('Explore models & metrics',
                                style: TextStyle(
                                    fontFamily: 'VT323', fontSize: 18)))
                      else if ((selected == 1 && researchPaperUrl.isEmpty) ||
                          (selected == 3 && extraResourceUrl.isEmpty))
                        const Chip(label: Text('Link pending'))
                      else
                        FilledButton.icon(
                            onPressed: () async {
                              final url = selected == 1
                                  ? researchPaperUrl
                                  : selected == 2
                                      ? repositoryUrl
                                      : extraResourceUrl;
                              try {
                                final uri = Uri.parse(url);
                                if (!(uri.scheme == 'https' ||
                                        uri.scheme == 'http') ||
                                    !await launchUrl(uri,
                                        mode: LaunchMode.externalApplication)) {
                                  throw const FormatException();
                                }
                              } catch (_) {
                                if (context.mounted) {
                                  ScaffoldMessenger.of(context).showSnackBar(
                                      const SnackBar(
                                          content: Text(
                                              'Could not open this resource.')));
                                }
                              }
                            },
                            icon: const PixelIcon(Icons.open_in_new, size: 18),
                            label: const Text('Open resource')),
                    ]))),
      ]);
}

class MapPainter extends CustomPainter {
  const MapPainter();
  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final p = Paint()
      ..color = teal.withValues(alpha: .25)
      ..isAntiAlias = false
      ..strokeWidth = 2
      ..style = PaintingStyle.stroke;
    for (final end in [
      Offset(size.width * .2, 45),
      Offset(size.width * .8, 45),
      Offset(size.width * .2, size.height - 45),
      Offset(size.width * .8, size.height - 45)
    ]) {
      canvas.drawPath(
          Path()
            ..moveTo(center.dx, center.dy)
            ..lineTo(end.dx, center.dy)
            ..lineTo(end.dx, end.dy),
          p);
    }
  }

  @override
  bool shouldRepaint(covariant MapPainter oldDelegate) => false;
}

class GuideScreen extends StatelessWidget {
  const GuideScreen({super.key});
  @override
  Widget build(BuildContext context) =>
      PageShell(label: '03 / FIELD GUIDE', children: [
        heading(context, 'A little context.\nA clearer picture.',
            'Start with the walkthrough. Open any term to go deeper.'),
        for (final step in [
          (
            '01 / CHOOSE',
            'Bring a photo into the lab. The original stays unchanged.'
          ),
          (
            '02 / CLOAK',
            'Choose a perturbation intensity and generate a full-resolution PNG. Intensity is not a guarantee of protection.'
          ),
          (
            '03 / INSPECT',
            'Compare the images, check SSIM and PSNR, and save your output. Semantic protection needs a separate research evaluation.'
          )
        ])
          Padding(
              padding: const EdgeInsets.only(bottom: 12),
              child: Panel(
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                    eyebrow(step.$1),
                    const SizedBox(height: 10),
                    Text(step.$2)
                  ]))),
        const SizedBox(height: 22),
        eyebrow('THE MODELS & THE MEASURES'),
        const SizedBox(height: 12),
        for (final entry in glossary.entries)
          ExpansionTile(
              title: Text(entry.key,
                  style: const TextStyle(fontWeight: FontWeight.w700)),
              childrenPadding: const EdgeInsets.fromLTRB(16, 0, 16, 22),
              expandedCrossAxisAlignment: CrossAxisAlignment.start,
              children: [Text(entry.value)]),
      ]);
}

class CreditsScreen extends StatefulWidget {
  const CreditsScreen({super.key});
  @override
  State<CreditsScreen> createState() => _CreditsScreenState();
}

class _CreditsScreenState extends State<CreditsScreen> {
  int selected = 0;
  @override
  Widget build(BuildContext context) =>
      PageShell(label: '04 / THE PEOPLE', children: [
        heading(context, 'Built by people.\nFor personal privacy.',
            'Hover, focus, or tap a name to meet the team.\nProfiles are placeholders until the study team is added.'),
        Wrap(spacing: 10, runSpacing: 10, children: [
          for (var i = 0; i < team.length; i++)
            MouseRegion(
                onEnter: (_) => setState(() => selected = i),
                child: Focus(
                    onFocusChange: (focused) {
                      if (focused) setState(() => selected = i);
                    },
                    child: ChoiceChip(
                        label: Text(team[i].name),
                        selected: selected == i,
                        onSelected: (_) => setState(() => selected = i))))
        ]),
        const SizedBox(height: 24),
        AnimatedSwitcher(
            duration: MediaQuery.disableAnimationsOf(context)
                ? Duration.zero
                : const Duration(milliseconds: 220),
            child: Panel(
                key: ValueKey(selected),
                color: pixelGreen,
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                          height: 180,
                          width: double.infinity,
                          decoration: BoxDecoration(
                              color: ink.withValues(alpha: .65),
                              borderRadius: BorderRadius.zero),
                          child: team[selected].photoAsset == null
                              ? const Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                      PixelIcon(Icons.person_outline,
                                          size: 65, color: muted),
                                      SizedBox(height: 8),
                                      Text('PORTRAIT TO COME',
                                          style: TextStyle(
                                              fontSize: 11, letterSpacing: 2))
                                    ])
                              : Image.asset(team[selected].photoAsset!,
                                  fit: BoxFit.contain)),
                      const SizedBox(height: 24),
                      eyebrow(team[selected].role.toUpperCase()),
                      const SizedBox(height: 8),
                      Text(team[selected].name,
                          style: const TextStyle(
                              fontSize: 32,
                              fontWeight: FontWeight.w800,
                              fontFamily: 'VT323')),
                      const SizedBox(height: 16),
                      Text(team[selected].work),
                    ]))),
        const SizedBox(height: 24),
        const Text(
            'Interaction inspiration: the supplied VengeanceUI / Codrops staggered-grid reference. Adapted for Flutter with keyboard and touch navigation.'),
      ]);
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
          child: child));
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
  Widget build(BuildContext context) => Column(children: [
        Container(
          color: pixelSurface,
          height: 320,
          child: LayoutBuilder(builder: (context, box) {
            void move(double x) =>
                setState(() => position = (x / box.maxWidth).clamp(0.0, 1.0));
            return GestureDetector(
              onHorizontalDragUpdate: (event) => move(event.localPosition.dx),
              onTapDown: (event) => move(event.localPosition.dx),
              child: Stack(fit: StackFit.expand, children: [
                Image.memory(widget.output,
                    fit: BoxFit.contain, gaplessPlayback: true),
                ClipRect(
                  clipper: _ComparisonClipper(position),
                  child: Image.memory(widget.clean,
                      fit: BoxFit.contain, gaplessPlayback: true),
                ),
                Positioned(left: 10, top: 10, child: _tag('ORIGINAL')),
                Positioned(right: 10, top: 10, child: _tag('CLOAKED')),
                Positioned(
                    left: (box.maxWidth - 2) * position,
                    top: 0,
                    bottom: 0,
                    child: Container(width: 2, color: pixelCream)),
                Positioned(
                    left: (box.maxWidth - 36) * position,
                    top: 142,
                    child: Container(
                      width: 36,
                      height: 36,
                      color: pixelGold,
                      child: const Icon(Icons.swap_horiz,
                          textDirection: TextDirection.ltr),
                    )),
              ]),
            );
          }),
        ),
        Semantics(
            label: 'Before and after comparison',
            child: Slider(
              value: position,
              semanticFormatterCallback: (value) =>
                  '${(value * 100).round()} percent original visible',
              onChanged: (value) => setState(() => position = value),
            )),
        const Text('Drag to compare • Original / Cloaked',
            style: TextStyle(color: muted, fontSize: 16)),
      ]);

  Widget _tag(String label) => Container(
      color: pixelBackground,
      padding: const EdgeInsets.all(6),
      child: Text(label, style: const TextStyle(fontSize: 14)));
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
  const ProtectionScreen({super.key});
  @override
  State<ProtectionScreen> createState() => _ProtectionScreenState();
}

class _ProtectionScreenState extends State<ProtectionScreen> {
  Float32List? vector;
  Uint8List? source;
  LabResult? result;
  String? error;
  String filename = '';
  double alpha = .5;
  bool busy = false, exporting = false, picking = false, loading = true;
  int completedStages = 0;
  String stage = "Preparing photo";
  @override
  void initState() {
    super.initState();
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
          asset.buffer.asUint8List(asset.offsetInBytes, asset.lengthInBytes));
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
    setState(() {
      picking = true;
      error = null;
    });
    try {
      final photo = await ImagePicker().pickImage(source: from);
      if (photo == null) return;
      final bytes = await photo.readAsBytes();
      if (mounted) {
        setState(() {
          source = bytes;
          filename = photo.name;
          result = null;
        });
      }
    } catch (_) {
      if (mounted) {
        setState(() => error =
            'Could not open the photo. Check access permissions or try another image.');
      }
    } finally {
      if (mounted) setState(() => picking = false);
    }
  }

  Future<void> generate() async {
    if (source == null || vector == null) return;
    setState(() {
      busy = true;
      completedStages = 0;
      stage = "Preparing photo";
      error = null;
      result = null;
    });
    try {
      final clean = await compute(preparePhoto, source!);
      if (!mounted) return;
      setState(() {
        completedStages = 1;
        stage = 'Applying cloak';
      });
      final cloaked = await compute(
          cloakPhoto, (bytes: clean, vector: vector!, alpha: alpha));
      if (!mounted) return;
      setState(() {
        completedStages = 2;
        stage = 'Measuring image quality';
      });
      final output =
          await compute(inspectPhoto, (clean: clean, output: cloaked));
      if (mounted) {
        setState(() {
          result = output;
          completedStages = 3;
        });
      }
    } catch (_) {
      if (mounted) {
        setState(() =>
            error = 'Could not process this image. Try a smaller PNG or JPEG.');
      }
    } finally {
      if (mounted) setState(() => busy = false);
    }
  }

  Future<void> export(bool share, BuildContext buttonContext) async {
    final output = result;
    if (output == null || exporting) return;
    final box = buttonContext.findRenderObject() as RenderBox?;
    final origin =
        box == null ? null : box.localToGlobal(Offset.zero) & box.size;
    setState(() => exporting = true);
    try {
      if (share) {
        await Share.shareXFiles([await createShareImageFile(output.output)],
            sharePositionOrigin: origin);
      } else if (!kIsWeb &&
          (defaultTargetPlatform == TargetPlatform.android ||
              defaultTargetPlatform == TargetPlatform.iOS)) {
        await Gal.putImageBytes(output.output,
            name: 'shield_${DateTime.now().millisecondsSinceEpoch}');
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
              content: Text('Cloaked PNG saved to your gallery.')));
        }
      } else {
        final name = 'shield_${DateTime.now().millisecondsSinceEpoch}.png';
        final file =
            XFile.fromData(output.output, mimeType: 'image/png', name: name);
        if (kIsWeb) {
          await file.saveTo(name);
        } else {
          final destination =
              await getSaveLocation(suggestedName: name, acceptedTypeGroups: [
            const XTypeGroup(label: 'PNG image', extensions: ['png'])
          ]);
          if (destination == null) return;
          await file.saveTo(destination.path);
        }
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Cloaked PNG exported.')));
        }
      }
    } catch (_) {
      if (mounted) {
        setState(() => error =
            'Export could not complete. Check permissions or try saving to another location.');
      }
    } finally {
      if (mounted) setState(() => exporting = false);
    }
  }

  bool get locked => busy || exporting || picking;
  @override
  Widget build(BuildContext context) =>
      PageShell(label: '01 / PHOTO LAB', children: [
        eyebrow('YOUR PHOTO. YOUR SIGNAL.'),
        const SizedBox(height: 10),
        Text('A little less readable.\nStill entirely you.',
            style: Theme.of(context).textTheme.headlineLarge),
        const SizedBox(height: 12),
        const Text('Choose a photo. Tune the cloak. Compare the pixels.',
            style: TextStyle(color: muted)),
        const SizedBox(height: 24),
        Row(children: [
          for (var i = 0; i < 3; i++)
            Expanded(
                child: Container(
              padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 6),
              decoration: BoxDecoration(
                color: (result != null
                            ? 2
                            : source != null
                                ? 1
                                : 0) ==
                        i
                    ? pixelGreen
                    : pixelSurface,
                border: const Border(
                    bottom: BorderSide(color: pixelEdge, width: 2)),
              ),
              child: Text(['01 / ADD', '02 / CLOAK', '03 / KEEP'][i],
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 16)),
            )),
        ]),
        const SizedBox(height: 18),
        if (loading) const LinearProgressIndicator(),
        if (!loading && vector == null)
          TextButton(
              onPressed: loadVector,
              child: const Text('Retry loading perturbation',
                  style: TextStyle(fontFamily: 'VT323', fontSize: 18))),
        if (source == null)
          Container(
            decoration: BoxDecoration(
              color: pixelSurface,
              border: Border.all(color: pixelEdge),
            ),
            child: Column(children: [
              Container(
                width: double.infinity,
                color: pixelGreen,
                padding: const EdgeInsets.all(12),
                child: eyebrow('PHOTO LAB / AWAITING YOUR IMAGE'),
              ),
              const SizedBox(height: 30),
              Transform.rotate(
                angle: -.07,
                child: Container(
                  width: 110,
                  height: 120,
                  decoration: BoxDecoration(
                    color: pixelBackground,
                    border: Border.all(color: pixelCream, width: 2),
                    boxShadow: const [
                      BoxShadow(color: pixelGold, offset: Offset(8, 8))
                    ],
                  ),
                  child: const Center(
                      child: Icon(Icons.add_photo_alternate_outlined,
                          size: 48, color: pixelMuted)),
                ),
              ),
              const SizedBox(height: 30),
              const Text('Start with something worth keeping.',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold)),
              const SizedBox(height: 16),
              photoButtons(),
              const Padding(
                padding: EdgeInsets.all(20),
                child: Text(
                    'Processed on your device. Original stays untouched.',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: muted, fontSize: 16)),
              ),
            ]),
          )
        else ...[
          Container(
            color: pixelSurface,
            padding: const EdgeInsets.all(12),
            child: Row(children: [
              const Icon(Icons.image_outlined, size: 20),
              const SizedBox(width: 10),
              Expanded(
                  child: Text(filename,
                      maxLines: 1, overflow: TextOverflow.ellipsis)),
              const SizedBox(width: 8),
              eyebrow(result != null
                  ? 'READY'
                  : busy
                      ? 'WORKING'
                      : 'ORIGINAL'),
            ]),
          ),
          if (result != null)
            PhotoComparison(clean: result!.clean, output: result!.output)
          else
            Container(
              color: pixelSurface,
              height: 320,
              width: double.infinity,
              child: Image.memory(source!,
                  fit: BoxFit.contain,
                  errorBuilder: (_, e, s) => const Center(
                      child: Text('Preview unavailable. Try a PNG or JPEG.'))),
            ),
          if (busy)
            Container(
              padding: const EdgeInsets.all(18),
              color: pixelGreen,
              child: Semantics(
                  liveRegion: true,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(stage, style: const TextStyle(fontSize: 23)),
                      const SizedBox(height: 10),
                      LinearProgressIndicator(
                          value: completedStages / 3,
                          minHeight: 8,
                          color: pixelCream),
                      const SizedBox(height: 8),
                      Text(
                          '$completedStages of 3 stages complete / Processing on device',
                          style: const TextStyle(fontSize: 16)),
                    ],
                  )),
            ),
          const SizedBox(height: 18),
          Panel(
              child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(children: [
                Expanded(child: eyebrow('CLOAK INTENSITY')),
                Text('${(alpha * 100).round()}%',
                    style: const TextStyle(fontSize: 30)),
              ]),
              Slider(
                value: alpha,
                divisions: 100,
                label: '${(alpha * 100).round()}%',
                semanticFormatterCallback: (value) =>
                    '${(value * 100).round()} percent intensity',
                onChanged: locked
                    ? null
                    : (value) => setState(() {
                          alpha = value;
                          result = null;
                        }),
              ),
              const Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [Text('Subtle'), Text('Full vector')]),
              const SizedBox(height: 12),
              const Text(
                  'More intensity adds more of the trained pattern. Apply to see the result.',
                  style: TextStyle(fontSize: 16, color: muted)),
              const SizedBox(height: 18),
              SizedBox(
                  width: double.infinity,
                  child: FilledButton.icon(
                    onPressed: locked || vector == null ? null : generate,
                    icon: const Icon(Icons.auto_awesome_outlined, size: 18),
                    label: Text(busy ? 'Cloaking...' : 'Apply cloak'),
                  )),
              const SizedBox(height: 10),
              Center(child: photoButtons()),
            ],
          )),
        ],
        if (exporting || picking)
          const Padding(
              padding: EdgeInsets.symmetric(vertical: 16),
              child: LinearProgressIndicator()),
        if (error != null)
          Padding(
              padding: const EdgeInsets.symmetric(vertical: 16),
              child: Semantics(
                  liveRegion: true,
                  child: Text(error!,
                      style: TextStyle(
                          color: Theme.of(context).colorScheme.error)))),
        if (result != null) ...results(context),
      ]);
  Widget photoButtons() => Wrap(
          alignment: WrapAlignment.center,
          spacing: 12,
          runSpacing: 10,
          children: [
            OutlinedButton.icon(
                onPressed: locked ? null : () => pick(ImageSource.gallery),
                icon: const PixelIcon(Icons.add_photo_alternate_outlined),
                label: Text(source == null ? 'Choose photo' : 'Change photo')),
            if (!kIsWeb &&
                (defaultTargetPlatform == TargetPlatform.android ||
                    defaultTargetPlatform == TargetPlatform.iOS))
              OutlinedButton.icon(
                  onPressed: locked ? null : () => pick(ImageSource.camera),
                  icon: const PixelIcon(Icons.camera_alt_outlined),
                  label: const Text('Camera')),
          ]);
  List<Widget> results(BuildContext context) {
    final r = result!;
    return [
      const SizedBox(height: 32),
      Semantics(
          liveRegion: true,
          child: heading(context, 'Meet your new pixels.',
              '${r.width} × ${r.height} · Full-resolution PNG · ${(alpha * 100).round()}% intensity')),
      eyebrow('MEASURED ON THIS OUTPUT'),
      ExpansionTile(
        tilePadding: EdgeInsets.zero,
        title: const Text('Zoom into cloaked pixels'),
        children: [imagePanel(r.output, 'CLOAKED / OUTPUT')],
      ),
      const SizedBox(height: 12),
      Wrap(spacing: 12, runSpacing: 12, children: [
        metric('SSIM', r.ssim?.toStringAsFixed(4) ?? 'N/A', 'Target ≥ 0.95',
            r.ssim == null ? null : r.ssim! >= .95),
        metric(
            'PSNR',
            r.psnr.isInfinite ? '∞ dB' : '${r.psnr.toStringAsFixed(2)} dB',
            'Target ≥ 30 dB',
            r.psnr >= 30)
      ]),
      const SizedBox(height: 12),
      const Text(
          'Full-resolution RGB comparison against the original. SSIM uses 7 × 7 sliding windows; PSNR uses pixel error. Passing these targets indicates image quality, not proven semantic protection.',
          style: TextStyle(color: muted, fontSize: 13)),
      if (r.ssim == null)
        const Text('SSIM requires an image at least 7 × 7 pixels.'),
      const SizedBox(height: 22),
      ExpansionTile(
          tilePadding: EdgeInsets.zero,
          title: const Text('Semantic & downstream evaluation'),
          subtitle:
              const Text('Research pipeline required · Not measured here'),
          children: [
            for (final item in [
              (
                'CLIP Score',
                'Clean vs cloaked image–text alignment. Requires the CLIP encoder and a shared text reference.'
              ),
              (
                'BERTScore F1',
                'Clean vs cloaked ClipCap captions. Requires caption and language models.'
              ),
              (
                'SDXL / LoRA · CLIP Score & FID',
                'Compare outputs from clean and cloaked adapters. Requires fine-tuning and generated image sets; FID is a dataset metric.'
              )
            ])
              ListTile(
                  contentPadding: EdgeInsets.zero,
                  leading: const PixelIcon(Icons.science_outlined),
                  title: Text(item.$1),
                  subtitle: Text(item.$2)),
          ]),
      const SizedBox(height: 20),
      Builder(
          builder: (buttonContext) =>
              Wrap(spacing: 12, runSpacing: 12, children: [
                FilledButton.icon(
                    onPressed:
                        locked ? null : () => export(false, buttonContext),
                    icon: const PixelIcon(Icons.download_outlined),
                    label: const Text('Save PNG')),
                OutlinedButton.icon(
                    onPressed:
                        locked ? null : () => export(true, buttonContext),
                    icon: const PixelIcon(Icons.ios_share),
                    label: const Text('Share output'))
              ])),
    ];
  }

  Widget imagePanel(Uint8List bytes, String label) => ClipRRect(
      borderRadius: BorderRadius.zero,
      child: Container(
          color: ink,
          child: Column(children: [
            Padding(
                padding: const EdgeInsets.all(12),
                child: eyebrow(label, color: paper)),
            SizedBox(
                height: 300,
                width: double.infinity,
                child: InteractiveViewer(
                    minScale: 1,
                    maxScale: 5,
                    child: Image.memory(bytes, fit: BoxFit.contain))),
            const Padding(
                padding: EdgeInsets.all(10),
                child: Text('Pinch or scroll to inspect',
                    style: TextStyle(color: paper, fontSize: 11)))
          ])));
  Widget metric(String title, String value, String target, bool? passes) =>
      SizedBox(
          width: 225,
          child: Panel(
              child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                eyebrow(title),
                const SizedBox(height: 12),
                Text(value,
                    style: const TextStyle(
                        fontSize: 32, fontWeight: FontWeight.w800)),
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
                            ? const Color(0xFF377254)
                            : pixelCoral))
              ])));
}
