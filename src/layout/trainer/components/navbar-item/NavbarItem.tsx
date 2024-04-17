import {
  useTheme,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  item: any;
  setIsDrawerOpen: (boolean: boolean) => void;
};

export default function NavbarItem({ item, setIsDrawerOpen }: Props) {
  const theme: any = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const currentView = location.pathname === item.url;

  return (
    <ListItemButton
      color="primary"
      key={item.url}
      sx={{
        marginY: theme?.spacing(1),
        backgroundColor: currentView
          ? theme?.colors?.backgroundHover?.secondary
          : theme?.colors?.background?.primary,
        "& .MuiListItemIcon-root, & .MuiTypography-root": {
          fontSize: 15,
          fontWeight: 500,
          color: currentView
            ? theme?.colors?.text?.primary
            : theme?.colors.text.secondary,
        },
      }}
      onClick={() => {
        setIsDrawerOpen(false);
        navigate(item.url);
      }}
    >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography fontSize={18} sx={{ fontWeight: 600 }}>
            {item.title}
          </Typography>
        }
      />
    </ListItemButton>
  );
}
