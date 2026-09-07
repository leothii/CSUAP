import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:gal/gal.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:image/image.dart' as img;
import 'package:image_picker/image_picker.dart';
import 'package:share_plus/share_plus.dart';

import 'perturbation_protection.dart';
import 'share_image_file.dart';

void main() {
  runApp(const CsuapApp());
}

const _paper = Color(0xFFF2F1EC);
const _ink = Color(0xFF111111);
const _teal = Color(0xFF0FB5AE);
const _tealDark = Color(0xFF08736F);

ThemeData _buildAppTheme() {
  final baseText = GoogleFonts.spaceGroteskTextTheme();
  final textTheme = baseText.copyWith(
    displayLarge: GoogleFonts.spaceGrotesk(
      fontSize: 44,
      fontWeight: FontWeight.w700,
      color: _ink,
      height: 0.98,
    ),
    headlineSmall: GoogleFonts.spaceGrotesk(
      fontSize: 28,
      fontWeight: FontWeight.w700,
      color: _ink,
    ),
    titleMedium: GoogleFonts.spaceGrotesk(
      fontSize: 16,
      fontWeight: FontWeight.w700,
      color: _ink,
    ),
    bodyMedium: GoogleFonts.spaceGrotesk(
      fontSize: 15,
      fontWeight: FontWeight.w400,
      color: _ink,
    ),
    labelLarge: GoogleFonts.spaceGrotesk(
      fontSize: 14,
      fontWeight: FontWeight.w700,
      color: _ink,
    ),
  );

  return ThemeData(
    brightness: Brightness.light,
    scaffoldBackgroundColor: _paper,
    colorScheme: const ColorScheme.light(
      primary: _teal,
      onPrimary: _ink,
      secondary: _teal,
      onSecondary: _ink,
      surface: _paper,
      onSurface: _ink,
      error: Color(0xFFB3261E),
      onError: Colors.white,
    ),
    textTheme: textTheme,
    useMaterial3: true,
    appBarTheme: AppBarTheme(
      backgroundColor: _paper,
      foregroundColor: _ink,
      elevation: 0,
      scrolledUnderElevation: 0,
      surfaceTintColor: Colors.transparent,
      titleTextStyle: GoogleFonts.spaceGrotesk(
        color: _ink,
        fontSize: 24,
        fontWeight: FontWeight.w700,
      ),
    ),
    filledButtonTheme: FilledButtonThemeData(
      style: FilledButton.styleFrom(
        backgroundColor: _teal,
        foregroundColor: _ink,
        elevation: 0,
        padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 17),
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(4)),
        ),
      ),
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(
      style: OutlinedButton.styleFrom(
        foregroundColor: _ink,
        side: const BorderSide(color: _ink, width: 1.5),
        padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 17),
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(4)),
        ),
      ),
    ),
    sliderTheme: SliderThemeData(
      activeTrackColor: _teal,
      inactiveTrackColor: const Color(0xFFB9B8B2),
      thumbColor: _ink,
      overlayColor: _teal.withValues(alpha: 0.12),
      trackHeight: 3,
      thumbShape: const _SquareThumbShape(),
      overlayShape: const RoundSliderOverlayShape(overlayRadius: 14),
    ),
    progressIndicatorTheme: const ProgressIndicatorThemeData(
      color: _teal,
      linearTrackColor: Color(0xFFD7D6D0),
    ),
  );
}

class CsuapApp extends StatelessWidget {
  const CsuapApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CSUAP Photo Protection',
      theme: _buildAppTheme(),
      home: const MainMenuScreen(),
    );
  }
}

