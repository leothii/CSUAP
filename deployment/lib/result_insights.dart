import 'photo_processor.dart';
export 'pixel_histogram.dart' show pixelChangeHistogram;
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'lab_processing.dart';
import 'pixel_theme.dart';

class ResultInsights extends StatefulWidget {
  const ResultInsights(
      {super.key,
      required this.result,
      required this.alpha,
      required this.image});
  final LabResult result;
  final double alpha;
  final Widget image;
  @override
  State<ResultInsights> createState() => _ResultInsightsState();
}

class _ResultInsightsState extends State<ResultInsights> {
  final controller = PageController();
  final processor = PhotoProcessor();
  int page = 0;
  late Future<List<int>> histogram;
  static const titles = [
    'Image quality',
    'Pixel changes',
    'Output details',
    'Zoom in'
  ];
  @override
  void initState() {
    super.initState();
    loadHistogram();
  }

  void loadHistogram() {
    histogram = processor.histogram(widget.result.clean, widget.result.output);
  }

  @override
  void didUpdateWidget(ResultInsights oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (!identical(oldWidget.result, widget.result)) loadHistogram();
  }

  @override
  void dispose() {
    processor.dispose();
    controller.dispose();
    super.dispose();
  }

  void go(int index) {
    if (MediaQuery.disableAnimationsOf(context)) {
      controller.jumpToPage(index);
    } else {
      controller.animateToPage(index,
          duration: const Duration(milliseconds: 250), curve: Curves.easeOut);
    }
  }

  final Map<int, double> heights = {};

