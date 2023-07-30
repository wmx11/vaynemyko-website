import partytown from '@astrojs/partytown';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig, sharpImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://vaynemyko.com',
  integrations: [
    tailwind(),
    svelte(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
