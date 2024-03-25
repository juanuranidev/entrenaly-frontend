import {
  Box,
  Card,
  Grid,
  Stack,
  Alert,
  useTheme,
  Typography,
} from "@mui/material";
import { defaultExercises } from "../../../lib/utils/defaultExercises";
import { useEffect, useState } from "react";
import MainTitle from "./components/MainTitle";
import Searchbar from "./components/ExercisesSearchBar";
import ExerciseCard from "./components/ExerciseCard";
import MuscularGroupsFilter from "./components/MuscularGroupsFilter";
import { getAllExercisesService } from "services/exercise/exercise.services";

export default function Exercises() {
  const theme: any = useTheme();

  const [exercises, setExercises] = useState([]);

  const handleGetExercises = async () => {
    try {
      const response = await getAllExercisesService();

      setExercises(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetExercises();
  }, []);

  return (
    <Box>
      <MainTitle />
      <Card>
        <Grid container spacing={theme.spacing(3)}>
          <Grid item xs={12}>
            <Alert severity="info">
              <Typography fontSize={15}>
                Acá vas a ver todos los ejercicios con los que podrás armar tus
                planes de entrenamiento
              </Typography>
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <Searchbar exercises={exercises} setExercises={setExercises} />
          </Grid>
          <Grid item xs={12}>
            <MuscularGroupsFilter
              exercises={exercises}
              setExercises={setExercises}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {exercises.length
                ? exercises.map((exercise: any) => (
                    <ExerciseCard key={exercise.name} exercise={exercise} />
                  ))
                : null}
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
