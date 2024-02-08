import { useState } from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { defaultExercises } from "../../../../lib/utils/defaultExercises";
import ExerciseCard from "components/common/ExerciseCard";

type Exercise = {
  name: string;
  video: string;
};

type Props = {
  onSubmit: (exercises: Exercise[]) => void;
};

export default function SelectExercisesView({ onSubmit }: Props) {
  const theme: any = useTheme();

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
    setExercisesSelected([]);
    onSubmit(exercisesSelected);
  };

  return (
    <Box>
      <Typography fontWeight={600} fontSize={15} pb={2}>
        Selecciona los ejercicios
      </Typography>
      <Box height="calc(100% - 10rem)" overflow="auto">
        <Stack
          width="100%"
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          gap={theme.spacing(2)}
          justifyContent="center"
        >
          {defaultExercises.map((exercise) => (
            <ExerciseCard
              key={exercise.name}
              exercise={exercise}
              exercisesSelected={exercisesSelected}
              toggleExerciseSelection={toggleExerciseSelection}
            />
          ))}
        </Stack>
      </Box>
      <Box p={theme.spacing(2)} bgcolor={theme.backgrounds.primary}>
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={!exercisesSelected.length}
        >
          Agregar
        </Button>
      </Box>
    </Box>
  );
}
