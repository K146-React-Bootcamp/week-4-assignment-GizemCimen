import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const values = { toggleTheme, theme };

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, useTheme };