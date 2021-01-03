import React from 'react';
import ClientOnly from './utils/ClientOnly';

const ThemeContext = React.createContext({
  setTheme: () => {
    console.log('whelp');
  },
});

export const toggleTheme = (toggleOverride = '') => {
  console.log('asdf');
  if (toggleOverride) {
    document.documentElement.setAttribute('data-theme', toggleOverride);
    localStorage.setItem('theme', toggleOverride);
    return;
  }

  const theme = document.documentElement.getAttribute('data-theme');

  switch (theme) {
    case 'horde':
      document.documentElement.setAttribute('data-theme', 'alliance');
      localStorage.setItem('theme', 'alliance');
      break;
    case 'alliance':
      document.documentElement.setAttribute('data-theme', 'horde');
      localStorage.setItem('theme', 'horde');
      break;
    default:
      document.documentElement.setAttribute('data-theme', 'alliance');
      localStorage.setItem('theme', 'alliance');
      break;
  }
};

export const useTheme = () => React.useContext(ThemeContext);

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ setTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
