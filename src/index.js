import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import daemon from './reducers/daemon.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(daemon);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
