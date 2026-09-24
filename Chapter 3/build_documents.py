"""Generate editable SVG diagrams, PNG figures, and the Chapter 3 Word document."""
from pathlib import Path
import math
import re
import textwrap
import zipfile
import xml.etree.ElementTree as ET
from html import escape
from PIL import Image, ImageDraw, ImageFont

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
FIGS = HERE / 'diagrams'
FIGS.mkdir(exist_ok=True)
FONT = Path('C:/Windows/Fonts/arial.ttf')
BOLD = Path('C:/Windows/Fonts/arialbd.ttf')

class Diagram:
    def __init__(self, name, height, title):
        self.name, self.width, self.height = name, 1800, height
        self.im = Image.new('RGB', (self.width, height), 'white')
        self.d = ImageDraw.Draw(self.im)
        self.svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="1800" height="{height}" viewBox="0 0 1800 {height}">', '<rect width="100%" height="100%" fill="white"/>']
        self.boxes = {}
        self.text(900, 42, title, 34, True)
    def text(self, x, y, value, size=28, bold=False, center=True):
        font = ImageFont.truetype(str(BOLD if bold else FONT), size)
        for i, line in enumerate(value.split('\n')):
            yy = y + i*(size+10)
            self.d.text((x,yy),line,font=font,fill='#172536',anchor='mt' if center else 'lt')
            self.svg.append(f'<text x="{x}" y="{yy+size}" font-family="Arial, sans-serif" font-size="{size}" font-weight="{"bold" if bold else "normal"}" text-anchor="{"middle" if center else "start"}" fill="#172536">{escape(line)}</text>')
    def line(self, points, arrow=True, dashed=False):
        self.d.line(points, fill='#44566a', width=3)
        self.svg.append('<polyline points="'+' '.join(f'{x},{y}' for x,y in points)+'" fill="none" stroke="#44566a" stroke-width="3"'+(' stroke-dasharray="10 7"' if dashed else '')+'/>')
        if arrow:
            x,y=points[-1]; px,py=points[-2]; a=math.atan2(y-py,x-px)
            tri=[(x,y),(x-18*math.cos(a-.45),y-18*math.sin(a-.45)),(x-18*math.cos(a+.45),y-18*math.sin(a+.45))]
            self.d.polygon(tri,fill='#44566a')
            self.svg.append('<polygon points="'+' '.join(f'{xx},{yy}' for xx,yy in tri)+'" fill="#44566a"/>')
    def box(self,key,x,y,w,h,title,body='',kind='normal'):
        self.boxes[key]=(x,y,w,h)
        fill='#edf3f8' if kind=='normal' else '#f7f7f7'
        self.d.rounded_rectangle((x,y,x+w,y+h),radius=12,fill=fill,outline='#44566a',width=3)
        self.svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{fill}" stroke="#44566a" stroke-width="3"/>')
        self.text(x+w/2,y+18,title,28,True)
        if body:self.text(x+w/2,y+65,body,25)
        if kind=='store':
            self.line([(x+16,y+8),(x+16,y+h-8)],False)
            self.line([(x+w-16,y+8),(x+w-16,y+h-8)],False)
    def edge(self,a,b,label='',side='down'):
        x,y,w,h=self.boxes[a]; X,Y,W,H=self.boxes[b]
        if side=='down':
            points=[(x+w/2,y+h),(X+W/2,Y)]
            tx,ty=(points[0][0]+points[1][0])/2+15,(points[0][1]+points[1][1])/2-18
        elif side=='right':
            points=[(x+w,y+h/2),(X,Y+H/2)];tx,ty=(x+w+X)/2,(y+h/2+Y+H/2)/2-42
        else:
            points=[(x,y+h/2),(X+W,Y+H/2)];tx,ty=(x+X+W)/2,(y+h/2+Y+H/2)/2-42
        self.line(points)
        if label:self.text(tx,ty,label,23)
    def save(self):
        self.svg.append('</svg>')
        (FIGS/(self.name+'.svg')).write_text('\n'.join(self.svg),encoding='utf-8')
        self.im.save(FIGS/(self.name+'.png'))
    def rect(self,x,y,w,h,fill='white',radius=8):
        self.d.rounded_rectangle((x,y,x+w,y+h),radius=radius,fill=fill,outline='#275775',width=5)
        self.svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fill}" stroke="#275775" stroke-width="5"/>')
    def circle(self,x,y,r,fill='white'):
        self.d.ellipse((x-r,y-r,x+r,y+r),fill=fill,outline='#275775',width=5)
        self.svg.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}" stroke="#275775" stroke-width="5"/>')
    def icon(self,kind,cx,cy):
        if kind in ('laptop','browser'):
            self.rect(cx-75,cy-50,150,95,'#e0eef5')
            if kind=='laptop':self.line([(cx-95,cy+60),(cx+95,cy+60)],False)
            else:
                self.line([(cx-75,cy-25),(cx+75,cy-25)],False)
                for xx in [-52,-35,-18]:self.circle(cx+xx,cy-38,3,'#275775')
            self.line([(cx-25,cy-10),(cx-40,cy+5),(cx-25,cy+20)],False)
            self.line([(cx+25,cy-10),(cx+40,cy+5),(cx+25,cy+20)],False)
        elif kind=='phone':
            self.rect(cx-44,cy-72,88,144,'#e0eef5',12)
            self.line([(cx-14,cy-56),(cx+14,cy-56)],False)
            self.circle(cx,cy+55,5,'#275775')
            self.line([(cx-23,cy+15),(cx-5,cy-10),(cx+8,cy+5),(cx+24,cy-20)],False)
        elif kind=='photo':
            self.rect(cx-72,cy-53,144,106,'#e0eef5')
            self.circle(cx+38,cy-25,11,'#f5d27b')
            self.line([(cx-60,cy+38),(cx-20,cy-12),(cx+10,cy+20),(cx+30,cy),(cx+61,cy+38)],False)
        elif kind=='vector':
            for yy in range(3):
                for xx in range(3):self.rect(cx-62+xx*44,cy-62+yy*44,36,36,'#9cc4d7' if (xx+yy)%2 else '#e0eef5',3)
        elif kind=='chart':
            self.line([(cx-75,cy-60),(cx-75,cy+60),(cx+75,cy+60)],False)
            for xx,h in [(-48,42),(-5,78),(38,112)]:self.rect(cx+xx,cy+55-h,28,h,'#9cc4d7',2)
        elif kind=='user':
            self.circle(cx,cy-35,28,'#e0eef5');self.rect(cx-52,cy+5,104,63,'#e0eef5',24)
        elif kind=='controls':
            for yy,xx in [(-40,-30),(0,35),(40,-5)]:
                self.line([(cx-75,cy+yy),(cx+75,cy+yy)],False);self.circle(cx+xx,cy+yy,13,'#9cc4d7')
        elif kind=='chip':
            self.rect(cx-45,cy-45,90,90,'#e0eef5');self.rect(cx-24,cy-24,48,48,'#9cc4d7',3)
            for a in [-25,0,25]:
                for sign in [-1,1]:
                    self.line([(cx+a,cy+sign*45),(cx+a,cy+sign*70)],False)
                    self.line([(cx+sign*45,cy+a),(cx+sign*70,cy+a)],False)
        elif kind=='folder':
            self.rect(cx-70,cy-55,65,35,'#9cc4d7');self.rect(cx-75,cy-30,150,95,'#e0eef5')
        elif kind=='share':
            for a,b in [((-50,0),(45,-45)),((-50,0),(45,45))]:self.line([(cx+a[0],cy+a[1]),(cx+b[0],cy+b[1])],False)
            for x,y in [(-50,0),(45,-45),(45,45)]:self.circle(cx+x,cy+y,19,'#9cc4d7')
    def card(self,key,x,y,title,icon,subtitle='',w=330,h=255):
        self.boxes[key]=(x,y,w,h)
        self.d.rounded_rectangle((x,y,x+w,y+h),radius=20,fill='#f5f8fa',outline='#b4c6d2',width=2)
        self.svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="20" fill="#f5f8fa" stroke="#b4c6d2" stroke-width="2"/>')
        self.icon(icon,x+w/2,y+95)
        self.text(x+w/2,y+178,title,31,True)
        if subtitle:self.text(x+w/2,y+218,subtitle,23)

