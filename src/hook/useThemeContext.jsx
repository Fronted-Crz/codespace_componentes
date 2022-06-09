import { useContext } from 'react';
import ThemeContext from '../context/ThemeProvider';

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
