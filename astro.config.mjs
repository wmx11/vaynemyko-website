import partytown from '@astrojs/partytown';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig , sharpImageService } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
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
    service: sharpImageService()
  },
  adapter: vercel(),
});
