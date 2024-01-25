import { Drawer, SwipeableDrawer } from "@mui/material";
import { styled } from "@mui/material/styles";

type PageTitleProps = {
  theme: any;
};

export const RightDrawerStyled = styled(Drawer)<PageTitleProps>(
  ({ theme }) => ({
    "& .MuiDrawer-paper": {
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      minWidth: 400,
      maxWidth: 400,
    },
  })
);

export const BottomDrawerStyled = styled(SwipeableDrawer)<PageTitleProps>(
  ({ theme }) => ({
    "& .MuiDrawer-paper": {
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
  })
);
