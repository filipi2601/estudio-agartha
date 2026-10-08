import sharp from 'sharp';

const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><clipPath id="panel"><rect x="28" y="28" width="1144" height="574" rx="42"/></clipPath></defs>
  <rect width="1200" height="630" fill="#e5e5e5"/>
  <rect x="28" y="28" width="1144" height="574" rx="42" fill="#fff"/>
  <rect x="80" y="88" width="112" height="8" rx="4" fill="#00a69c"/>
  <g clip-path="url(#panel)">
    <circle cx="1030" cy="315" r="242" fill="#e9f7f6"/>
    <circle cx="1030" cy="315" r="172" fill="none" stroke="#8dcac7" stroke-width="3"/>
    <circle cx="1030" cy="315" r="112" fill="none" stroke="#00a69c" stroke-width="3"/>
    <path d="M802 498h304" stroke="#00a69c" stroke-width="8" stroke-linecap="round"/>
  </g>
  <text x="94" y="528" fill="#526071" font-family="sans-serif" font-size="27" letter-spacing="1.3">studioagartha.com</text>
</svg>`);

const logo = await sharp('src/assets/img/logo-footer.png').resize({ width: 555 }).png().toBuffer();
await sharp(background)
  .composite([{ input: logo, left: 94, top: 211 }])
  .png()
  .toFile('public/social-preview.png');
