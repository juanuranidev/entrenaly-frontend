import {
  Box,
  Stack,
  Button,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import PageTitle from "components/common/page-title/PageTitle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { defaultExercises } from "../../../../lib/utils/defaultExercises";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ExerciseCard from "./ExerciseCard";

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
    setExercisesSelected([]);
    onSubmit(exercisesSelected);
    onClose();
  };

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <Box>
        <PageTitle
          title="Agregar ejercicios"
          action={
            <IconButton onClick={onClose}>
              <HighlightOffIcon />
            </IconButton>
          }
        />
        <Box>
          <Typography fontWeight={600} fontSize={15} pb={2}>
            Selecciona los ejercicios
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            width="100%"
            gap={theme.spacing(2)}
            alignItems="center"
            justifyContent="space-between"
          >
            {defaultExercises.map((exercise) => (
              <ExerciseCard
                exercise={exercise}
                exercisesSelected={exercisesSelected}
                toggleExerciseSelection={toggleExerciseSelection}
              />
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
      </Box>
    </BaseDrawer>
  );
}
