"""Compare a browser worker with native fixtures and check UI responsiveness.

From either app root, first run:
  dart run tool/worker_fixture.dart
  dart compile js -O2 --no-source-maps -o web/photo_worker.js lib/photo_worker.dart
  dart compile js -O2 --no-source-maps -o build/worker-check/client.js tool/worker_client_check.dart
Then: python scripts/check_photo_worker.py [app-root]
Requires websocket-client and Microsoft Edge on Windows. Uses synthetic data only.
"""
import functools
import http.server
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import threading
import time
import urllib.request

import websocket

project = Path(sys.argv[1] if len(sys.argv) > 1 else '.').resolve()
output = project / 'build/worker-check'
assert (output / 'fixture.json').is_file(), 'Generate the native reference fixture first.'
assert (output / 'client.js').is_file(), 'Compile the browser check first.'
shutil.copyfile(project / 'web/photo_worker.js', output / 'photo_worker.js')
(output / 'index.html').write_text('<!doctype html><title>Photo worker check</title><script src="client.js"></script>', encoding='utf-8')


blocked_worker = False


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if blocked_worker and self.path == '/photo_worker.js':
            self.send_error(404, 'Intentional worker-loading failure')
        else:
            super().do_GET()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def log_message(self, *_):
        pass


server = http.server.ThreadingHTTPServer(
    ('127.0.0.1', 0), functools.partial(QuietHandler, directory=str(output)))
threading.Thread(target=server.serve_forever, daemon=True).start()
profile = tempfile.mkdtemp(prefix='edge-', dir=output)
edge = Path('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe')
process = subprocess.Popen([
    str(edge), '--headless=new', '--disable-gpu', '--no-first-run',
    '--no-default-browser-check', '--remote-debugging-port=0',
    '--remote-allow-origins=http://localhost', f'--user-data-dir={profile}',
    'about:blank'], creationflags=subprocess.CREATE_NO_WINDOW,
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
connection = None
try:
    deadline = time.monotonic() + 20
    port_file = Path(profile) / 'DevToolsActivePort'
    while not port_file.exists():
        assert time.monotonic() < deadline, 'Edge did not start'
        time.sleep(.2)
    port = port_file.read_text().splitlines()[0]
    with urllib.request.urlopen(f'http://127.0.0.1:{port}/json') as response:
        target = next(item for item in json.load(response) if item['type'] == 'page')
    connection = websocket.create_connection(target['webSocketDebuggerUrl'], origin='http://localhost', timeout=60)
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

    def evaluate(expression, await_promise=False):
        result = call('Runtime.evaluate', {'expression': expression,
            'returnByValue': True, 'awaitPromise': await_promise})
        assert 'exceptionDetails' not in result, result
        return result['result'].get('value')

    call('Network.enable')
    call('Network.setBlockedURLs', {'urls': ['https://*']})
    call('Page.navigate', {'url': f'http://127.0.0.1:{server.server_port}/'})
    deadline = time.monotonic() + 20
    while not evaluate('typeof runPhotoChecks === "function"'):
        assert time.monotonic() < deadline, 'Browser check did not load'
        time.sleep(.2)
    assert evaluate("setPageProtection(true); !window.dispatchEvent(new Event('beforeunload', {cancelable:true}))"), 'Missing unsaved-page guard'
    assert evaluate("setPageProtection(false); window.dispatchEvent(new Event('beforeunload', {cancelable:true}))"), 'Saved pages must not be blocked'
    print('PASS: browser exit protection activates and clears.', flush=True)
    result = evaluate('fetch("fixture.json").then(r => r.text()).then(runPhotoChecks)', True)
    print(result, flush=True)
    assert json.loads(result)['passed'], result
    call('Network.setCacheDisabled', {'cacheDisabled': True})
    blocked_worker = True
    print(evaluate('checkUnavailable()', True), flush=True)
finally:
    if connection:
        connection.close()
    process.terminate()
    process.wait(timeout=10)
    server.shutdown()
