#!/usr/bin/env node
import { writeFile, mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const BASE = process.cwd();

// Font files from Framer CDN
const fonts = [
  { url: 'https://framerusercontent.com/assets/wi8YS0whsEQd3BjwgKoySt2PjNE.woff2', name: 'IvyPrestoHeadlineThin.woff2' },
  { url: 'https://framerusercontent.com/assets/le5nrBvMPYhAigeVjeOC8KGUkNM.woff2', name: 'SFProTextRegular.woff2' },
  { url: 'https://framerusercontent.com/assets/bBOBO2qqJPgXtnHi3sdB6WbaI.woff2', name: 'SFProTextMedium.woff2' },
  { url: 'https://framerusercontent.com/assets/1KLeuKhmIhzbDTewSabWoqBuYio.woff2', name: 'PPAgrandirTightRegular.woff2' },
  { url: 'https://framerusercontent.com/assets/Gx3BeMPUt4DuGMs80Uavp6rRSw.woff2', name: 'SFProDisplayLight.woff2' },
  { url: 'https://framerusercontent.com/assets/gLTpf4fXBRHI0hPIe5MyLLmpF0I.woff2', name: 'SFProDisplayMedium.woff2' },
];

// Favicons and SEO assets
const seoAssets = [
  { url: 'https://framerusercontent.com/images/W28GzhJBkoCCvpt4b9MaIby7eyY.png', name: 'favicon.png' },
  { url: 'https://framerusercontent.com/images/FbhhG88FGWCDqgf7uRL2cXCq5xk.png', name: 'favicon-alt.png' },
  { url: 'https://framerusercontent.com/images/nwtOzO8kgBKl1aGa5N8ldKyNmDQ.png', name: 'apple-touch-icon.png' },
  { url: 'https://framerusercontent.com/assets/z6bgVDkX9zQywjpQftGc2dUcwbA.png', name: 'og-image.png' },
];

// Videos
const videos = [
  { url: 'https://framerusercontent.com/assets/bWlvQmdNVBknx26i9yNHspoVXKY.mp4', name: 'hero-animation.mp4' },
  { url: 'https://framerusercontent.com/assets/NDpH8kdc4uAicTy5KpoO4Fbetg.mp4', name: 'secondary-animation.mp4' },
];

// All images from the homepage
const images = [
  // Hero section
  { url: 'https://framerusercontent.com/images/i4ih13hdPZ4PtYtzcRXhMid778s.png', name: 'hero-graphic.png' },
  // Logo ticker / client logos
  { url: 'https://framerusercontent.com/images/gNlaNLrexxhJh8dKKtBIAbIVA.jpg', name: 'logo-ticker-1.jpg' },
  { url: 'https://framerusercontent.com/images/5osGXHFpPuFRcFZZHmYX2quIHpE.jpg', name: 'logo-ticker-2.jpg' },
  { url: 'https://framerusercontent.com/images/ah30V5m4c5xlMWNcOTaphpcY4.png', name: 'logo-movir.png' },
  { url: 'https://framerusercontent.com/images/Wxqft41QLodXEnVfhgmyXycigIk.png', name: 'logo-euphoria.png' },
  { url: 'https://framerusercontent.com/images/6BFLYhzxoeDwzoD99RjzzSVjpU.jpg', name: 'logo-ticker-3.jpg' },
  { url: 'https://framerusercontent.com/images/OPJpeTttkVMicZrVnt2FLdjjIrA.jpg', name: 'logo-ticker-4.jpg' },
  { url: 'https://framerusercontent.com/images/b9plDUc7zhhD1ebYtmAh857Nd3I.jpg', name: 'logo-ticker-5.jpg' },
  { url: 'https://framerusercontent.com/images/RBBHAPAqgmpYcHR4018wVqxsWI.jpg', name: 'logo-ticker-6.jpg' },
  { url: 'https://framerusercontent.com/images/tvPs7DS0j2w48obVfXYwX55qzk.jpg', name: 'logo-ticker-7.jpg' },
  { url: 'https://framerusercontent.com/images/8lKRLTjhv8woGbb5CRS3e3o.jpg', name: 'logo-ticker-8.jpg' },
  { url: 'https://framerusercontent.com/images/jJ78opSeQ99FUa9oQoEvaU9N68.jpg', name: 'logo-ticker-9.jpg' },
  // Case study person photos
  { url: 'https://framerusercontent.com/images/uHxqDbS0euiKmsUbP8ydhdA6y0.png', name: 'case-person.png' },
  { url: 'https://framerusercontent.com/images/ShWCaHjjEk8x0CQDlODctxTGxn4.jpg', name: 'case-bg.jpg' },
  // Service section
  { url: 'https://framerusercontent.com/images/T4CtnlS7Y0KWUqZKJD4PO2qrxys.png', name: 'service-logo.png' },
  { url: 'https://framerusercontent.com/images/ZroDmaenVwWPfUe5TuX78ekt4.jpg', name: 'service-person.jpg' },
  { url: 'https://framerusercontent.com/images/ooLMeUJnzsx8CbbwU2eMaxvjg.png', name: 'service-company-logo.png' },
  // Discovery tool icons
  { url: 'https://framerusercontent.com/images/8xwMbIDKMQ07TeK4hxJOSO4.png', name: 'icon-marketing.png' },
  { url: 'https://framerusercontent.com/images/dTarSuYIRY3bjpp9oq2TwOAg7mQ.png', name: 'icon-data.png' },
  // Product images
  { url: 'https://framerusercontent.com/images/bKQFVJ1X0z79pJB2nyfTHTZQDxw.png', name: 'product-dot-pattern.png' },
  { url: 'https://framerusercontent.com/images/MBdeRlYfddrloHixmWKR7QKpm6A.png', name: 'product-card-bg.png' },
  { url: 'https://framerusercontent.com/images/XsG57Gnf75Cl2oj7zfgyngxJ9M.jpg', name: 'product-person.jpg' },
  { url: 'https://framerusercontent.com/images/FoquCI5w46g9kYYJJ9WyI9KDlE.png', name: 'product-banner.png' },
  { url: 'https://framerusercontent.com/images/pqGIoM0ujlqxLyIFeSYFjUlvqSA.png', name: 'product-mockup-1.png' },
  { url: 'https://framerusercontent.com/images/hujgMODo5cX6Zm7HYGrL4WUvDgc.png', name: 'product-mockup-2.png' },
  { url: 'https://framerusercontent.com/images/x76sAIySndAfKCneRhfkwkL2Qa0.png', name: 'product-mockup-3.png' },
  { url: 'https://framerusercontent.com/images/UtAQrmDmFAP3fTxDccQ8GFjoK8.png', name: 'product-large.png' },
  { url: 'https://framerusercontent.com/images/5CfCX4Prf3VXLpRZQpGs28DpN7U.png', name: 'product-mockup-4.png' },
  // Department icons
  { url: 'https://framerusercontent.com/images/zkd70Fx0LQWrxk055W8BxpSw.png', name: 'dept-icon-1.png' },
  { url: 'https://framerusercontent.com/images/rVOm43AJJkoEUxhJFA69EMVX6Q.png', name: 'dept-invoicing.png' },
  { url: 'https://framerusercontent.com/images/VsEw9ypAvuJEoskm2HwutqbnrI.png', name: 'dept-project.png' },
  { url: 'https://framerusercontent.com/images/NNIC3XEjZIK5uTlHGrCZ6jwy7iA.png', name: 'dept-communication.png' },
  { url: 'https://framerusercontent.com/images/Q9qxxpfadlwtzL7IXvNf5wWdm1I.png', name: 'dept-icon-5.png' },
  { url: 'https://framerusercontent.com/images/zgaZEaiXVHkEcCUZL174QVV84Ys.png', name: 'dept-icon-6.png' },
  { url: 'https://framerusercontent.com/images/FZGWKP97SPR2p1encZFWPNlctQM.png', name: 'dept-icon-7.png' },
  { url: 'https://framerusercontent.com/images/4CkKYAqYVvOEZji556wkYqj7mdg.png', name: 'dept-icon-8.png' },
  // Team photos
  { url: 'https://framerusercontent.com/images/3ofZ77pFHduwzNyPFguFMRBjOw.jpg', name: 'team-jochem.jpg' },
  { url: 'https://framerusercontent.com/images/iWmsleYY8b0VdTowGsEvLM572gA.jpeg', name: 'team-thijs.jpeg' },
  { url: 'https://framerusercontent.com/images/3MUaWYVinzA0yHxOQSTKpssdFAc.png', name: 'team-jan.png' },
  { url: 'https://framerusercontent.com/images/kqyUoJ1XcaEcw5QwC1IS74Qb4.jpg', name: 'team-ted.jpg' },
  { url: 'https://framerusercontent.com/images/beQ2y8N1GNFsQK6lMP37jwia6c.jpg', name: 'team-philip.jpg' },
  { url: 'https://framerusercontent.com/images/aH9ZzhpdqQtWcpqSf1tigtdNo.jpg', name: 'team-gwen.jpg' },
  // Blog images
  { url: 'https://framerusercontent.com/images/FxKFl0TwJCh0sHWXY0J5PWxSP3E.png', name: 'blog-1.png' },
  { url: 'https://framerusercontent.com/images/hhgc2zNnl6n1QwWrvtaN1hQaL4U.png', name: 'blog-2.png' },
  { url: 'https://framerusercontent.com/images/jQgg7NKPeEuFwCktrwiGDPKeqE.png', name: 'blog-3.png' },
  // SPAIK logo
  { url: 'https://framerusercontent.com/images/FoquCI5w46g9kYYJJ9WyI9KDlE.png', name: 'spaik-logo-footer.png' },
];

async function download(url, destPath) {
  const dir = dirname(destPath);
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });

  try {
    // Strip Framer width/height params to get full resolution
    const cleanUrl = url.split('?')[0];
    const res = await fetch(cleanUrl);
    if (!res.ok) {
      console.error(`  FAIL ${res.status}: ${cleanUrl}`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(destPath, buf);
    console.log(`  OK: ${destPath} (${(buf.length / 1024).toFixed(0)}KB)`);
    return true;
  } catch (e) {
    console.error(`  ERR: ${url} — ${e.message}`);
    return false;
  }
}

async function downloadBatch(items, destDir, concurrency = 4) {
  let ok = 0, fail = 0;
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const results = await Promise.all(
      batch.map(item => download(item.url, join(BASE, destDir, item.name)))
    );
    ok += results.filter(Boolean).length;
    fail += results.filter(r => !r).length;
  }
  return { ok, fail };
}

async function main() {
  console.log('=== Downloading SPAIK assets ===\n');

  console.log('--- Fonts ---');
  const fontResult = await downloadBatch(fonts, 'public/fonts');

  console.log('\n--- SEO Assets ---');
  const seoResult = await downloadBatch(seoAssets, 'public/seo');

  console.log('\n--- Videos ---');
  const videoResult = await downloadBatch(videos, 'public/videos');

  console.log('\n--- Images ---');
  const imgResult = await downloadBatch(images, 'public/images');

  const totalOk = fontResult.ok + seoResult.ok + videoResult.ok + imgResult.ok;
  const totalFail = fontResult.fail + seoResult.fail + videoResult.fail + imgResult.fail;
  console.log(`\n=== Done: ${totalOk} ok, ${totalFail} failed ===`);
}

main().catch(console.error);
