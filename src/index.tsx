import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './reset.css';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
