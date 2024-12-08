import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { register } from './serviceWorkerRegistration'; // Import the register function

// Register the service worker
register();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
