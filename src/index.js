import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CookiesProvider from 'react-cookie/cjs/CookiesProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat Alternates',
      'sans-serif',
    ].join(','), },
  palette: {
    mode: 'dark',
    primary: {
      main: "#09CAAD",
    },
    secondary: {
      main: "#D58042",
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CookiesProvider>
    <App />
    </CookiesProvider>
    </ThemeProvider>
  </React.StrictMode>
);