class MainMenuScreen extends StatelessWidget {
  const MainMenuScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        titleSpacing: 20,
        title: const Text('shield.'),
        actions: const [
          Padding(
            padding: EdgeInsets.only(right: 20),
            child: Icon(Icons.verified_user_outlined),
          ),
        ],
      ),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(20, 24, 20, 32),
          children: [
            Text(
              'Photo privacy,\nby design.',
              style: Theme.of(context).textTheme.displayLarge,
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Container(width: 56, height: 8, color: _teal),
                const SizedBox(width: 12),
                Text(
                  'ON-DEVICE PROTECTION',
                  style: Theme.of(context).textTheme.labelSmall?.copyWith(
                        letterSpacing: 1.2,
                        fontWeight: FontWeight.w700,
                      ),
                ),
              ],
            ),
            const SizedBox(height: 56),
            _MenuOption(
              index: '01',
              title: 'New',
              detail: 'Protect a photo',
              filled: true,
              onTap: () => Navigator.push(
                context,
                MaterialPageRoute<void>(
                  builder: (_) => const ProtectionScreen(),
                ),
              ),
            ),
            const SizedBox(height: 12),
            _MenuOption(
              index: '02',
              title: 'Docs',
              detail: 'How it works',
              onTap: () => Navigator.push(
                context,
                MaterialPageRoute<void>(builder: (_) => const DocsScreen()),
              ),
            ),
            const SizedBox(height: 12),
            _MenuOption(
              index: '03',
              title: 'Credits',
              detail: 'About shield.',
              onTap: () => Navigator.push(
                context,
                MaterialPageRoute<void>(builder: (_) => const CreditsScreen()),
              ),
            ),
            const SizedBox(height: 48),
            Text(
              'CSUAP / LOCAL FIRST / 2026',
              style: Theme.of(context).textTheme.labelSmall?.copyWith(
                    color: _tealDark,
                    letterSpacing: 1.1,
                    fontWeight: FontWeight.w700,
                  ),
            ),
          ],
        ),
      ),
    );
  }
}

class _MenuOption extends StatelessWidget {
  const _MenuOption({
    required this.index,
    required this.title,
    required this.detail,
    required this.onTap,
    this.filled = false,
  });

  final String index;
  final String title;
  final String detail;
  final VoidCallback onTap;
  final bool filled;

  @override
  Widget build(BuildContext context) {
    final foreground = filled ? _ink : _paper;
    return Material(
      color: filled ? _teal : _ink,
      child: InkWell(
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(18, 18, 16, 18),
          child: Row(
            children: [
              Text(
                index,
                style: Theme.of(context).textTheme.labelSmall?.copyWith(
                      color: filled ? _tealDark : _teal,
                      fontWeight: FontWeight.w700,
                      letterSpacing: 1.1,
                    ),
              ),
              const SizedBox(width: 20),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                            color: foreground,
                            fontSize: 26,
                          ),
                    ),
                    Text(
                      detail,
                      style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                            color: filled ? _ink.withValues(alpha: 0.72) : _paper.withValues(alpha: 0.72),
                          ),
                    ),
                  ],
                ),
              ),
              Icon(Icons.arrow_forward, color: foreground),
            ],
          ),
        ),
      ),
    );
  }
}

class DocsScreen extends StatelessWidget {
  const DocsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const _InfoScreen(
      title: 'Docs',
      heading: 'How it works',
      body:
          'shield. applies a fixed universal adversarial perturbation directly on your device. Choose a photo, set the protection strength, and preview the result before saving or sharing it. Your image stays local during processing.',
    );
  }
}

class CreditsScreen extends StatelessWidget {
  const CreditsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const _InfoScreen(
      title: 'Credits',
      heading: 'shield.',
      body:
          'CSUAP Photo Protection\nVersion 1.0.0\n\nBuilt as an on-device privacy research tool. Protection is powered by a trained context-specific universal adversarial perturbation.',
    );
  }
}

class _InfoScreen extends StatelessWidget {
  const _InfoScreen({
    required this.title,
    required this.heading,
    required this.body,
  });

