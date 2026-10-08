import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

const photoTermsPreference = 'onboarding.photoTerms.v1';
bool _sessionAccepted = false;

Future<bool> photoTermsAccepted() async {
  if (_sessionAccepted) return true;
  try {
    return (await SharedPreferences.getInstance())
            .getBool(photoTermsPreference) ??
        false;
  } catch (_) {
    return false;
  }
}

/// Versioned acceptance is shared by the welcome page, single import and batch.
Future<bool> confirmPhotoTerms(BuildContext context) async {
  if (await photoTermsAccepted()) return true;
  if (!context.mounted) return false;
  final accepted = await showDialog<bool>(
        context: context,
        builder: (_) => const _PhotoTermsDialog(),
      ) ??
      false;
  if (accepted) {
    try {
      final saved = await (await SharedPreferences.getInstance())
          .setBool(photoTermsPreference, true);
      if (!saved) _sessionAccepted = true;
    } catch (_) {
      _sessionAccepted = true;
    }
  }
  return accepted;
}

class _PhotoTermsDialog extends StatefulWidget {
  const _PhotoTermsDialog();
  @override
  State<_PhotoTermsDialog> createState() => _PhotoTermsDialogState();
}

class _PhotoTermsDialogState extends State<_PhotoTermsDialog> {
  bool accepted = false;
  @override
  Widget build(BuildContext context) => AlertDialog(
        title: const Text('Photo use & agreement'),
        scrollable: true,
        content: SizedBox(
          width: 480,
          child:
              Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Before using invisiAI',
                style: TextStyle(fontWeight: FontWeight.bold)),
            const SizedBox(height: 16),
            const Text(
                'Your permission\nOnly use photos you own or have permission to process and share. Respect the privacy and consent of people shown in them.'),
            const SizedBox(height: 16),
            const Text(
                'Local processing\nSelecting a photo loads it into this app on your device; it is not uploaded to a server for cloaking. The app uses it to preview the cloak, create an output, and calculate image-quality statistics.'),
            const SizedBox(height: 16),
            const Text(
                'Saving & sharing\nThe original file is unchanged. Saving creates a separate PNG. Sharing sends the output to the destination you choose, whose own data policies apply.'),
            const SizedBox(height: 16),
            const Text(
                'Understand the limits\nCloaking is experimental and does not guarantee protection against AI recognition, training, or misuse. Quality scores describe visual changes, not protection effectiveness. Review the output before sharing it.'),
            const SizedBox(height: 16),
            CheckboxListTile(
              contentPadding: EdgeInsets.zero,
              controlAffinity: ListTileControlAffinity.leading,
              value: accepted,
              onChanged: (value) => setState(() => accepted = value ?? false),
              title: const Text(
                  'I agree to these terms and will only use photos I own or have permission to process.'),
            ),
          ]),
        ),
        actions: [
          TextButton(
              onPressed: () => Navigator.pop(context, false),
              child: const Text('Cancel')),
          FilledButton(
              onPressed: accepted ? () => Navigator.pop(context, true) : null,
              child: const Text('Agree & continue')),
        ],
      );
}
