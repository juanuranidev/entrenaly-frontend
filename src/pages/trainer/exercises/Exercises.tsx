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
import { useState } from "react";
import MainTitle from "./components/MainTitle";
import Searchbar from "./components/ExercisesSearchBar";
import ExerciseCard from "./components/ExerciseCard";

export default function Exercises() {
  const theme: any = useTheme();

  const [exercises, setExercises] = useState(defaultExercises);

  return (
    <Box>
      <MainTitle />
      <Card>
        <Grid container spacing={theme.spacing(3)}>
          <Grid item xs={12}>
            <Alert severity="info">
              <Typography fontSize={16}>
                Acá vas a ver todos los ejercicios con los que podrás armar tus
                planes de entrenamiento
              </Typography>
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <Searchbar exercises={exercises} setExercises={setExercises} />
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {exercises.map((exercise) => (
                <ExerciseCard key={exercise.name} exercise={exercise} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
