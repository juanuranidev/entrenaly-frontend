import {
  Box,
  Grid,
  Button,
  Drawer,
  useTheme,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import PageTitle from "components/common/page-title/PageTitle";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useEffect, useState } from "react";
import { getInviteService } from "services/client/client.services";
import ENV from "lib/utils/env";

export const DrawerStyled = styled(Drawer)(() => ({
  padding: "20rem",
}));

export default function AddClientForm({ open, onClose, onSubmit }: any) {
  const theme: any = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [inviteLink, setInviteLink] = useState("");

  const handleGetInvite = async () => {
    try {
      const response = await getInviteService();

      console.log(response);
      setInviteLink(response.id);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (open) {
      handleGetInvite();
    }
  }, [open]);

  if (isLoading) {
    return (
      <BaseDrawer open={open} onClose={onClose}>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
        </Box>
      </BaseDrawer>
    );
  }

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <Grid container spacing={3} height="100%">
        <Grid item xs={12}>
          <PageTitle title="Añadir nuevo cliente" action={<CloseIcon />} />
        </Grid>
        <Grid item xs={12}>
          <Typography pt={4}>
            Comparte el siguiente enlace a tu cliente para que pueda crearse una
            cuenta
          </Typography>
          <TextField
            fullWidth
            style={{ paddingTop: 20 }}
            value={`${ENV.VITE_FRONTEND_BASE_URL}?invite=${inviteLink}`}
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
        </Grid>
        <Box
          zIndex={10}
          width="100%"
          display="flex"
          position="sticky"
          alignItems="flex-end"
          mt={theme.spacing(3)}
          justifyContent="center"
          paddingY={theme.spacing(2)}
          paddingLeft={theme.spacing(3)}
          bottom={theme.spacing(0)}
          bgcolor={theme.colors.background.primary}
        >
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={onSubmit}
          >
            Aceptar
          </Button>
        </Box>
      </Grid>
    </BaseDrawer>
  );
}
