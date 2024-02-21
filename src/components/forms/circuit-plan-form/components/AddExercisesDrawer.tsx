import {
  Box,
  Stack,
  Button,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { defaultExercises } from "../../../../lib/utils/defaultExercises";
import { useState } from "react";
import PageTitle from "components/common/page-title/PageTitle";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ExerciseCard from "../../../common/ExerciseCard";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

type Exercise = {
  name: string;
  video: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (day: any) => void;
};

export default function AddExercisesDrawer({ open, onClose, onSubmit }: Props) {
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
    onSubmit(exercisesSelected);
    setExercisesSelected([]);
    onClose();
  };

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <PageTitle
        title="Agregar ejercicios"
        action={
          <IconButton onClick={onClose}>
            <HighlightOffIcon />
          </IconButton>
        }
      />
      <Typography fontWeight={600} fontSize={15} pb={2}>
        Selecciona los ejercicios que quieres agregar
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
      <Box p={theme.spacing(2)} bgcolor={theme.colors.backgrounds.primary}>
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
