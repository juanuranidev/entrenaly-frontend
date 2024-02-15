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

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  exerciseSelected?: any;
};

export default function AddExerciseForm({
  open,
  onClose,
  onSubmit,
  exerciseSelected,
}: Props) {
  const theme: any = useTheme();

  const formik = useFormik({
    initialValues: {
      name: exerciseSelected?.name ? exerciseSelected.name : "",
      video: exerciseSelected?.video ?? "",
      format: exerciseSelected?.format ?? "",
      muscularGroup: exerciseSelected?.muscularGroup ?? "",
    },
    enableReinitialize: true,
    onSubmit(values) {
      try {
        console.log(values);
        onSubmit();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <Grid container spacing={3} height="100%">
        <Grid item xs={12}>
          <PageTitle title="Añadir ejercicio propio" />
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
                label="Nombre del circuito"
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
                name="muscularGroup"
                label="Grupo muscular"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.muscularGroup}
                error={
                  Boolean(formik.touched.muscularGroup) &&
                  Boolean(formik.errors.muscularGroup)
                }
                helperText={
                  Boolean(formik.touched.muscularGroup) &&
                  Boolean(formik.errors.muscularGroup)
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
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12}>
              <Typography fontWeight={600} fontSize={15} mb={-1}>
                Video
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                name="name"
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
            <Grid item xs={12} display="flex" justifyContent="flex-end">
              <Button
                color="primary"
                variant="contained"
                onClick={() => formik.handleSubmit()}
              >
                Guardar
              </Button>
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
          bgcolor={theme.colors.backgrounds.primary}
        >
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={() => formik.handleSubmit()}
          >
            Guardar
          </Button>
        </Box>
      </Grid>
    </BaseDrawer>
  );
}
