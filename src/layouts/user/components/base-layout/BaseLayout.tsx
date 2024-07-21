import { Box, Stack, useMediaQuery } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { navbarItem } from "layouts/user/lib/types";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../drawer/Drawer";
import Header from "../header/Header";
import MobileNavbar from "../mobile-navbar/MobileNavbar";

type Props = {
  navbarItems: navbarItem[] | [];
  profileItems: navbarItem[] | [];
};

export default function BaseLayout({ navbarItems, profileItems }: Props) {
  const { theme } = useThemeContext();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const isSmallScreen: boolean = useMediaQuery(
    theme?.breakpoints?.down("md") || "(max-width:600px)"
  );

  return (
    <Stack direction="row" height="100dvh">
      <Drawer
        navbarItems={navbarItems}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <Box width="100%">
        <Header setIsDrawerOpen={setIsDrawerOpen} profileItems={profileItems} />
        <Box
          py={theme?.spacing(4)}
          px={{ base: theme?.spacing(0), md: theme?.spacing(4) }}
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
