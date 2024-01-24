export default function Card(theme: any) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
          border: `1px solid ${theme.palette.divider}`,
          boxShadow:
            "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
        },
      },
    },
  };
}
