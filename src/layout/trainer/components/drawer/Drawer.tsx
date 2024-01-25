import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { DrawerStyles } from "./Styles";
import NavbarContent from "../navbar-content/NavbarContent";

export default function Drawer({ isDrawerOpen, setIsDrawerOpen }: any) {
  const theme = useTheme();

  return (
    <Box
      component="nav"
      aria-label="mailbox folders"
      sx={{ flexShrink: { md: 0 }, zIndex: 1300 }}
    >
      <DrawerStyles
        theme={theme}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <NavbarContent
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </DrawerStyles>
    </Box>
  );
}
