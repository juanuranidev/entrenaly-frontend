import {
  Grid,
  Stack,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import ExerciseView from "./components/exercise-view/ExerciseView";
import Icons from "lib/utils/icons/icons";
import ExercisesImagesSumary from "../exercises-images-summary/ExercisesImagesSumary";

type Props = {
  day: any;
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
            <Typography fontWeight={600} fontSize={16}>
              {day?.dayOfWeekName}
            </Typography>
            <ExercisesImagesSumary exercises={day?.exercises} />
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={theme?.spacing(3)}>
            {day?.exercises?.map((exercise: any, index: number) => (
              <ExerciseView exercise={exercise} key={index} />
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
