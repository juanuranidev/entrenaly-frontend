import { Dispatch, SetStateAction, useEffect } from "react";
import { Chip, CircularProgress, Stack } from "@mui/material";
import { useReadExercisesCategories } from "hooks/exercise/useReadExercisesCategories";
import { ExerciseCategory } from "lib/types/exercise/exercise.types";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  handleRefetchExercises: () => Promise<void>;
  exerciseCategorySelected: ExerciseCategory | null;
  setExerciseCategorySelected: Dispatch<
    SetStateAction<ExerciseCategory | null>
  >;
};

export default function ExercisesCategories({
  handleRefetchExercises,
  exerciseCategorySelected,
  setExerciseCategorySelected,
}: Props) {
  const { theme } = useThemeContext();
  const { exercisesCategories, isLoading } = useReadExercisesCategories();

  const handleIsExerciseCategorySelected = (
    exerciseCategory: ExerciseCategory
  ): boolean => {
    return exerciseCategorySelected?.id === exerciseCategory?.id;
  };

  const handleSelectExerciseCategory = (
    exerciseCategory: ExerciseCategory
  ): void => {
    if (handleIsExerciseCategorySelected(exerciseCategory)) {
      setExerciseCategorySelected(null);
    } else {
      setExerciseCategorySelected(exerciseCategory);
    }
  };

  useEffect(() => {
    handleRefetchExercises();
  }, [exerciseCategorySelected]);

  if (isLoading) {
    return <CircularProgress size={26} />;
  }

  return (
    <Stack flexDirection="row" flexWrap="wrap" gap={theme?.spacing(2)}>
      {exercisesCategories.length
        ? exercisesCategories.map((exerciseCategory: ExerciseCategory) => (
            <Chip
              clickable
              color="primary"
              key={exerciseCategory?.id}
              label={exerciseCategory?.name}
              onClick={() => handleSelectExerciseCategory(exerciseCategory)}
              variant={
                handleIsExerciseCategorySelected(exerciseCategory)
                  ? "filled"
                  : "outlined"
              }
            />
          ))
        : null}
    </Stack>
  );
}
