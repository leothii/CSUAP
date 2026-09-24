"""UML deployment view: nested device/execution nodes and deployed artifacts."""
def build_deployment(Diagram):
    d=Diagram('04_uml_deployment',1250,'UML DEPLOYMENT DIAGRAM')
    def node(x,y,w,h,stereotype,name):
        d.rect(x,y,w,h,'#f5f8fa',0)
        d.line([(x,y),(x+20,y-20),(x+w+20,y-20),(x+w,y)],False)
        d.line([(x+w,y),(x+w+20,y-20),(x+w+20,y+h-20),(x+w,y+h)],False)
        d.text(x+w/2,y+20,'«'+stereotype+'»',28)
        d.text(x+w/2,y+62,name,32,True)
    def artifact(x,y,w,h,title,detail):
        d.rect(x,y,w,h,'white',0)
        d.line([(x+w-44,y+14),(x+w-28,y+14),(x+w-15,y+27),(x+w-15,y+55),(x+w-44,y+55),(x+w-44,y+14)],False)
        d.line([(x+w-28,y+14),(x+w-28,y+27),(x+w-15,y+27)],False)
        d.text(x+w/2,y+20,'«artifact»',27)
        d.text(x+w/2,y+70,title,30,True)
        d.text(x+w/2,y+121,detail,25)
    node(130,190,1540,800,'device','User mobile device')
    node(215,360,1370,530,'executionEnvironment','Android or iOS')
    artifact(300,525,1200,275,'CLIP SLIP application','Android: APK  |  iOS: application bundle\nDart application + Flutter engine + native plugins\nBundled CS-UAP vector and fonts')
    d.text(900,1050,'Nesting denotes deployment on the enclosing node.',27)
    d.text(900,1105,'Android and iOS are alternative targets; each requires its own signed build.',25)
    d.text(900,1160,'Local processing does not require a model server.',25)
    d.save()
