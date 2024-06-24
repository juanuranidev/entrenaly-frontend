import {
  Box,
  Stack,
  Button,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useReadExercises } from "hooks/exercise/useReadExercises";
import { useThemeContext } from "contexts/theme/Theme";
import { useDebounce } from "hooks/useDebounce";
import ExerciseCard from "../../../../common/exercise-card/ExerciseCard";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ModalTitle from "components/common/modal-title/ModalTitle";
import Icons from "lib/utils/icons/icons";
import { Exercise } from "lib/types/exercise/exercise.types";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (value: Exercise[]) => void;
};

export default function AddExercisesForm({ open, onClose, onSubmit }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const [exercisesSelected, setExercisesSelected] = useState<Exercise[] | []>(
    []
  );

  const { theme } = useThemeContext();
  const { debouncedValue } = useDebounce(searchValue, 500);
  const { exercises } = useReadExercises(debouncedValue);

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
      <TextField
        fullWidth
        label="Buscar"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        InputProps={{
          startAdornment: <Icons.search />,
          endAdornment: searchValue ? (
            <IconButton size="small" onClick={() => setSearchValue("")}>
              <Icons.close fontSize="small" />
            </IconButton>
          ) : null,
        }}
      />
      <Box overflow="auto" pt={theme?.spacing(4)} height="calc(100% - 10rem)">
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
            <Typography fontWeight={600} fontSize={15} my={theme?.spacing(20)}>
              ¡No hay ejercicios!
            </Typography>
          )}
        </Stack>
      </Box>
      <Box py={theme?.spacing(3)} bgcolor={theme?.colors?.background?.primary}>
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
