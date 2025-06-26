import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://augusto0414.github.io',
  base: 'porfolio',
  integrations: [svelte(), tailwindcss(), svgr()],
  vite: {
    plugins: [tailwindcss(), svgr()]
  },
  adapter: vercel(),
  output: 'server',
});