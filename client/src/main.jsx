import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/index';

import { BrowserRouter as Router } from 'react-router-dom';

import { ConfigProvider } from 'antd';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#fde24b',
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
