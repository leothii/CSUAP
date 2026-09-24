"""Render the alternate chapter without modifying the original chapter."""
from pathlib import Path
import re
import zipfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'Chapter 4' / 'CHAPTER_4_RESEARCH_PAPER_STYLE.md'
OUT = ROOT / 'Chapter 4' / 'CHAPTER_4_RESEARCH_PAPER_STYLE.docx'
TEMPLATE = Path(r'C:\Users\Acer\Downloads\50% THESIS - CSUAP  (3).docx')
text = SOURCE.read_text(encoding='utf-8')
# Reuse only the rendering code, excluding the original content transformations.
renderer = (ROOT / 'outputs/create_chapter4_docx.py').read_text(encoding='utf-8')
renderer = 'W = ' + renderer.split('\nW = ', 1)[1]
exec(compile(renderer, 'chapter4_docx_renderer', 'exec'))
