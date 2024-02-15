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
        zIndex: 1000,
        "& .MuiListItemIcon-root, & .MuiTypography-root": {
          color: currentView ? theme.colors.brand.primary : "",
        },
        "&:hover": {
          "& .MuiListItemIcon-root, & .MuiTypography-root": {
            color: theme.colors.brand.primary,
          },
          backgroundColor: theme.colors.brand.primaryHover,
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
          <Typography variant="h6" fontSize={18} sx={{ fontWeight: 600 }}>
            {item.title}
          </Typography>
        }
      />
    </ListItemButton>
  );
}
