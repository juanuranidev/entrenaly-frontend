import { Drawer, SwipeableDrawer } from "@mui/material";
import { styled } from "@mui/material/styles";

type PageTitleProps = {
  theme: any;
};

export const RightDrawerStyled = styled(Drawer)<PageTitleProps>(
  ({ theme }) => ({
    "& .MuiDrawer-paper": {
      padding: theme.spacing(2),
      minWidth: 400,
    },
  })
);

export const BottomDrawerStyled = styled(SwipeableDrawer)<PageTitleProps>(
  ({ theme }) => ({
    "& .MuiDrawer-paper": {
      padding: theme.spacing(2),
    },
  })
);
