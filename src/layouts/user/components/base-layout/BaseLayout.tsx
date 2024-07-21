import { Box, Stack, useMediaQuery } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { navbarItem } from "layouts/user/lib/types";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import MobileNavbar from "../mobile-navbar/MobileNavbar";

type Props = {
  navbarItems: navbarItem[] | [];
  profileItems: navbarItem[] | [];
};

export default function BaseLayout({ navbarItems, profileItems }: Props) {
  const { theme } = useThemeContext();

  const isSmallScreen: boolean = useMediaQuery(
    theme?.breakpoints?.down("md") || "(max-width:900px)"
  );

  return (
    <Stack direction="row" height="100dvh">
      {!isSmallScreen ? <Navbar navbarItems={navbarItems} /> : null}
      <Box width="100%">
        <Header profileItems={profileItems} />
        <Box
          py={theme?.spacing(4)}
          px={{ sm: theme?.spacing(0), md: theme?.spacing(4) }}
          sx={{
            overflowY: "scroll",
            backgroundColor: "#F7F8FA",
            height: "calc(100dvh - 5rem)",
          }}
        >
          <Outlet />
        </Box>
      </Box>
      {isSmallScreen ? <MobileNavbar navbarItems={navbarItems} /> : null}
    </Stack>
  );
}
