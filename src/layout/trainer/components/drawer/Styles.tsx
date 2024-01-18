// material-ui
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

const openedMixin = (theme: any) => ({
  // width: 300,
  width: "15rem",
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  boxShadow: "none",
});

const closedMixin = (theme: any) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "15rem",
  // width: 0,
  borderRight: "none",
  boxShadow: theme.shadows[1],
});

type DrawerStylesProps = {
  theme: any;
  open: boolean;
};

export const DrawerStyles = styled(Drawer)<DrawerStylesProps>(
  ({ theme, open }: any) => ({
    display: { xs: "block", lg: "none" },
    "& .MuiDrawer-paper": {
      width: "15rem",
      boxSizing: "border-box",
      borderRight: `1px solid ${theme.palette.divider}`,
      backgroundImage: "none",
      boxShadow: "inherit",
    },
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);
