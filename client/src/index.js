import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';


import './assets/scss/base.scss'
  
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);