import React, { useState } from "react";
import {
  Box,
  Chip,
  Grid,
  useTheme,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddExerciseForm from "components/forms/add-exercise-form/AddExerciseForm";

type Props = {
  exercise: any;
};

export default function ExerciseCard({ exercise }: Props) {
  const theme: any = useTheme();

  const [exerciseSelected, setExerciseSelected] = useState(null);
  const [openFormAddExercise, setOpenFormAddExercise] = useState(false);

  const handleOpenFormEditExercise = (exercise: any) => {
    setExerciseSelected(exercise);
    setOpenFormAddExercise(true);
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        key={exercise?.name}
        p={theme.spacing(2)}
        flexDirection="column"
        justifyContent="center"
        margin={theme.spacing(1)}
        width={{
          base: `calc(100% - ${theme.spacing(2)})`,
          sm: `calc(50% - ${theme.spacing(2)})`,
          md: `calc(25% - ${theme.spacing(2)})`,
          lg: `calc(20% - ${theme.spacing(2)})`,
        }}
        boxShadow={theme.customShadows.secondary}
      >
        <Grid container mt={1} direction="row" alignItems="center">
          <Grid item xs={10}>
            <Chip
              size="small"
              color="primary"
              variant="outlined"
              label={exercise.muscularGroup}
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton
              size="small"
              onClick={() => handleOpenFormEditExercise(exercise)}
            >
              <EditIcon color="primary" fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
        <img
          src={exercise.video}
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            objectFit: "contain",
            aspectRatio: "16/12",
          }}
        />
        <Typography
          mt={1}
          lineHeight="1.2"
          align="left"
          fontSize={16}
          fontWeight={600}
        >
          {exercise.name}
        </Typography>
      </Box>
      <AddExerciseForm
        open={openFormAddExercise}
        exerciseSelected={exerciseSelected}
        onClose={() => setOpenFormAddExercise(false)}
        onSubmit={() => console.log("first")}
      />
    </React.Fragment>
  );
}
