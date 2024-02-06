import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import componentsOverride from "./components-overrides";
import Typography from "./general/typography";
import shadows from "./general/shadows";

export default function Theme({ children }) {
  const themeTypography = Typography(`'Public Sans', sans-serif`);

  const themeOptions = useMemo(
    () => ({
      customShadows: shadows,
      typography: themeTypography,
      backgrounds: {
        primary: "#ffffff",
        secondary: "#edf3f8",
      },
      colors: {
        brand: {
          primary: "#1976d2",
        },
      },
    }),
    [themeTypography]
  );

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
