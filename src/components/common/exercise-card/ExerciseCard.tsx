import { Typography, Grid, Chip } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { Exercise } from "lib/types/exercise/exercise.types";

type Props = {
  exercise: Exercise;
  exercisesSelected: Exercise[];
  toggleExerciseSelection: (exercise: Exercise) => void;
};

export default function ExerciseCard({
  exercise,
  exercisesSelected,
  toggleExerciseSelection,
}: Props) {
  const { theme } = useThemeContext();

  const isVariant: boolean = Boolean(exercise?.variant);
  const isSelected = exercisesSelected.some(
    (obj: Exercise) => obj.name === exercise.name
  );

  return (
    <Grid
      container
      p={theme?.spacing(1)}
      spacing={theme?.spacing(1)}
      borderRadius={theme?.spacing(2)}
      width={{
        xs: `calc(100% - ${theme?.spacing(2)})`,
        sm: `calc(50% - ${theme?.spacing(2)})`,
      }}
      sx={{ cursor: "pointer", userSelect: "none" }}
      onClick={() => toggleExerciseSelection(exercise)}
      border={`2px solid ${
        isSelected
          ? theme?.colors?.brand?.primary
          : theme?.colors?.border?.primary
      }`}
    >
      <Grid item xs={10}>
        <Chip
          size="small"
          color="primary"
          label={exercise?.category?.name}
          variant="outlined"
          sx={{
            mr: theme?.spacing(1),
          }}
        />
        {isVariant ? (
          <Chip
            size="small"
            color="success"
            label="Variante"
            variant="outlined"
          />
        ) : null}
        {exercise?.hasUser ? (
          <Chip
            size="small"
            color="success"
            label="Creado"
            variant="outlined"
          />
        ) : null}
      </Grid>
      <Grid item xs={12}>
        <img
          loading="lazy"
          alt={isVariant ? exercise?.variant?.name : exercise?.name}
          src={isVariant ? exercise?.variant?.image : exercise?.image}
          style={{
            width: "100%",
            height: "10rem",
            objectFit: "contain",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          align="left"
          fontSize={13}
          fontWeight={600}
          lineHeight="1.2"
          mt={theme?.spacing(1)}
          color={
            isSelected
              ? theme?.colors?.brand?.primary
              : theme?.colors?.text?.secondary
          }
        >
          {isVariant ? exercise?.variant?.name : exercise?.name}
        </Typography>
      </Grid>
    </Grid>
  );
}
