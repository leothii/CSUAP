"""Smoke-test a compiled site in headless Edge via the local DevTools protocol.

Usage: python scripts/check_web_startup.py deployment/build/web
Requires the websocket-client Python package and Microsoft Edge on Windows.
"""
import base64
import functools
import http.server
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import threading
import time
import urllib.request

import websocket


site = Path(sys.argv[1]).resolve()
assert (site / 'main.dart.js').is_file(), 'Build the release website first.'
output = site.parent / 'browser-check'
output.mkdir(exist_ok=True)


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


server = http.server.ThreadingHTTPServer(
    ('127.0.0.1', 0), functools.partial(QuietHandler, directory=str(site)))
threading.Thread(target=server.serve_forever, daemon=True).start()
edge = Path('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe')
profile = tempfile.mkdtemp(prefix='edge-profile-', dir=output)
process = subprocess.Popen([
    str(edge), '--headless=new', '--disable-gpu', '--no-first-run',
    '--no-default-browser-check', '--remote-debugging-port=0',
    '--remote-allow-origins=http://localhost', f'--user-data-dir={profile}',
    'about:blank'], creationflags=subprocess.CREATE_NO_WINDOW,
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
connection = None
try:
    port_file = Path(profile) / 'DevToolsActivePort'
    deadline = time.monotonic() + 20
    while not port_file.exists():
        assert time.monotonic() < deadline, 'Edge did not start.'
        time.sleep(.2)
    port = port_file.read_text().splitlines()[0]
    with urllib.request.urlopen(f'http://127.0.0.1:{port}/json') as response:
        target = next(item for item in json.load(response) if item['type'] == 'page')
    connection = websocket.create_connection(target['webSocketDebuggerUrl'],
                                               origin='http://localhost', timeout=10)
    sequence = 0

    def call(method, params=None):
        global sequence
        sequence += 1
        connection.send(json.dumps({'id': sequence, 'method': method, 'params': params or {}}))
        while True:
            result = json.loads(connection.recv())
            if result.get('id') == sequence:
                assert 'error' not in result, result
                return result.get('result', {})

    def evaluate(expression):
        result = call('Runtime.evaluate', {'expression': expression, 'returnByValue': True})
        assert 'exceptionDetails' not in result, result
        return result['result'].get('value')

    call('Network.enable')
    call('Network.setBlockedURLs', {'urls': ['https://*', 'http://fonts.*']})
    call('Emulation.setDeviceMetricsOverride', {
        'width': 390, 'height': 844, 'deviceScaleFactor': 1, 'mobile': True})
    address = f'http://127.0.0.1:{server.server_port}/'
    call('Page.navigate', {'url': address})
    deadline = time.monotonic() + 45
    while not evaluate("document.querySelector('flutter-view, flt-glass-pane, flt-view') !== null && document.getElementById('loading') === null"):
        if time.monotonic() >= deadline:
            print(evaluate('JSON.stringify({url: location.href, html: document.documentElement.outerHTML.slice(-6000)})'), flush=True)
            screenshot = call('Page.captureScreenshot', {'format': 'png'})
            (output / 'startup-failure.png').write_bytes(base64.b64decode(screenshot['data']))
            raise AssertionError('Flutter first frame was not detected.')
        time.sleep(.25)
    time.sleep(4)
    screenshot = call('Page.captureScreenshot', {'format': 'png'})
    (output / 'portrait.png').write_bytes(base64.b64decode(screenshot['data']))
    print('PASS: Flutter rendered and dismissed loading with external HTTPS blocked.')

    call('Network.setCacheDisabled', {'cacheDisabled': True})
    call('Network.setBlockedURLs', {'urls': ['*canvaskit*']})
    call('Page.reload', {'ignoreCache': True})
    deadline = time.monotonic() + 40
    while not evaluate("document.querySelector('#loading button')?.hidden === false"):
        assert time.monotonic() < deadline, 'Missing startup failure feedback.'
        time.sleep(.25)
    print('PASS: renderer download failure displays retry feedback.')
    print('Screenshot:', output / 'portrait.png')
finally:
    if connection:
        connection.close()
    process.terminate()
    process.wait(timeout=10)
    server.shutdown()
