"""Export the evidence Markdown as an editable Word document, using stdlib only."""
from pathlib import Path
import re
import struct
import zipfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'Thesis Evidence/2026-10-08/REPORT.md'
OUTPUT = SOURCE.with_suffix('.docx')
NS = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture',
}
for prefix, uri in NS.items():
    ET.register_namespace(prefix, uri)


def element(parent, qualified_name, **attrs):
    prefix, local = qualified_name.split(':')
    attributes = {}
    for key, value in attrs.items():
        if ':' in key:
            p, k = key.split(':')
            key = '{' + NS[p] + '}' + k
        attributes[key] = str(value)
    return ET.SubElement(parent, '{' + NS[prefix] + '}' + local, attributes)


def w(parent, name, **attrs):
    return element(parent, 'w:' + name, **{'w:' + k: v for k, v in attrs.items()})


document = ET.Element('{' + NS['w'] + '}document')
body = w(document, 'body')
media = {}


def paragraph(text='', parent=body, style=None, bold=False, code=False):
    p = w(parent, 'p')
    properties = w(p, 'pPr')
    if style:
        w(properties, 'pStyle', val=style)
    w(properties, 'spacing', after=100, line=264, lineRule='auto')
    if code:
        w(properties, 'shd', fill='F1F4F5')
    for token in re.split(r'(`[^`]+`|\*\*[^*]+\*\*)', text):
        if not token:
            continue
        inline_code = token.startswith('`') and token.endswith('`')
        inline_bold = token.startswith('**') and token.endswith('**')
        token = token[1:-1] if inline_code else token[2:-2] if inline_bold else token
        run = w(p, 'r')
        rp = w(run, 'rPr')
        if bold or inline_bold:
            w(rp, 'b')
        if code or inline_code:
            w(rp, 'rFonts', ascii='Consolas', hAnsi='Consolas')
            w(rp, 'sz', val=16 if code else 20)
        t = w(run, 't')
        t.set('{http://www.w3.org/XML/1998/namespace}space', 'preserve')
        t.text = token
    return p


def picture(caption, relative_path):
    image = (SOURCE.parent / relative_path).read_bytes()
    assert image[:8] == b'\x89PNG\r\n\x1a\n'
    width, height = struct.unpack('>II', image[16:24])
    scale = min(6.3 / width, 5.7 / height)
    cx, cy = int(width * scale * 914400), int(height * scale * 914400)
    index = len(media) + 1
    media[f'word/media/image{index}.png'] = image
    p = paragraph()
    props = p.find('w:pPr', NS)
    w(props, 'jc', val='center')
    w(props, 'keepNext')
    drawing = w(w(p, 'r'), 'drawing')
    inline = element(drawing, 'wp:inline', distT=0, distB=0, distL=0, distR=0)
    element(inline, 'wp:extent', cx=cx, cy=cy)
    element(inline, 'wp:docPr', id=index, name=caption, descr=caption)
    frame = element(inline, 'wp:cNvGraphicFramePr')
    element(frame, 'a:graphicFrameLocks', noChangeAspect=1)
    graphic = element(inline, 'a:graphic')
    data = element(graphic, 'a:graphicData', uri=NS['pic'])
    pic = element(data, 'pic:pic')
    nv = element(pic, 'pic:nvPicPr')
    element(nv, 'pic:cNvPr', id=index, name=f'image{index}.png')
    element(nv, 'pic:cNvPicPr')
    fill = element(pic, 'pic:blipFill')
    element(fill, 'a:blip', **{'r:embed': f'image{index}'})
    element(element(fill, 'a:stretch'), 'a:fillRect')
    shape = element(pic, 'pic:spPr')
    transform = element(shape, 'a:xfrm')
    element(transform, 'a:off', x=0, y=0)
    element(transform, 'a:ext', cx=cx, cy=cy)
    element(element(shape, 'a:prstGeom', prst='rect'), 'a:avLst')
    paragraph(caption, style='Caption')


