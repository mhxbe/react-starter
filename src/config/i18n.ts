import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export default use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'nl'],
    fallbackLng: ['en', 'nl'],
    interpolation: { escapeValue: true },
    backend: { loadPath: '/locales/{{lng}}/translations.json' },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
    },
  });
