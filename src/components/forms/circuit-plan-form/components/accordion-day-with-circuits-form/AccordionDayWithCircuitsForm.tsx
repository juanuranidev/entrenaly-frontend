import {
  Grid,
  Stack,
  Button,
  Accordion,
  Typography,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { ExerciseDescription } from "lib/types/exercise/exercise.types";
import { useThemeContext } from "contexts/theme/Theme";
import { DayCircuit } from "lib/types/plan/plan.types";
import { useState } from "react";
import { PlanDay } from "lib/types/plan/plan.types";
import Icons from "lib/utils/icons/icons";
import Circuit from "./components/circuit/Circuit";
import ConfirmDialog from "components/dialogs/confirm-dialog/ConfirmDialog";

type Props = {
  day: PlanDay;
  formik: any;
  exercisesDescriptions: ExerciseDescription[];
  handleRefetchGetExercisesDescriptions: () => Promise<void>;
};

export default function AccordionDayWithCircuitsForm({
  day,
  formik,
  exercisesDescriptions,
  handleRefetchGetExercisesDescriptions,
}: Props) {
  const hasDayCircuits = Boolean(day?.circuits?.length);
  const { theme } = useThemeContext();

  const [openModalConfirm, setOpenModalConfirm] = useState<boolean>(false);

  const handleDeleteDay = () => {
    const newDays = formik.values.days.filter(
      (obj: PlanDay) => obj.dayOfWeek.id !== day.dayOfWeek.id
    );

    formik.setFieldValue("days", newDays);
  };

  const handleAddCircuit = (): void => {
    const dayIndex: number = formik.values.days.findIndex(
      (d: PlanDay) => d.dayOfWeek.id === day.dayOfWeek.id
    );

    if (dayIndex === -1) return;

    const newCircuit = {
      exercises: [],
      planDayId: day.id,
      order: formik.values.days[dayIndex].circuits?.length || 0,
    };

    const updatedCircuits = [
      ...(formik.values.days[dayIndex].circuits || []),
      newCircuit,
    ];

    formik.setFieldValue(`days[${dayIndex}].circuits`, updatedCircuits);
  };

  const handleCanAddNewCircuit = (day: PlanDay, formik: any): boolean => {
    const dayIndex = formik.values.days.findIndex(
      (d: PlanDay) => d.dayOfWeek.id === day.dayOfWeek.id
    );
    if (dayIndex === -1) return false;

    const circuits = formik.values.days[dayIndex].circuits;
    const lastCircuitIndex = circuits && circuits?.length - 1;

    if (!circuits || circuits.length === 0) return true;
    return circuits[lastCircuitIndex]?.exercises?.length > 0;
  };

  return (
    <Grid item xs={12} lg={6}>
      <Accordion
        elevation={0}
        sx={{
          padding: theme?.spacing(1),
          border: `2px solid ${theme?.colors?.border?.primary}`,
          backgroundColor: theme?.colors?.backgroundHover?.primary,
        }}
      >
        <AccordionSummary expandIcon={<Icons.expandMore />}>
          <Stack
            width="100%"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontWeight={600} fontSize={16}>
              {day?.dayOfWeek?.name}
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {hasDayCircuits
            ? day?.circuits?.map((circuit: DayCircuit, index: number) => (
                <Circuit
                  day={day}
                  key={index}
                  formik={formik}
                  circuit={circuit}
                  exercisesDescriptions={exercisesDescriptions}
                  handleRefetchGetExercisesDescriptions={
                    handleRefetchGetExercisesDescriptions
                  }
                />
              ))
            : null}

          {handleCanAddNewCircuit(day, formik) ? (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddCircuit}
            >
              Agregar circuito
            </Button>
          ) : null}
        </AccordionDetails>
        <AccordionActions>
          <Button
            variant="text"
            color="error"
            onClick={() => setOpenModalConfirm(true)}
          >
            Eliminar día
          </Button>
        </AccordionActions>
      </Accordion>
      <ConfirmDialog
        open={openModalConfirm}
        onConfirm={handleDeleteDay}
        onClose={() => setOpenModalConfirm(false)}
        message="¿Estás seguro que deseas eliminar el día?"
      />
    </Grid>
  );
}
