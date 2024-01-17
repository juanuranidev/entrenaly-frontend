import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import NavbarContent from "../navbar-content/NavbarContent";

type Props = {
  isDrawerOpen: boolean;
};

export default function Navbar({ isDrawerOpen }: Props) {
  const theme: any = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  console.log(theme);
  console.log(isDrawerOpen);
  return (
    <Box
      display={isLargeScreen ? "flex" : "none"}
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
