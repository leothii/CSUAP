import 'dart:ui' show AppExitResponse;
import 'package:archive/archive.dart';
import 'package:file_selector/file_selector.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:share_plus/share_plus.dart';
import 'batch_session.dart';
import 'cloaking_progress.dart';
import 'main.dart' show PageShell, CloakResultsScreen, heading;
import 'photo_terms.dart';
import 'pixel_theme.dart';
import 'unsaved_page_guard.dart';

Uint8List batchZip(List<({String name, Uint8List bytes})> files) {
  final archive = Archive();
  for (var i = 0; i < files.length; i++) {
    final stem = files[i].name
        .replaceAll(RegExp(r'\.[^.]+$'), '')
        .replaceAll(RegExp(r'[^a-zA-Z0-9_-]'), '_');
    archive.addFile(
      ArchiveFile(
        '${i + 1}_${stem}_invisiai.png',
        files[i].bytes.length,
        files[i].bytes,
      ),
    );
  }
  return Uint8List.fromList(ZipEncoder().encode(archive, level: 0));
}

class BatchCloakingScreen extends StatefulWidget {
  const BatchCloakingScreen({
    super.key,
    required this.vector,
    this.session,
    this.picker,
  });
  final Float32List vector;
  final BatchSession? session;
  final Future<List<XFile>> Function()? picker;
  @override
  State<BatchCloakingScreen> createState() => _BatchCloakingScreenState();
}

