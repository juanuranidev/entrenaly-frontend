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
import {
  Exercise,
  ExerciseDescription,
} from "lib/types/exercise/exercise.types";
import { useThemeContext } from "contexts/theme/Theme";
import { useState } from "react";
import { PlanDay } from "lib/types/plan/plan.types";
import Icons from "lib/utils/icons/icons";
import ConfirmDialog from "components/dialogs/confirm-dialog/ConfirmDialog";
import ExerciseInput from "../exercise-input/ExerciseInput";
import ExercisesImagesSumary from "components/common/exercises-images-summary/ExercisesImagesSumary";
import { createSuccessToastLib } from "lib/utils/toast";

type Props = {
  day: PlanDay;
  formik: any;
  exercisesDescriptions: ExerciseDescription[];
  handleRefetchGetExercisesDescriptions: () => Promise<void>;
};

export default function AccordionDay({
  day,
  formik,
  exercisesDescriptions,
  handleRefetchGetExercisesDescriptions,
}: Props) {
  const { theme } = useThemeContext();

  const [openModalConfirm, setOpenModalConfirm] = useState(false);

  const handleDeleteDay = () => {
    const newDays = formik.values.days.filter(
      (obj: PlanDay) => obj.dayOfWeek.id !== day.dayOfWeek.id
    );

    formik.setFieldValue("days", newDays);
    createSuccessToastLib("Día eliminado correctamente");
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
            <Stack
              direction="row"
              alignItems="center"
              mr={theme?.spacing(1)}
              gap={theme?.spacing(1.5)}
            >
              <ExercisesImagesSumary exercises={day?.exercises} />
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" gap={theme?.spacing(4)}>
            {day?.exercises.map((exercise: Exercise) => (
              <ExerciseInput
                day={day}
                key={exercise?.id}
                formik={formik}
                exercise={exercise}
                exercisesDescriptions={exercisesDescriptions}
                handleRefetchGetExercisesDescriptions={
                  handleRefetchGetExercisesDescriptions
                }
              />
            ))}
          </Stack>
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
