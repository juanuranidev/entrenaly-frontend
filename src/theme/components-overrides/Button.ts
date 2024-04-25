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
        root: {},
        contained: {
          fontWeight: 600,
          backgroundColor: theme?.colors?.background?.tertiary,
          "&:hover": {
            backgroundColor: theme?.colors?.backgroundHover?.tertiary,
          },
          ...disabledStyle,
        },
        outlined: {
          borderRadius: theme?.spacing(1),
          color: theme?.colors?.text?.tertiary,
          border: `1px solid ${theme?.colors?.text?.tertiary}`,
          ...disabledStyle,
        },
      },
    },
  };
}
