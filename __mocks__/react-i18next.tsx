import * as React from 'react';

module.exports = {
  useTranslation: (): any => ({
    t: (key) => key,
    i18n: {
      changeLanguage: (lang) => lang,
    },
  }),
  initReactI18next: {},
  Trans: function Trans(): React.ReactElement {
    return <></>;
  },
};
