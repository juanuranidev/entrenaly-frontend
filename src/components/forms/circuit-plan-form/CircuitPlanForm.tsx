import {
  Box,
  Card,
  Grid,
  Stack,
  Button,
  useTheme,
  MenuItem,
  TextField,
  Typography,
  Chip,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddExercisesDrawer from "./components/AddExercisesDrawer";

type Props = {
  onSubmit: (values: any) => any;
};

export default function CircuitPlanForm({ onSubmit }: Props) {
  const theme: any = useTheme();

  const [openDrawerExercises, setOpenDrawerExercises] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      exercises: [],
    },
    onSubmit(values) {
      onSubmit(values);
    },
  });

  const handleOpenExercisesDrawer = () => {
    setOpenDrawerExercises(true);
  };

  const handleCloseExercisesDrawer = () => {
    setOpenDrawerExercises(false);
  };

  const handleOnSubmitExercisesDrawer = (selectedExercises: any) => {
    formik.setValues((prevValues: any) => ({
      ...prevValues,
      exercises: [...prevValues.exercises, ...selectedExercises],
    }));
  };

  const handleOnChange = (exerciseName: string, description: string) => {
    formik.setValues((prevValues: any) => {
      const updatedExercises = prevValues.exercises.map((exercise: any) => {
        if (exercise.name === exerciseName) {
          return {
            ...exercise,
            description: description,
          };
        }
        return exercise;
      });
      return { ...prevValues, exercises: updatedExercises };
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography fontWeight={600} fontSize={15}>
          Informacion principal
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
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
          name="category"
          label="Categoria del circuito"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.category}
          error={
            Boolean(formik.touched.category) && Boolean(formik.errors.category)
          }
          helperText={
            Boolean(formik.touched.category) && Boolean(formik.errors.category)
          }
        >
          <MenuItem value="Musculación">Musculación</MenuItem>
          <MenuItem value="Bajar de peso">Bajar de peso</MenuItem>
          <MenuItem value="Resistencia">Resistencia</MenuItem>
        </TextField>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontWeight={600} fontSize={15}>
          Ejercicios
        </Typography>
        <Button onClick={handleOpenExercisesDrawer} startIcon={<AddIcon />}>
          Agregar ejercicios
        </Button>
      </Grid>
      {formik.values.exercises.length
        ? formik.values.exercises.map((exercise: any, index: number) => (
            <Grid item xs={12} sm={6} key={exercise.name}>
              <Card
                elevation={0}
                sx={{
                  boxShadow: theme.customShadows.card,
                  backgroundColor: theme.colors.backgrounds.primary,
                }}
              >
                <Stack
                  gap={2}
                  width="100%"
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <img
                    key={exercise.name}
                    src={exercise.video}
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "contain",
                    }}
                  />
                  <Box width="100%">
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={2}
                    >
                      <Stack direction="row" alignItems="center">
                        <Typography>{`${index + 1}. ${
                          exercise.name
                        }`}</Typography>
                      </Stack>
                      <Chip
                        size="small"
                        color="primary"
                        variant="outlined"
                        label={exercise.muscularGroup}
                      />
                    </Stack>
                    <TextField
                      label="Descripcion"
                      placeholder="1 serie 2 repeticiones"
                      value={exercise.description}
                      onChange={(e) =>
                        handleOnChange(exercise.name, e.target.value)
                      }
                      style={{
                        width: "100%",
                        backgroundColor: "white",
                      }}
                    />
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))
        : null}
      <Grid item xs={12} display="flex" justifyContent="flex-end">
        <Button
          color="primary"
          variant="contained"
          onClick={() => formik.handleSubmit()}
        >
          Guardar
        </Button>
      </Grid>
      <AddExercisesDrawer
        open={openDrawerExercises}
        onClose={handleCloseExercisesDrawer}
        onSubmit={handleOnSubmitExercisesDrawer}
      />
    </Grid>
  );
}
