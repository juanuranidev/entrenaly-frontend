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
          borderRadius: theme?.spacing(1),
        },
        contained: {
          fontWeight: 600,
          backgroundColor: theme?.colors?.background?.tertiary,
          "&:hover": {
            backgroundColor: theme?.colors?.backgroundHover?.tertiary,
          },
          ...disabledStyle,
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