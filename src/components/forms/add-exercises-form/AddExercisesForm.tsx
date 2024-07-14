import {
  Box,
  Stack,
  Button,
  IconButton,
  Typography,
  Badge,
} from "@mui/material";
import { Exercise, ExerciseCategory } from "lib/types/exercise/exercise.types";
import { useEffect, useState } from "react";
import { useReadExercises } from "hooks/exercise/useReadExercises";
import { useThemeContext } from "contexts/theme/Theme";
import ExercisesCategories from "components/common/exercises-categories/ExercisesCategories";
import ExercisesSearchBar from "pages/user/trainer/exercises/index/components/exercises-search-bar/ExercisesSearchBar";
import { useDebounce } from "hooks/useDebounce";
import ExerciseCard from "../../common/exercise-card/ExerciseCard";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ModalTitle from "components/common/modal-title/ModalTitle";
import Icons from "lib/utils/icons/icons";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (value: Exercise[]) => void;
};

export default function AddExercisesForm({ open, onClose, onSubmit }: Props) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [exerciseCategorySelected, setExerciseCategorySelected] =
    useState<ExerciseCategory | null>(null);
  const [exercisesSelected, setExercisesSelected] = useState<Exercise[] | []>(
    []
  );

  const { theme } = useThemeContext();
  const { debouncedValue } = useDebounce(searchValue, 500);
  const { exercises, handleRefetchExercises } = useReadExercises(
    debouncedValue,
    exerciseCategorySelected?.id
  );

  const toggleExerciseSelection = (exercise: Exercise) => {
    setExercisesSelected((prevSelected) => {
      const isExerciseSelected = prevSelected.some(
        (selectedExercise: Exercise) => selectedExercise.name === exercise.name
      );

      if (isExerciseSelected) {
        return prevSelected.filter(
          (selectedExercise: Exercise) =>
            selectedExercise.name !== exercise.name
        );
      } else {
        return [...prevSelected, exercise];
      }
    });
  };

  const handleSubmit = () => {
    onSubmit(exercisesSelected);
    setExercisesSelected([]);
    onClose();
  };

  useEffect(() => {
    if (!open) {
      setSearchValue("");
      setExercisesSelected([]);
      setExerciseCategorySelected(null);
    }
  }, [open]);

  return (
    <BaseDrawer open={open} onClose={onClose} largeDrawer>
      <ModalTitle
        title="Agregar ejercicios"
        action={
          <IconButton onClick={onClose}>
            <Icons.close />
          </IconButton>
        }
      />
      <Typography fontWeight={600} fontSize={15} mb={theme?.spacing(2)}>
        Selecciona los ejercicios que quieres agregar
      </Typography>
      <Box mb={theme?.spacing(2)}>
        <ExercisesSearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Box>
      <Box mb={theme?.spacing(2)}>
        <ExercisesCategories
          handleRefetchExercises={handleRefetchExercises}
          exerciseCategorySelected={exerciseCategorySelected}
          setExerciseCategorySelected={setExerciseCategorySelected}
        />
      </Box>
      <Box overflow="auto" pt={theme?.spacing(2)} height="calc(100% - 10rem)">
        <Stack
          width="95%"
          margin="auto"
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          gap={theme?.spacing(2)}
          justifyContent="center"
        >
          {exercises.length ? (
            exercises.map((exercise: Exercise) => (
              <ExerciseCard
                key={exercise.name}
                exercise={exercise}
                exercisesSelected={exercisesSelected}
                toggleExerciseSelection={toggleExerciseSelection}
              />
            ))
          ) : (
            <Typography
              fontSize={15}
              fontWeight={600}
              minHeight="20dvh"
              my={theme?.spacing(20)}
            >
              ¡No hay ejercicios!
            </Typography>
          )}
        </Stack>
      </Box>
      <Box pb={theme?.spacing(4)} bgcolor={theme?.colors?.background?.primary}>
        <Stack
          gap={2}
          display="flex"
          flexDirection="row"
          pt={theme?.spacing(4)}
          my={theme?.spacing(2)}
          overflow={{
            xs: "scroll",
            md: "hidden",
          }}
          justifyContent={{
            xs: "flex-start",
            md: "center",
          }}
          flexWrap={{
            xs: "nowrap",
            md: "wrap",
          }}
        >
          {exercisesSelected.map((exercise: Exercise, index: number) => (
            <Badge badgeContent={index + 1} color="primary">
              <img src={exercise.image} width="50rem" />;
            </Badge>
          ))}
        </Stack>
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={!exercisesSelected.length}
        >
          Agregar
        </Button>
      </Box>
    </BaseDrawer>
  );
}
