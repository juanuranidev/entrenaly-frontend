import { Box, Card } from "@mui/material";
import PageTitle from "components/common/page-title/PageTitle";
import {
  Grid,
  MenuItem,
  TextField,
  Typography,
  useTheme,
  Button,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import AddDayDrawer from "components/forms/components/AddDayDrawer";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function NewPlanV2() {
  const theme: any = useTheme();

  const [openDrawerDays, setOpenDrawerDays] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      exercises: [],
    },
    onSubmit(values) {
      console.log(values);
    },
  });

  const handleOpenDrawerDays = () => {
    setOpenDrawerDays(true);
  };

  const handleCloseDrawerDays = () => {
    setOpenDrawerDays(false);
  };

  const handleOnSubmitDrawerDays = (selectedExercises: any) => {
    console.log(selectedExercises.exercises);
    formik.setValues((prevValues: any) => ({
      ...prevValues,
      exercises: [...prevValues.exercises, ...selectedExercises.exercises],
    }));
    handleCloseDrawerDays();
  };

  // const removeExercise = (exerciseName: any) => {
  //   formik.setValues((prevValues: any) => ({
  //     ...prevValues,
  //     exercises: prevValues.exercises.filter(
  //       (exercise: any) => exercise.name !== exerciseName
  //     ),
  //   }));
  // };

  return (
    <Box>
      <PageTitle title="Nuevo circuito" />
      <Card>
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
              name="category"
              label="Categoria del circuito"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.category}
              error={
                Boolean(formik.touched.category) &&
                Boolean(formik.errors.category)
              }
              helperText={
                Boolean(formik.touched.category) &&
                Boolean(formik.errors.category)
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
            <Button onClick={handleOpenDrawerDays} startIcon={<AddIcon />}>
              Agregar ejercicios
            </Button>
          </Grid>
          {formik.values.exercises.length &&
            formik.values.exercises.map((exercise: any) => (
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
                                  const updatedExercises =
                                    prevDay.exercises.map(
                                      (prevExercise: any) => {
                                        if (
                                          prevExercise.name === exercise.name
                                        ) {
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
                  {/* <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Stack
                      width="100%"
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography>{day?.name}</Typography>
                      {/* <Stack direction="row" alignItems="center" gap={2}>
                        {day.exercises.slice(0, 2).map((exercise: any) => (
                          <img
                            key={exercise.name}
                            src={exercise.video}
                            style={{
                              width: 40,
                              height: 40,
                              objectFit: "contain",
                            }}
                          />
                        ))}
                      </Stack>
                    </Stack>
                  </AccordionSummary> */}
                  {/* <AccordionDetails>
                    <Stack direction="column" gap={4}>
                      {day.exercises.map((exercise: any) => (
                        <Stack
                          gap={2}
                          key={exercise.name}
                          direction={{ base: "column", sm: "row" }}
                        >
                          <img
                            src={exercise.video}
                            style={{
                              width: 100,
                              height: 100,
                              margin: "auto",
                              objectFit: "contain",
                            }}
                          />
                          <Box width="100%">
                            <Typography mb={1}>{exercise.name}</Typography>
                            <TextField
                              label="Descripcion"
                              placeholder="1 serie 2 repeticiones"
                              value={exercise.description}
                              onChange={(e) =>
                                formik.setValues((prevValues: any) => {
                                  const updatedDays = prevValues.days.map(
                                    (prevDay: any) => {
                                      if (prevDay.name === day.name) {
                                        const updatedExercises =
                                          prevDay.exercises.map(
                                            (prevExercise: any) => {
                                              if (
                                                prevExercise.name ===
                                                exercise.name
                                              ) {
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
                      ))}
                    </Stack>
                  </AccordionDetails> */}
                  {/* <AccordionActions>
                    <Button
                      variant="text"
                      color="error"
                      onClick={() => removeExercise(day.name)}
                    >
                      Eliminar ejercicio
                    </Button>
                  </AccordionActions> */}
                </Card>
              </Grid>
            ))}
          <Grid item xs={12} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={() => console.log("first")}
            >
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Card>
      <AddDayDrawer
        view={2}
        open={openDrawerDays}
        onClose={handleCloseDrawerDays}
        onSubmit={handleOnSubmitDrawerDays}
        daysAlreadyAdded={formik.values.exercises}
      />
    </Box>
  );
}
