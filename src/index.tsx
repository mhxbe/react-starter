import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './reset.css';

ReactDOM.render(<App name="Mike" />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
