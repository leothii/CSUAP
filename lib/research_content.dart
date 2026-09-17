/// Replace pending entries when the study's public materials are ready.
const researchPaperUrl = String.fromEnvironment('RESEARCH_PAPER_URL');
const repositoryUrl = 'https://github.com/leothii/CSUAP';
const extraResourceUrl = String.fromEnvironment('EXTRA_RESOURCE_URL');

/// Rounded snapshot of outputs/evaluation/perceptual/alpha_summary.csv.
const perceptualResults = [
  (alpha: '0.5', n: 30, ssim: '0.9699', psnr: '35.00'),
  (alpha: '0.6', n: 30, ssim: '0.9557', psnr: '33.08'),
  (alpha: '0.7', n: 30, ssim: '0.9428', psnr: '31.84'),
  (alpha: '0.8', n: 30, ssim: '0.9294', psnr: '30.79'),
  (alpha: '0.9', n: 30, ssim: '0.9153', psnr: '29.86'),
  (alpha: '1.0', n: 30, ssim: '0.8967', psnr: '28.75'),
];
const perceptualResultsSummary =
    '30 test images per intensity. Mean SSIM and PSNR meet both study '
    'targets (SSIM ≥ 0.95; PSNR ≥ 30 dB) at α = 0.5 and 0.6. '
    'Group means do not mean every image passes, and image quality does '
    'not establish semantic protection.';
const perceptualResultsMethod =
    'Recorded evaluation: RGB values in [0, 1], no resizing, Gaussian '
    'SSIM weights (σ = 1.5), and population covariance. The photo lab '
    'uses uniform 7 × 7 SSIM windows with sample covariance, so its '
    'SSIM values are not directly comparable to these results.';

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
