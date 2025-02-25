import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  site: 'https://pedropinteno.github.io',
  base: '/web_pedropinteno',
  integrations: [react(), tailwind(), sitemap()],
  build: {
    assets: '_assets'
  },
  trailingSlash: 'always',
  output: 'static' 
});