class _BatchCloakingScreenState extends State<BatchCloakingScreen>
    with WidgetsBindingObserver {
  late final session = widget.session ?? BatchSession();
  final guard = UnsavedPageGuard();
  bool picking = false,
      exporting = false,
      confirming = false,
      allowLeave = false;
  bool downloadStarted = false;
  String? error;
  double alpha = .5;
  bool get locked => session.busy || picking || exporting || confirming;
  @override
  void initState() {
    super.initState();
    session.addListener(changed);
    guard.setActive(session.busy || session.unsaved);
    WidgetsBinding.instance.addObserver(this);
  }

  void changed() {
    if (mounted) setState(() {});
    guard.setActive(session.busy || session.unsaved || exporting);
  }

  @override
  void dispose() {
    session.removeListener(changed);
    session.dispose();
    guard.dispose();
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  Future<bool> confirm(String title, String message) async {
    if (confirming) return false;
    setState(() => confirming = true);
    try {
      return await showDialog<bool>(
            context: context,
            builder: (context) => AlertDialog(
              title: Text(title),
              content: Text(message),
              scrollable: true,
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context, false),
                  child: const Text('Keep working'),
                ),
                FilledButton(
                  onPressed: () => Navigator.pop(context, true),
                  child: const Text('Discard & leave'),
                ),
              ],
            ),
          ) ??
          false;
    } finally {
      if (mounted) setState(() => confirming = false);
    }
  }

  Future<bool> canLeave() async {
    if (exporting || picking || confirming) return false;
    if (!session.busy && !session.unsaved) return true;
    return confirm(
      'Leave this batch?',
      'This will stop processing and discard unsaved batch results. Your original photos stay unchanged.',
    );
  }

  Future<void> leave() async {
    if (!await canLeave() || !mounted) return;
    session.cancel();
    guard.setActive(false);
    setState(() => allowLeave = true);
    await WidgetsBinding.instance.endOfFrame;
    if (mounted) Navigator.pop(context);
  }

  @override
  Future<AppExitResponse> didRequestAppExit() async {
    // The batch owns retained results even while a result detail route is open.
    if (!await canLeave() || !mounted) return AppExitResponse.cancel;
    guard.setActive(false);
    return AppExitResponse.exit;
  }

  Future<void> pick() async {
    if (locked) return;
    setState(() {
      picking = true;
      error = null;
    });
    try {
      if (!await confirmPhotoTerms(context) || !mounted) return;
      final files =
          await (widget.picker?.call() ??
              openFiles(
                acceptedTypeGroups: [
                  const XTypeGroup(
                    label: 'Photos',
                    extensions: [
                      'png',
                      'jpg',
                      'jpeg',
                      'webp',
                      'bmp',
                      'tif',
                      'tiff',
                    ],
                    mimeTypes: ['image/*'],
                  ),
                ],
              ));
      if (mounted) session.add(files);
    } catch (e) {
      if (mounted) {
        setState(
          () => error = e is FormatException
              ? e.message.toString()
              : 'Could not open these photos. Please try again.',
        );
      }
    } finally {
      if (mounted) setState(() => picking = false);
    }
  }

  Future<void> saveAll(BuildContext buttonContext) async {
    if (locked) return;
    final completed = session.photos.where((p) => p.result != null).toList();
    if (completed.isEmpty) return;
    final box = buttonContext.findRenderObject() as RenderBox?;
    final origin = box == null
        ? null
        : box.localToGlobal(Offset.zero) & box.size;
    setState(() {
      exporting = true;
      error = null;
    });
    guard.setActive(true);
    try {
      final zip = await compute(batchZip, [
        for (final p in completed) (name: p.file.name, bytes: p.result!.output),
      ]);
      final name =
          'invisiai_batch_${DateTime.now().millisecondsSinceEpoch}.zip';
      final file = XFile.fromData(zip, name: name, mimeType: 'application/zip');
      final mobile =
          !kIsWeb &&
          (defaultTargetPlatform == TargetPlatform.android ||
              defaultTargetPlatform == TargetPlatform.iOS);
      if (kIsWeb) {
        await file.saveTo(name);
      } else if (mobile) {
        await Share.shareXFiles([file], sharePositionOrigin: origin);
      } else {
        final destination = await getSaveLocation(
          suggestedName: name,
          acceptedTypeGroups: [
            const XTypeGroup(label: 'ZIP archive', extensions: ['zip']),
          ],
        );
        if (destination == null) return;
        await file.saveTo(destination.path);
      }
      if (!mounted) return;
      if (kIsWeb || mobile) {
        setState(() => downloadStarted = true);
      } else {
        for (final p in completed) {
          session.markSaved(p);
        }
      }
    } catch (_) {
      if (mounted) {
        setState(
          () => error =
              'Could not export the ZIP. Individual PNGs can also be saved from each result.',
        );
      }
    } finally {
      if (mounted) {
        setState(() => exporting = false);
        changed();
      }
    }
  }

  @override
  Widget build(BuildContext context) => PopScope<void>(
    canPop: allowLeave || (!locked && !session.unsaved),
    onPopInvokedWithResult: (didPop, _) {
      if (!didPop) leave();
    },
    child: PageShell(
      label: 'BATCH PHOTO LAB',
      children: [
        heading(
          context,
          'A little privacy.\nFor the whole batch.',
          'Choose up to 10 photos. One intensity, separate full-resolution results.',
        ),
        Text(
          '${session.photos.length} / 10 photos',
          style: const TextStyle(fontSize: 30),
        ),
        const SizedBox(height: 12),
        OutlinedButton.icon(
          onPressed: locked || session.photos.length == 10 ? null : pick,
          icon: const Icon(Icons.add_photo_alternate_outlined),
          label: const Text('Add photos'),
        ),
        const SizedBox(height: 16),
        Text('Cloak intensity: ${(alpha * 100).round()}%'),
        Slider(
          value: alpha,
          divisions: 100,
          label: '${(alpha * 100).round()}%',
          onChanged: locked || session.photos.any((p) => p.result != null)
              ? null
              : (value) => setState(() => alpha = value),
        ),
        const Text(
          'Photos are processed one at a time. A failed photo will not stop the remaining batch.',
        ),
        const SizedBox(height: 16),
        if (session.busy) ...[
          CloakingProgress(
            completedStages: 0,
            percent: session.percent,
            label:
                'Photo ${session.activeIndex + 1} of ${session.photos.length}',
            batch: true,
          ),
          const SizedBox(height: 12),
          OutlinedButton(
            onPressed: session.cancel,
            child: const Text('Cancel batch'),
          ),
        ] else
          FilledButton(
            onPressed:
                locked ||
                    session.photos.isEmpty ||
                    session.photos.every((p) => p.result != null)
                ? null
                : () {
                    setState(() {
                      error = null;
                      downloadStarted = false;
                    });
                    session.run(widget.vector, alpha);
                  },
            child: Text(
              session.photos.any((p) => p.result != null || p.error != null)
                  ? 'Retry unfinished photos'
                  : 'Cloak batch',
            ),
          ),
        if (!session.busy && session.photos.any((p) => p.result != null)) ...[
          const SizedBox(height: 20),
          Text(
            '${session.photos.where((p) => p.result != null).length} ready · '
            '${session.photos.where((p) => p.error != null).length} need attention',
          ),
          const SizedBox(height: 12),
          Builder(
            builder: (context) => FilledButton.icon(
              onPressed: locked ? null : () => saveAll(context),
              icon: const Icon(Icons.download_outlined),
              label: const Text('Save completed photos as ZIP'),
            ),
          ),
          if (downloadStarted && session.unsaved)
            TextButton(
              onPressed: locked
                  ? null
                  : () {
                      for (final p in session.photos.where(
                        (p) => p.result != null,
                      )) {
                        session.markSaved(p);
                      }
                    },
              child: const Text('I saved the ZIP'),
            ),
        ],
        const SizedBox(height: 20),
        for (var i = 0; i < session.photos.length; i++)
          photoCard(session.photos[i], i),
        if (picking || exporting)
          const Padding(
            padding: EdgeInsets.all(16),
            child: LinearProgressIndicator(),
          ),
        if (error != null)
          Text(error!, style: TextStyle(color: context.pixelColors.coral)),
      ],
    ),
  );
  Widget photoCard(BatchPhoto photo, int index) => Container(
    margin: const EdgeInsets.only(bottom: 12),
    padding: const EdgeInsets.all(16),
    decoration: BoxDecoration(
      color: context.pixelColors.surface,
      border: Border.all(color: context.pixelColors.edge),
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          '${index + 1}. ${photo.file.name}',
          style: const TextStyle(fontSize: 23),
        ),
        Text(
          photo.result != null
              ? (photo.saved ? 'Saved' : 'Ready · unsaved')
              : session.busy && session.activeIndex == index
              ? 'Cloaking ${photo.percent}%'
              : photo.error ?? 'Queued',
          style: TextStyle(color: context.pixelColors.muted),
        ),
        Wrap(
          spacing: 12,
          children: [
            if (photo.result != null)
              TextButton(
                onPressed: locked
                    ? null
                    : () => Navigator.push(
                        context,
                        MaterialPageRoute<void>(
                          builder: (_) => CloakResultsScreen(
                            result: photo.result!,
                            alpha: session.appliedAlpha,
                            filename: photo.file.name,
                            retained: true,
                            saved: photo.saved,
                            onSaved: () => session.markSaved(photo),
                          ),
                        ),
                      ),
                child: const Text('View result'),
              ),
            TextButton(
              onPressed: locked
                  ? null
                  : () async {
                      if (photo.result != null &&
                          !photo.saved &&
                          !await confirm(
                            'Remove unsaved photo?',
                            'This photo’s generated result will be discarded.',
                          )) {
                        return;
                      }
                      if (mounted) {
                        session.remove(photo);
                        downloadStarted = false;
                      }
                    },
              child: const Text('Remove'),
            ),
          ],
        ),
      ],
    ),
  );
}
