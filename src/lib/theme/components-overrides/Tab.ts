import { Theme } from "lib/types/theme.types";

export default function Tab(theme: Theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 46,
          color: theme?.palette?.text?.primary,
        },
      },
    },
  };
}
