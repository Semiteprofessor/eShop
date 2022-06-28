import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import App from './App';


import './assets/scss/base.scss'

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);