import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Drawer from "./components/drawer/Drawer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

export default function TrainerLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Stack direction="row" height="100vh">
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Box width="100%">
        <Header setIsDrawerOpen={setIsDrawerOpen} />
        <Box
          p={3}
          sx={{
            overflow: "scroll",
            backgroundColor: "#edf3f8",
            height: "calc(100vh - 5rem)",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Stack>
  );
}