d=Diagram('01_system_architecture',1030,'SYSTEM ARCHITECTURE')
d.text(130,120,'OFFLINE RESEARCH',23,True,False)
d.card('train',120,170,'Training','laptop','Python · CLIP')
d.card('asset',735,170,'CS-UAP asset','vector','Reusable pattern')
d.card('eval',1350,170,'Evaluation','chart','External models')
d.text(130,575,'ON-DEVICE APPLICATION',23,True,False)
d.card('user',120,630,'User photo','photo','Select image + intensity')
d.card('app',735,630,'CLIP SLIP','phone','Local processing')
d.card('output',1350,630,'Cloaked PNG','folder','Save or share')
d.edge('train','asset','learned vector','right')
d.edge('asset','eval','test artifact','right')
d.edge('asset','app');d.text(1000,510,'bundle',23)
d.edge('user','app','input','right');d.edge('app','output','output','right')
d.text(900,960,'Offline training → bundled asset → local image processing',27)
d.save()

d=Diagram('02_software_architecture',1130,'SOFTWARE ARCHITECTURE')
d.card('ui',180,145,'Flutter screens','phone','Navigation + photo lab',w=440)
d.card('state',1090,145,'Workflow state','controls','Input · progress · result',w=440)
d.edge('ui','state','user actions','right')
d.card('proc',115,695,'Image processing','chip','Prepare · preview · inspect',w=420)
d.card('pattern',690,695,'Perturbation','vector','Validate · tile · blend',w=420)
d.card('platform',1265,695,'Platform services','share','Import · save · share',w=420)
d.line([(1200,400),(1200,520),(325,520),(325,695)])
d.line([(1420,400),(1420,520),(1475,520),(1475,695)])
d.edge('proc','pattern','','right')
d.text(900,1040,'Dart processing + native / web adapters',28)
d.save()

