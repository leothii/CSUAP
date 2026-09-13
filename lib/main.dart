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
  int comparison = 1;
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
      error = null;
      result = null;
    });
    try {
      final output = await compute(
          generateCloak, (bytes: source!, vector: vector!, alpha: alpha));
      if (mounted) {
        setState(() {
          result = output;
          comparison = 1;
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
        heading(context, 'Same photo.\nDifferent signal.',
            'An experiment in what machines see. Keep what makes it yours.'),
        Wrap(spacing: 8, runSpacing: 8, children: [
          Chip(
              label: Text(source == null
                  ? '01  Choose a photo'
                  : '01  Photo selected')),
          Chip(
              label: Text(busy
                  ? '02  Generating…'
                  : result == null
                      ? '02  Apply cloak'
                      : '02  Cloak generated')),
          const Chip(label: Text('03  Inspect & export'))
        ]),
        const SizedBox(height: 20),
        if (loading) const LinearProgressIndicator(),
        if (!loading && vector == null)
          TextButton(
              onPressed: loadVector,
              child: const Text('Retry loading perturbation',
                  style: TextStyle(fontFamily: 'VT323', fontSize: 18))),
        if (source == null)
          Panel(
              color: teal,
              child: Column(children: [
                const SizedBox(height: 20),
                const SizedBox(
                    width: 150,
                    height: 150,
                    child: CustomPaint(painter: SignalPainter())),
                const SizedBox(height: 20),
                const Text('One photo. A new layer of possibility.',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                        fontSize: 23,
                        fontWeight: FontWeight.w700,
                        fontFamily: 'VT323')),
                const SizedBox(height: 12),
                const Text(
                    'Your original stays untouched.\nProcessing happens here, on your device.',
                    textAlign: TextAlign.center),
                const SizedBox(height: 20),
                photoButtons(),
              ]))
        else ...[
          if (result == null)
            ClipRRect(
                borderRadius: BorderRadius.zero,
                child: Container(
                    color: ink,
                    height: 300,
                    width: double.infinity,
                    child: Image.memory(source!,
                        fit: BoxFit.contain,
                        errorBuilder: (_, e, s) => const Center(
                            child: Text(
                                'Preview unavailable. Try a PNG or JPEG.',
                                style: TextStyle(color: paper)))))),
          const SizedBox(height: 12),
          Text(filename,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(color: muted)),
          const SizedBox(height: 12),
          photoButtons(),
          const SizedBox(height: 24),
          eyebrow('CHOOSE YOUR PERTURBATION INTENSITY'),
          const SizedBox(height: 10),
          Wrap(spacing: 10, runSpacing: 10, children: [
            for (final preset in [
              ('Subtle', .25),
              ('Balanced', .5),
              ('Full vector', 1.0)
            ])
              ChoiceChip(
                  label: Text('${preset.$1} · ${(preset.$2 * 100).round()}%'),
                  selected: alpha == preset.$2,
                  onSelected: locked
                      ? null
                      : (_) => setState(() {
                            alpha = preset.$2;
                            result = null;
                          }))
          ]),
          const SizedBox(height: 10),
          const Text(
              'Higher intensity adds more of the trained pattern. Check quality after each run.',
              style: TextStyle(fontSize: 13, color: muted)),
          const SizedBox(height: 18),
          FilledButton.icon(
              onPressed: locked || vector == null ? null : generate,
              icon: const PixelIcon(Icons.auto_awesome_outlined),
              label: Text(
                  busy
                      ? 'Applying vector & measuring quality…'
                      : 'Generate cloaked photo',
                  style: const TextStyle(fontFamily: 'VT323', fontSize: 18))),
        ],
        if (busy || exporting || picking)
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
      Wrap(spacing: 8, runSpacing: 8, children: [
        for (var i = 0; i < 3; i++)
          ChoiceChip(
              label: Text(['Before', 'After', 'Side by side'][i]),
              selected: comparison == i,
              onSelected: (_) => setState(() => comparison = i))
      ]),
      const SizedBox(height: 14),
      if (comparison == 2)
        LayoutBuilder(builder: (context, box) {
          final images = [
            Expanded(child: imagePanel(r.clean, 'CLEAN')),
            const SizedBox(width: 10),
            Expanded(child: imagePanel(r.output, 'CLOAKED'))
          ];
          return box.maxWidth < 500
              ? Column(children: [
                  imagePanel(r.clean, 'CLEAN'),
                  const SizedBox(height: 10),
                  imagePanel(r.output, 'CLOAKED')
                ])
              : Row(children: images);
        })
      else
        imagePanel(comparison == 0 ? r.clean : r.output,
            comparison == 0 ? 'CLEAN / ORIGINAL' : 'CLOAKED / OUTPUT'),
      const SizedBox(height: 24),
      eyebrow('MEASURED ON THIS OUTPUT'),
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
