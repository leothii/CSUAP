from pathlib import Path
import re
import zipfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'Chapter 4' / 'CHAPTER_4_RESULTS_AND_DISCUSSION.md'
TEMPLATE = Path(r'C:\Users\Acer\Downloads\50% THESIS - CSUAP  (3).docx')
OUT = ROOT / 'Chapter 4' / 'CHAPTER_4_RESULTS_AND_DISCUSSION.docx'
text = SOURCE.read_text(encoding='utf-8')
text = re.sub(r'\*Draft based on.*?\*\n\n', '', text, count=1)
text = text.replace('## Implementation', 'This chapter presents the implementation and available results of the context-specific universal adversarial perturbation framework. The discussion follows the study objectives by describing the development environment, the application of the trained perturbation, and the perceptual quality of the resulting images. It also identifies the extent to which the available findings support the intended image privacy protection mechanism.\n\n## Implementation', 1)
text = text.replace('The study implemented CLIP SLIP,', 'Following the offline training, application, and evaluation tiers described in Chapter 3, the study implemented CLIP SLIP,', 1)
text = text.replace('### Development Tools\n', '### Development Tools\n\nThe development of the framework involved Python-based research tools and a Flutter-based application. The research tools supported perturbation generation and evaluation, while Flutter provided the interface through which users could apply the trained vector to their photographs. Table 8 presents the available hardware and software information.\n')
text = text.replace('### Hardware Requirements\n', '### Hardware Requirements\n\nThe application applies a previously trained perturbation and therefore has different computational requirements from the offline training process. Its working memory and processing time depend primarily on the dimensions of the selected photograph. Table 9 presents the hardware considerations supported by the implementation.\n')
text = text.replace('### Software Requirements\n', '### Software Requirements\n\nThe deployment environment must support the application package, its bundled assets, and the platform services used to import and export photographs. Table 10 summarizes the software configuration of the available platform projects.\n')
text = text.replace('**Required interface figures — insert actual captures from the implemented application:**', '**Presentation of the Implemented Interface**\n\nThe following figures are reserved for screenshots documenting the principal stages of the application workflow. Each screenshot should present an actual application state and identify the associated input or output.')
text = text.replace('*Actual application screenshots were not available among the inspected research artifacts. These figure instructions are placeholders, not evidence of captured interface results.*', 'The interface figures remain pending. The descriptions above identify the screenshots required to complete the presentation of the implemented output.')
text = text.replace('## Results Interpretation and Analysis\n', '## Results Interpretation and Analysis\n\nThe analysis considers perceptual quality, implementation correctness, and the evidence required to establish semantic disruption. These dimensions are discussed separately because preservation of visual quality does not by itself demonstrate that the perturbation prevents semantic extraction by CLIP-based systems.\n')
text = text.replace('### Adversarial Effectiveness and Classification Metrics', '### Semantic Disruption and Downstream Generative Evaluation')
text = text.replace('| Fooling rate | Paired clean and cloaked predictions from a fixed target model and candidate class set | Not measured in the application or supplied perceptual results |', '| Joint semantic-disruption and quality rate | A measurable decrease in CLIP similarity together with SSIM ≥ 0.95 and PSNR ≥ 30 dB, following the operational definition in Chapter 3 | Cannot be computed without paired semantic scores |')
text = text.replace('For a defined binary classification task, accuracy = (TP + TN)/(TP + TN + FP + FN), precision = TP/(TP + FP), recall = TP/(TP + FN), and F1 = 2PR/(P + R), with undefined denominators handled explicitly. Multiclass evaluation additionally requires a stated averaging method. The percentages in Table 4.5 are image-quality threshold pass rates and must not be relabeled as classification accuracy or protection success.', 'The delimitation of the study emphasizes semantic disruption rather than classification robustness. Consequently, classification accuracy, precision, recall, and F-measure are not the primary outcome measures of this framework. BERTScore F1 remains relevant to the stated caption-comparison objective, but it is distinct from classification F1. The percentages in Table 4.5 represent image-quality threshold attainment and cannot be interpreted as semantic-disruption or protection success rates.')
marker = 'A realization from implementation was that reproducibility requires more than naming a metric.'
text = text.replace(marker, 'The methodology in Chapter 3 also describes frequency-domain perturbation and a computational environment containing a Tesla T4 and 16 GB RAM. These descriptions do not establish that the saved CPU training run or the recorded perceptual results were produced under that configuration. Similarly, the application implements pixel-space tiling, and the available intensity summary does not provide a cutoff-by-cutoff evaluation of the proposed frequency-domain variant. The methodological settings and actual execution records therefore require reconciliation before the results are attributed to a particular experimental configuration.\n\n' + marker)
text = text.split('## Project Evidence Used for This Draft')[0].rstrip()
text += '\n\n## System Evaluation Results\n\n### Status of Stakeholder Evaluation\n\nThe supplied thesis outlines a separate evaluation of the system with stakeholders. However, no completed usability instrument, respondent dataset, or stakeholder evaluation scores were available for this chapter. Therefore, no result is reported for ISO/IEC 25010, TAM, UTAUT, SUS, or another stakeholder instrument. The 27 passing automated tests establish the outcomes of the tested software behaviors and cannot substitute for user acceptance or usability findings. This section should be completed after the selected instrument has been administered and its results analyzed.\n'
for i in range(1, 7):
    text = text.replace(f'Table 4.{i}', f'Table {i+7}')
