import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://alvaroar.es',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    // @ts-expect-error — @tailwindcss/vite types lag behind Astro's bundled Vite
    plugins: [tailwindcss()],
  },
});
