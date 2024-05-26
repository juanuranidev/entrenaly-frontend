import Icons from "lib/utils/icons";
import Profile from "../profile/Profile";
import { HeaderStyled } from "./Styles";
import { useThemeContext } from "contexts/Theme";
import { IconButton, useMediaQuery } from "@mui/material";

export default function Header({ setIsDrawerOpen, profileItems }: any) {
  const { theme } = useThemeContext();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <HeaderStyled
      theme={theme}
      justifyContent={isLargeScreen ? "flex-end" : "space-between"}
    >
      {!isLargeScreen ? (
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <Icons.menu />
        </IconButton>
      ) : null}
      <Profile profileItems={profileItems} />
    </HeaderStyled>
  );
}