for i in range(1, 6):
    text = text.replace(f'Figure 4.{i}', f'Figure {i+9}')
SOURCE.write_text(text, encoding='utf-8')

W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
ET.register_namespace('w', W)
def tag(n): return '{'+W+'}'+n
def sub(parent, name, **attrs):
    return ET.SubElement(parent, tag(name), {tag(k):str(v) for k,v in attrs.items()})
def plain(s):
    s = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', s)
    return s.replace('**','').replace('`','').strip('*')
doc = ET.Element(tag('document'))
body = sub(doc, 'body')
def paragraph(parent, s, heading=0, cell=False, bold=False, caption=False):
    p = sub(parent,'p'); pp = sub(p,'pPr')
    if heading:
        sub(pp,'pStyle',val='Heading'+str(heading)); sub(pp,'keepNext')
    if caption: sub(pp,'keepNext')
    sub(pp,'spacing',line=240 if cell else 480,lineRule='auto',before=160 if heading else 0,after=80 if cell else 120)
    sub(pp,'ind',firstLine=0 if cell or heading or caption else 720)
    sub(pp,'jc',val='center' if heading in (1,2) else ('left' if cell or heading or caption else 'both'))
    r = sub(p,'r'); rp = sub(r,'rPr')
    sub(rp,'rFonts',ascii='Courier New',hAnsi='Courier New',eastAsia='Courier New',cs='Courier New')
    sub(rp,'sz',val=18 if cell else 24)
    if heading or bold: sub(rp,'b')
    if heading==3: sub(rp,'i')
    t=sub(r,'t'); t.set('{http://www.w3.org/XML/1998/namespace}space','preserve'); t.text=plain(s)
    return p

lines=text.splitlines(); i=0; tables=0
while i<len(lines):
    line=lines[i].strip()
    if not line: i+=1; continue
    if line.startswith('|'):
        rows=[]
        while i<len(lines) and lines[i].strip().startswith('|'):
            cells=[c.strip() for c in lines[i].strip().strip('|').split('|')]
            if not all(re.fullmatch(r'[-: ]+',c) for c in cells):rows.append(cells)
            i+=1
        tbl=sub(body,'tbl'); pr=sub(tbl,'tblPr'); sub(pr,'tblW',w=9360,type='dxa'); sub(pr,'tblLayout',type='fixed')
        borders=sub(pr,'tblBorders')
        for side in ['top','left','bottom','right','insideH','insideV']:sub(borders,side,val='single',sz=4,color='000000')
        margins=sub(pr,'tblCellMar')
        for side in ['top','left','bottom','right']:sub(margins,side,w=70,type='dxa')
        count=len(rows[0]); width=9360//count
        grid=sub(tbl,'tblGrid')
        for _ in range(count):sub(grid,'gridCol',w=width)
        for ri,row in enumerate(rows):
            tr=sub(tbl,'tr'); trpr=sub(tr,'trPr'); sub(trpr,'cantSplit')
            if ri==0:sub(trpr,'tblHeader')
            for s in row:
                tc=sub(tr,'tc'); tcpr=sub(tc,'tcPr');sub(tcpr,'tcW',w=width,type='dxa')
                if ri==0:sub(tcpr,'shd',fill='EEEEEE')
                paragraph(tc,s,cell=True,bold=ri==0)
        tables+=1
        paragraph(body,'')
        continue
    if line.startswith('# '):paragraph(body,line[2:],heading=1)
    elif line.startswith('## '):paragraph(body,line[3:],heading=2)
    elif line.startswith('### '):paragraph(body,line[4:],heading=3)
    elif line.startswith('**Table '):paragraph(body,line,caption=True)
    elif line.startswith('- **Figure '):paragraph(body,'[Screenshot pending] '+line[2:],caption=False)
    else:paragraph(body,line)
    i+=1
section=sub(body,'sectPr');sub(section,'pgSz',w=12240,h=15840)
sub(section,'pgMar',top=1440,right=1440,bottom=1440,left=1440,header=720,footer=720,gutter=0)
xml=ET.tostring(doc,encoding='utf-8',xml_declaration=True)
types='''<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>'''
rels='''<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'''
docrels='''<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'''
with zipfile.ZipFile(TEMPLATE) as z: styles=z.read('word/styles.xml')
with zipfile.ZipFile(OUT,'w',zipfile.ZIP_DEFLATED) as z:
    for name,data in {'[Content_Types].xml':types,'_rels/.rels':rels,'word/document.xml':xml,'word/styles.xml':styles,'word/_rels/document.xml.rels':docrels}.items():z.writestr(name,data)
with zipfile.ZipFile(OUT) as z:
    assert z.testzip() is None
    for name in z.namelist():ET.fromstring(z.read(name))
    check=ET.fromstring(z.read('word/document.xml'))
    assert len(check.findall('.//'+tag('tbl')))==6
    assert '0.9699' in ''.join(check.itertext())
print(f'Created {OUT}; validated XML and {tables} editable tables.')
