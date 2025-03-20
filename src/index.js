import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Utilisation de BrowserRouter
import { ThemeProvider } from './contexts/theme'; // Assurez-vous que l'import est correct

import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/portfolio"> {/* Utiliser un seul Router ici */}
    <ThemeProvider> {/* Ajoute le ThemeProvider autour de ton App */}
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
