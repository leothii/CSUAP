"""Run synthetic AOT processing benchmarks from the app root.

First: dart compile exe tool/thesis_benchmark.dart -o build/thesis_benchmark.exe
Then: python scripts/run_thesis_benchmark.py [output-directory]
Close other demanding applications for a controlled repeat. This measures the
processing pipeline, not file picking, isolate startup, UI rendering or export.
"""
import csv
import json
from pathlib import Path
import subprocess
import sys

output = Path(sys.argv[1] if len(sys.argv) > 1 else 'build/thesis-evidence')
output.mkdir(parents=True, exist_ok=True)
rows = []
for width, height, count in [(640, 480, 1), (1280, 720, 1), (1920, 1080, 1), (640, 480, 10)]:
    for repetition in range(1, 4):
        row = json.loads(subprocess.check_output([
            'build/thesis_benchmark.exe', str(width), str(height), str(count)
        ], text=True))
        row['repetition'] = repetition
        rows.append(row)
        (output / 'benchmark_raw.json').write_text(json.dumps(rows, indent=2), encoding='utf-8')
        print(width, height, count, repetition, round(row['total_ms'], 2), flush=True)
with (output / 'timings.csv').open('w', newline='', encoding='utf-8') as stream:
    writer = csv.DictWriter(stream, fieldnames=[
        'width', 'height', 'count', 'repetition', 'total_ms', 'process_peak_rss_bytes'])
    writer.writeheader()
    for row in rows:
        writer.writerow({key: row[key] for key in writer.fieldnames})
