import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang:any) {
  return function t(key:any) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}