import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CookiesProvider from 'react-cookie/cjs/CookiesProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <App />
    </CookiesProvider>
  </React.StrictMode>
);