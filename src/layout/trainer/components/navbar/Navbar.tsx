import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import NavbarContent from "../navbar-content/NavbarContent";

export default function Navbar({ isDrawerOpen, setIsDrawerOpen }: any) {
  const theme: any = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      width="12rem"
      bgcolor="#ffffff"
      p={theme.spacing(1)}
      display={isLargeScreen ? "block" : "none"}
      sx={{
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <NavbarContent
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </Box>
  );
}
