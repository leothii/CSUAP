{{flutter_js}}
{{flutter_build_config}}

// Serve the renderer with the app so startup does not depend on a third-party CDN.
_flutter.loader.load({
  config: {canvasKitBaseUrl: new URL('canvaskit/', document.baseURI).href},
  onEntrypointLoaded: async function (engineInitializer) {
    try {
      const appRunner = await engineInitializer.initializeEngine();
      await appRunner.runApp();
    } catch (error) {
      console.error('App startup failed', error);
      window.showStartupError('The app could not start. Refresh or try an updated browser.');
    }
  }
}).catch(function (error) {
  console.error('App download failed', error);
  window.showStartupError('The app could not load. Check your connection and try again.');
});
