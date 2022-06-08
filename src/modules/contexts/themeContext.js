import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';

export const ThemeConxtext = createContext({});
export function useThemeContext() {
  return useContext(ThemeConxtext);
}

export default function ThemeProvider({ children }) {
  const [Theme, setTheme] = useState({
    name: 'Dark',
    background: '',
    color: '',
  });

  const changeToDark = useCallback(() => {
    setTheme({
      name: 'Dark',
      background: '#96b4db',
      color: '#605555',
    });
  }, []);

  const changeToLight = useCallback(() => {
    setTheme({
      name: 'light',
      background: '#323179',
      color: '#1e0a7b',
    });
  }, []);

  const contextValues = useMemo(
    () => ({
      Theme,
      setTheme,
      changeToDark,
      changeToLight,
    }),
    [Theme, changeToDark, changeToLight]
  );

  return (
    <ThemeConxtext.Provider value={contextValues}>
      {children}
    </ThemeConxtext.Provider>
  );
}
