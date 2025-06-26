import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://augusto0414.github.io',
  base: 'porfolio',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss(), svgr()]
  },
  adapter: node({
    mode: 'standalone',
  }),
});