import { createContext, useContext } from "react";
import { useTheme } from "@mui/material";

export const ThemeContext = createContext<{ theme: any }>({ theme: null });
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: any) => {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
