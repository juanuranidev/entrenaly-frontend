import {
  Box,
  Card,
  Grid,
  Stack,
  Alert,
  useTheme,
  Typography,
  Chip,
} from "@mui/material";
import { defaultExercises } from "../../../lib/utils/defaultExercises";
import { useState } from "react";
import MainTitle from "./components/MainTitle";
import Searchbar from "./components/ExercisesSearchBar";
import ExerciseCard from "./components/ExerciseCard";

export default function Exercises() {
  const theme: any = useTheme();

  const [exercises, setExercises] = useState(defaultExercises);

  const muscularGroups = ["Pecho", "Espalda", "Brazo"];

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
            <Stack direction="row" alignItems="center" gap={theme.spacing(1)}>
              {muscularGroups.map((muscularGroup: any) => (
                <Chip
                  size="small"
                  color="primary"
                  variant="outlined"
                  label={muscularGroup}
                  sx={{ cursor: "pointer" }}
                />
              ))}
            </Stack>
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