# Keep the main flowchart and generate the formal UML deployment view.
from flow_diagrams import build_flows
from uml_deployment import build_deployment
build_flows(Diagram)
build_deployment(Diagram)

# Render the prose using the thesis-aligned Word formatting used for Chapter 4.
SOURCE=HERE/'CHAPTER_3_APP_FRAMEWORK_AND_DEPLOYMENT.md'
OUT=HERE/'CHAPTER_3_APP_FRAMEWORK_AND_DEPLOYMENT.docx'
TEMPLATE=Path(r'C:\Users\Acer\Downloads\50% THESIS - CSUAP  (3).docx')
text=SOURCE.read_text(encoding='utf-8')
images=[]
def placeholder(match):
    images.append(HERE/match.group(1))
    return 'APP_DIAGRAM_'+str(len(images))
text=re.sub(r'!\[[^\]]*\]\(([^)]+)\)',placeholder,text)
renderer=(ROOT/'outputs/create_chapter4_docx.py').read_text(encoding='utf-8')
renderer='W = '+renderer.split('\nW = ',1)[1]
renderer=renderer.replace("    assert '0.9699' in ''.join(check.itertext())",'')
exec(compile(renderer,'chapter3_renderer','exec'))

# Embed actual diagram images into Word; they are not screenshot placeholders.
with zipfile.ZipFile(OUT) as z:parts={name:z.read(name) for name in z.namelist()}
doc=ET.fromstring(parts['word/document.xml'])
body=doc.find(tag('body'))
REL='http://schemas.openxmlformats.org/package/2006/relationships'
R='http://schemas.openxmlformats.org/officeDocument/2006/relationships'
WP='http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing'
A='http://schemas.openxmlformats.org/drawingml/2006/main'
PIC='http://schemas.openxmlformats.org/drawingml/2006/picture'
rels=ET.fromstring(parts['word/_rels/document.xml.rels'])
for i,path in enumerate(images,1):
    rid='rIdImage'+str(i);name='diagram'+str(i)+'.png'
    ET.SubElement(rels,'{'+REL+'}Relationship',{'Id':rid,'Type':R+'/image','Target':'media/'+name})
    parts['word/media/'+name]=path.read_bytes()
    with Image.open(path) as im:w,h=im.size
    scale=min(5943600/w,7315200/h);cx,cy=int(w*scale),int(h*scale)
    for p in body.findall(tag('p')):
        if ''.join(p.itertext())!='APP_DIAGRAM_'+str(i):continue
        p.clear();pp=sub(p,'pPr');sub(pp,'jc',val='center');sub(pp,'keepNext');sub(pp,'spacing',before=120,after=80,line=240,lineRule='auto');sub(pp,'ind',firstLine=0)
        run=sub(p,'r');drawing=sub(run,'drawing')
        inline=ET.SubElement(drawing,'{'+WP+'}inline',{'distT':'0','distB':'0','distL':'0','distR':'0'})
        ET.SubElement(inline,'{'+WP+'}extent',{'cx':str(cx),'cy':str(cy)})
        ET.SubElement(inline,'{'+WP+'}docPr',{'id':str(i),'name':path.stem,'descr':path.stem.replace('_',' ')})
        graphic=ET.SubElement(inline,'{'+A+'}graphic');data=ET.SubElement(graphic,'{'+A+'}graphicData',{'uri':PIC})
        pic=ET.SubElement(data,'{'+PIC+'}pic');nv=ET.SubElement(pic,'{'+PIC+'}nvPicPr')
        ET.SubElement(nv,'{'+PIC+'}cNvPr',{'id':str(i),'name':name});ET.SubElement(nv,'{'+PIC+'}cNvPicPr')
        fill=ET.SubElement(pic,'{'+PIC+'}blipFill');ET.SubElement(fill,'{'+A+'}blip',{'{'+R+'}embed':rid})
        stretch=ET.SubElement(fill,'{'+A+'}stretch');ET.SubElement(stretch,'{'+A+'}fillRect')
        sp=ET.SubElement(pic,'{'+PIC+'}spPr');xf=ET.SubElement(sp,'{'+A+'}xfrm')
        ET.SubElement(xf,'{'+A+'}off',{'x':'0','y':'0'});ET.SubElement(xf,'{'+A+'}ext',{'cx':str(cx),'cy':str(cy)})
        geom=ET.SubElement(sp,'{'+A+'}prstGeom',{'prst':'rect'});ET.SubElement(geom,'{'+A+'}avLst')
