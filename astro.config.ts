import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://alvaroar.es',
  vite: {
    // @ts-expect-error — @tailwindcss/vite types lag behind Astro's bundled Vite
    plugins: [tailwindcss()],
  },
});
