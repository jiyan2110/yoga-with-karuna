// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Production URL: used for canonical links, Open Graph tags and the sitemap.
  site: 'https://yoga-with-karuna.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
