import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as translationNL from './locales/nl/translations.json';
import * as translationEN from './locales/en/translations.json';

export default i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  whitelist: ['en', 'nl'],
  interpolation: { escapeValue: false },
  resources: {
    en: { translation: translationEN },
    nl: { translation: translationNL },
  },
});
