import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import Drawer from "./drawer/Drawer";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

export default function TrainerLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const theme = useTheme();

  // const handleDrawerToggle = () => {
  //   setOpenDrawer(!openDrawer);
  // };

  return (
    <Stack
      // width="100"
      height="100vh"
      direction="row"
    >
      <Navbar isDrawerOpen={isDrawerOpen} />
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fafafb",
        }}
      >
        <Header setIsDrawerOpen={setIsDrawerOpen} />
        <Outlet />
      </Box>
    </Stack>
  );
}
