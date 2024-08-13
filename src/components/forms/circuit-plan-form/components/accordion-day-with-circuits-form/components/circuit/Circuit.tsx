import {
  Exercise,
  ExerciseDescription,
} from "lib/types/exercise/exercise.types";
import { Box, Stack, Button, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { DayCircuit } from "lib/types/plan/plan.types";
import { useState } from "react";
import { PlanDay } from "lib/types/plan/plan.types";
import AddExercisesForm from "components/forms/add-exercises-form/AddExercisesForm";
import DescriptionsInput from "components/common/descriptions-input/DescriptionsInput";
import SmallCircuitExerciseInput from "./components/small-circuit-exercise-input/SmallCircuitExerciseInput";

type Props = {
  circuit: DayCircuit;
  formik: any;
  day: PlanDay;
  exercisesDescriptions: ExerciseDescription[];
  handleRefetchGetExercisesDescriptions: () => Promise<void>;
};

export default function Circuit({
  circuit,
  formik,
  day,
  exercisesDescriptions,
  handleRefetchGetExercisesDescriptions,
}: Props) {
  const { theme } = useThemeContext();
  const [openExercisesDrawer, setOpenExercisesDrawer] =
    useState<boolean>(false);

  const handleChangeCircuitDescription = (
    circuit: DayCircuit,
    description: string
  ) => {
    const dayIndex = formik.values.days.findIndex(
      (d: PlanDay) => d.dayOfWeek.id === day.dayOfWeek.id
    );

    if (dayIndex === -1) return;

    const circuitIndex = formik.values.days[dayIndex].circuits.findIndex(
      (c: DayCircuit) => c.order === circuit.order
    );

    if (circuitIndex === -1) return;

    formik.setFieldValue(
      `days[${dayIndex}].circuits[${circuitIndex}].description`,
      description
    );
  };

  const handleHasCircuitExercises = (circuit: DayCircuit) => {
    return Boolean(circuit?.exercises?.length);
  };

  const handleSubmitExercisesDrawer = (selectedExercises: Exercise[]) => {
    const dayIndex = formik.values.days.findIndex(
      (d: PlanDay) => d.dayOfWeek.id === day.dayOfWeek.id
    );

    if (dayIndex === -1) return;

    const lastCircuitIndex = formik.values.days[dayIndex].circuits?.length - 1;

    if (lastCircuitIndex === -1) return;

    const updatedCircuits = formik.values.days[dayIndex].circuits.map(
      (circuit: DayCircuit, index: number) =>
        index === lastCircuitIndex
          ? {
              ...circuit,
              exercises: [...circuit.exercises, ...selectedExercises],
            }
          : circuit
    );

    formik.setFieldValue(`days[${dayIndex}].circuits`, updatedCircuits);
    setOpenExercisesDrawer(false);
  };

  return (
    <Box mb={4}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize={18} fontWeight={600}>
          Circuito número: {circuit.order + 1}
        </Typography>
        <Box width="50%">
          <DescriptionsInput
            handleChange={(value: any) =>
              handleChangeCircuitDescription(circuit, value)
            }
            defaultValue={circuit?.description}
            exercisesDescriptions={exercisesDescriptions}
            handleRefetchGetExercisesDescriptions={
              handleRefetchGetExercisesDescriptions
            }
          />
        </Box>
      </Stack>
      {circuit.exercises.length
        ? circuit.exercises.map((exercise: Exercise) => (
            <SmallCircuitExerciseInput
              day={day}
              circuit={circuit}
              exercise={exercise}
              exercisesDescriptions={exercisesDescriptions}
              formik={formik}
              handleRefetchGetExercisesDescriptions={
                handleRefetchGetExercisesDescriptions
              }
            />
          ))
        : null}
      {!handleHasCircuitExercises(circuit) ? (
        <Button
          size="small"
          color="primary"
          variant="outlined"
          sx={{ marginTop: theme?.spacing(1) }}
          onClick={() => setOpenExercisesDrawer(true)}
        >
          Agregar ejercicios
        </Button>
      ) : null}
      <AddExercisesForm
        open={openExercisesDrawer}
        onSubmit={handleSubmitExercisesDrawer}
        onClose={() => setOpenExercisesDrawer(false)}
      />
    </Box>
  );
}