lines = SOURCE.read_text(encoding='utf-8').splitlines()
i = 0
code = False
while i < len(lines):
    line = lines[i].strip()
    i += 1
    if line.startswith('```'):
        code = not code
        continue
    if not line:
        continue
    if code:
        paragraph(line, code=True)
    elif line.startswith('|'):
        rows = []
        while True:
            cells = [cell.strip() for cell in line.strip('|').split('|')]
            if not all(re.fullmatch(r'[-: ]+', cell) for cell in cells):
                rows.append(cells)
            if i >= len(lines) or not lines[i].strip().startswith('|'):
                break
            line = lines[i].strip()
            i += 1
        widths = [4400, 4960] if len(rows[0]) == 2 else [1750, 800, 1700, 2050, 3060]
        table = w(body, 'tbl')
        props = w(table, 'tblPr')
        w(props, 'tblW', w=sum(widths), type='dxa')
        w(props, 'tblLayout', type='fixed')
        borders = w(props, 'tblBorders')
        for side in ['top', 'left', 'bottom', 'right', 'insideH', 'insideV']:
            w(borders, side, val='single', sz=4, color='CBD5D1')
        margins = w(props, 'tblCellMar')
        for side in ['top', 'left', 'bottom', 'right']:
            w(margins, side, w=90, type='dxa')
        grid = w(table, 'tblGrid')
        for width in widths:
            w(grid, 'gridCol', w=width)
        for row_index, row in enumerate(rows):
            tr = w(table, 'tr')
            trpr = w(tr, 'trPr')
            w(trpr, 'cantSplit')
            if row_index == 0:
                w(trpr, 'tblHeader')
            for cell_index, value in enumerate(row):
                tc = w(tr, 'tc')
                tcpr = w(tc, 'tcPr')
                w(tcpr, 'tcW', w=widths[cell_index], type='dxa')
                if row_index == 0:
                    w(tcpr, 'shd', fill='DCEBE3')
                paragraph(value, parent=tc, bold=row_index == 0, style='TableText')
        paragraph()
    elif match := re.fullmatch(r'!\[([^\]]*)\]\(([^)]+)\)', line):
        picture(match[1], match[2])
    elif line.startswith('# '):
        paragraph(line[2:], style='Title')
    elif line.startswith('## '):
        paragraph(line[3:], style='Heading1')
    elif line.startswith('- '):
        paragraph('\u2022 ' + line[2:])
    else:
        paragraph(line)

section = w(body, 'sectPr')
w(section, 'pgSz', w=12240, h=15840)
w(section, 'pgMar', top=1080, bottom=1080, left=1440, right=1440, header=540, footer=540, gutter=0)
styles = f'''<w:styles xmlns:w="{NS['w']}">
<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="22"/><w:color w:val="24352D"/></w:rPr></w:rPrDefault></w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style>
<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:after="240"/></w:pPr><w:rPr><w:b/><w:sz w:val="40"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:pPr><w:keepNext/><w:keepLines/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:sz w:val="28"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="TableText"><w:name w:val="Table Text"/><w:basedOn w:val="Normal"/><w:rPr><w:sz w:val="20"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Caption"><w:name w:val="Caption"/><w:basedOn w:val="Normal"/><w:pPr><w:jc w:val="center"/></w:pPr><w:rPr><w:i/><w:sz w:val="20"/></w:rPr></w:style>
</w:styles>'''
types = '''<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Default Extension="png" ContentType="image/png"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>'''
rels = f'''<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="document" Type="{NS['r']}/officeDocument" Target="word/document.xml"/></Relationships>'''
docrels = f'''<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="styles" Type="{NS['r']}/styles" Target="styles.xml"/>'''
for index in range(1, len(media) + 1):
    docrels += f'<Relationship Id="image{index}" Type="{NS["r"]}/image" Target="media/image{index}.png"/>'
docrels += '</Relationships>'
parts = {'[Content_Types].xml': types, '_rels/.rels': rels,
         'word/document.xml': ET.tostring(document, encoding='utf-8', xml_declaration=True),
         'word/styles.xml': styles, 'word/_rels/document.xml.rels': docrels, **media}
with zipfile.ZipFile(OUTPUT, 'w', zipfile.ZIP_DEFLATED) as archive:
    for name, data in parts.items():
        archive.writestr(name, data)
with zipfile.ZipFile(OUTPUT) as archive:
    assert archive.testzip() is None
    for name in archive.namelist():
        if name.endswith(('.xml', '.rels')):
            ET.fromstring(archive.read(name))
    rendered = ET.fromstring(archive.read('word/document.xml'))
    assert len(rendered.findall('.//w:tbl', NS)) == 3
    assert len(rendered.findall('.//w:drawing', NS)) == 2
    contents = ''.join(rendered.itertext())
    for line in lines:
        if not line.strip() or line.startswith(('```', '|', '![')):
            continue
        clean = re.sub(r'^#{1,6} |^- ', '', line).replace('`', '').replace('**', '')
        assert clean in contents, f'Missing content: {clean[:80]}'
print(f'Created {OUTPUT} ({OUTPUT.stat().st_size:,} bytes); validated text, 3 tables and 2 embedded screenshots.')
