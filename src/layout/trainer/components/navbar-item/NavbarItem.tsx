import {
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
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

  console.log(location.pathname);
  return (
    <ListItemButton
      key={item.url}
      sx={{
        zIndex: 1000,

        "& .MuiListItemIcon-root, & .MuiTypography-root": {
          color:
            location.pathname === item.url ? theme.colors.brand.primary : "",
        },

        "&:hover": {
          "& .MuiListItemIcon-root, & .MuiTypography-root": {
            color: theme.colors.brand.primary,
          },
        },
      }}
      onClick={() => {
        setIsDrawerOpen(false);
        navigate(item.url);
      }}
    >
      <ListItemIcon sx={{ minWidth: 28 }}>{item.icon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {item.title}
          </Typography>
        }
      />
    </ListItemButton>
  );
}
