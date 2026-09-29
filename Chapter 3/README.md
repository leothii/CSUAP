# Chapter 3 — Application Framework and Deployment

- **CHAPTER_3_APP_FRAMEWORK_AND_DEPLOYMENT.docx**: Word document with five embedded diagrams and six editable tables.
- **CHAPTER_3_APP_FRAMEWORK_AND_DEPLOYMENT.md**: Editable text source, with links to the same diagrams.
- **diagrams/**: Five figures in PNG and editable SVG: system architecture, software architecture, application flowchart, mobile UML deployment, and website deployment/local processing. The website reuses the shared architecture and processing figures. The overview image previews this submission set.
- **archive/superseded_diagrams/**: Removed class, sequence, DFD, earlier deployment, and export diagrams. These are not part of the current document.
- **CANVA_DIAGRAM_GUIDE.md**: Notation guidance for redrawing the retained diagrams.
- **build_documents.py**: Rebuilds the diagrams and Word document using the local thesis-format renderer and Python/Pillow.

This is an app-focused section for insertion into Chapter 3, not a replacement for the training and model-evaluation methodology. Figure and table labels A1 onward are temporary insertion labels; renumber them when merging with the full thesis. The document describes the implemented framework and separates it from proposed release and validation activities.

Source mapping: application navigation and workflow in lib/main.dart; processing and quality measurements in lib/lab_processing.dart; vector loading and pixel operations in lib/perturbation_protection.dart; native/web sharing in lib/share_image_file*.dart; dependencies in pubspec.yaml; platform configuration in android/app, ios/Runner, and the desktop/web host projects.

Before submission, supply exact laptop specifications, record the final SDK and release configuration, and complete device and stakeholder validation. Do not describe conceptual protection history, frequency-domain application, or model inference as deployed app features unless they are subsequently implemented.
