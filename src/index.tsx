import * as React from 'react';
import * as ReactDOM from 'react-dom';
import i18next from 'i18next';
import { Workbox } from 'workbox-window';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './config/i18n';
import 'focus-visible';
import 'tailwindcss/tailwind.css';
import './index.css';

i18next.on('languageChanged', (language: string) => {
  window.document.documentElement.lang = language;
  const newUrl = window.location.pathname.replace(/\/[a-z]{2}/, `/${language}`);
  window.history.replaceState(null, '', newUrl);
});

ReactDOM.render(
  <BrowserRouter basename="/">
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </BrowserRouter>,
  document.querySelector('#root')
);

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  const wb = new Workbox('./sw.js');

  wb.addEventListener('installed', (event) => {
    if (event.isUpdate) {
      window.location.reload();
    } else {
      console.log('App successfully installed!');
    }
  });

  wb.addEventListener('activated', (event) => {
    if (!event.isUpdate) {
      console.log('Service worker activated for the first time!');
    }
  });

  wb.register();
}
