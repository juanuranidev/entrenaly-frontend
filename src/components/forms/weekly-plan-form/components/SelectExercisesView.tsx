import { useState } from "react";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { defaultExercises } from "../../../../lib/utils/defaultExercises";

type Exercise = {
  name: string;
  video: string;
};

type Props = {
  onSubmit: (exercises: Exercise[]) => void;
};

export default function SelectExercisesView({ onSubmit }: Props) {
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
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {defaultExercises.map((exercise) => (
          <Card
            key={exercise.name}
            onClick={() => toggleExerciseSelection(exercise)}
            sx={{
              marginBottom: 2,
              width: "45%",
              display: "flex",
              cursor: "pointer",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
              backgroundColor: exercisesSelected.some(
                (selectedExercise) => selectedExercise.name === exercise.name
              )
                ? "#e0f7fa"
                : "white",
            }}
          >
            <img
              src={exercise.video}
              style={{ width: 100, height: 100, objectFit: "contain" }}
            />
            <Typography mt={1} fontWeight={600}>
              {exercise.name}
            </Typography>
          </Card>
        ))}
      </Stack>
      <Box pt={2}>
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
