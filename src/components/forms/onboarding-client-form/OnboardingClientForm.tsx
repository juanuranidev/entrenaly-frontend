import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ModalTitle from "components/common/modal-title/ModalTitle";
import Logo from "components/common/logo/Logo";
import Icons from "lib/utils/icons/icons";

type Props = {
  open: boolean;
  onSubmit: () => void;
};

export default function OnboardingClientForm({ open, onSubmit }: Props) {
  const { theme } = useThemeContext();

  return (
    <BaseDrawer open={open} onClose={() => {}}>
      <ModalTitle
        title="Completa tu perfil"
        action={
          <IconButton disabled>
            <Icons.close />
          </IconButton>
        }
      />
      <Box height="calc(100% - 10rem)" overflow="auto">
        <Stack gap={theme?.spacing(2)}>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontSize={20} fontWeight={600}>
              ¡Bienvenido a Entrenaly!
            </Typography>
            <Logo />
          </Stack>
          <Typography fontSize={15} fontWeight={500}>
            Acá podrás ver todos los planes asignados por tu entrenador
            personal, descargarlos en formato pdf, ver las imágenes de cada
            ejercicio y próximamente muchas cosas más.
          </Typography>
        </Stack>
      </Box>
      <Box py={theme?.spacing(4)} bgcolor={theme?.colors?.background?.primary}>
        <Button
          fullWidth
          color="primary"
          onClick={onSubmit}
          variant="contained"
        >
          Siguiente
        </Button>
      </Box>
    </BaseDrawer>
  );
}
