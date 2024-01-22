import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import componentsOverride from "./components-overrides";
import Typography from "./general/typography";
import PropTypes from "prop-types";
import Shadows from "./general/shadows";

export default function Theme({ children }) {
  const themeTypography = Typography(`'Public Sans', sans-serif`);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: "ltr",
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      customShadows: Shadows,
      typography: themeTypography,
      backgrounds: {
        primary: "#ffffff",
        secondary: "#edf3f8",
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

Theme.propTypes = {
  children: PropTypes.node,
};
