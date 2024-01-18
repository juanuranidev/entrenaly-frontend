import { Drawer, Typography } from "@mui/material";

// type Props = {}

import { styled } from "@mui/material/styles";
// import { Box } from "@mui/material";

// type HeaderStyledProps = {
//   isLargeScreen: boolean;
// };

export const DrawerStyled = styled(Drawer)(({ theme }) => ({
  // display: "flex",
  // alignItems: "center",
  padding: "20rem",
  // backgroundColor: "#ffffff",
  // justifyContent: isLargeScreen ? "flex-end" : "space-between",
  // borderBottom: `1px solid ${theme.palette.divider}`,
}));

export default function AddClientDrawer({ open, onClose }: any) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{ "& .MuiDrawer-paper": { width: 240, backgroundColor: "green" } }}
    >
      <Typography>Nuevo Cliente</Typography>
    </Drawer>
  );
}
