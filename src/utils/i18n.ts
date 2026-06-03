import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang, languages, type Language } from '@i18n/ui';

export { languages, defaultLang };
export type { Language };

export const getLangFromUrl = (url: URL): Language => {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang as Language;
  return defaultLang;
};

export const localizePath = (path: string, lang: Language): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return getRelativeLocaleUrl(lang, cleanPath);
};

export const stripLocaleFromPath = (path: string): string => {
  const match = path.match(/^\/(en|es)(\/|$)/);
  if (!match) return path;
  const stripped = path.replace(/^\/(en|es)/, '');
  return stripped === '' ? '/' : stripped;
};
