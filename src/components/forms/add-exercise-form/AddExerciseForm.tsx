import { Grid, Button, MenuItem, TextField, Typography } from "@mui/material";

type Props = {
  formik: any;
  removeSubmitButton?: boolean;
};

export default function AddExerciseForm({ formik, removeSubmitButton }: Props) {
  return (
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
          error={Boolean(formik.touched.name) && Boolean(formik.errors.name)}
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
            Boolean(formik.touched.format) && Boolean(formik.errors.format)
          }
          helperText={
            Boolean(formik.touched.format) && Boolean(formik.errors.format)
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
          error={Boolean(formik.touched.video) && Boolean(formik.errors.video)}
          helperText={
            Boolean(formik.touched.video) && Boolean(formik.errors.video)
          }
        />
      </Grid>
      {!removeSubmitButton ? (
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Button
            color="primary"
            variant="contained"
            onClick={() => formik.handleSubmit()}
          >
            Guardar
          </Button>
        </Grid>
      ) : null}
    </Grid>
  );
}
