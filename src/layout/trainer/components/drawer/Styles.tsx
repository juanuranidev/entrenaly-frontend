import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

const openedMixin = (theme: any) => ({
  width: "14rem",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: any) => ({
  width: "14rem",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

type DrawerStylesProps = {
  theme: any;
  open: boolean;
};

export const DrawerStyles = styled(Drawer)<DrawerStylesProps>(
  ({ theme, open }: any) => ({
    "& .MuiDrawer-paper": {
      // padding: theme.spacing(10),
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
