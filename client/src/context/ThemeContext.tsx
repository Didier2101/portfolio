// src/context/ThemeContext.tsx
import { createContext, useState, ReactNode } from "react";

// Definir y exportar el tipo ThemeContextType
export type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

// Crear el contexto
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Definir las props para ThemeProvider
type ThemeProviderProps = {
  children: ReactNode;
};

// Exportar ThemeProvider
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
