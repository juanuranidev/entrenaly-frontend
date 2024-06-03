import {
  Grid,
  Stack,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import ExerciseView from "../exercise-view/ExerciseView";
import Icons from "lib/utils/icons/icons";

type Props = {
  day: any;
};

export default function PlanDay({ day }: Props) {
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
            <Stack
              direction="row"
              mr={theme?.spacing(1)}
              gap={theme?.spacing(1.5)}
            >
              {day?.exercises
                ?.slice(0, 3)
                .map((exercise: any, index: number) => (
                  <img
                    key={index}
                    alt={exercise?.exerciseName}
                    src={
                      exercise?.exerciseVariant
                        ? exercise?.exerciseVariant?.image
                        : exercise?.exerciseImage
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
