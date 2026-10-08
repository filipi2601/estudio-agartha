import assert from 'node:assert/strict';
import './check-analytics.mjs';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const pages = [
  ['dist/design-system/index.html', 'Design system | Estúdio Agartha', 'noindex, nofollow', 'Poppins', 'Cores com função', 'Componentes em contexto'],
  ['dist/index.html', 'lang="pt-BR"', 'Design gráfico para marcas,', 'Design editorial e muito mais'],
  ['dist/en/index.html', 'lang="en"', 'Graphic design for brands,', 'Editorial design and much more'],
  ['dist/es/index.html', 'lang="es"', 'Diseño gráfico para marcas,'],
  ['dist/en/projects/index.html', 'Design and Branding Projects'],
  ['dist/es/projects/index.html', 'Proyectos de diseño y branding'],
  ['dist/es/diseno-editorial/index.html', 'Diseño editorial y maquetación de libros'],
  ['dist/es/branding/index.html', 'Identidad visual y branding'],
  ['dist/es/privacy/index.html', 'Política de privacidad'],
];

assert.ok(!readFileSync('dist/sitemap-0.xml', 'utf8').includes('/design-system/'), 'internal design system should not appear in the sitemap');

for (const [file, ...expected] of pages) {
  const html = readFileSync(file, 'utf8');
  expected.forEach((text) => assert.ok(html.includes(text), `${file} should contain ${text}`));
}

const scripts = [...pages.map(([file]) => file), ...readdirSync('dist/_astro')
  .filter((file) => file.endsWith('.js'))
  .map((file) => join('dist/_astro', file))]
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

for (const localePrefix of ['', 'en/', 'es/']) {
  const home = readFileSync(`dist/${localePrefix}index.html`, 'utf8');
  assert.ok(!home.includes('testimonials-track'), `${localePrefix}home should not publish sample testimonials`);
  for (const slug of ['a-doutrina-sufi', 'arte-cavalheiresca-do-arqueiro-zen']) {
    const project = readFileSync(`dist/${localePrefix}projects/${slug}/index.html`, 'utf8');
    assert.ok(home.includes(`/projects/${slug}`), `${localePrefix}home should show ${slug}`);
    assert.ok(project.includes('capa-contracapa') && project.includes('diagramacao'), `${localePrefix}${slug} should show only the requested gallery images`);
  }
}

assert.ok(scripts.includes('formsubmit.co/ajax/'), 'built site should submit the form to the email provider');
assert.ok(scripts.includes('contatos@studioagartha.com'), 'built footer should show the confirmed email address');
assert.ok(scripts.includes('https://t.me/Studioagartha'), 'built footer should link to Telegram');
assert.ok(scripts.includes('prefers-reduced-motion'), 'built site should respect reduced-motion preferences');
assert.ok(scripts.includes('open-contact'), 'built site should connect the contact button to the drawer');
console.log('Site check passed: PT, EN, ES, editorial page, privacy and contact form.');
