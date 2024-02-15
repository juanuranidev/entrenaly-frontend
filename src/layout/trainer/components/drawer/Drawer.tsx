import { useTheme } from "@mui/material/styles";
import { DrawerStyles } from "./Styles";
import { useMediaQuery } from "@mui/material";
import NavbarContent from "../navbar-content/NavbarContent";

export default function Drawer({ isDrawerOpen, setIsDrawerOpen }: any) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <DrawerStyles
      theme={theme}
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      variant={isLargeScreen ? "permanent" : "temporary"}
    >
      <NavbarContent
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </DrawerStyles>
  );
}
