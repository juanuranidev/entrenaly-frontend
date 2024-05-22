import { useThemeContext } from "contexts/Theme";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Drawer from "./components/drawer/Drawer";
import Header from "./components/header/Header";

export default function TrainerLayout() {
  const { theme } = useThemeContext();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Stack direction="row" height="100dvh">
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Box width="100%">
        <Header setIsDrawerOpen={setIsDrawerOpen} />
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
