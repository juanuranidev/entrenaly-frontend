import { Theme } from "lib/types/theme.types";

export default function Dialog(theme: Theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: theme?.spacing(2),
          borderRadius: theme?.spacing(1),
        },
      },
    },
  };
}
