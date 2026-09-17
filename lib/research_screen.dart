import 'research_timeline.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'main.dart'
    show PageShell, Panel, GuideScreen, openPage, heading, eyebrow;
import 'pixel_theme.dart';
import 'research_content.dart';

class DocsScreen extends StatefulWidget {
  const DocsScreen({super.key});
  @override
  State<DocsScreen> createState() => _DocsScreenState();
}

class _DocsScreenState extends State<DocsScreen> {
  final controller = ScrollController();
  int section = 0;
  int stage = 0;
  int selectedAlpha = 0;
  bool ssim = true;
  int resource = 0;
  static const stages = [
    (
      '01 / PREPARE',
      'Start with a shared context.',
      'The preprocessing pipeline filters MS-COCO portraits. The study learns a pattern for a target context rather than a separate pattern for every photo.'
    ),
    (
      '02 / TRAIN',
      'One pattern. A frozen encoder.',
      'I-FGSM repeatedly adjusts the perturbation against CLIP ViT-B/32. The encoder weights stay fixed; the pixel pattern is what learns.'
    ),
    (
      '03 / APPLY',
      'Reuse the pattern locally.',
      'The app tiles a bundled 224 × 224 RGB vector across the photo. Intensity scales the pixel changes, and the result is exported as a new PNG.'
    ),
    (
      '04 / EVALUATE',
      'Ask three different questions.',
      'SSIM and PSNR measure visual quality. CLIP and caption comparisons assess semantic disruption. Clean versus cloaked LoRA experiments examine downstream effects.'
    ),
  ];
  static const resources = [
    'Research paper',
    'GitHub repository',
    'Supplement'
  ];
  static const urls = [researchPaperUrl, repositoryUrl, extraResourceUrl];

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  Future<void> openResource() async {
    try {
      final uri = Uri.parse(urls[resource]);
      if (!['http', 'https'].contains(uri.scheme) ||
          !await launchUrl(uri, mode: LaunchMode.externalApplication)) {
        throw const FormatException();
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Could not open this resource.')));
      }
    }
  }

