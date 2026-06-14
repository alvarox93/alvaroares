import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alvaroar.es',
  prefetch: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    // @ts-expect-error — @tailwindcss/vite types lag behind Astro's bundled Vite
    plugins: [tailwindcss()],
  },
});
