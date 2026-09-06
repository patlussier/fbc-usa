// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://usa.forbettercommunity.org',
  vite: { plugins: [tailwindcss()] },
});
