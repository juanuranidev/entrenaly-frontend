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
import { successToast } from "lib/utils/toast";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Icons from "lib/utils/icons";

export const DrawerStyled = styled(Drawer)(() => ({
  padding: "20rem",
}));

export default function AddClientForm({ open, onClose }: any) {
  const theme: any = useTheme();

  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [inviteLink, setInviteLink] = useState("");

  const handleGetInvite = async () => {
    try {
      const response = await getInviteService();

      setInviteLink(response.id);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCopyInvite = async (invite: string) => {
    try {
      await navigator.clipboard.writeText(invite);

      successToast("Invitación copiada");
      setCopied(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRenderEndAdornment = () => {
    if (copied) {
      return (
        <InputAdornment position="start">
          <CheckCircleIcon color="primary" />
        </InputAdornment>
      );
    }

    return (
      <InputAdornment position="start">
        <IconButton
          onClick={() =>
            handleCopyInvite(
              `${ENV.VITE_FRONTEND_BASE_URL}?invite=${inviteLink}`
            )
          }
        >
          <ContentCopyIcon />
        </IconButton>
      </InputAdornment>
    );
  };

  useEffect(() => {
    if (open) {
      setCopied(false);
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
      <Grid container height="100%">
        <Grid item xs={12}>
          <PageTitle title="Añadir nuevo cliente" action={<CloseIcon />} />
        </Grid>
        <Grid item xs={12} bgcolor={theme?.colors?.background?.secondary} p={2}>
          <Typography fontWeight={600}>
            Comparte el siguiente enlace a tu cliente para que pueda crearse una
            cuenta, ingresar a la plataforma y completar su ficha médica y datos
            importantes.
          </Typography>
          <Typography pt={2}>Con la aplicación tu cliente podrá:</Typography>
          <Box display="flex" alignItems="center">
            <Icons.checkBox color="primary" />
            <Typography>Ver todos los planes que le asignes</Typography>
          </Box>
          <TextField
            disabled
            fullWidth
            style={{ paddingTop: 20 }}
            value={`${ENV.VITE_FRONTEND_BASE_URL}?invite=${inviteLink}`}
            variant="outlined"
            InputProps={{
              endAdornment: handleRenderEndAdornment(),
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
            onClick={onClose}
          >
            Aceptar
          </Button>
        </Box>
      </Grid>
    </BaseDrawer>
  );
}
