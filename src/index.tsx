import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as WebFont from 'webfontloader';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}

WebFont.load({
  google: {
    families: ['Open+Sans:400,800&display=swap'],
  },
});
