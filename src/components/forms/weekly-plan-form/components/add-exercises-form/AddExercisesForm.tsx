import { Box, Stack, Button, IconButton, Typography } from "@mui/material";
import { useGetAllExercises } from "hooks/useGetAllExercises";
import { useThemeContext } from "contexts/Theme";
import { useState } from "react";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ExerciseCard from "../../../../common/exercise-card/ExerciseCard";
import ModalTitle from "components/common/modal-title/ModalTitle";
import Icons from "lib/utils/icons";

type Exercise = {
  name: string;
  video: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (day: any) => void;
};

export default function AddExercisesForm({ open, onClose, onSubmit }: Props) {
  const { theme } = useThemeContext();
  const { exercises } = useGetAllExercises();
  const [exercisesSelected, setExercisesSelected] = useState<Exercise[]>([]);

  const toggleExerciseSelection = (exercise: Exercise) => {
    setExercisesSelected((prevSelected) => {
      const isExerciseSelected = prevSelected.some(
        (selectedExercise) => selectedExercise.name === exercise.name
      );

      if (isExerciseSelected) {
        return prevSelected.filter(
          (selectedExercise) => selectedExercise.name !== exercise.name
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
      <Typography fontWeight={600} fontSize={15}>
        Selecciona los ejercicios que quieres agregar
      </Typography>
      <Box height="calc(100% - 10rem)" overflow="auto" pt={theme?.spacing(4)}>
        <Stack
          width="95%"
          margin="auto"
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          gap={theme?.spacing(2)}
          justifyContent="center"
        >
          {exercises.map((exercise: any) => (
            <ExerciseCard
              key={exercise.name}
              exercise={exercise}
              exercisesSelected={exercisesSelected}
              toggleExerciseSelection={toggleExerciseSelection}
            />
          ))}
        </Stack>
      </Box>
      <Box py={theme?.spacing(3)} bgcolor={theme.colors.background.primary}>
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
