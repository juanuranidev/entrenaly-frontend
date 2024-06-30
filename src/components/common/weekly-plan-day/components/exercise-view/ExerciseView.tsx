import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { Exercise } from "lib/types/exercise/exercise.types";
import ExerciseImageDialog from "components/dialogs/exercise-image-dialog/ExerciseImageDialog";

type Props = {
  exercise: Exercise;
};

export default function ExerciseView({ exercise }: Props) {
  const { theme } = useThemeContext();

  const isVariant: boolean = Boolean(exercise?.variant);
  const [openExerciseImageDialog, setOpenExerciseImageDialog] =
    useState<boolean>(false);

  return (
    <React.Fragment>
      <Grid item container spacing={theme?.spacing(2)}>
        <Grid item xs={10}>
          <Typography fontWeight={600} fontSize={14}>
            {isVariant ? exercise?.variant?.name : exercise?.name}
          </Typography>
          <Typography fontWeight={400} fontSize={13}>
            {exercise?.description}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          display="flex"
          alignItems="flex-end"
          flexDirection="column"
          justifyContent="center"
        >
          <img
            alt={isVariant ? exercise?.variant?.name : exercise?.name}
            src={isVariant ? exercise?.variant?.image : exercise?.image}
            onClick={() => setOpenExerciseImageDialog(true)}
            style={{
              width: 60,
              height: 60,
              cursor: "pointer",
              objectFit: "contain",
              borderRadius: theme?.spacing(1),
              border: `2px solid ${theme?.colors?.border?.primary}`,
            }}
          />
          <Typography fontSize={10}>Ver imágen</Typography>
        </Grid>
      </Grid>
      <ExerciseImageDialog
        open={openExerciseImageDialog}
        close={() => setOpenExerciseImageDialog(false)}
        image={isVariant ? exercise?.variant?.image : exercise?.image}
      />
    </React.Fragment>
  );
}
