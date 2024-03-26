import {
  Box,
  Grid,
  Button,
  MenuItem,
  useTheme,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import PageTitle from "components/common/page-title/PageTitle";
import { useState } from "react";
import { errorToast, successToast } from "lib/utils/toast";
import { createVariantService } from "services/exercise/exercise.services";
import { useAuthContext } from "contexts/Auth";

type Props = {
  open: boolean;
  exerciseId: number;
  onClose: () => void;
  onSubmit: () => void;
  exerciseSelected?: any;
};

export default function AddVariantForm({
  open,
  onClose,
  onSubmit,
  exerciseId,
  exerciseSelected,
}: Props) {
  const theme: any = useTheme();
  const { userData } = useAuthContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: exerciseSelected?.name ?? "",
      video: exerciseSelected?.video ?? "",
      format: exerciseSelected?.format ?? "",
      // categoryId: exerciseSelected?.categoryId ?? "",
      categoryId: 2,
      exerciseId: exerciseId,
      userId: userData?.id,
    },
    enableReinitialize: true,
    async onSubmit(values) {
      setIsLoading(true);
      try {
        const response = await createVariantService(values);
        console.log(response);

        onSubmit();
        onClose();

        successToast("Variante creada con éxito");
      } catch (error) {
        console.log(error);
        errorToast("Error al crear variante intente nuevamente");
      }
      setIsLoading(false);
    },
  });

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <Grid container spacing={3} height="100%">
        <Grid item xs={12}>
          <PageTitle title="Añadir variante de ejercicio" />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography fontWeight={600} fontSize={15} mb={-1}>
                Informacion principal
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                name="name"
                label="Nombre del ejercicio"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  Boolean(formik.touched.name) && Boolean(formik.errors.name)
                }
                helperText={
                  Boolean(formik.touched.name) && Boolean(formik.errors.name)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                name="categoryId"
                label="Categoria"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.categoryId}
                error={
                  Boolean(formik.touched.categoryId) &&
                  Boolean(formik.errors.categoryId)
                }
                helperText={
                  Boolean(formik.touched.categoryId) &&
                  Boolean(formik.errors.categoryId)
                }
              >
                <MenuItem value="Pecho">Pecho</MenuItem>
                <MenuItem value="Espalda">Espalda</MenuItem>
                <MenuItem value="Hombro">Hombro</MenuItem>
                <MenuItem value="Brazos">Brazos</MenuItem>
                <MenuItem value="Piernas">Piernas</MenuItem>
                <MenuItem value="Abdomen">Abdomen</MenuItem>
                <MenuItem value="Cardio">Cardio</MenuItem>
              </TextField>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                name="format"
                label="Formato"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.format}
                error={
                  Boolean(formik.touched.format) &&
                  Boolean(formik.errors.format)
                }
                helperText={
                  Boolean(formik.touched.format) &&
                  Boolean(formik.errors.format)
                }
              >
                <MenuItem value="Repeticiones">Repeticiones</MenuItem>
                <MenuItem value="Tiempo">Tiempo</MenuItem>
                <MenuItem value="Distancia">Distancia</MenuItem>
                <MenuItem value="Brazos">Brazos</MenuItem>
                <MenuItem value="Piernas">Piernas</MenuItem>
                <MenuItem value="Abdomen">Abdomen</MenuItem>
                <MenuItem value="Cardio">Cardio</MenuItem>
              </TextField>
            </Grid> */}
            <Grid item xs={12}>
              <Typography fontWeight={600} fontSize={15} mb={-1}>
                Video
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                name="video"
                label="Link del video"
                value={formik.values.video}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  Boolean(formik.touched.video) && Boolean(formik.errors.video)
                }
                helperText={
                  Boolean(formik.touched.video) && Boolean(formik.errors.video)
                }
              />
            </Grid>
          </Grid>
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
            disabled={isLoading}
            onClick={() => formik.handleSubmit()}
          >
            Guardar
          </Button>
        </Box>
      </Grid>
    </BaseDrawer>
  );
}
