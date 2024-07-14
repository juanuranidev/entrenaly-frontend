import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useThemeContext } from "contexts/theme/Theme";

type navbarItem = {
  title: string;
  url: string;
  icon: JSX.Element;
};

type Props = {
  item: navbarItem;
  setIsDrawerOpen: (value: boolean) => void;
};

export default function NavbarItem({ item, setIsDrawerOpen }: Props) {
  const { theme } = useThemeContext();

  const navigate = useNavigate();
  const location = useLocation();

  const currentView = location.pathname.includes(item.url);

  return (
    <ListItemButton
      color="primary"
      key={item?.url}
      sx={{
        marginY: theme?.spacing(1),
        backgroundColor: currentView
          ? theme?.colors?.backgroundHover?.tertiary
          : theme?.colors?.background?.primary,
        "& .MuiListItemIcon-root, & .MuiTypography-root": {
          color: currentView
            ? theme?.colors?.text?.primary
            : theme?.colors.text?.secondary,
        },
      }}
      onClick={() => {
        setIsDrawerOpen(false);
        navigate(item?.url);
      }}
    >
      <ListItemIcon>{item?.icon}</ListItemIcon>
      <ListItemText>{item?.title}</ListItemText>
    </ListItemButton>
  );
}
