import React, { memo, useState } from 'react';
import ThemeContext from './ThemeContext';
import { darkTheme, lightTheme } from './colors';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{theme: theme === 'light' ? lightTheme : darkTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default memo(ThemeProvider);
