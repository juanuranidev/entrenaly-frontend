import { Drawer, SwipeableDrawer } from "@mui/material";
import { styled } from "@mui/material/styles";

type PageTitleProps = {
  theme: any;
  largeDrawer?: boolean;
};

export const RightDrawerStyled = styled(Drawer)<PageTitleProps>(
  ({ theme, largeDrawer }) => ({
    "& .MuiDrawer-paper": {
      minWidth: largeDrawer ? 650 : 500,
      maxWidth: largeDrawer ? 650 : 500,
      padding: theme?.spacing(3),
      paddingBottom: theme?.spacing(0),
    },
  })
);

export const BottomDrawerStyled = styled(SwipeableDrawer)<PageTitleProps>(
  ({ theme }) => ({
    "& .MuiDrawer-paper": {
      padding: theme?.spacing(3),
      paddingBottom: theme?.spacing(0),
    },
  })
);
