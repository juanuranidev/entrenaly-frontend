export default function Button(theme: any) {
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
          fontWeight: 600,
          backgroundColor: theme?.colors?.background?.tertiary,
          "&:hover": {
            backgroundColor: theme?.colors?.backgroundHover?.tertiary,
          },
        },
        contained: {
          ...disabledStyle,
        },
        outlined: {
          ...disabledStyle,
        },
      },
    },
  };
}
