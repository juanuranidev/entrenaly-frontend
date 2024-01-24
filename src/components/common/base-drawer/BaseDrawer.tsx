import { BottomDrawerStyled, RightDrawerStyled } from "./Styles";
import { useMediaQuery, useTheme } from "@mui/material";
import Puller from "../puller/Puller";

type Props = {
  open: boolean;
  children: any;
  onClose: () => void;
};

export default function BaseDrawer({ open, onClose, children }: Props) {
  const theme: any = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  if (isSmallScreen) {
    return (
      <BottomDrawerStyled
        open={open}
        theme={theme}
        anchor="bottom"
        onOpen={onClose}
        onClose={onClose}
      >
        <Puller />
        {children}
      </BottomDrawerStyled>
    );
  }

  return (
    <RightDrawerStyled
      open={open}
      theme={theme}
      anchor="right"
      onClose={onClose}
    >
      {children}
    </RightDrawerStyled>
  );
}
