import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'main.dart' show PageShell, Panel, heading, eyebrow;
import 'pixel_theme.dart';
import 'research_content.dart';

class CreditsScreen extends StatefulWidget {
  const CreditsScreen({super.key});
  @override
  State<CreditsScreen> createState() => _CreditsScreenState();
}

class _CreditsScreenState extends State<CreditsScreen> {
  int selected = 0;
  double drag = 0;
  int direction = 1;
  void select(int index) {
    setState(() {
      direction = index < selected ? -1 : 1;
      selected = (index + team.length) % team.length;
    });
  }

  @override
  Widget build(BuildContext context) => CallbackShortcuts(
        bindings: {
          const SingleActivator(LogicalKeyboardKey.arrowLeft): () =>
              select(selected - 1),
          const SingleActivator(LogicalKeyboardKey.arrowRight): () =>
              select(selected + 1),
        },
        child: Focus(
            autofocus: true,
            child: PageShell(label: '04 / THE PEOPLE', children: [
              heading(context, 'Meet the party.',
                  'Swipe the character card, use the arrows, or choose a team member.'),
              Wrap(spacing: 8, runSpacing: 8, children: [
                for (var i = 0; i < team.length; i++)
                  ChoiceChip(
                      label: Text(team[i].name),
                      selected: selected == i,
                      onSelected: (_) => select(i)),
              ]),
              const SizedBox(height: 20),
              Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                IconButton(
                    tooltip: 'Previous researcher',
                    onPressed: () => select(selected - 1),
                    icon: const PixelIcon(Icons.arrow_back)),
                Flexible(
                    child: Text('MEMBER ${selected + 1} / ${team.length}',
                        textAlign: TextAlign.center)),
                IconButton(
                    tooltip: 'Next researcher',
                    onPressed: () => select(selected + 1),
                    icon: const PixelIcon(Icons.arrow_forward)),
              ]),
              const SizedBox(height: 12),
              GestureDetector(
                key: const ValueKey('character-card'),
                behavior: HitTestBehavior.opaque,
                onHorizontalDragStart: (_) => drag = 0,
                onHorizontalDragUpdate: (event) => drag += event.delta.dx,
                onHorizontalDragEnd: (event) {
                  if (drag.abs() > 45 || event.primaryVelocity!.abs() > 300) {
                    select(selected +
                        ((drag == 0 ? event.primaryVelocity! : drag) < 0
                            ? 1
                            : -1));
                  }
                },
                child: AnimatedSwitcher(
                  duration: MediaQuery.disableAnimationsOf(context)
                      ? Duration.zero
                      : const Duration(milliseconds: 280),
                  layoutBuilder: (current, previous) =>
                      current ?? const SizedBox.shrink(),
                  transitionBuilder: (child, animation) => FadeTransition(
                      opacity: animation,
                      child: SlideTransition(
                          position: Tween(
                                  begin: Offset(.12 * direction, 0),
                                  end: Offset.zero)
                              .animate(animation),
                          child: child)),
                  child: Panel(
                      key: ValueKey(selected),
                      color: pixelGold,
                      child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Semantics(
                                image: true,
                                label:
                                    'Placeholder pixel character for ${team[selected].name}',
                                child: SizedBox(
                                  height: 190,
                                  width: double.infinity,
                                  child: team[selected].photoAsset == null
                                      ? CustomPaint(
                                          painter: _CharacterPainter(selected))
                                      : Image.asset(team[selected].photoAsset!,
                                          fit: BoxFit.contain),
                                )),
                            if (team[selected].photoAsset == null)
                              const Center(child: Text('PORTRAIT TO COME')),
                            const SizedBox(height: 20),
                            eyebrow(team[selected].role.toUpperCase()),
                            const SizedBox(height: 10),
                            Semantics(
                                liveRegion: true,
                                child: Text(team[selected].name,
                                    style: const TextStyle(fontSize: 34))),
                            const SizedBox(height: 12),
                            Text(team[selected].work),
                          ])),
                ),
              ),
              const SizedBox(height: 20),
              const Text(
                  'Character sprites are illustrative placeholders. Names, roles, and portraits can be replaced with the actual team profiles.'),
            ])),
      );
}

class _CharacterPainter extends CustomPainter {
  const _CharacterPainter(this.index);
  final int index;
  @override
  void paint(Canvas canvas, Size size) {
    canvas.save();
    canvas.translate(size.width / 2 - 48, 12);
    final paint = Paint()..isAntiAlias = false;
    void block(double x, double y, double w, double h, Color color) =>
        canvas.drawRect(Rect.fromLTWH(x, y, w, h), paint..color = color);
    final color =
        [pixelGreen, pixelGold, pixelEdge, pixelCoral, pixelMuted][index % 5];
    block(-20, 152, 136, 8, pixelEdge);
    block(-8, 144, 112, 8, pixelGreen);
    block(24, 16, 48, 48, pixelGold);
    block(16, 8, 64, 16, pixelCream);
    block(16, 24, 8, 24, pixelCream);
    block(32, 36, 8, 8, pixelCream);
    block(56, 36, 8, 8, pixelCream);
    block(40, 56, 16, 8, pixelCream);
    block(16, 72, 64, 48, color);
    block(0, 80, 16, 32, color);
    block(80, 80, 16, 32, color);
    block(24, 120, 16, 24, pixelCream);
    block(56, 120, 16, 24, pixelCream);
    block(40, 80, 16, 16, pixelBackground);
    if (index.isOdd) block(24, 32, 48, 4, pixelCoral);
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _CharacterPainter oldDelegate) =>
      oldDelegate.index != index;
}
