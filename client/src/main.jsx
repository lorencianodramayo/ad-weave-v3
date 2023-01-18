import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/index';

import { BrowserRouter as Router } from 'react-router-dom';

import { ConfigProvider, theme } from 'antd';

const { darkAlgorithm } = theme;

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
        token: {
          colorPrimary: '#fde24b',
          borderRadius: 4,
          fontFamily: 'Proxima Nova,Helvetica,sans-serif',
        },
      }}
    >
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </React.StrictMode>
);