types=ET.fromstring(parts['[Content_Types].xml'])
ET.SubElement(types,'{http://schemas.openxmlformats.org/package/2006/content-types}Default',{'Extension':'png','ContentType':'image/png'})
parts['word/document.xml']=ET.tostring(doc,encoding='utf-8',xml_declaration=True)
parts['word/_rels/document.xml.rels']=ET.tostring(rels,encoding='utf-8',xml_declaration=True)
parts['[Content_Types].xml']=ET.tostring(types,encoding='utf-8',xml_declaration=True)
with zipfile.ZipFile(OUT,'w',zipfile.ZIP_DEFLATED) as z:
    for name,value in parts.items():z.writestr(name,value)
with zipfile.ZipFile(OUT) as z:
    assert z.testzip() is None
    for name in z.namelist():
        if name.endswith(('.xml','.rels')):ET.fromstring(z.read(name))
    assert len(doc.findall('.//{'+WP+'}inline'))==4
    assert 'APP_DIAGRAM_' not in ''.join(doc.itertext())
print('Verified 4 embedded diagrams, 6 tables, and valid Word package XML.')

# Contact sheet for checking the generated figures.
sheet=Image.new('RGB',(1200,2*520),'#dddddd')
for i,path in enumerate(images):
    im=Image.open(path);im.thumbnail((590,500));sheet.paste(im,((i%2)*600+(600-im.width)//2,(i//2)*520))
sheet.save(FIGS/'diagram_overview.png')
