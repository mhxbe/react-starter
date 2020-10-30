import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Workbox } from 'workbox-window';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './i18n';
import 'focus-visible';

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
