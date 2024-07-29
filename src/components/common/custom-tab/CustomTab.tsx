import { Grid, ListItemButton, ListItemText } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  navbarItem: {
    name: string;
    view: JSX.Element | JSX.Element[];
  };
  currentView: string;
  setCurrentView: (value: string) => void;
};

export default function CustomTab({
  navbarItem,
  currentView,
  setCurrentView,
}: Props) {
  const { theme } = useThemeContext();

  return (
    <Grid item>
      <ListItemButton
        sx={{
          color:
            currentView === navbarItem.name
              ? theme?.colors?.text?.tertiary
              : theme?.colors?.text?.secondary,
          backgroundColor:
            currentView === navbarItem.name
              ? theme?.colors?.backgroundHover?.primary
              : theme?.colors?.background?.primary,
          "&:hover": {
            "& .MuiListItemIcon-root, & .MuiTypography-root": {
              color: theme?.colors?.text?.tertiary,
            },
            backgroundColor: theme?.colors?.backgroundHover?.primary,
          },
        }}
        onClick={() => setCurrentView(navbarItem?.name)}
      >
        <ListItemText>{navbarItem?.name}</ListItemText>
      </ListItemButton>
    </Grid>
  );
}
