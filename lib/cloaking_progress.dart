import 'package:flutter/material.dart';
import 'pixel_theme.dart';

/// Animates work checkpoints; never invents timer-based completion.
class CloakingProgress extends StatelessWidget {
  const CloakingProgress(
      {super.key,
      required this.completedStages,
      this.percent,
      this.label,
      this.batch = false});
  final int completedStages;
  final int? percent;
  final String? label;
  final bool batch;
  @override
  Widget build(BuildContext context) {
    final completed = completedStages.clamp(0, 3);
    final target = (percent ?? (completed / 3 * 100).round()).clamp(0, 100);
    final done = target == 100;
    final stage = label ??
        (percent == null
            ? const [
                'Preparing photo',
                'Applying cloak',
                'Measuring image quality',
                'Cloak complete'
              ][completed]
            : done
                ? 'Cloak complete'
                : target < 8
                    ? 'Preparing photo'
                    : target < 45
                        ? 'Applying cloak'
                        : target < 90
                            ? 'Measuring image quality'
                            : 'Encoding PNG files');
    final reduced = MediaQuery.disableAnimationsOf(context);
    return TweenAnimationBuilder<double>(
      tween: Tween<double>(
          begin: percent == null ? target.toDouble() : 1,
          end: target.toDouble()),
      duration: reduced ? Duration.zero : const Duration(milliseconds: 180),
      builder: (context, value, _) => Semantics(
        liveRegion: true,
        excludeSemantics: true,
        label: percent == null
            ? '$stage. $target percent. $completed of 3 stages complete.'
            : '$stage. $target percent.',
        child: Container(
            width: double.infinity,
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
                color: context.pixelColors.surface,
                border: Border.all(color: context.pixelColors.edge)),
            child:
                Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Row(children: [
                if (done)
                  const Icon(Icons.check_circle_outline, size: 26)
                else if (reduced)
                  const Icon(Icons.hourglass_top, size: 26)
                else
                  SizedBox(
                      width: 24,
                      height: 24,
                      child: CircularProgressIndicator(
                          strokeWidth: 2,
                          color: context.pixelColors.foreground)),
                const SizedBox(width: 12),
                Expanded(
                    child: Text(stage, style: const TextStyle(fontSize: 24))),
                const SizedBox(width: 8),
                Text('${value.round()}%',
                    style: const TextStyle(
                        fontSize: 38, fontWeight: FontWeight.bold)),
              ]),
              const SizedBox(height: 16),
              LinearProgressIndicator(
                  value: value / 100,
                  minHeight: 14,
                  color: context.pixelColors.foreground),
              const SizedBox(height: 12),
              Text(done
                  ? 'Processing finished. Your results are ready.'
                  : batch
                      ? 'Processing locally. Completed photos stay available if you cancel.'
                      : 'Processing on your device. Your original stays unchanged.'),
              if (!done)
                const Padding(
                    padding: EdgeInsets.only(top: 6),
                    child: Text(
                        'Progress tracks completed work, not time remaining. Encoding may pause the percentage.')),
            ])),
      ),
    );
  }
}
