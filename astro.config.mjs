// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://studioagartha.com",
  integrations: [react(), icon(), sitemap({ filter: (page) => new URL(page).pathname !== '/design-system/' })],
  i18n: {
    locales: ['pt', 'en', 'es'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
