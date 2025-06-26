// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  site: 'https://augusto0414.github.io',
  vite: {
    plugins: [tailwindcss(), svgr()]
  }
});