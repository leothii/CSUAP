/// Replace pending entries when the study's public materials are ready.
const researchPaperUrl = String.fromEnvironment('RESEARCH_PAPER_URL');
const repositoryUrl = 'https://github.com/leothii/CSUAP';
const extraResourceUrl = String.fromEnvironment('EXTRA_RESOURCE_URL');

class TeamMember {
  const TeamMember(this.name, this.role, this.work, {this.photoAsset});
  final String name, role, work;
  final String? photoAsset;
}

const team = [
  TeamMember('Researcher 01', 'Model development',
      'Placeholder profile • Add the researcher’s name and portrait.\n\nCS-UAP training, I-FGSM experiments, and the frozen CLIP encoder.'),
  TeamMember('Researcher 02', 'Evaluation & analysis',
      'Placeholder profile • Add the researcher’s name and portrait.\n\nPerceptual quality, semantic disruption, caption drift, and downstream evaluation.'),
  TeamMember('Researcher 03', 'Mobile development',
      'Placeholder profile • Add the researcher’s name and portrait.\n\nOn-device image processing, interaction design, and application testing.'),
  TeamMember('Adviser', 'Research guidance',
      'Placeholder profile • Add the adviser’s name and portrait.\n\nStudy design, methodology review, and research supervision.'),
];
const glossary = <String, String>{
  'CS-UAP':
      'Context-specific universal adversarial perturbation. One trained pixel pattern is reused across images from a target context. This app tiles the bundled 224 × 224 RGB vector over your photo.',
  'I-FGSM':
      'Iterative Fast Gradient Sign Method. Small repeated gradient-sign updates optimize the perturbation during training. The mobile app applies the trained vector; it does not train a model.',
  'CLIP ViT-B/32':
      'The frozen image encoder targeted by this study. CLIP relates images and text through embeddings. Frozen means its model weights stay unchanged while the perturbation is trained.',
  'SSIM':
      'Structural Similarity Index compares local image structure. The study target is ≥ 0.95. The app measures full-resolution RGB using 7 × 7 windows and sample covariance on the exported PNG. Images smaller than 7 pixels on either side cannot use this window.',
  'PSNR':
      'Peak Signal-to-Noise Ratio measures pixel distortion in decibels. The study target is ≥ 30 dB. Higher means less pixel error; identical images have infinite PSNR. Image quality alone does not establish semantic protection.',
  'CLIP Score':
      'Compare clean and cloaked image–text alignment using the same text reference and scoring protocol. Requires CLIP inference, which is not bundled in this app.',
  'ClipCap & BERTScore F1':
      'ClipCap produces captions for clean and cloaked images. BERTScore F1 compares those captions semantically to assess drift. Both caption generation and language-model evaluation run outside this app.',
  'SDXL & LoRA':
      'SDXL is the downstream image generator. Low-Rank Adaptation fine-tunes adapters on clean versus cloaked training images to test whether disruption survives generative adaptation.',
  'FID':
      'Fréchet Inception Distance compares feature distributions across image sets. It belongs to the downstream Clean/Cloaked LoRA evaluation and cannot be measured from a single before/after photo.',
};
