"""Standard flowchart and data-flow symbols, emitted as PNG and editable SVG."""
from html import escape


def build_flows(Diagram):
    class Flow(Diagram):
        def shape(self, key, x, y, w, h, label, kind='process'):
            self.boxes[key] = (x, y, w, h)
            color = '#405b99'
            fill = '#bce5eb' if kind == 'io' else '#ffffff'
            if kind == 'end': fill = '#83cc65'
            if kind in ('start', 'end'):
                self.d.ellipse((x,y,x+w,y+h),fill=fill,outline=color,width=4)
                self.svg.append(f'<ellipse cx="{x+w/2}" cy="{y+h/2}" rx="{w/2}" ry="{h/2}" fill="{fill}" stroke="{color}" stroke-width="4"/>')
            elif kind in ('decision', 'io'):
                pts = ([(x+w/2,y),(x+w,y+h/2),(x+w/2,y+h),(x,y+h/2)] if kind=='decision'
                       else [(x+35,y),(x+w,y),(x+w-35,y+h),(x,y+h)])
                self.d.polygon(pts,fill=fill,outline=color,width=4)
                self.svg.append('<polygon points="'+' '.join(f'{a},{b}' for a,b in pts)+f'" fill="{fill}" stroke="{color}" stroke-width="4"/>')
            elif kind=='store':
                for yy in (y,y+h):self.arrow([(x,yy),(x+w,yy)],head=False)
            else:
                radius=18 if kind=='dfd_process' else 0
                self.d.rounded_rectangle((x,y,x+w,y+h),radius=radius,fill=fill,outline=color,width=4)
                self.svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fill}" stroke="{color}" stroke-width="4"/>')
            size=34 if kind!='decision' else 32
            lines=label.split('\n')
            self.text(x+w/2,y+(h-len(lines)*(size+10))/2,label,size,True)
        def arrow(self,pts,label='',lx=None,ly=None,back=False,head=True):
            color='#d94238' if back else '#4b70ad'
            self.d.line(pts,fill=color,width=5)
            self.svg.append('<polyline points="'+' '.join(f'{x},{y}' for x,y in pts)+f'" fill="none" stroke="{color}" stroke-width="5"/>')
            if head:
                import math
                x,y=pts[-1];px,py=pts[-2];a=math.atan2(y-py,x-px)
                tri=[(x,y),(x-22*math.cos(a-.45),y-22*math.sin(a-.45)),(x-22*math.cos(a+.45),y-22*math.sin(a+.45))]
                self.d.polygon(tri,fill=color)
                self.svg.append('<polygon points="'+' '.join(f'{xx},{yy}' for xx,yy in tri)+f'" fill="{color}"/>')
            if label:self.text(lx,ly,label,29,True)
        def down(self,a,b,label=''):
            x,y,w,h=self.boxes[a];X,Y,W,H=self.boxes[b]
            self.arrow([(x+w/2,y+h),(X+W/2,Y)],label,x+w/2+75,y+h+15)

    d=Flow('03_processing_flow',2260,'PHOTO CLOAKING FLOWCHART')
    x,w=530,740
    nodes=[
        ('start',110,85,'Start','start'),
        ('load',260,90,'Load CS-UAP asset','process'),
        ('asset',420,140,'Asset loaded?','decision'),
        ('select',635,100,'Select photo','io'),
        ('decode',800,100,'Decode + prepare preview','process'),
        ('valid',970,140,'Image readable?','decision'),
        ('tune',1180,105,'Adjust intensity\nView preview','io'),
        ('apply',1360,120,'On Apply: normalize image,\ncloak and measure quality','process'),
        ('ok',1550,150,'Generation\nsucceeded?','decision'),
        ('result',1770,110,'Display PNG + metrics','io'),
        ('end',1960,100,'Result ready','end')]
    for key,y,h,label,kind in nodes:d.shape(key,x,y,w,h,label,kind)
    for a,b,label in [('start','load',''),('load','asset',''),('asset','select','Yes'),('select','decode','Selected'),('decode','valid',''),('valid','tune','Yes'),('tune','apply',''),('apply','ok',''),('ok','result','Yes'),('result','end','')]:d.down(a,b,label)
    d.shape('retry',1360,440,380,100,'Show asset error', 'io')
    d.arrow([(1270,490),(1360,490)],'No',1315,445)
    d.arrow([(1550,440),(1550,305),(1270,305)],'Retry',1470,330,True)
    d.shape('invalid',75,985,365,110,'Show input error','io')
    d.arrow([(530,1040),(440,1040)],'No',485,991)
    d.arrow([(257,985),(257,685),(530,685)],'Try another',390,745,True)
    d.shape('fail',1360,1570,380,110,'Show process error','io')
    d.arrow([(1270,1625),(1360,1625)],'No',1315,1575)
    d.arrow([(1550,1570),(1550,1230),(1270,1230)],'Retry',1615,1370,True)
    d.shape('cancel',1360,630,380,110,'Keep current state','end')
    d.arrow([(1270,685),(1360,685)],'Cancel',1315,595)
    d.text(900,2120,'Blue: forward path     Red: user-initiated retry',28)
    d.text(900,2180,'Save and share behavior is described in the accompanying text.',27)
    d.save()

