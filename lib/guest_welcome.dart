import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'photo_terms.dart';
import 'pixel_theme.dart';
import 'theme_settings.dart';

class GuestWelcome extends StatefulWidget {
  const GuestWelcome({super.key, required this.menuBuilder});
  final WidgetBuilder menuBuilder;
  @override
  State<GuestWelcome> createState() => _GuestWelcomeState();
}

class _GuestWelcomeState extends State<GuestWelcome> {
  bool loading = true, busy = false, leaving = false;
  @override
  void initState() {
    super.initState();
    restore();
  }

  Future<void> restore() async {
    final accepted = await photoTermsAccepted();
    if (!mounted) return;
    if (accepted) {
      enter();
    } else {
      setState(() => loading = false);
    }
  }

  void enter() {
    if (!mounted || leaving) return;
    leaving = true;
    Navigator.of(context)
        .pushReplacement(MaterialPageRoute<void>(builder: widget.menuBuilder));
  }

  Future<void> continueAsGuest() async {
    if (busy) return;
    setState(() => busy = true);
    try {
      if (!await confirmPhotoTerms(context) || !mounted) return;
      try {
        await (await SharedPreferences.getInstance())
            .setBool('onboarding.started', true);
      } catch (_) {/* App remains usable without storage. */}
      if (mounted) enter();
    } finally {
      if (mounted) setState(() => busy = false);
    }
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(actions: const [ThemeModeButton()]),
        body: SafeArea(
            child: Center(
                child: SingleChildScrollView(
          padding: const EdgeInsets.all(28),
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 540),
            child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Icon(Icons.photo_outlined,
                      size: 72, color: context.pixelColors.foreground),
                  const SizedBox(height: 24),
                  Text('Welcome to invisiAI',
                      textAlign: TextAlign.center,
                      style: Theme.of(context).textTheme.headlineLarge),
                  const SizedBox(height: 16),
                  const Text('Your photos. A little more privacy.',
                      textAlign: TextAlign.center),
                  const SizedBox(height: 16),
                  const Text(
                      'Apply a cloak to one photo or a batch of up to 10. Compare the result and save a separate copy. No account needed.',
                      textAlign: TextAlign.center),
                  const SizedBox(height: 28),
                  if (loading)
                    const Center(child: CircularProgressIndicator())
                  else
                    FilledButton.icon(
                        onPressed: busy ? null : continueAsGuest,
                        icon: const Icon(Icons.arrow_forward),
                        label: Text(
                            busy ? 'Please wait...' : 'Continue as guest')),
                  const SizedBox(height: 16),
                  Text(
                      'Next: review the photo-use agreement, then take a quick button tour. Your choice is remembered on this device or browser.',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: context.pixelColors.muted)),
                ]),
          ),
        ))),
      );
}
