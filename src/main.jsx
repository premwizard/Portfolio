import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/responsive.css';

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
