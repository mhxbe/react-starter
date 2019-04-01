import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App.js';

ReactDOM.render(
  <BrowserRouter>
    <App name="Mikeeeh" />
  </BrowserRouter>,
  document.querySelector('#root')
);

module.hot.accept();
