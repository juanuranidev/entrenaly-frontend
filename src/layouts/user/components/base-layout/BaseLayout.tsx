import { useThemeContext } from "contexts/theme/Theme";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../drawer/Drawer";
import Header from "../header/Header";

type navbarItem = {
  title: string;
  url: string;
  icon: JSX.Element;
};

type Props = {
  navbarItems: navbarItem[] | [];
  profileItems: navbarItem[] | [];
};

export default function BaseLayout({ navbarItems, profileItems }: Props) {
  const { theme } = useThemeContext();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

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
    </Stack>
  );
}
