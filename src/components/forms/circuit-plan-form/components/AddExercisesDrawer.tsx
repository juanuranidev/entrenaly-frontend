import {
  Box,
  IconButton,
  Typography,
  Stack,
  Card,
  Button,
} from "@mui/material";
import { useState } from "react";
import PageTitle from "components/common/page-title/PageTitle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { defaultExercises } from "../../../../lib/utils/defaultExercises";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";

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
          title="Nuevo día"
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
                    (selectedExercise) =>
                      selectedExercise.name === exercise.name
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
      </Box>
    </BaseDrawer>
  );
}
