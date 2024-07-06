import {
  Grid,
  Stack,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { Exercise } from "lib/types/exercise/exercise.types";
import { PlanDay } from "lib/types/plan/plan.types";
import Icons from "lib/utils/icons/icons";
import ExerciseView from "./components/exercise-view/ExerciseView";
import ExercisesImagesSumary from "./components/exercises-images-summary/ExercisesImagesSumary";

type Props = {
  day: PlanDay;
};

export default function WeeklyPlanDay({ day }: Props) {
  const { theme } = useThemeContext();

  return (
    <Grid item xs={12}>
      <Accordion
        elevation={0}
        sx={{
          padding: theme?.spacing(1),
          borderRadius: theme?.spacing(1),
          border: `2px solid ${theme?.colors?.border?.primary}`,
        }}
      >
        <AccordionSummary expandIcon={<Icons.expandMore />}>
          <Stack
            width="100%"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontWeight={600} fontSize={{ xs: 20, md: 26 }}>
              {day?.dayOfWeek?.name}
            </Typography>
            <ExercisesImagesSumary exercises={day?.exercises} />
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item container spacing={theme?.spacing(3)}>
            {day?.exercises?.map((exercise: Exercise, index: number) => (
              <ExerciseView exercise={exercise} key={index} />
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
