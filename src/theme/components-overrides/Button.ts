export default function Button() {
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
