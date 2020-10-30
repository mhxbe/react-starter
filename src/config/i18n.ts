import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

export default i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'nl'],
    interpolation: { escapeValue: false },
    backend: { loadPath: '/locales/{{lng}}/translations.json' },
  });
