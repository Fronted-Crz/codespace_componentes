import { createContext, useState, useEffect } from 'react';

export const themeLight = {
  menuBackground: '#2179e8',
  lightColor: '#42aefc',
  titleColor: '#fbfbfe',
  textColor: '#697477',
};

export const themeDark = {
  menuBackground: '#1f1f1f',
  lightColor: '#333',
  titleColor: '#fbfbfe',
  textColor: '#697477',
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeLight);

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (active) {
      setTheme(themeDark);
    } else {
      setTheme(themeLight);
    }
  }, [active]);

  const VALUES = {
    theme,
    active,
    handleClick,
  };

  return (
    <ThemeContext.Provider value={VALUES}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider };

export default ThemeContext;
