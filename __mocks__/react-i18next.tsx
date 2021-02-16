import * as React from 'react';

module.exports = {
  useTranslation: (): any => ({
    t: (key) => key,
    i18n: {
      changeLanguage: (lang) => lang,
      languages: ['en'],
      language: 'en',
    },
  }),
  initReactI18next: {},
  Trans: function Trans({ children }): React.ReactElement {
    return <>{children}</>;
  },
};
