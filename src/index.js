import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Parte2 from "./parte2";
import Parte3 from "./parte3";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Parte2 />
    <Parte3 />
  </React.StrictMode>
);


reportWebVitals();
