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
import { useGetAllExercisesDescriptions } from "hooks/useGetAllExercisesDescriptions";
import { useThemeContext } from "contexts/Theme";
import { useState } from "react";
import Icons from "lib/utils/icons/icons";
import ConfirmDialog from "components/dialogs/confirm-dialog/ConfirmDialog";
import ExerciseInput from "../exercise-input/ExerciseInput";

type Props = {
  day: any;
  formik: any;
};

export default function AccordionDay({ day, formik }: Props) {
  const { theme } = useThemeContext();
  const { exercisesDescriptions, handleRefetchGetExercisesDescriptions } =
    useGetAllExercisesDescriptions();

  const [openModalConfirm, setOpenModalConfirm] = useState(false);

  const handleDeleteDay = () => {
    const newDays = formik.values.days.filter(
      (obj: any) => obj.dayOfWeekName !== day.dayOfWeekName
    );

    formik.setFieldValue("days", newDays);
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
              {day?.dayOfWeekName}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              mr={theme?.spacing(1)}
              gap={theme?.spacing(1.5)}
            >
              {day?.exercises?.slice(0, 2).map((exercise: any) => (
                <img
                  key={exercise?.name}
                  src={
                    exercise?.variant
                      ? exercise?.variant?.image
                      : exercise?.image
                  }
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                    borderRadius: theme?.spacing(1),
                    border: `2px solid ${theme?.colors?.border?.primary}`,
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" gap={theme?.spacing(4)}>
            {day?.exercises.map((exercise: any) => (
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
