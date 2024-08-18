import { useMemo, ReactNode } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";
import componentsOverride from "./components-overrides";
import Typography from "./general/typography";
import shadows from "./general/shadows";
import colors from "./general/colors";

type Props = {
  children: ReactNode;
};

export default function Theme({ children }: Props) {
  const themeTypography = Typography("Poppins, sans-serif");
  const themeOptions = useMemo(
    () => ({
      colors: colors,
      customShadows: shadows,
      typography: themeTypography,
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
