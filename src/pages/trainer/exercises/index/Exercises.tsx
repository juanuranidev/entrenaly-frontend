import { Card, Grid, Alert, CircularProgress } from "@mui/material";
import { useReadExercises } from "hooks/exercise/useReadExercises";
import { useThemeContext } from "contexts/theme/Theme";
import { useDebounce } from "hooks/useDebounce";
import { useState } from "react";
import ExerciseCard from "./components/exercise-card/ExerciseCard";
import Searchbar from "./components/exercises-search-bar/ExercisesSearchBar";
import MainTitle from "./components/main-title/MainTitle";

export default function Exercises() {
  const { theme } = useThemeContext();
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 500);
  const { exercises, isLoading, handleRefetchReadExercises } =
    useReadExercises(debouncedSearchValue);

  return (
    <Grid container spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <MainTitle handleRefetchReadExercises={handleRefetchReadExercises} />
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
              <Searchbar
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
            ) : null}
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
                ? exercises?.map((exercise: any) => (
                    <ExerciseCard
                      key={exercise.id}
                      exercise={exercise}
                      handleRefetchReadExercises={handleRefetchReadExercises}
                    />
                  ))
                : null}
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
