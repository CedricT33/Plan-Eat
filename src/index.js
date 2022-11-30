import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";
import App from './scripts/App';
import './styles/style.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

serviceWorkerRegistration.register();
serviceWorkerRegistration.ajouterEcouteurInstallationApp();