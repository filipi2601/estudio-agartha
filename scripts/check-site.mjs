import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const pages = [
  ['dist/index.html', 'lang="pt-BR"', 'A Beleza que'],
  ['dist/en/index.html', 'lang="en"', 'Beauty that'],
  ['dist/es/index.html', 'lang="es"', 'La belleza que'],
  ['dist/en/projects/index.html', 'Design and Branding Projects'],
  ['dist/es/projects/index.html', 'Proyectos de diseño y branding'],
];

for (const [file, ...expected] of pages) {
  const html = readFileSync(file, 'utf8');
  expected.forEach((text) => assert.ok(html.includes(text), `${file} should contain ${text}`));
}

const scripts = [...pages.map(([file]) => file), ...readdirSync('dist/_astro')
  .filter((file) => file.endsWith('.js'))
  .map((file) => join('dist/_astro', file))]
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

assert.ok(scripts.includes('mailto:contato@studioagartha.com'), 'built site should prepare the form submission by email');
assert.ok(scripts.includes('contato@studioagartha.com'), 'built footer should show the new email address');
assert.ok(scripts.includes('open-contact'), 'built site should connect the contact button to the drawer');
console.log('Site check passed: PT, EN, ES, contact drawer and email submission.');
