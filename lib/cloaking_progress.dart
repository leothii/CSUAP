import 'package:flutter/material.dart';
import 'pixel_theme.dart';

/// Progress reports completed processing stages, not an estimated time remaining.
class CloakingProgress extends StatelessWidget {
  const CloakingProgress({super.key, required this.completedStages});
  final int completedStages;

  @override
  Widget build(BuildContext context) {
    final completed = completedStages.clamp(0, 3);
    final progress = completed / 3;
    final percent = (progress * 100).round();
    final done = completed == 3;
    final stage = const [
      'Preparing photo',
      'Applying cloak',
      'Measuring image quality',
      'Cloak complete',
    ][completed];
    return Semantics(
      liveRegion: true,
      label: '$stage. $percent percent. $completed of 3 stages complete.',
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: context.pixelColors.surface,
          border: Border.all(color: context.pixelColors.edge),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            if (done)
              const Icon(Icons.check_circle_outline, size: 22)
            else
              SizedBox(
                width: 20,
                height: 20,
                child: CircularProgressIndicator(
                  strokeWidth: 2,
                  color: context.pixelColors.foreground,
                ),
              ),
            const SizedBox(width: 12),
            Expanded(child: Text(stage, style: const TextStyle(fontSize: 22))),
            const SizedBox(width: 8),
            Text('$percent%',
                style:
                    const TextStyle(fontSize: 30, fontWeight: FontWeight.bold)),
          ]),
          const SizedBox(height: 12),
          LinearProgressIndicator(
            value: progress,
            minHeight: 10,
            color: context.pixelColors.foreground,
            semanticsLabel: 'Cloaking progress',
            semanticsValue: '$percent%',
          ),
          const SizedBox(height: 10),
          Text(done
              ? 'Your photo is ready. Explore your results below.'
              : '$completed of 3 stages complete. Processing on your device.'),
          if (!done) ...[
            const SizedBox(height: 6),
            const Text(
                'Progress updates after each stage. Large photos can take longer.'),
          ],
        ]),
      ),
    );
  }
}
