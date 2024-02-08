import { Typography, Box, useTheme } from "@mui/material";

type Props = {
  exercise: any;
  exercisesSelected: any;
  toggleExerciseSelection: (exercise: any) => void;
};

export default function ExerciseCard({
  exercise,
  exercisesSelected,
  toggleExerciseSelection,
}: Props) {
  const theme: any = useTheme();
  const isSelected = exercisesSelected.some(
    (obj: any) => obj.name === exercise.name
  );

  return (
    <Box
      display="flex"
      border="2px solid"
      key={exercise.name}
      p={theme.spacing(2)}
      borderRadius="0.5rem"
      flexDirection="column"
      justifyContent="center"
      sx={{ cursor: "pointer", userSelect: "none" }}
      onClick={() => toggleExerciseSelection(exercise)}
      borderColor={isSelected ? theme.colors.brand.primary : "#eeeeee"}
      width={{
        base: `calc(100% - ${theme.spacing(1)})`,
        sm: `calc(50% - ${theme.spacing(1)})`,
      }}
    >
      <img
        src={exercise.video}
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
          objectFit: "contain",
        }}
      />
      <Typography
        mt={1}
        align="left"
        fontSize={14}
        fontWeight={600}
        lineHeight="1.2"
        color={isSelected ? theme.colors.brand.primary : "#000000"}
      >
        {exercise.name}
      </Typography>
    </Box>
  );
}
