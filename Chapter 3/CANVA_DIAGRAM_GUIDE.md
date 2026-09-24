# Current diagram set for Canva

Keep only these four figures:

1. **A1 — System architecture:** existing icon-based overview.
2. **A2 — Software architecture:** existing logical component view.
3. **A3 — Application flowchart:** existing standard flowchart; only its obsolete A8 reference was replaced with a reference to the accompanying text.
4. **A4 — UML deployment:** new formal deployment view replacing the former deployment architecture graphic.

A1 and A2 are descriptive architecture views, not UML diagrams. Their designs were retained as requested. A3 uses flowchart notation, not UML activity-diagram notation. Do not relabel those diagrams as UML.

## Drawing A4 correctly

- Draw an outer three-dimensional node box labeled **«device» User mobile device**.
- Inside it, draw another node box labeled **«executionEnvironment» Android or iOS**.
- Inside the operating-system node, draw a rectangular artifact with a small document icon and the label **«artifact» CLIP SLIP application**.
- Describe the package contents in the artifact: compiled application, Flutter engine, native plugins, bundled vector, and fonts.
- Keep the nested relationship: device contains operating-system environment; environment contains deployed artifact. No arrow is required to repeat what nesting already expresses.
- Android and iOS are alternative targets. The image does not claim both run on one phone or that distribution has already been completed.

Nesting artifacts inside nodes is a supported UML deployment representation; node hierarchy can likewise be represented by nesting. See [Microsoft's UML deployment documentation](https://support.microsoft.com/en-us/visio/create-a-uml-deployment-diagram), particularly “Node instances and artifacts” and “Hierarchical nodes.”

Colors, typography, and spacing can follow your Canva style. Preserve the node shapes, artifact symbol, labels, and containment relationships. The archived diagrams are excluded from the current chapter and do not need to be redrawn.
