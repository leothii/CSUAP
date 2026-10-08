import 'first_use_tour.dart';
import 'package:flutter/material.dart';
import 'lab_processing.dart';
import 'main.dart' show PhotoComparison;
import 'pixel_theme.dart';
import 'result_insights.dart';

/// The result route keeps its save/leave lifecycle in ProtectionScreen while
/// this workspace owns only inspection controls.
class ResultsStudio extends StatefulWidget {
  const ResultsStudio({
    super.key,
    required this.result,
    required this.alpha,
    required this.filename,
    required this.saved,
    required this.retained,
    required this.locked,
    required this.exporting,
    required this.confirmDownload,
    required this.onSave,
    required this.onShare,
    required this.onBack,
    required this.onMarkSaved,
    this.error,
  });
  final LabResult result;
  final double alpha;
  final String filename;
  final bool saved, retained, locked, exporting, confirmDownload;
  final String? error;
  final void Function(BuildContext) onSave, onShare;
  final VoidCallback onBack, onMarkSaved;
  @override
  State<ResultsStudio> createState() => _ResultsStudioState();
}

class _ResultsStudioState extends State<ResultsStudio> {
  final saveTip = GlobalKey();
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) {
        showFirstUseTour(context, 'save', [
          TourStop(
            saveTip,
            'Keep your cloaked copy',
            'Compare or zoom into the result, then Save PNG to keep it. Share output sends the cloaked copy to a destination you choose.',
          ),
        ]);
      }
    });
  }

  String mode = 'Compare';
  final zoom = TransformationController();
  double scale = 1;
  @override
  void dispose() {
    zoom.dispose();
    super.dispose();
  }

  void setZoom(double value) {
    setState(() {
      scale = value.clamp(1, 5);
      zoom.value = Matrix4.diagonal3Values(scale, scale, 1);
    });
  }

  @override
  Widget build(BuildContext context) {
    final colors = context.pixelColors;
    final r = widget.result;
    return Scaffold(
      appBar: AppBar(
        leading: BackButton(onPressed: widget.locked ? null : widget.onBack),
        title: const Text('RESULT STUDIO'),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 16),
            child: Icon(Icons.check_circle_outline, color: colors.green),
          ),
        ],
      ),
      bottomNavigationBar: SafeArea(
        top: false,
        child: Container(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 12),
          decoration: BoxDecoration(
            color: colors.surface,
            border: Border(top: BorderSide(color: colors.edge)),
          ),
          child: Builder(
            builder: (buttonContext) => LayoutBuilder(
              builder: (context, bounds) {
                final buttons = [
                  FilledButton.icon(
                    key: saveTip,
                    onPressed: widget.locked
                        ? null
                        : () => widget.onSave(buttonContext),
                    icon: const Icon(Icons.download_outlined),
                    label: Text(widget.exporting ? 'Saving...' : 'Save PNG'),
                  ),
                  OutlinedButton.icon(
                    style: OutlinedButton.styleFrom(
                      backgroundColor: Colors.transparent,
                    ),
                    onPressed: widget.locked
                        ? null
                        : () => widget.onShare(buttonContext),
                    icon: const Icon(Icons.ios_share),
                    label: const Text('Share output'),
                  ),
                ];
                if (bounds.maxWidth < 360 ||
                    MediaQuery.textScalerOf(context).scale(1) > 1.3) {
                  return Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      buttons.first,
                      const SizedBox(height: 8),
                      buttons.last,
                    ],
                  );
                }
                return Row(
                  children: [
                    Expanded(child: buttons.first),
                    const SizedBox(width: 12),
                    Expanded(child: buttons.last),
                  ],
                );
              },
            ),
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1180),
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Your photo. Cloak applied.',
                    style: Theme.of(context).textTheme.headlineMedium,
                  ),
                  const SizedBox(height: 6),
                  const Text(
                    'Compare the result, inspect the details, then save your copy.',
                  ),
                  const SizedBox(height: 12),
                  Wrap(
                    spacing: 16,
                    runSpacing: 6,
                    children: [
                      Text(
                        widget.saved ? 'PNG saved' : 'Unsaved result',
                        style: TextStyle(color: colors.muted),
                      ),
                      Text('${r.width} x ${r.height} pixels'),
                      Text('Intensity ${(widget.alpha * 100).round()}%'),
                    ],
                  ),
                  if (widget.filename.isNotEmpty)
                    Padding(
                      padding: const EdgeInsets.only(top: 6),
                      child: Text(
                        widget.filename,
                        overflow: TextOverflow.ellipsis,
                        maxLines: 2,
                      ),
                    ),
                  const SizedBox(height: 20),
                  LayoutBuilder(
                    builder: (context, bounds) {
                      final viewer = inspection(
                        bounds.maxWidth >= 860 ? 370 : 230,
                      );
                      final guide = explanation();
                      if (bounds.maxWidth >= 860) {
                        return Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Expanded(flex: 7, child: viewer),
                            const SizedBox(width: 24),
                            Expanded(flex: 3, child: guide),
                          ],
                        );
                      }
                      return Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [viewer, const SizedBox(height: 20), guide],
                      );
                    },
                  ),
                  if (widget.confirmDownload) ...[
                    const SizedBox(height: 16),
                    const Text(
                      'Download started. Check your downloads before marking this copy as saved.',
                    ),
                    TextButton(
                      onPressed: widget.locked ? null : widget.onMarkSaved,
                      child: const Text('Mark as saved'),
                    ),
                  ],
                  if (widget.error != null)
                    Padding(
                      padding: const EdgeInsets.only(top: 16),
                      child: Semantics(
                        liveRegion: true,
                        child: Text(
                          widget.error!,
                          style: TextStyle(color: colors.coral),
                        ),
                      ),
                    ),
                  const SizedBox(height: 28),
                  ResultInsights(
                    result: r,
                    alpha: widget.alpha,
                    image: SizedBox(
                      height: 300,
                      child: InteractiveViewer(
                        minScale: 1,
                        maxScale: 5,
                        child: Image.memory(
                          r.output,
                          fit: BoxFit.contain,
                          semanticLabel: 'Cloaked photo detail',
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 24),
                  OutlinedButton.icon(
                    onPressed: widget.locked ? null : widget.onBack,
                    icon: const Icon(Icons.arrow_back),
                    label: Text(
                      widget.retained ? 'Back to batch' : 'Back to photo lab',
                    ),
                  ),
                  const SizedBox(height: 12),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget inspection(double height) => Container(
    padding: const EdgeInsets.all(12),
    decoration: BoxDecoration(
      color: context.pixelColors.surface,
      border: Border.all(color: context.pixelColors.edge),
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Wrap(
          spacing: 8,
          runSpacing: 4,
          children: [
            for (final value in ['Compare', 'Original', 'Cloaked'])
              ChoiceChip(
                label: Text(value),
                selected: mode == value,
                onSelected: (_) {
                  setState(() {
                    mode = value;
                    scale = 1;
                    zoom.value = Matrix4.identity();
                  });
                },
              ),
          ],
        ),
        const SizedBox(height: 12),
        if (mode == 'Compare')
          PhotoComparison(
            clean: widget.result.clean,
            output: widget.result.output,
            height: height,
          )
        else ...[
          ClipRect(
            child: SizedBox(
              height: height,
              width: double.infinity,
              child: InteractiveViewer(
                transformationController: zoom,
                minScale: 1,
                maxScale: 5,
                onInteractionEnd: (_) =>
                    setState(() => scale = zoom.value.getMaxScaleOnAxis()),
                child: Image.memory(
                  mode == 'Original'
                      ? widget.result.clean
                      : widget.result.output,
                  fit: BoxFit.contain,
                  gaplessPlayback: true,
                  semanticLabel: '$mode photo',
                ),
              ),
            ),
          ),
          Wrap(
            alignment: WrapAlignment.center,
            crossAxisAlignment: WrapCrossAlignment.center,
            children: [
              IconButton(
                tooltip: 'Zoom out',
                onPressed: scale <= 1 ? null : () => setZoom(scale - .5),
                icon: const Icon(Icons.remove),
              ),
              Text('${scale.toStringAsFixed(1)}x'),
              IconButton(
                tooltip: 'Zoom in',
                onPressed: scale >= 5 ? null : () => setZoom(scale + .5),
                icon: const Icon(Icons.add),
              ),
              TextButton(
                onPressed: () => setZoom(1),
                child: const Text('Reset view'),
              ),
            ],
          ),
          const Text(
            'Pinch to zoom. Drag to move around the photo.',
            textAlign: TextAlign.center,
          ),
        ],
      ],
    ),
  );

  Widget explanation() => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(
        'Looks almost the same?',
        style: Theme.of(context).textTheme.titleLarge,
      ),
      const SizedBox(height: 8),
      const Text(
        'That is intentional. The cloak changes pixel values while aiming to preserve how your photo looks.',
      ),
      const SizedBox(height: 12),
      const Text(
        'Only the cloaked version is saved. Your original file stays unchanged.',
      ),
      const SizedBox(height: 12),
      ExpansionTile(
        tilePadding: EdgeInsets.zero,
        title: const Text('What do the scores mean?'),
        children: const [
          Padding(
            padding: EdgeInsets.only(bottom: 12),
            child: Text(
              'SSIM compares image structure. PSNR measures pixel differences. Higher scores mean closer visual similarity. These scores do not prove protection against AI models.',
            ),
          ),
        ],
      ),
      ExpansionTile(
        tilePadding: EdgeInsets.zero,
        title: const Text('What should I do next?'),
        children: [
          Padding(
            padding: const EdgeInsets.only(bottom: 12),
            child: Text(
              widget.retained
                  ? 'Save this photo individually, or return to your batch to download the completed photos together as a ZIP.'
                  : 'Drag the comparison divider to inspect the changes. Choose Save PNG to keep the cloaked copy, or return to the photo lab to try another intensity.',
            ),
          ),
        ],
      ),
    ],
  );
}
