export type Breakpoints = {
  keys: string[];
  values: {
    [key: string]: number;
  };
  unit: string;
  up: (key: string) => string;
  down: (key: string) => string;
  between: (start: string, end: string) => string;
  only: (key: string) => string;
};

export type Direction = "ltr" | "rtl";

export type ComponentStyleOverrides = {
  [key: string]: {
    [key: string]: any;
  };
};

export type PaletteColor = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
};

export type Palette = {
  mode: "light" | "dark";
  common: {
    black: string;
    white: string;
  };
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  grey: {
    [key: string]: string;
  };
  contrastThreshold: number;
  tonalOffset: number;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  divider: string;
  background: {
    paper: string;
    default: string;
  };
  action: {
    active: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    selectedOpacity: number;
    disabled: string;
    disabledBackground: string;
    disabledOpacity: number;
    focus: string;
    focusOpacity: number;
    activatedOpacity: number;
  };
};

export type TypographyVariant = {
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
  fontFamily: string;
  textTransform?: string;
};

export type Typography = {
  fontFamily: string;
  htmlFontSize: number;
  fontWeightBold: number;
  fontWeightLight: number;
  fontWeightMedium: number;
  fontWeightRegular: number;
  h1: TypographyVariant;
  h2: TypographyVariant;
  h3: TypographyVariant;
  h4: TypographyVariant;
  h5: TypographyVariant;
  h6: TypographyVariant;
  caption: TypographyVariant;
  body1: TypographyVariant;
  body2: TypographyVariant;
  subtitle1: TypographyVariant;
  subtitle2: TypographyVariant;
  overline: TypographyVariant;
  button: TypographyVariant;
  fontSize: number;
  inherit: TypographyVariant;
};

export type Shape = {
  borderRadius: number;
};

export type CustomShadows = {
  card: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

export type Colors = {
  brand: {
    primary: string;
    primaryHover: string;
    test: string;
  };
  general: {
    white: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  backgroundHover: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  border: {
    primary: string;
  };
};

export type UnstableSxConfig = {
  [key: string]: {
    themeKey: string;
    cssProperty?: string | boolean;
  };
};

export type Mixins = {
  toolbar: {
    minHeight: number;
    [key: string]: any;
  };
};

export type Shadows = string[];

export type Spacing = (...args: number[]) => number;

export type Theme = {
  breakpoints: Breakpoints;
  direction: Direction;
  components: {
    [key: string]: {
      defaultProps?: {
        [key: string]: any;
      };
      styleOverrides?: ComponentStyleOverrides;
    };
  };
  palette: Palette;
  shape: Shape;
  colors: Colors;
  spacing: Spacing;
  customShadows: CustomShadows;
  typography: Typography;
  unstable_sxConfig: UnstableSxConfig;
  mixins: Mixins;
  shadows: Shadows;
};