  final String title;
  final String heading;
  final String body;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(20, 36, 20, 32),
          children: [
            Container(width: 56, height: 8, color: _teal),
            const SizedBox(height: 24),
            Text(heading, style: Theme.of(context).textTheme.displayLarge),
            const SizedBox(height: 24),
            Text(body, style: Theme.of(context).textTheme.bodyLarge),
          ],
        ),
      ),
    );
  }
}

class ProtectionScreen extends StatefulWidget {
  const ProtectionScreen({super.key});

  @override
  State<ProtectionScreen> createState() => _ProtectionScreenState();
}

class _ProtectionScreenState extends State<ProtectionScreen> {
  static const _assetPath = 'assets/cs_uap_v_f32_hwc.bin';
  static const _debounceDuration = Duration(milliseconds: 80);

  final ImagePicker _picker = ImagePicker();
  Timer? _previewTimer;
  Float32List? _perturbation;
  Uint8List? _originalBytes;
  Uint8List? _previewSourceBytes;
  Uint8List? _protectedBytes;
  int? _imageWidth;
  int? _imageHeight;
  double _alpha = 0.5;
  bool _isLoadingAsset = true;
  bool _isProcessing = false;
  bool _isExporting = false;
  String? _errorMessage;
  int _requestId = 0;

  @override
  void initState() {
    super.initState();
    _loadPerturbation();
  }

  @override
  void dispose() {
    _previewTimer?.cancel();
    super.dispose();
  }

  Future<void> _loadPerturbation() async {
    try {
      final asset = await rootBundle.load(_assetPath);
      final perturbation = loadPerturbationAsset(asset.buffer.asUint8List());
      if (!mounted) return;
      setState(() {
        _perturbation = perturbation;
        _isLoadingAsset = false;
        _errorMessage = null;
      });
    } catch (error) {
      if (!mounted) return;
      setState(() {
        _isLoadingAsset = false;
        _errorMessage = 'Could not load the perturbation asset: $error';
      });
    }
  }

  Future<void> _pickImage(ImageSource source) async {
    try {
      final picked = await _picker.pickImage(source: source);
      if (picked == null) return;

      final bytes = await picked.readAsBytes();
      final decoded = img.decodeImage(bytes);
      if (decoded == null) {
        throw const FormatException('Unable to decode the selected image.');
      }
      final previewBytes = createPreviewBytes(bytes);
      if (!mounted) return;
      _requestId++;
      setState(() {
        _originalBytes = bytes;
        _previewSourceBytes = previewBytes;
        _protectedBytes = previewBytes;
        _imageWidth = decoded.width;
        _imageHeight = decoded.height;
        _errorMessage = null;
      });
      await _schedulePreview(immediate: true);
    } catch (error) {
      if (!mounted) return;
      setState(() => _errorMessage = 'Could not open that image: $error');
    }
  }

  Future<void> _schedulePreview({bool immediate = false}) async {
    _previewTimer?.cancel();
    if (!immediate) {
      _previewTimer = Timer(_debounceDuration, () => _processPreview());
      return;
    }
    await _processPreview();
  }

  Future<void> _processPreview() async {
    final source = _previewSourceBytes;
    final perturbation = _perturbation;
    if (source == null || perturbation == null) return;

    final requestId = ++_requestId;
    setState(() => _isProcessing = true);
    try {
      await Future<void>.delayed(Duration.zero);
      final protectedBytes = applyProtection(source, _alpha, perturbation);
      if (!mounted || requestId != _requestId) return;
      setState(() {
        _protectedBytes = protectedBytes;
        _isProcessing = false;
      });
    } catch (error) {
      if (!mounted || requestId != _requestId) return;
      setState(() {
        _isProcessing = false;
        _errorMessage = 'Could not process the image: $error';
      });
    }
  }

  void _onAlphaChanged(double value) {
    _requestId++;
    setState(() => _alpha = value);
    _schedulePreview();
  }

  void _onAlphaChangeEnd(double value) {
    _previewTimer?.cancel();
    _requestId++;
    _processFullResolutionPreview();
  }

