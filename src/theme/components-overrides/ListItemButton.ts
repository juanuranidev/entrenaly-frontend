export default function ListItemButton(theme: any) {
  return {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          zIndex: 1000,
          "&:hover": {
            "& .MuiListItemIcon-root, & .MuiTypography-root": {
              color: theme.colors.brand.primary,
            },
            backgroundColor: theme.colors.brand.primaryHover,
          },
        },
      },
    },
  };
}
