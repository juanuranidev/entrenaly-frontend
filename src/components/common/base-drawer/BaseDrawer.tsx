import { BottomDrawerStyled, RightDrawerStyled } from "./Styles";
import { useMediaQuery, useTheme, Box, CircularProgress } from "@mui/material";
import Puller from "../puller/Puller";

type Props = {
  open: boolean;
  children: any;
  isLoading: boolean;
  onClose: () => void;
};

export default function BaseDrawer({
  open,
  onClose,
  children,
  isLoading,
}: Props) {
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
        {isLoading ? (
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress />
          </Box>
        ) : (
          children
        )}
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
      {isLoading ? (
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </RightDrawerStyled>
  );
}
