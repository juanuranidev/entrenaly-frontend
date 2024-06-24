import { Theme } from "lib/types/theme.types";

export default function Button(theme: Theme) {
  const disabledStyle = {
    "&.Mui-disabled": {
      backgroundColor: "#eeeeee",
    },
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: theme?.spacing(1),
        },
        contained: {
          fontWeight: 600,
          backgroundColor: theme?.colors?.background?.tertiary,
          "&:hover": {
            backgroundColor: theme?.colors?.backgroundHover?.tertiary,
          },
          ...disabledStyle,
          "&.MuiButton-containedSuccess": {
            backgroundColor: theme?.palette.success.main,
            "&:hover": {
              backgroundColor: theme?.palette.success.dark,
            },
          },
          "&.MuiButton-containedError": {
            backgroundColor: theme?.palette.error.main,
            "&:hover": {
              backgroundColor: theme?.palette.error.dark,
            },
          },
        },
        outlined: {
          color: theme?.colors?.text?.tertiary,
          border: `1px solid ${theme?.colors?.text?.tertiary}`,
          ...disabledStyle,
        },
      },
    },
  };
}
