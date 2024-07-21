import { IconButton, Stack, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import { navbarItem } from "layouts/user/lib/types";

type Props = {
  navbarItem: navbarItem;
};

export default function MobileNavbarItem({ navbarItem }: Props) {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  const currentView: boolean = Boolean(
    location.pathname.includes(navbarItem.url)
  );

  return (
    <Stack
      flexGrow={1}
      display="flex"
      alignItems="center"
      flexDirection="column"
      paddingY={theme?.spacing(1)}
      onClick={() => navigate(navbarItem?.url)}
    >
      <IconButton
        style={{
          color: currentView
            ? theme?.colors?.backgroundHover?.tertiary
            : "#000000",
          fontSize: 1,
        }}
      >
        {navbarItem.icon}
      </IconButton>
      <Typography
        style={{
          fontWeight: 500,
          color: currentView
            ? theme?.colors?.backgroundHover?.tertiary
            : "#000000",
        }}
      >
        {navbarItem.title}
      </Typography>
    </Stack>
  );
}
