import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Workbox } from 'workbox-window';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/* :focus-visible polyfill */
require('focus-visible');

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  const wb = new Workbox('./sw.js');

  wb.addEventListener('installed', (event) => {
    if (event.isUpdate) {
      if (confirm('Update available. Click ok to renew app.')) {
        window.location.reload();
      }
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
