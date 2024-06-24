import {
  Box,
  Drawer,
  CircularProgress,
  useMediaQuery,
  SwipeableDrawer,
} from "@mui/material";
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
  const isSmallScreen: boolean = useMediaQuery(
    theme?.breakpoints?.down("md") || "(max-width:900px)"
  );

  if (isSmallScreen) {
    return (
      <SwipeableDrawer
        open={open}
        anchor="bottom"
        onOpen={onClose}
        onClose={onClose}
        PaperProps={{
          style: {
            padding: theme?.spacing(3),
            paddingBottom: theme?.spacing(0),
          },
        }}
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
      </SwipeableDrawer>
    );
  }

  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={onClose}
      PaperProps={{
        style: {
          minWidth: largeDrawer ? 650 : 500,
          maxWidth: largeDrawer ? 650 : 500,
          padding: theme?.spacing(3),
          paddingBottom: theme?.spacing(0),
        },
      }}
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
    </Drawer>
  );
}
