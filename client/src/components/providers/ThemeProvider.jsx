/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */



import  { createContext, useState, useContext } from "react";


const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => {
  return useContext(ThemeContext);
};