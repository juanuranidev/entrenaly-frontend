import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import NavbarContent from "../navbar-content/NavbarContent";

export default function Navbar() {
  const theme: any = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      display={isLargeScreen ? "block" : "none"}
      p={1}
      bgcolor="#ffffff"
      width="15rem"
      sx={{
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <NavbarContent />
    </Box>
  );
}
