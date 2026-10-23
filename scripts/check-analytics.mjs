import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync('src/components/Analytics.astro', 'utf8').split('<script is:inline>')[1].split('</script>')[0];
function browser(saved = null, options = {}) {
  const events = {};
  const elements = {};
  const scripts = [];
  const document = {
    referrer: 'https://example.com/?private=value',
    documentElement: { lang: 'es' },
    getElementById(id) { return elements[id] ??= { hidden: true, focus() {}, addEventListener(name, fn) { this[name] = fn; } }; },
    createElement() { return {}; },
    head: { appendChild(script) { scripts.push(script); } },
    addEventListener(name, fn) { events[name] = fn; },
  };
  const window = {};
  const location = { origin: 'https://studioagartha.com', hostname: 'studioagartha.com', pathname: '/es/', search: '', reload() { this.reloaded = true; }, ...options.location };
  const storage = new Map(Object.entries(options.storage || {}));
  if (saved) storage.set('agartha-analytics-consent', saved);
  runInNewContext(source, { window, document, location, URL, URLSearchParams, localStorage: {
    getItem(key) { return storage.get(key) ?? null; },
    setItem(key, value) { storage.set(key, value); },
    removeItem(key) { storage.delete(key); },
  } });
  return { elements, events, scripts, window, location };
}
const fresh = browser();
assert.equal(fresh.scripts.length, 0);
fresh.events['contact-submitted']();
assert.ok(!fresh.window.dataLayer.some(args => args[0] === 'event'));
fresh.elements['analytics-accept'].click();
assert.equal(fresh.scripts.length, 1);
fresh.elements['analytics-accept'].click();
assert.equal(fresh.scripts.length, 1);
fresh.events['contact-opened']();
fresh.events['contact-submitted']();
assert.deepEqual(Array.from(fresh.window.dataLayer).filter(args => args[0] === 'event').map(args => args[1]), ['contact_open', 'generate_lead']);
fresh.elements['analytics-reject'].click();
assert.equal(fresh.location.reloaded, true);
assert.equal(browser('denied').scripts.length, 0);
assert.equal(browser('granted').scripts.length, 1);
const tagged = browser('granted', { location: { search: '?utm_source=prospeccao&utm_medium=email&utm_campaign=portugal_2026_10&email=private@example.com&message=secret&utm_term=private@example.com' } });
const config = tagged.window.dataLayer.find(args => args[0] === 'config')[2];
assert.equal(config.campaign_source, 'prospeccao');
assert.equal(config.campaign_medium, 'email');
assert.equal(config.campaign_name, 'portugal_2026_10');
assert.equal(config.campaign_term, undefined);
assert.equal(config.page_referrer, 'https://example.com/');
assert.equal(config.page_location, 'https://studioagartha.com/es/?utm_source=prospeccao&utm_medium=email&utm_campaign=portugal_2026_10');
tagged.events['contact-opened']();
assert.equal(tagged.window.dataLayer.find(args => args[1] === 'contact_open')[2].contact_page, '/es/');
for (const options of [
  { location: { search: '?analytics_test=1' } },
  { storage: { 'agartha-analytics-test': '1' } },
  { location: { hostname: 'localhost' } },
  { location: { hostname: '127.0.0.1' } },
]) {
  const test = browser('granted', options);
  test.events['contact-submitted']();
  assert.equal(test.scripts.length, 0);
  assert.ok(!test.window.dataLayer.some(args => args[0] === 'event'));
}
assert.equal(browser('granted', { storage: { 'agartha-analytics-test': '1' }, location: { search: '?analytics_test=0' } }).scripts.length, 1);
const project = browser('granted', { location: { pathname: '/es/projects/a-doutrina-sufi/' } });
assert.equal(project.window.dataLayer.find(args => args[1] === 'project_view')[2].project_path, '/es/projects/a-doutrina-sufi/');
project.elements['analytics-accept'].click();
assert.equal(project.window.dataLayer.filter(args => args[1] === 'project_view').length, 1);
project.events.click({ target: { closest() { return { href: 'https://studioagartha.com/projects/ecos-do-japao/?email=private@example.com' }; } } });
assert.equal(project.window.dataLayer.find(args => args[1] === 'project_click')[2].project_path, '/projects/ecos-do-japao/');
const beforeExternal = project.window.dataLayer.length;
project.events.click({ target: { closest() { return { href: 'https://example.com/projects/external/' }; } } });
assert.equal(project.window.dataLayer.length, beforeExternal);
console.log('Analytics check passed: consent, campaign attribution, private query removal, test exclusion and project/contact events.');
