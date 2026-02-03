// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Set your production domain here (required for canonical URLs, sitemap, RSS)
  site: 'https://enoughtoevolve.com',
  integrations: [sitemap()],
});
