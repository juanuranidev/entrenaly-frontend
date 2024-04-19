export default function ListItemButton(theme: any) {
  return {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          zIndex: 1000,
          padding: theme?.spacing(1),
          borderRadius: theme?.spacing(1),
          "& .MuiListItemIcon-root, & .MuiTypography-root": {
            fontWeight: 600,
            fontSize: 15,
          },
          color: theme?.colors.text?.secondary,
          "&:hover": {
            "& .MuiListItemIcon-root, & .MuiTypography-root": {
              color: theme?.colors?.text?.primary,
            },
            backgroundColor: theme?.colors?.backgroundHover?.tertiary,
          },
        },
      },
    },
  };
}
