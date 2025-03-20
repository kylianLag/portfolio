import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importer BrowserRouter
import App from './App';
import { ThemeProvider } from './contexts/theme';
import './index.css';

render(
  <BrowserRouter basename="/cleanfolio"> {/* Ajouter basename pour gérer les routes relatives */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
