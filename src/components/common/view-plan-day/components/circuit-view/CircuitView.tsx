import ExerciseView from "../exercise-view/ExerciseView";
import { Exercise } from "lib/types/exercise/exercise.types";
import { DayCircuit } from "lib/types/plan/plan.types";
import { useThemeContext } from "contexts/theme/Theme";
import { Divider, Grid, Typography } from "@mui/material";

type Props = {
  circuit: DayCircuit;
};

export default function CircuitView({ circuit }: Props) {
  const { theme } = useThemeContext();

  return (
    <Grid
      item
      xs={12}
      container
      display="flex"
      alignItems="center"
      gap={theme?.spacing(2)}
    >
      <Grid item xs={12}>
        <Typography fontSize={20} fontWeight={600}>
          {circuit?.description}
        </Typography>
      </Grid>
      {circuit?.exercises?.map((exercise: Exercise, index: number) => (
        <ExerciseView exercise={exercise} key={index} />
      ))}
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
}
