import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    // Appliquer les variables CSS en fonction du thème actif
    const darkTheme = {
      '--clr-bg': '#23283e',
      '--clr-bg-alt': '#2a2f4c',
      '--clr-fg': '#bdbddd',
      '--clr-fg-alt': '#cdcdff',
      '--clr-primary': '#90a0d9',
      '--shadow': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    };

    const lightTheme = {
      '--clr-bg': '#fcfcfc',
      '--clr-bg-alt': '#fff',
      '--clr-fg': '#555',
      '--clr-fg-alt': '#444',
      '--clr-primary': '#2978b5',
      '--shadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    };

    // Applique le thème au body
    const theme = themeName === 'dark' ? darkTheme : lightTheme;
    Object.keys(theme).forEach((key) => {
      document.documentElement.style.setProperty(key, theme[key]);
    });

    // Sauvegarde dans le localStorage pour la persistance du thème
    const savedTheme = localStorage.getItem('themeName');
    if (savedTheme) {
      setThemeName(savedTheme);
    }
  }, [themeName]);

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', newTheme);
    setThemeName(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
