import {
  Box,
  Grid,
  Stack,
  Avatar,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { handleCreateSuccessToast } from "lib/utils/toast";
import { useEffect, useState } from "react";
import { useThemeContext } from "contexts/theme/Theme";
import { useAuthContext } from "contexts/auth/Auth";
import { useReadInvite } from "hooks/client/useReadInvite";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ModalTitle from "components/common/modal-title/ModalTitle";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import Icons from "lib/utils/icons/icons";
import ENV from "lib/utils/env";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddClientForm({ open, onClose }: Props) {
  const { theme } = useThemeContext();
  const { userData } = useAuthContext();
  const { invite, isLoading } = useReadInvite();

  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyInvite = async (invite: string) => {
    try {
      await navigator.clipboard.writeText(invite);

      handleCreateSuccessToast("Invitación copiada");
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
            handleCopyInvite(`${ENV.FRONTEND_BASE_URL}?invite=${invite}`)
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
    }
  }, [open]);

  return (
    <BaseDrawer open={open} onClose={onClose} isLoading={isLoading}>
      <ModalTitle
        title="Añadir nuevo cliente"
        action={
          <IconButton onClick={onClose}>
            <Icons.close />
          </IconButton>
        }
      />
      <Box height="calc(100% - 10rem)" overflow="auto">
        <Grid container>
          <Grid item xs={12}>
            <Stack
              width="100%"
              flexDirection="row"
              alignItems="center"
              mb={theme?.spacing(2)}
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  fontSize={18}
                  mr={theme?.spacing(1)}
                  sx={{ fontWeight: 600 }}
                >
                  {userData?.name}
                </Typography>
                <Typography
                  fontSize={14}
                  mr={theme?.spacing(1)}
                  sx={{ fontWeight: 500 }}
                >
                  Entrenador
                </Typography>
              </Box>
              <Avatar
                alt={userData?.name}
                src={userData?.image}
                sx={{ width: 45, height: 45 }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight={500} fontSize={13}>
              Comparte el siguiente enlace a tu cliente para que pueda crearse
              una cuenta, ingresar a la plataforma y completar su ficha médica.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled
              fullWidth
              variant="outlined"
              value={`${ENV.FRONTEND_BASE_URL}?invite=${invite}`}
              style={{
                marginTop: theme?.spacing(5),
                marginBottom: theme?.spacing(5),
              }}
              InputProps={{
                endAdornment: handleRenderEndAdornment(),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography mb={theme?.spacing(1)} fontWeight={500}>
              Tu cliente podrá:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack
              flexDirection="row"
              alignItems="center"
              gap={theme?.spacing(1)}
            >
              <Icons.checkBox color="primary" />
              <Typography fontWeight={500}>
                Ver sus planes asignados.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack
              flexDirection="row"
              alignItems="center"
              gap={theme?.spacing(1)}
            >
              <Icons.checkBox color="primary" />
              <Typography fontWeight={500}>
                Ver imágenes de los ejericios.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight={500} mt={theme?.spacing(1)} fontSize={13}>
              ¡Próximamente muchas cosas más!
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box py={theme?.spacing(3)} bgcolor={theme?.colors?.background?.primary}>
        <Button fullWidth color="primary" onClick={onClose} variant="contained">
          Aceptar
        </Button>
      </Box>
    </BaseDrawer>
  );
}