  Future<void> _processFullResolutionPreview() async {
    final source = _originalBytes;
    final perturbation = _perturbation;
    if (source == null || perturbation == null) return;

    final requestId = ++_requestId;
    setState(() => _isProcessing = true);
    try {
      await Future<void>.delayed(Duration.zero);
      final protectedBytes = applyProtection(source, _alpha, perturbation);
      if (!mounted || requestId != _requestId) return;
      setState(() {
        _protectedBytes = protectedBytes;
        _isProcessing = false;
      });
    } catch (error) {
      if (!mounted || requestId != _requestId) return;
      setState(() {
        _isProcessing = false;
        _errorMessage = 'Could not process the image: $error';
      });
    }
  }

  String get _strengthTier {
    if (_alpha < 0.33) return 'LIGHT';
    if (_alpha <= 0.66) return 'MEDIUM';
    return 'STRONG';
  }

  Future<Uint8List?> _buildFullResolutionImage() async {
    final source = _originalBytes;
    final perturbation = _perturbation;
    if (source == null || perturbation == null) {
      _showMessage('Choose a photo before exporting.');
      return null;
    }

    await Future<void>.delayed(Duration.zero);
    return applyProtection(source, _alpha, perturbation);
  }

  Future<void> _saveProtectedImage() async {
    if (_isExporting) return;
    setState(() {
      _isExporting = true;
      _errorMessage = null;
    });
    try {
      final bytes = await _buildFullResolutionImage();
      if (bytes == null) return;
      await Gal.putImageBytes(
        bytes,
        name: 'csuap_protected_${DateTime.now().millisecondsSinceEpoch}',
      );
      if (mounted) _showMessage('Protected photo saved to your gallery.');
    } catch (error) {
      if (mounted) _showMessage('Could not save the photo: $error');
    } finally {
      if (mounted) setState(() => _isExporting = false);
    }
  }

  Future<void> _shareProtectedImage() async {
    if (_isExporting) return;
    setState(() {
      _isExporting = true;
      _errorMessage = null;
    });
    try {
      final bytes = await _buildFullResolutionImage();
      if (bytes == null) return;
      final file = await createShareImageFile(bytes);
      await Share.shareXFiles(
        [file],
        text: 'Protected with CSUAP',
      );
    } catch (error) {
      if (mounted) _showMessage('Could not share the photo: $error');
    } finally {
      if (mounted) setState(() => _isExporting = false);
    }
  }

