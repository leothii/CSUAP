import 'package:flutter/material.dart';
import 'pixel_theme.dart';

class CloakingSteps extends StatelessWidget {
  const CloakingSteps({super.key, required this.currentStep});
  final int currentStep;

  @override
  Widget build(BuildContext context) =>
      LayoutBuilder(builder: (context, bounds) {
        final colors = context.pixelColors;
        final stacked = bounds.maxWidth < 660 ||
            MediaQuery.textScalerOf(context).scale(1) > 1.3;
        Widget step(int index) {
          final active = currentStep == index;
          final complete = currentStep > index;
          return Semantics(
            selected: active,
            label:
                'Step ${index + 1}, ${active ? 'current' : complete ? 'complete' : 'upcoming'}',
            child: Container(
              width: double.infinity,
              padding: EdgeInsets.all(stacked ? 16 : 20),
              decoration: BoxDecoration(
                color: active ? colors.green : colors.surface,
                border: Border.all(
                    color: active ? colors.foreground : colors.edge,
                    width: active ? 2 : 1),
              ),
              child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(children: [
                      Text('STEP ${index + 1}',
                          style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold,
                              letterSpacing: 1.5,
                              color: colors.muted)),
                      const Spacer(),
                      if (complete)
                        Icon(Icons.check_circle_outline,
                            size: 22, color: colors.foreground),
                      if (active)
                        Icon(Icons.arrow_forward,
                            size: 22, color: colors.foreground),
                    ]),
                    const SizedBox(height: 8),
                    Text(
                        const [
                          'Add your photo',
                          'Apply the cloak',
                          'Save & share'
                        ][index],
                        style: TextStyle(
                            fontSize: stacked ? 30 : 32,
                            height: 1.05,
                            fontWeight: FontWeight.bold,
                            color: colors.foreground)),
                  ]),
            ),
          );
        }

        if (stacked) {
          return Column(children: [
            for (var index = 0; index < 3; index++) ...[
              if (index > 0) const SizedBox(height: 8),
              step(index),
            ]
          ]);
        }
        return Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          for (var index = 0; index < 3; index++) ...[
            if (index > 0) const SizedBox(width: 12),
            Expanded(child: step(index)),
          ],
        ]);
      });
}
