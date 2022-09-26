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
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("ci-color-mode", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("ci-color-mode", "light");
    }
  };

  return { theme, onChange: handleTheme };
};

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const theme =
      (window.matchMedia("(prefers-color-scheme: dark)").matches && "dark") ||
      (localStorage.getItem("ci-color-mode") as Theme) ||
      "light";
    setTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
