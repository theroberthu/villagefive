import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://villagefive.com',
  integrations: [
    sitemap({
      serialize(item) {
        // Set lastmod to today for all pages (content is updated each deploy)
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  output: 'static',
});