  @override
  Widget build(BuildContext context) => PageShell(
          label: '02 / RESEARCH',
          scrollController: controller,
          children: [
            heading(context, 'One pattern.\nThree questions.',
                'Can a reusable cloak preserve a photo’s appearance while disrupting how AI models interpret it?'),
            ResearchTimeline(
                selected: section,
                onSelect: (value) {
                  setState(() => section = value);
                }),
            const SizedBox(height: 20),
            if (section == 0) ...[
              Panel(
                  color: pixelGreen,
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        eyebrow('THE STUDY / CS-UAP'),
                        const SizedBox(height: 12),
                        Text('Small pixel changes. A bigger research question.',
                            style: Theme.of(context).textTheme.headlineLarge),
                        const SizedBox(height: 12),
                        const Text(
                            'A context-specific universal adversarial perturbation is a '
                            'trained pixel pattern reused across photos. The aim is to change '
                            'model behavior while keeping the image visually similar.'),
                        const SizedBox(height: 20),
                        const Text(
                            'What we can currently show: recorded SSIM and PSNR results '
                            'for 30 test images at each of six intensities.'),
                        const SizedBox(height: 12),
                        const Text(
                            'What that does not prove: semantic protection or resistance '
                            'to downstream fine-tuning.'),
                      ])),
              const SizedBox(height: 16),
              evidenceCard(
                  '01',
                  'Does it still look similar?',
                  'RESULTS AVAILABLE',
                  'SSIM checks image structure. PSNR checks pixel error. Explore the measured trade-off in The evidence.'),
              evidenceCard(
                  '02',
                  'Does the model interpret it differently?',
                  'NOT MEASURED IN APP',
                  'CLIP alignment and ClipCap/BERTScore caption comparisons need separate model evaluation.'),
              evidenceCard(
                  '03',
                  'Does the effect survive fine-tuning?',
                  'NOTEBOOKS AVAILABLE',
                  'Clean and cloaked SDXL LoRA experiments belong to the downstream pipeline. No downstream results are presented here.'),
            ],
            if (section == 1) ...[
              const Text(
                  'Follow the experiment. Select a stage to see what changes and why.'),
              const SizedBox(height: 16),
              Wrap(spacing: 8, runSpacing: 8, children: [
                for (var i = 0; i < stages.length; i++)
                  ChoiceChip(
                      label: Text(stages[i].$1),
                      selected: stage == i,
                      onSelected: (_) => setState(() => stage = i)),
              ]),
              const SizedBox(height: 16),
              Panel(
                  color: pixelGreen,
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        eyebrow('PIPELINE / ${stage + 1} OF 4'),
                        const SizedBox(height: 12),
                        LinearProgressIndicator(
                            value: (stage + 1) / 4,
                            semanticsLabel: 'Pipeline stage ${stage + 1} of 4'),
                        const SizedBox(height: 20),
                        Text(stages[stage].$2,
                            style: Theme.of(context).textTheme.headlineLarge),
                        const SizedBox(height: 12),
                        Text(stages[stage].$3),
                        const SizedBox(height: 24),
                        FilledButton(
                            onPressed: () =>
                                openPage(context, const GuideScreen()),
                            child: const Text('Try the field guide')),
                      ])),
            ],
            if (section == 2) ...[
              heading(context, 'Explore the trade-off.',
                  'Select a metric, then an intensity. Every bar represents a recorded mean across 30 test images.'),
              Wrap(spacing: 8, children: [
                ChoiceChip(
                    label: const Text('SSIM'),
                    selected: ssim,
                    onSelected: (_) => setState(() => ssim = true)),
                ChoiceChip(
                    label: const Text('PSNR'),
                    selected: !ssim,
                    onSelected: (_) => setState(() => ssim = false)),
              ]),
              const SizedBox(height: 12),
              Text(ssim
                  ? 'Structure similarity · scale 0–1 · target ≥ 0.95'
                  : 'Pixel fidelity · scale 0–40 dB · target ≥ 30 dB'),
              const SizedBox(height: 12),
              for (var i = 0; i < perceptualResults.length; i++)
                Padding(
                    padding: const EdgeInsets.only(bottom: 8),
                    child: Semantics(
                      selected: selectedAlpha == i,
                      child: OutlinedButton(
                        key: ValueKey('research-alpha-$i'),
                        style: OutlinedButton.styleFrom(
                            backgroundColor:
                                selectedAlpha == i ? pixelGreen : pixelSurface,
                            padding: const EdgeInsets.all(14)),
                        onPressed: () => setState(() => selectedAlpha = i),
                        child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                  'α ${perceptualResults[i].alpha} · ${ssim ? perceptualResults[i].ssim : '${perceptualResults[i].psnr} dB'}',
                                  style: const TextStyle(
                                      fontFamily: 'VT323', fontSize: 22)),
                              const SizedBox(height: 8),
                              LayoutBuilder(
                                  builder: (context, box) => Stack(children: [
                                        LinearProgressIndicator(
                                            minHeight: 12,
                                            value: double.parse(ssim
                                                    ? perceptualResults[i].ssim
                                                    : perceptualResults[i]
                                                        .psnr) /
                                                (ssim ? 1 : 40),
                                            color: pixelCream,
                                            backgroundColor: pixelBackground),
                                        Positioned(
                                            left: (box.maxWidth - 2) *
                                                (ssim ? .95 : .75),
                                            top: 0,
                                            bottom: 0,
                                            child: Container(
                                                width: 2, color: pixelCoral)),
                                      ])),
                            ]),
                      ),
                    )),
              const Text(
                  'Vertical marker = study target. Higher means less visual change.'),
              const SizedBox(height: 20),
              Panel(
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                    eyebrow(
                        'SELECTED INTENSITY / α ${perceptualResults[selectedAlpha].alpha}'),
                    const SizedBox(height: 12),
                    Text(
                        'Mean SSIM ${perceptualResults[selectedAlpha].ssim}\nMean PSNR ${perceptualResults[selectedAlpha].psnr} dB',
                        style: const TextStyle(fontSize: 28)),
                    const SizedBox(height: 12),
                    Text(selectedAlpha <= 1
                        ? 'Both means meet the quality targets.'
                        : selectedAlpha <= 3
                            ? 'Mean PSNR meets its target; mean SSIM falls below.'
                            : 'Both means fall below the quality targets.'),
                    const SizedBox(height: 12),
                    const Text(
                        'An average is not a pass for every photo. These results do not establish semantic protection.'),
                  ])),
              const SizedBox(height: 16),
              const ExpansionTile(
                  title: Text('Method, source & limitations'),
                  children: [
                    Text(perceptualResultsMethod),
                    SizedBox(height: 12),
                    Text(
                        'Rounded values from outputs/evaluation/perceptual/alpha_summary.csv. '
                        'The CSV includes medians, standard deviations and 95% confidence intervals. '
                        'Per-image measurements are available alongside it. These bars show means only.'),
                  ]),
            ],
            if (section == 3) ...[
              const Text(
                  'Follow the source material. Unpublished links stay marked as pending.'),
              const SizedBox(height: 16),
              Wrap(spacing: 8, runSpacing: 8, children: [
                for (var i = 0; i < resources.length; i++)
                  ChoiceChip(
                      label: Text(resources[i]),
                      selected: resource == i,
                      onSelected: (_) => setState(() => resource = i)),
              ]),
              const SizedBox(height: 16),
              Panel(
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                    eyebrow('SOURCE MATERIAL'),
                    const SizedBox(height: 12),
                    Text([
                      'The full study: objectives, methodology, experiments, and findings.',
                      'Explore the app, training code, evaluation notebooks, and recorded results.',
                      'Additional study materials will appear here when a resource is configured.'
                    ][resource]),
                    const SizedBox(height: 20),
                    if (urls[resource].isEmpty)
                      const Chip(label: Text('Link pending'))
                    else
                      FilledButton.icon(
                          onPressed: openResource,
                          icon: const Icon(Icons.open_in_new),
                          label: const Text('Open resource')),
                  ])),
              const SizedBox(height: 20),
              evidenceCard('READ', 'Perceptual evaluation', 'IN THE REPOSITORY',
                  'outputs/evaluation/perceptual/ contains per-image metrics, summaries, plots, and evaluation metadata.'),
              evidenceCard('RUN', 'Experiment notebooks', 'IN THE REPOSITORY',
                  'src/evaluation/perceptual/ contains the SSIM/PSNR analysis. src/evaluation/LORA/ contains fine-tuning and generation notebooks.'),
            ],
          ]);

  Widget evidenceCard(
          String number, String title, String status, String body) =>
      Padding(
          padding: const EdgeInsets.only(bottom: 12),
          child: Panel(
              child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                eyebrow('$number / $status'),
                const SizedBox(height: 10),
                Text(title, style: const TextStyle(fontSize: 28)),
                const SizedBox(height: 8),
                Text(body),
              ])));
}
