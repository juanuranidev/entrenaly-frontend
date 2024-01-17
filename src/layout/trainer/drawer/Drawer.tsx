// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";

// project import
// import DrawerHeader from "./DrawerHeader";
// import DrawerContent from "./DrawerContent";
import { DrawerStyles } from "./Styles";
import NavbarContent from "../navbar-content/NavbarContent";
// import { drawerWidth } from 'config';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

// const MainDrawer = ({ open, handleDrawerToggle, window }: any) => {
//

//   return (
//     <Box
//       component="nav"
//       sx={{ flexShrink: { md: 0 }, zIndex: 1300 }}
//       aria-label="mailbox folders"
//     >
//       {!isLargeScreen ? (
//         <MiniDrawerStyled variant="permanent" open={open}>
//           {drawerHeader}
//           {/* {drawerContent} */}
//         </MiniDrawerStyled>
//       ) : (
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={open}
//           onClose={handleDrawerToggle}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             display: { xs: "block", lg: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: 200,
//               borderRight: `1px solid ${theme.palette.divider}`,
//               backgroundImage: "none",
//               boxShadow: "inherit",
//             },
//           }}
//         >
//           {open && drawerHeader}
//           {/* {open && drawerContent} */}
//         </Drawer>
//       )}
//     </Box>
//   );
// };

// MainDrawer.propTypes = {
//   open: PropTypes.bool,
//   handleDrawerToggle: PropTypes.func,
//   window: PropTypes.object,
// };

// export default MainDrawer;

// type Props = {}

export default function Drawer({ isDrawerOpen, setIsDrawerOpen }: any) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("md"));

  // responsive drawer container
  // const container =
  // window !== undefined ? () => window().document.body : undefined;

  // header content
  // const drawerContent = useMemo(() => <DrawerContent />, []);
  // const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);
  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, zIndex: 1300 }}
      aria-label="mailbox folders"
    >
      <DrawerStyles
        theme={theme}
        open={isDrawerOpen}
        // variant="permanent"
        onClose={() => setIsDrawerOpen(false)}
        isLargeScreen
        // ModalProps={{ keepMounted: true }}
      >
        <NavbarContent />
      </DrawerStyles>
    </Box>
  );
}
