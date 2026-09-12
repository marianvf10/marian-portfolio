import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enProjects from './locales/en/projects.json';
import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esProjects from './locales/es/projects.json';

export const SUPPORTED_LANGUAGES = ['en', 'es'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const STORAGE_KEY = 'portfolio-language';

function detectInitialLanguage(): SupportedLanguage {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'es') return stored;

  const browserLang = window.navigator.language.slice(0, 2);
  return browserLang === 'es' ? 'es' : 'en';
}

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, home: enHome, projects: enProjects },
      es: { common: esCommon, home: esHome, projects: esProjects },
    },
    lng: detectInitialLanguage(),
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'projects'],
    interpolation: { escapeValue: false },
  });

i18n.on('languageChanged', (lng) => {
  window.localStorage.setItem(STORAGE_KEY, lng);
  document.documentElement.lang = lng;
});

export default i18n;
