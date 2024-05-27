import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const baseStyles = (theme: any) => ({
  width: "14rem",
  padding: theme?.spacing(1),
  borderRight: `2px solid ${theme?.colors?.border?.primary}`,
  transition: theme?.transitions?.create("width", {
    easing: theme?.transitions?.easing?.sharp,
    duration: theme?.transitions?.duration?.leavingScreen,
  }),
});

type DrawerStylesProps = {
  theme: any;
};

export const DrawerStyles = styled(Drawer)<DrawerStylesProps>(
  ({ theme }: any) => ({
    ...baseStyles(theme),
    "& .MuiDrawer-paper": baseStyles(theme),
  })
);
