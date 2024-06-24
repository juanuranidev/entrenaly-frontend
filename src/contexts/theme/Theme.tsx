import { createContext, useContext, ReactNode } from "react";
import { useTheme } from "@mui/material";
import { Theme } from "lib/types/theme.types";

export const ThemeContext = createContext<{ theme: Theme | null }>({
  theme: null,
});
export const useThemeContext = () => useContext(ThemeContext);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const theme: Theme = useTheme();

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
