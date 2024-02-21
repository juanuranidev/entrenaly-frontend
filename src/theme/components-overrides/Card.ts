export default function Card(theme: any) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
          boxShadow: theme.customShadows.card,
          border: `1px solid ${theme.palette.divider}`,
        },
      },
    },
  };
}
