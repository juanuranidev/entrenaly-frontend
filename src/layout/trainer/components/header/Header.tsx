import Icons from "lib/utils/icons";
import Profile from "../profile/Profile";
import { useTheme } from "@mui/material/styles";
import { HeaderStyled } from "./Styles";
import { IconButton, useMediaQuery } from "@mui/material";

export default function Header({ setIsDrawerOpen }: any) {
  const theme: any = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <HeaderStyled theme={theme} isLargeScreen={isLargeScreen}>
      {!isLargeScreen ? (
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <Icons.menu />
        </IconButton>
      ) : null}
      <Profile />
    </HeaderStyled>
  );
}
