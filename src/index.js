import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import App from './App.js';

ReactDOM.render(<App name="Mikeeeh" />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
