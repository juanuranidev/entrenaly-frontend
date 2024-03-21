import { IconButton, useMediaQuery } from "@mui/material";
import { HeaderStyled } from "./Styles";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "../profile/Profile";

export default function Header({ setIsDrawerOpen }: any) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <HeaderStyled
      theme={theme}
      style={{
        justifyContent: isLargeScreen ? "flex-end" : "space-between",
      }}
    >
      {!isLargeScreen ? (
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
      ) : null}
      <Profile />
    </HeaderStyled>
  );
}