  void _showMessage(String message) {
    if (!mounted) return;
    setState(() => _errorMessage = message);
    ScaffoldMessenger.of(context)
      ..hideCurrentSnackBar()
      ..showSnackBar(
        SnackBar(
          content: Text(message),
          backgroundColor: _teal,
          behavior: SnackBarBehavior.floating,
          elevation: 0,
          shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(4)),
          ),
        ),
      );
  }

  @override
  Widget build(BuildContext context) {
    final preview = _protectedBytes;
    final canPick = !_isLoadingAsset && _perturbation != null;
    final isLandscape =
      _imageWidth != null &&
      _imageHeight != null &&
      _imageWidth! > _imageHeight!;

    return Scaffold(
      appBar: AppBar(
        titleSpacing: 20,
        title: const Text('shield.'),
        actions: [
          IconButton(
            tooltip: 'Privacy status',
            onPressed: () {},
            icon: const Icon(Icons.verified_user_outlined),
          ),
          const SizedBox(width: 10),
        ],
      ),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(20, 8, 20, 32),
          children: [
            Text(
              'Protect a photo',
              style: Theme.of(context).textTheme.displayLarge,
            ),
            const SizedBox(height: 12),
            Row(
              children: [
                Container(width: 42, height: 8, color: _teal),
                const SizedBox(width: 10),
                Text(
                  'LOCAL / PRIVATE / REVERSIBLE',
                  style: Theme.of(context).textTheme.labelSmall?.copyWith(
                        letterSpacing: 1.2,
                        fontWeight: FontWeight.w700,
                      ),
                ),
              ],
            ),
            const SizedBox(height: 28),
            SizedBox(
              height: 340,
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  Positioned(
                    top: isLandscape ? 24 : 16,
                    right: isLandscape ? 16 : 0,
                    bottom: 0,
                    left: isLandscape ? 0 : 32,
                    child: Container(color: _teal),
                  ),
                  Positioned(
                    top: 0,
                    right: 24,
                    bottom: 24,
                    left: 0,
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                        color: const Color(0xFFE4E3DD),
                        border: Border.all(color: _ink, width: 1.5),
                      ),
                      child: preview == null
                          ? const Center(child: Text('Choose a photo to begin'))
                          : Image.memory(preview, fit: BoxFit.contain),
                    ),
                  ),
                  Positioned(
                    right: -2,
                    bottom: 46,
                    child: Transform.rotate(
                      angle: -1.5708,
                      child: Text(
                        _strengthTier,
                        style: Theme.of(context).textTheme.labelSmall?.copyWith(
                              color: _ink,
                              fontWeight: FontWeight.w700,
                              letterSpacing: 1.1,
                            ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 10),
            Row(
              children: [
                Expanded(
                  child: FilledButton.icon(
                    onPressed: canPick ? () => _pickImage(ImageSource.gallery) : null,
                    icon: const Icon(Icons.photo_library_outlined),
                    label: const Text('Gallery'),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: canPick ? () => _pickImage(ImageSource.camera) : null,
                    icon: const Icon(Icons.camera_alt_outlined),
                    label: const Text('Camera'),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 28),
            Text(
              'Protection Strength',
              style: Theme.of(context).textTheme.titleMedium,
            ),
            const SizedBox(height: 2),
            Text(
              '${(_alpha * 100).round()}% intensity',
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: _tealDark,
                  ),
            ),
            Slider(
              value: _alpha,
              min: 0,
              max: 1,
              divisions: 100,
              label: _alpha.toStringAsFixed(2),
              onChanged: _originalBytes == null ? null : _onAlphaChanged,
              onChangeEnd: _originalBytes == null ? null : _onAlphaChangeEnd,
            ),
            const SizedBox(height: 12),
            Row(
              children: [
                Expanded(
                  child: FilledButton.icon(
                    onPressed: _isExporting ? null : _saveProtectedImage,
                    icon: const Icon(Icons.download_outlined),
                    label: const Text('Save'),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: _isExporting ? null : _shareProtectedImage,
                    icon: const Icon(Icons.ios_share_outlined),
                    label: const Text('Share'),
                  ),
                ),
              ],
            ),
            if (_isExporting) ...[
              const SizedBox(height: 12),
              const LinearProgressIndicator(),
            ],
            if (_isProcessing) const LinearProgressIndicator(),
            if (_errorMessage != null) ...[
              const SizedBox(height: 12),
              Text(
                _errorMessage!,
                style: TextStyle(color: Theme.of(context).colorScheme.error),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _SquareThumbShape extends SliderComponentShape {
  const _SquareThumbShape();

  @override
  Size getPreferredSize(bool isEnabled, bool isDiscrete) => const Size(14, 14);

  @override
  void paint(
    PaintingContext context,
    Offset center, {
    required Animation<double> activationAnimation,
    required Animation<double> enableAnimation,
    required bool isDiscrete,
    required TextPainter? labelPainter,
    required RenderBox parentBox,
    required SliderThemeData sliderTheme,
    required  TextDirection textDirection,
    required double value,
    required double textScaleFactor,
    required Size sizeWithOverflow,
  }) {
    final canvas = context.canvas;
    final paint = Paint()..color = sliderTheme.thumbColor ?? _ink;
    canvas.drawRect(Rect.fromCenter(center: center, width: 14, height: 14), paint);
  }
}