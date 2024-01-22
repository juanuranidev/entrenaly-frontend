export default function Drawer(theme: any) {
  return {
    MuiDrawer: {
      styleOverrides: {
        root: {
          "& .MuiDrawer-paper": {
            width: 500,
            padding: theme.spacing(2),
          },
        },
      },
    },
  };
}
