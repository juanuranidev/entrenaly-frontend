import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const openedMixin = (theme: any) => ({
  border: "none",
  width: "14rem",
  padding: theme?.spacing(1),
  borderRight: `2px solid ${theme?.colors?.border?.primary}`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: any) => ({
  border: "none",
  width: "14rem",
  padding: theme?.spacing(1),
  borderRight: `2px solid ${theme?.colors?.border?.primary}`,
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
