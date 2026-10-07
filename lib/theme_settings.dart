import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'pixel_theme.dart';

/// Owns appearance settings above the navigator so changing theme preserves routes.
class AppThemeHost extends StatefulWidget {
  const AppThemeHost({super.key, required this.home});
  final Widget home;
  @override
  State<AppThemeHost> createState() => _AppThemeHostState();
}

class _AppThemeHostState extends State<AppThemeHost> {
  ThemeMode mode = ThemeMode.system;
  int revision = 0;
  int textRevision = 0;
  bool readableText = false;
  Future<void> pendingSave = Future<void>.value();

  @override
  void initState() {
    super.initState();
    restore();
  }

  Future<void> restore() async {
    final initialRevision = revision;
    final initialTextRevision = textRevision;
    try {
      final preferences = await SharedPreferences.getInstance();
      final saved = preferences.getString('appearance.themeMode');
      if (!mounted) return;
      setState(() {
        if (revision == initialRevision) {
          mode = ThemeMode.values.firstWhere((value) => value.name == saved,
              orElse: () => ThemeMode.system);
        }
        if (textRevision == initialTextRevision) {
          readableText =
              preferences.getBool('appearance.readableText') ?? false;
        }
      });
    } catch (error) {
      debugPrint('Theme preference unavailable: $error');
    }
  }

  void select(ThemeMode value) {
    revision++;
    setState(() => mode = value);
    // Serialize writes so rapid changes cannot save an older choice last.
    pendingSave = pendingSave.then((_) async {
      try {
        final preferences = await SharedPreferences.getInstance();
        await preferences.setString('appearance.themeMode', value.name);
      } catch (error) {
        debugPrint('Could not save theme preference: $error');
      }
    });
  }

  void selectReadableText(bool value) {
    textRevision++;
    setState(() => readableText = value);
    pendingSave = pendingSave.then((_) async {
      try {
        final preferences = await SharedPreferences.getInstance();
        await preferences.setBool('appearance.readableText', value);
      } catch (error) {
        debugPrint('Could not save text preference: $error');
      }
    });
  }

  @override
  Widget build(BuildContext context) => MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'invisiAI',
        themeAnimationDuration: Duration.zero,
        theme: pixelTheme(Brightness.light, readableText),
        darkTheme: pixelTheme(Brightness.dark, readableText),
        themeMode: mode,
        builder: (context, child) => ThemeSettings(
            mode: mode,
            onChanged: select,
            readableText: readableText,
            onReadableTextChanged: selectReadableText,
            child: child!),
        home: widget.home,
      );
}

class ThemeSettings extends InheritedWidget {
  const ThemeSettings(
      {super.key,
      required this.mode,
      required this.onChanged,
      this.readableText = false,
      this.onReadableTextChanged,
      required super.child});
  final ThemeMode mode;
  final bool readableText;
  final ValueChanged<bool>? onReadableTextChanged;
  final ValueChanged<ThemeMode> onChanged;
  @override
  bool updateShouldNotify(ThemeSettings oldWidget) =>
      mode != oldWidget.mode || readableText != oldWidget.readableText;
}

class ThemeModeButton extends StatelessWidget {
  const ThemeModeButton({super.key});
  @override
  Widget build(BuildContext context) {
    final settings =
        context.dependOnInheritedWidgetOfExactType<ThemeSettings>();
    return PopupMenuButton<ThemeMode>(
      tooltip: 'Appearance',
      enabled: settings != null,
      initialValue: settings?.mode,
      onSelected: settings?.onChanged,
      icon: Icon(Theme.of(context).brightness == Brightness.dark
          ? Icons.dark_mode_outlined
          : Icons.light_mode_outlined),
      itemBuilder: (_) => [
        for (final entry in const [
          (ThemeMode.system, 'Follow system', Icons.brightness_auto_outlined),
          (ThemeMode.light, 'Light mode', Icons.light_mode_outlined),
          (ThemeMode.dark, 'Dark mode', Icons.dark_mode_outlined),
        ])
          CheckedPopupMenuItem<ThemeMode>(
            value: entry.$1,
            checked: settings?.mode == entry.$1,
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Icon(entry.$3, size: 20),
              const SizedBox(width: 12),
              Text(entry.$2),
            ]),
          ),
        const PopupMenuDivider(),
        CheckedPopupMenuItem<ThemeMode>(
          checked: settings?.readableText ?? false,
          enabled: settings?.onReadableTextChanged != null,
          onTap: () =>
              settings?.onReadableTextChanged?.call(!settings.readableText),
          child: const Text('Readable text'),
        ),
      ],
    );
  }
}
