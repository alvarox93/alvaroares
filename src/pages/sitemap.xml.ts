import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { stat } from 'node:fs/promises';
import { join } from 'node:path';

const SITE = 'https://alvaroar.es';

interface UrlEntry {
  loc: string;
  lastmod: string;
  alternates: { hreflang: string; href: string }[];
}

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

async function fileMTime(path: string): Promise<Date> {
  try {
    const s = await stat(path);
    return s.mtime;
  } catch {
    return new Date();
  }
}

const srcDir = process.cwd();

const pageFiles: { route: string; file: string }[] = [
  { route: '/', file: 'src/pages/index.astro' },
  { route: '/about/', file: 'src/pages/about.astro' },
  { route: '/studio/', file: 'src/pages/studio.astro' },
  { route: '/cgi/', file: 'src/pages/cgi.astro' },
  { route: '/branding/', file: 'src/pages/branding.astro' },
  { route: '/interactive/', file: 'src/pages/interactive.astro' },
  { route: '/es/', file: 'src/pages/es/index.astro' },
  { route: '/es/about/', file: 'src/pages/es/about.astro' },
  { route: '/es/studio/', file: 'src/pages/es/studio.astro' },
  { route: '/es/cgi/', file: 'src/pages/es/cgi.astro' },
  { route: '/es/branding/', file: 'src/pages/es/branding.astro' },
  { route: '/es/interactive/', file: 'src/pages/es/interactive.astro' },
];

const entries: UrlEntry[] = [];

for (const { route, file } of pageFiles) {
  const mtime = await fileMTime(join(srcDir, file));
  const isEs = route.startsWith('/es');
  const baseRoute = isEs ? route.replace(/^\/es/, '') || '/' : route;
  const enHref = `${SITE}${baseRoute === '/' ? '/' : baseRoute}`;
  const esHref = `${SITE}${baseRoute === '/' ? '/es/' : `/es${baseRoute}`}`;

  entries.push({
    loc: `${SITE}${route === '/' ? '/' : route}`,
    lastmod: isoDate(mtime),
    alternates: [
      { hreflang: 'en', href: enHref },
      { hreflang: 'es', href: esHref },
      { hreflang: 'x-default', href: enHref },
    ],
  });
}

const posts = await getCollection('posts');
for (const post of posts) {
  const isEs = post.data.lang === 'es';
  const route = isEs ? `/es/posts/${post.slug}/` : `/posts/${post.slug}/`;
  const filePath = isEs
    ? join(srcDir, 'src/content/posts/es', `${post.slug}.md`)
    : join(srcDir, 'src/content/posts', `${post.slug}.md`);
  const mtime = await fileMTime(filePath);
  const enHref = `${SITE}/posts/${post.slug}/`;
  const esHref = `${SITE}/es/posts/${post.slug}/`;

  entries.push({
    loc: `${SITE}${route}`,
    lastmod: isoDate(mtime),
    alternates: [
      { hreflang: 'en', href: enHref },
      { hreflang: 'es', href: esHref },
      { hreflang: 'x-default', href: enHref },
    ],
  });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
${e.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`).join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;

export const GET: APIRoute = () =>
  new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=600',
    },
  });
