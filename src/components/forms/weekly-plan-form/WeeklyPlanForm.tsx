import {
  Box,
  Grid,
  Stack,
  Button,
  useTheme,
  MenuItem,
  TextField,
  Accordion,
  Typography,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddDayDrawer from "./components/AddDayDrawer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddExercisesDrawer from "../circuit-plan-form/components/AddExercisesDrawer";

type Props = {
  onSubmit: () => any;
};

type Exercise = {
  name: string;
  video: string;
  description: string;
};

export default function WeeklyPlanForm({ onSubmit }: Props) {
  const theme: any = useTheme();

  const [daySelected, setDaySelected] = useState<string | null>(null);
  const [openDrawerDays, setOpenDrawerDays] = useState(false);
  const [openExercisesDrawer, setOpenExercisesDrawer] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      days: [],
    },
    onSubmit(values) {
      console.log(values);
    },
  });

  const handleOnSubmitDrawerDays = (day: any) => {
    setDaySelected(day);
    setOpenExercisesDrawer(true);
  };

  const handleSubmitExercisesDrawer = (selectedExercises: any) => {
    const dayWithExercises = {
      name: daySelected,
      exercises: selectedExercises,
    };

    formik.setFieldValue("days", [...formik.values.days, dayWithExercises]);

    setOpenExercisesDrawer(false);
    setDaySelected(null);
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
          label="Nombre del plan"
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
          label="Categoria del plan"
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
          Días de la semana
        </Typography>
        <Button onClick={() => setOpenDrawerDays(true)} startIcon={<AddIcon />}>
          Agregar día
        </Button>
      </Grid>
      {formik.values.days.map((day: any) => (
        <Grid item xs={12} sm={6} key={day.name}>
          <Accordion
            elevation={0}
            sx={{
              backgroundColor: theme.backgrounds.secondary,
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
            }}
          >
            <AccordionSummary
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
                <Stack direction="row" alignItems="center" gap={2}>
                  {day.exercises.slice(0, 2).map((exercise: Exercise) => (
                    <img
                      key={exercise.name}
                      src={exercise.video}
                      style={{ width: 40, height: 40, objectFit: "contain" }}
                    />
                  ))}
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="column" gap={4}>
                {day.exercises.map((exercise: Exercise) => (
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
                                      (prevExercise: Exercise) => {
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
                        style={{ width: "100%", backgroundColor: "white" }}
                      />
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </AccordionDetails>
            <AccordionActions>
              <Button variant="text" color="error">
                Eliminar día
              </Button>
            </AccordionActions>
          </Accordion>
        </Grid>
      ))}
      <Grid item xs={12} display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Guardar
        </Button>
      </Grid>
      <AddDayDrawer
        open={openDrawerDays}
        onSubmit={handleOnSubmitDrawerDays}
        daysAlreadyAdded={formik.values.days}
        onClose={() => setOpenDrawerDays(false)}
      />
      <AddExercisesDrawer
        open={openExercisesDrawer}
        onSubmit={handleSubmitExercisesDrawer}
        onClose={() => setOpenExercisesDrawer(false)}
      />
    </Grid>
  );
}
