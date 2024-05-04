import { createContext, useContext, useState } from "react";

type themeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const themeContextDefaultValues: themeContextType = {
  theme: "dark",
  toggleTheme: () => {},
};

const ThemeContext = createContext<themeContextType>(themeContextDefaultValues);

export function useTheme() {
  return useContext(ThemeContext);
}

//any component that uses this Props type would be expected to accept children as one of its props, and the children prop can contain any valid React node. This is commonly used when you want to render components with dynamic content.
type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({children}: Props) {
    const [theme, setTheme] = useState<"light" | "dark">(themeContextDefaultValues.theme);
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    const value = {
      theme,
      toggleTheme,
    };
    
    return (
      <>
        <ThemeContext.Provider value={value}>
          {children}
        </ThemeContext.Provider>
      </>
    );
}
