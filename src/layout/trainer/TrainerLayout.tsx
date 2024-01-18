import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import Drawer from "./components/drawer/Drawer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

export default function TrainerLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const theme = useTheme();

  // const handleDrawerToggle = () => {
  //   setOpenDrawer(!openDrawer);
  // };

  return (
    <Stack height="100vh" direction="row">
      <Navbar />
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Box width="100%">
        <Header setIsDrawerOpen={setIsDrawerOpen} />
        <Box
          p={3}
          sx={{
            height: "100%",
            backgroundColor: "#fafafb",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Stack>
  );
}
