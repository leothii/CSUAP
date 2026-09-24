"""One-time migration to the four-diagram submission set."""
from pathlib import Path
import re
import shutil

here=Path(__file__).resolve().parent
doc=here/'CHAPTER_3_APP_FRAMEWORK_AND_DEPLOYMENT.md'
text=doc.read_text(encoding='utf-8')
text=text.replace('The separate export flowchart below describes the paths available after generation.', 'Saving and sharing are described in the following paragraph.')
text=re.sub(r'!\[Figure A8\].*?\*\*Figure A8\..*?\*\*\n\n','',text,flags=re.S)
start=text.index('### Object-Oriented Design')
table=text.index('**Table A3.',start)
text=text[:start]+'### Interaction and State Management\n\nThe laboratory state coordinates asynchronous processing and retains the current photograph, preview, and result. Processing functions remain separate from the interface, allowing pixel operations and image-quality calculations to be checked independently.\n\n'+text[table:]
start=text.index('![Figure A5]')
end=text.index('### Deployment Design',start)
text=text[:start]+'Each processing stage is awaited before the next begins. Native compute uses a background isolate; web compute executes on the main event loop. The laboratory manages busy, picking, and exporting flags to prevent conflicting actions, and reports processing failures before returning control to the user.\n\n'+text[end:]
text=text.replace('![Figure A7](diagrams/07_deployment_diagram.png)','![Figure A4](diagrams/04_uml_deployment.png)')
text=text.replace('**Figure A7. Build artifacts, device execution, and platform export services.**','**Figure A4. UML deployment of the application artifact on a mobile device.**\n\nThe diagram uses UML node notation: a «device» represents the physical mobile device, an «executionEnvironment» represents its operating system, and an «artifact» represents the deployed application. Nesting shows the artifact deployed within the operating-system node hosted by the device. Android and iOS are alternative deployment configurations, not two operating systems on one device. The diagram expresses the intended deployment structure; it does not claim that distribution signing or device validation is complete.')
text=text.replace('Architecture, data dictionary, flow, sequence, and deployment diagrams.', 'System and software architecture diagrams, data dictionary, application flowchart, and UML deployment diagram.')
doc.write_text(text,encoding='utf-8')

p=here/'build_documents.py';s=p.read_text(encoding='utf-8')
start=s.index("d=Diagram('03_processing_flow'")
end=s.index('# Render the prose',start)
s=s[:start]+'''# Keep the main flowchart and generate the formal UML deployment view.
from flow_diagrams import build_flows
from uml_deployment import build_deployment
build_flows(Diagram)
build_deployment(Diagram)

'''+s[end:]
s=s.replace("==8","==4").replace('Verified 8 embedded diagrams','Verified 4 embedded diagrams').replace('(1200,4*520)','(1200,2*520)')
p.write_text(s,encoding='utf-8')
p=here/'flow_diagrams.py';s=p.read_text(encoding='utf-8')
s=s[:s.index("    d=Flow('08_export_flow'")]
s=s.replace('Result export is detailed in Figure A8.', 'Save and share behavior is described in the accompanying text.')
p.write_text(s,encoding='utf-8')

# Archive superseded figures without deleting user files.
folder=here/'diagrams';archive=here/'archive'/'superseded_diagrams'
archive.mkdir(parents=True,exist_ok=True)
for stem in ['04_class_diagram','05_sequence_diagram','06_data_flow','07_deployment_diagram','08_export_flow']:
    for ext in ['.png','.svg']:
        source=folder/(stem+ext);target=archive/source.name
        assert source.resolve().is_relative_to(here.resolve())
        assert target.resolve().is_relative_to(here.resolve())
        if source.exists():
            if target.exists():raise FileExistsError(target)
            shutil.move(str(source),str(target))
print('Updated chapter, generator, and active diagram set.')
