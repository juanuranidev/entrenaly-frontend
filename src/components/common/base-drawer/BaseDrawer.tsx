import { BottomDrawerStyled, RightDrawerStyled } from "./Styles";
import { useMediaQuery, Box, CircularProgress } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import Puller from "../puller/Puller";

type Props = {
  open: boolean;
  children: any;
  isLoading?: boolean;
  onClose: () => void;
  styles?: any;
  largeDrawer?: boolean;
};

export default function BaseDrawer({
  open,
  onClose,
  children,
  isLoading,
  largeDrawer,
}: Props) {
  const { theme } = useThemeContext();
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
      largeDrawer={largeDrawer}
    >
      {isLoading ? (
        <Box
          height="100%"
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </RightDrawerStyled>
  );
}
