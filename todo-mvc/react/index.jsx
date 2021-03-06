import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App.jsx'

import store from './store/configureStore';

import 'todomvc-app-css/index.css';

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);