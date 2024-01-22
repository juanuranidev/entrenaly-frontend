export default function Drawer(theme: any) {
  return {
    MuiDrawer: {
      styleOverrides: {
        root: {
          "& .MuiDrawer-paper": {
            width: { base: "100%", lg: 400 },
            padding: theme.spacing(2),
          },
        },
      },
    },
  };
}
