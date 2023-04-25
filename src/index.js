import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContexProvider } from './contex/AuthContex';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <ContexProvider>
      <App />
    </ContexProvider>
  </BrowserRouter>
  </React.StrictMode>
);
