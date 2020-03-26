import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as WebFont from 'webfontloader';
import { Workbox } from 'workbox-window';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}

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

WebFont.load({
  google: {
    families: ['Open+Sans:400,800&display=swap'],
  },
});
