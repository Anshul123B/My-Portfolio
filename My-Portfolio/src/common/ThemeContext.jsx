import React, { createContext, useContext, useEffect, useState } from 'react'; // Import React hooks and context API tools

const ThemeContext = createContext();//context for theme(light/dark)

export const useTheme = () => useContext(ThemeContext); 

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState( //Initialize theme state from localStorage or default to 'light'
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => { //Updating body attribute and localStorage when theme changes
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => { //Toggle between light and dark themes
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> {/*Provide theme and toggle function to children*/}
      {children}
    </ThemeContext.Provider>
  );
};