  @override
  Widget build(BuildContext context) {
    final r = widget.result;
    final pages = <Widget>[
      card('How close to the original?',
          'Higher scores mean less visual change.', [
        quality('Structure \u00b7 SSIM',
            r.ssim?.toStringAsFixed(4) ?? 'Unavailable', r.ssim, -1, 1, .95),
        const SizedBox(height: 28),
        quality(
            'Pixel fidelity \u00b7 PSNR',
            r.psnr.isInfinite ? '\u221e dB' : '${r.psnr.toStringAsFixed(2)} dB',
            r.psnr,
            0,
            60,
            30),
        const SizedBox(height: 24),
        note('Markers show the study targets. The PSNR bar ends at 60 dB.'),
        if (r.ssim == null) ...[
          const SizedBox(height: 12),
          note('SSIM needs a photo at least 7 \u00d7 7 pixels.'),
        ],
      ]),
      card('Where did pixels change?',
          'Taller bars mean more pixels. Left means less change.', [
        FutureBuilder<List<int>>(
          future: histogram,
          builder: (context, snapshot) {
            if (snapshot.hasError) {
              return note(
                  'Histogram unavailable. You can still explore your quality scores.');
            }
            if (!snapshot.hasData) {
              return SizedBox(
                  height: 240,
                  child: Center(
                      child: MediaQuery.disableAnimationsOf(context)
                          ? const Text('Loading pixel changes')
                          : const CircularProgressIndicator(
                              semanticsLabel: 'Loading pixel changes')));
            }
            final bins = snapshot.data!;
            final total = bins.fold<int>(0, (a, b) => a + b);
            const labels = [
              '0',
              '>0\u20132',
              '>2\u20135',
              '>5\u201310',
              '>10\u201320',
              '>20'
            ];
            return Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  note('SHARE OF SAMPLED PIXELS'),
                  const SizedBox(height: 16),
                  SizedBox(
                      height: 180 +
                          MediaQuery.textScalerOf(context).scale(18) * 1.5,
                      child: Row(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            for (var i = 0; i < bins.length; i++)
                              Expanded(
                                  child: Semantics(
                                excludeSemantics: true,
                                label:
                                    '${labels[i]} RGB change: ${(bins[i] / total * 100).toStringAsFixed(1)} percent of sampled pixels',
                                child: Column(
                                    mainAxisAlignment: MainAxisAlignment.end,
                                    children: [
                                      FittedBox(
                                          child: Text(
                                              '${(bins[i] / total * 100).toStringAsFixed(1)}%',
                                              style: const TextStyle(
                                                  fontSize: 18))),
                                      const SizedBox(height: 8),
                                      Container(
                                        margin: const EdgeInsets.symmetric(
                                            horizontal: 5),
                                        height: 170 * bins[i] / total,
                                        color: i == 0
                                            ? context.pixelColors.chartGreen
                                            : context.pixelColors.chartGold,
                                      ),
                                    ]),
                              )),
                          ])),
                  Container(height: 1, color: context.pixelColors.edge),
                  const SizedBox(height: 12),
                  Row(children: [
                    for (final label in labels)
                      Expanded(
                          child: Center(
                              child: FittedBox(
                                  child: Text(label,
                                      style: const TextStyle(fontSize: 17)))))
                  ]),
                  const SizedBox(height: 16),
                  Center(child: note('Average RGB change (0\u2013255)')),
                  const SizedBox(height: 28),
                  note(
                      '$total pixels sampled on a uniform grid. Bar height uses a 0\u2013100% scale.'),
                ]);
          },
        ),
      ]),
      card(
          'Your output at a glance', 'The details behind your cloaked photo.', [
        detail('Resolution', '${r.width} \u00d7 ${r.height}'),
        detail('Format', 'PNG'),
        detail('Cloak intensity', '${(widget.alpha * 100).round()}%'),
        detail('Mean squared error', r.mse.toStringAsFixed(4)),
        const SizedBox(height: 16),
        note(
            'Lower error means smaller RGB changes. SSIM compares 7 \u00d7 7 windows; PSNR measures full-resolution pixel error.'),
        const Padding(
            padding: EdgeInsets.symmetric(vertical: 20),
            child: Divider(height: 1)),
        const Text('AI protection \u00b7 Not measured',
            style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
        const SizedBox(height: 12),
        note(
            'Fooling rate, CLIP Score, BERTScore F1, and SDXL / LoRA metrics need separate model evaluation.'),
      ]),
      card('Take a closer look', 'Inspect your output before saving.',
          [widget.image]),
    ];
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      const Text('Your photo, explained',
          style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold)),
      const SizedBox(height: 8),
      note('Swipe or use the buttons to explore your results.'),
      const SizedBox(height: 24),
      resizePage(
        child: SizedBox(
          height: heights[page] ?? 560,
          child: PageView(
            key: const ValueKey('result-insights'),
            controller: controller,
            onPageChanged: (index) => setState(() => page = index),
            children: [
              for (var i = 0; i < pages.length; i++)
                OverflowBox(
                  alignment: Alignment.topCenter,
                  minHeight: 0,
                  maxHeight: double.infinity,
                  child: _MeasureHeight(
                    onHeight: (height) {
                      if (mounted && heights[i] != height) {
                        setState(() => heights[i] = height);
                      }
                    },
                    child: pages[i],
                  ),
                ),
            ],
          ),
        ),
      ),
      const SizedBox(height: 16),
      Row(children: [
        IconButton(
            tooltip: 'Previous insight',
            onPressed: page > 0 ? () => go(page - 1) : null,
            icon: const Icon(Icons.chevron_left)),
        Expanded(
            child: Semantics(
                liveRegion: true,
                child: Text('${titles[page]}  \u00b7  ${page + 1} / 4',
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 18)))),
        IconButton(
            tooltip: 'Next insight',
            onPressed: page < 3 ? () => go(page + 1) : null,
            icon: const Icon(Icons.chevron_right)),
      ]),
      Row(mainAxisAlignment: MainAxisAlignment.center, children: [
        for (var i = 0; i < titles.length; i++)
          Semantics(
              selected: i == page,
              child: IconButton(
                tooltip: '${titles[i]}, page ${i + 1} of 4',
                onPressed: () => go(i),
                icon: AnimatedContainer(
                  duration: MediaQuery.disableAnimationsOf(context)
                      ? Duration.zero
                      : const Duration(milliseconds: 180),
                  width: i == page ? 22 : 6,
                  height: 6,
                  color: i == page
                      ? context.pixelColors.foreground
                      : context.pixelColors.muted,
                ),
              )),
      ]),
      const SizedBox(height: 16),
      Center(child: note('Visual quality does not measure AI protection.')),
    ]);
  }

  Widget resizePage({required Widget child}) =>
      MediaQuery.disableAnimationsOf(context)
          ? child
          : AnimatedSize(
              duration: const Duration(milliseconds: 220),
              alignment: Alignment.topCenter,
              curve: Curves.easeOut,
              child: child);

  Widget note(String text) => Text(text,
      style: TextStyle(
          fontSize: 18, height: 1.35, color: context.pixelColors.muted));

  Widget card(String title, String subtitle, List<Widget> children) =>
      Container(
        width: double.infinity,
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: context.pixelColors.surface,
          border: Border.all(color: context.pixelColors.edge),
        ),
        child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title,
                  style: const TextStyle(
                      fontSize: 26, height: 1.15, fontWeight: FontWeight.bold)),
              const SizedBox(height: 12),
              note(subtitle),
              const SizedBox(height: 28),
              ...children,
            ]),
      );

  Widget detail(String label, String value) => Padding(
        padding: const EdgeInsets.only(bottom: 16),
        child: Wrap(
            alignment: WrapAlignment.spaceBetween,
            spacing: 20,
            runSpacing: 4,
            children: [
              note(label),
              Text(value, style: const TextStyle(fontSize: 23)),
            ]),
      );

  Widget quality(String name, String value, double? score, double min,
      double max, double target) {
    final fraction =
        score == null ? 0.0 : ((score - min) / (max - min)).clamp(0.0, 1.0);
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      note(name),
      const SizedBox(height: 8),
      Text(value,
          style: const TextStyle(fontSize: 36, fontWeight: FontWeight.bold)),
      const SizedBox(height: 14),
      Semantics(
          label: '$name $value; target $target',
          child: LayoutBuilder(
              builder: (context, box) => Stack(children: [
                    Container(
                        height: 10,
                        color: context.pixelColors.edge.withValues(alpha: .3)),
                    Container(
                        height: 10,
                        width: box.maxWidth * fraction,
                        color: context.pixelColors.chartGreen),
                    Positioned(
                        left: (box.maxWidth - 2) * (target - min) / (max - min),
                        child: Container(
                            width: 2,
                            height: 10,
                            color: context.pixelColors.foreground)),
                  ]))),
      const SizedBox(height: 12),
      note(
          'Target \u2265 $target \u00b7 ${score == null ? 'Unavailable' : score >= target ? 'Target met' : 'Below target'}'),
    ]);
  }
}

/// Measure each page at its natural height so only the outer screen scrolls.
class _MeasureHeight extends SingleChildRenderObjectWidget {
  const _MeasureHeight({required this.onHeight, required super.child});
  final ValueChanged<double> onHeight;
  @override
  RenderObject createRenderObject(BuildContext context) =>
      _HeightReporter(onHeight);
  @override
  void updateRenderObject(
          BuildContext context, covariant _HeightReporter renderObject) =>
      renderObject.onHeight = onHeight;
}

class _HeightReporter extends RenderProxyBox {
  _HeightReporter(this.onHeight);
  ValueChanged<double> onHeight;
  double? previousHeight;
  @override
  void performLayout() {
    super.performLayout();
    final height = size.height;
    if (height == previousHeight) return;
    previousHeight = height;
    WidgetsBinding.instance.addPostFrameCallback((_) => onHeight(height));
  }
}
