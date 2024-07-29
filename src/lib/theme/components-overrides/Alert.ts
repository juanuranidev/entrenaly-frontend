import { Theme } from "lib/types/theme.types";

export default function Alert(theme: Theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: theme?.colors?.background?.secondary,
          color: theme?.colors?.text?.secondary,
        },
        message: {
          fontWeight: 500,
          fontSize: "0.85rem",
        },
      },
    },
  };
}
