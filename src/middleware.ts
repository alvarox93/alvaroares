import { defineMiddleware } from 'astro:middleware';

const SKIP_PREFIXES = ['/_', '/api/', '/favicon', '/fonts/', '/keyCup', '/assets/', '/og-'];
const SKIP_EXTS = ['.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif', '.ico', '.woff', '.woff2', '.ttf', '.css', '.js', '.json', '.webm', '.mp4', '.pdf'];
const LOCALE_PATTERN = /^\/(en|es)(\/|$)/;
const COOKIE_KEY = 'aa-lang';

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  // Skip non-page routes (assets, API, internal)
  if (SKIP_PREFIXES.some((p) => pathname.startsWith(p))) return next();
  if (SKIP_EXTS.some((ext) => pathname.endsWith(ext))) return next();

  // Already has a locale prefix → continue
  if (LOCALE_PATTERN.test(pathname)) return next();

  // Skip during dev for HMR/internal routes
  if (pathname.startsWith('/@') || pathname.startsWith('/__')) return next();

  // Check user's stored preference first
  const cookie = context.cookies.get(COOKIE_KEY)?.value;
  if (cookie === 'es') {
    const target = `/es${pathname === '/' ? '' : pathname}`;
    return context.redirect(target, 302);
  }
  if (cookie === 'en') return next();

  // First visit: detect from Accept-Language header
  const accept = context.request.headers.get('accept-language') ?? '';
  const preferred = accept
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase().split('-')[0])
    .find((lang) => lang === 'es' || lang === 'en');

  if (preferred === 'es') {
    const target = `/es${pathname === '/' ? '' : pathname}`;
    return context.redirect(target, 302);
  }

  return next();
});
