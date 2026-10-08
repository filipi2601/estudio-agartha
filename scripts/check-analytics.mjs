import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync('src/components/Analytics.astro', 'utf8').split('<script is:inline>')[1].split('</script>')[0];
function browser(saved = null) {
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
  const location = { origin: 'https://studioagartha.com', pathname: '/es/', reload() { this.reloaded = true; } };
  runInNewContext(source, { window, document, location, localStorage: { getItem() { return saved; }, setItem(key, value) { saved = value; } } });
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
console.log('Analytics check passed: consent, single tag, contact events and revocation.');
