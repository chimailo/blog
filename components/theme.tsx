import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

type Props = {
  children: ReactNode;
};

const ThemeContext =
  createContext<[Theme, Dispatch<SetStateAction<Theme>>]>(null);

const useTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      changeTheme("dark")
    } else {
      document.documentElement.classList.remove("dark");
      changeTheme("light")
    }
  };
  
  const changeTheme = (value: string) => {
    setTheme(value);
    localStorage.setItem("ci-color-mode", value);
  }

  return { theme, onChange: handleTheme };
};

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    function getColorMode() {
      const colorPreference = window.localStorage.getItem('ci-color-mode')
      const hasColorPreference = typeof colorPreference === 'string'

      if (hasColorPreference) return colorPreference
      
      const mqPreference = window.matchMedia("(prefers-color-scheme: dark)")
      const hasMQPreference = typeof mqPreference.matches === 'boolean'

      if (hasMQPreference) {
        return mqPreference.matches ? 'dark' : 'light'
      }
      return 'light'
    }

    setTheme(getColorMode());
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
