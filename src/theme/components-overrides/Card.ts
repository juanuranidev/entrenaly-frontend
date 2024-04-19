export default function Card(theme: any) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          padding: theme.spacing(3),
          backgroundColor: "#ffffff",
          borderRadius: theme?.spacing(2),
          border: `1px solid ${theme?.colors?.border?.primary}`,
        },
      },
    },
  };
}
