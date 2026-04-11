import { signal, effect } from "@preact/signals-react";
import { createContext, useContext } from "react";

export const isDarkMode = signal(true);

const pageThemes = {
  dark: {
    pageBackground: "hsl(0, 0%, 0%)",
    pageText: "hsl(0, 0%, 50%)",
    pageCard: {
      main: "hsla(0, 0%, 100%, 0.1)",
      border: "hsla(0, 0%, 100%, 0.5)",
    },
  },
  light: {
    pageBackground: "hsl(0, 0%, 90%)",
    pageText: "hsl(0, 0%, 0%)",
    pageCard: "hsl(0, 0%, 95%)",
  },
};

effect(() => {
  const currentTheme = isDarkMode.value ? pageThemes.dark : pageThemes.light;
  document.documentElement.style.setProperty(
    "--background-theme-color",
    currentTheme.pageBackground,
  );
  document.documentElement.style.setProperty(
    "--text-theme-color",
    currentTheme.pageText,
  );
});

const ThemeContext = createContext({ isDarkMode });
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeContext.Provider value={{ isDarkMode }}>
    {children}
  </ThemeContext.Provider>
);
export const useTheme = () => useContext(ThemeContext);
