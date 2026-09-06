import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'perturbation_protection.dart';

void main() {
  runApp(const CsuapApp());
}

class CsuapApp extends StatelessWidget {
  const CsuapApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CSUAP Photo Protection',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
        useMaterial3: true,
      ),
      home: const ProtectionScreen(),
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
  static const _debounceDuration = Duration(milliseconds: 120);

  final ImagePicker _picker = ImagePicker();
  Timer? _previewTimer;
  Float32List? _perturbation;
  Uint8List? _originalBytes;
  Uint8List? _protectedBytes;
  double _alpha = 0.5;
  bool _isLoadingAsset = true;
  bool _isProcessing = false;
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
      if (!mounted) return;
      _requestId++;
      setState(() {
        _originalBytes = bytes;
        _protectedBytes = bytes;
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
    final source = _originalBytes;
    final perturbation = _perturbation;
    if (source == null || perturbation == null) return;

    final requestId = ++_requestId;
    setState(() => _isProcessing = true);
    try {
      final protectedBytes = await compute(
        _processProtectionInIsolate,
        _ProtectionRequest(source, perturbation, _alpha),
      );
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

  @override
  Widget build(BuildContext context) {
    final preview = _protectedBytes;
    final canPick = !_isLoadingAsset && _perturbation != null;

    return Scaffold(
      appBar: AppBar(title: const Text('Protect a photo')),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(20),
          children: [
            AspectRatio(
              aspectRatio: 1,
              child: DecoratedBox(
                decoration: BoxDecoration(
                  color: Theme.of(context).colorScheme.surfaceContainerHighest,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: preview == null
                    ? const Center(child: Text('Choose a photo to begin'))
                    : ClipRRect(
                        borderRadius: BorderRadius.circular(16),
                        child: Image.memory(preview, fit: BoxFit.contain),
                      ),
              ),
            ),
            const SizedBox(height: 20),
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
            const SizedBox(height: 24),
            Text('Protection Strength: ${_alpha.toStringAsFixed(2)}'),
            Slider(
              value: _alpha,
              min: 0,
              max: 1,
              divisions: 100,
              label: _alpha.toStringAsFixed(2),
              onChanged: _originalBytes == null ? null : _onAlphaChanged,
            ),
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

class _ProtectionRequest {
  const _ProtectionRequest(this.imageBytes, this.perturbation, this.alpha);

  final Uint8List imageBytes;
  final Float32List perturbation;
  final double alpha;
}

Uint8List _processProtectionInIsolate(_ProtectionRequest request) {
  final protector = PerturbationProtector(request.perturbation);
  return protector.applyProtection(request.imageBytes, request.alpha);
}