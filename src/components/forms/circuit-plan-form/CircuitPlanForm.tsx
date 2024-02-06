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
        ? formik.values.exercises.map((exercise: any) => (
            <Grid item xs={12} sm={12} key={exercise.name}>
              <Card
                elevation={0}
                sx={{
                  backgroundColor: theme.backgrounds.secondary,
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
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
                    <Typography mb={2}>{exercise.name}</Typography>
                    <TextField
                      label="Descripcion"
                      placeholder="1 serie 2 repeticiones"
                      value={exercise.description}
                      onChange={(e) =>
                        formik.setValues((prevValues: any) => {
                          const updatedDays = prevValues.days.map(
                            (prevDay: any) => {
                              if (prevDay.name === exercise.name) {
                                const updatedExercises = prevDay.exercises.map(
                                  (prevExercise: any) => {
                                    if (prevExercise.name === exercise.name) {
                                      return {
                                        ...prevExercise,
                                        description: e.target.value,
                                      };
                                    }
                                    return prevExercise;
                                  }
                                );
                                return {
                                  ...prevDay,
                                  exercises: updatedExercises,
                                };
                              }
                              return prevDay;
                            }
                          );
                          return { ...prevValues, days: updatedDays };
                        })
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
