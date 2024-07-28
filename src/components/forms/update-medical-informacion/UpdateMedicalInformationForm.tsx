import {
  Box,
  Grid,
  Button,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";
import { createErrorToastLib, createSuccessToastLib } from "lib/utils/toast";
import { updateClientMedicalInformationService } from "services/client/client.services";
import { useThemeContext } from "contexts/theme/Theme";
import { useFormik } from "formik";
import { useState } from "react";
import { Client } from "lib/types/client/client.types";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ModalTitle from "components/common/modal-title/ModalTitle";
import Icons from "lib/utils/icons/icons";

type Props = {
  open: boolean;
  onClose: () => void;
  onboarding?: boolean;
  onSubmit?: () => Promise<void>;
  clientSelected: Client | null;
};

export default function UpdateMedicalInformationForm({
  open,
  onClose,
  onSubmit,
  onboarding,
  clientSelected,
}: Props) {
  const { theme } = useThemeContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      goals: clientSelected?.goals || "",
      clientId: clientSelected?.id || "",
      height: clientSelected?.height || "",
      weight: clientSelected?.weight || "",
      injuries: clientSelected?.injuries || "",
      medicalConditions: clientSelected?.medicalConditions || "",
    },
    enableReinitialize: true,
    async onSubmit(values) {
      setIsLoading(true);
      try {
        await updateClientMedicalInformationService(values);

        if (onSubmit) {
          await onSubmit();
        }

        createSuccessToastLib(
          onboarding
            ? "Datos actualizadons con éxito"
            : "Cliente actualizado con éxito"
        );
        onClose();
      } catch (error) {
        createErrorToastLib("Error al actualizar los datos");
        console.log(error);
      }
      setIsLoading(false);
    },
  });

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <ModalTitle
        title="Editar Información médica"
        action={
          <IconButton onClick={onClose}>
            <Icons.close />
          </IconButton>
        }
      />
      <Box height="calc(100% - 10rem)" overflow="auto">
        <Grid container spacing={theme?.spacing(4)}>
          {onboarding ? (
            <Grid item xs={12}>
              <Typography fontSize={15} fontWeight={500}>
                Completa tu ficha médica así tu entrenador tendrá más
                información acerca de ti.
              </Typography>
            </Grid>
          ) : null}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="weight"
              label="Peso"
              onBlur={formik?.handleBlur}
              value={formik?.values?.weight}
              onChange={formik?.handleChange}
              sx={{ marginTop: theme?.spacing(1) }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name="height"
              label="Altura"
              onBlur={formik?.handleBlur}
              value={formik?.values?.height}
              onChange={formik?.handleChange}
              sx={{ marginTop: theme?.spacing(1) }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              minRows={4}
              maxRows={4}
              name="goals"
              label="Objetivos"
              onBlur={formik?.handleBlur}
              value={formik?.values?.goals}
              onChange={formik?.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              minRows={4}
              maxRows={4}
              name="injuries"
              label="Lesiones"
              onBlur={formik?.handleBlur}
              value={formik?.values?.injuries}
              onChange={formik?.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              minRows={4}
              maxRows={4}
              name="medicalConditions"
              label="Condiciones médicas"
              onBlur={formik?.handleBlur}
              value={formik?.values?.medicalConditions}
              onChange={formik?.handleChange}
            />
          </Grid>
        </Grid>
      </Box>
      <Box py={theme?.spacing(4)} bgcolor={theme?.colors?.background?.primary}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          disabled={isLoading}
          onClick={() => formik.handleSubmit()}
        >
          Guardar
        </Button>
      </Box>
    </BaseDrawer>
  );
}
