import { useTheme } from "@emotion/react";
import {
  Drawer,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
// type Props = {}

import { styled } from "@mui/material/styles";
// import { Box } from "@mui/material";

// type HeaderStyledProps = {
//   isLargeScreen: boolean;
// };

export const DrawerStyled = styled(Drawer)(() => ({
  // display: "flex",
  // alignItems: "center",
  padding: "20rem",
  // backgroundColor: "#ffffff",
  // justifyContent: isLargeScreen ? "flex-end" : "space-between",
  // borderBottom: `1px solid ${theme.palette.divider}`,
}));

export default function AddClientDrawer({ open, close }: any) {
  const theme: any = useTheme();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={close}
      sx={{
        "& .MuiDrawer-paper": {
          width: 400,
          padding: theme.spacing(2),
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "space-between",
        },
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontWeight={600} fontSize={20}>
          Nuevo Cliente
        </Typography>
        <IconButton onClick={close}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Typography pt={4}>
        Comparte el siguiente enlace a tu cliente para que pueda crearse una
        cuenta
      </Typography>
      <TextField
        style={{ paddingTop: 20 }}
        value="odinadidaodnoinion1io2nion12"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <ContentCopyIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={close}
        sx={{ marginTop: 5 }}
        fullWidth
        variant="contained"
      >
        Aceptar
      </Button>
    </Drawer>
  );
}
