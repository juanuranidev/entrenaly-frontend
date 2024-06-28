import { Card, Grid, Alert, CircularProgress } from "@mui/material";
import { useReadExercises } from "hooks/exercise/useReadExercises";
import { useThemeContext } from "contexts/theme/Theme";
import { useDebounce } from "hooks/useDebounce";
import { Exercise } from "lib/types/exercise/exercise.types";
import { useState } from "react";
import MainTitle from "./components/main-title/MainTitle";
import ExerciseCard from "./components/exercise-card/ExerciseCard";
import ExercisesSearchBar from "./components/exercises-search-bar/ExercisesSearchBar";

export default function Exercises() {
  const { theme } = useThemeContext();
  const [searchValue, setSearchValue] = useState<string>("");

  const { debouncedValue } = useDebounce(searchValue, 500);
  const { exercises, isLoading, handleRefetchExercises } =
    useReadExercises(debouncedValue);

  return (
    <Grid container spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <MainTitle handleRefetchExercises={handleRefetchExercises} />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Grid container spacing={theme?.spacing(3)}>
            <Grid item xs={12}>
              <Alert severity="info">
                Acá podrás ver todos los ejercicios con los que serás capaz de
                armar tus planes de entrenamiento, tendrás la posibilidad de
                generar variantes de los existentes o crear nuevos.
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <ExercisesSearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </Grid>
            {isLoading ? (
              <Grid
                item
                xs={12}
                width="100%"
                display="flex"
                justifyContent="center"
                my={theme?.spacing(10)}
              >
                <CircularProgress />
              </Grid>
            ) : (
              <Grid
                item
                xs={12}
                display="flex"
                flexWrap="wrap"
                flexDirection="row"
                gap={theme?.spacing(3)}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                {exercises.length
                  ? exercises?.map((exercise: Exercise) => (
                      <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                        handleRefetchExercises={handleRefetchExercises}
                      />
                    ))
                  : null}
              </Grid>
            )}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
