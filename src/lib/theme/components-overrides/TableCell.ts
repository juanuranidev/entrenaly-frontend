import { Theme } from "lib/types/theme.types";

export default function TableCell(theme: Theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          padding: 12,
          borderColor: theme?.palette?.divider,
        },
        head: {
          fontWeight: 600,
          paddingTop: 20,
          paddingBottom: 20,
        },
      },
    },
  };
}
