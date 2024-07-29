export default function Dialog(theme: any) {
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
