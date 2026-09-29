"""Essential website view: static delivery and the local processing boundary."""


def build_web_deployment(Diagram):
    d = Diagram('05_web_deployment', 1320, 'WEBSITE DEPLOYMENT AND LOCAL PROCESSING')
    d.box('build', 100, 140, 660, 190, 'Flutter release build',
          'deployment/ source + bundled vector\nCompile application and bundle renderer')
    d.box('host', 1040, 140, 660, 190, 'Static host (Vercel configuration)',
          'HTML + JavaScript + CanvasKit\nFonts + fixed CS-UAP asset')
    d.edge('build', 'host', 'build/web', 'right')

    d.rect(100, 470, 1600, 690, '#f5f8fa', 0)
    d.text(900, 495, 'USER DEVICE — BROWSER', 30, True)
    d.box('app', 1040, 605, 570, 180, 'Flutter web application',
          'Menu + photo laboratory\nPreview and intensity controls')
    d.line([(1370, 330), (1370, 605)])
    d.text(1420, 405, 'HTTPS assets', 24, center=False)
    d.box('photo', 180, 605, 530, 180, 'User-selected photograph',
          'Local file picker\nImage bytes in browser memory')
    d.edge('photo', 'app', 'local input', 'right')
    d.box('processing', 1040, 925, 570, 170, 'Local image processing',
          'Tile vector + encode PNG\nMeasure SSIM and PSNR')
    d.edge('app', 'processing')
    d.box('output', 180, 925, 530, 170, 'User-directed export',
          'PNG browser download\nShare where browser supports it')
    d.edge('processing', 'output', 'result', 'left')
    d.text(900, 1200, 'Hosting delivers application files; photographs are not uploaded to the host.', 26)
    d.text(900, 1250, 'Shared processing flow: Figure A3. No API server, database, or model inference.', 25)
    d.save()
