{{flutter_js}}
{{flutter_build_config}}

_flutter.loader.load({
  onEntrypointLoaded: async function (engineInitializer) {
    try {
      const appRunner = await engineInitializer.initializeEngine();
      await appRunner.runApp();
    } catch (error) {
      console.error('invisAI startup failed', error);
      window.showStartupError('The app could not start. Try refreshing or using an updated browser.');
    }
  }
}).catch(function (error) {
  console.error('invisAI download failed', error);
  window.showStartupError('The app could not load. Check your connection and refresh the page.');
});
