import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import ExerciseImageDialog from "components/dialogs/exercise-image-dialog/ExerciseImageDialog";
import { Exercise } from "lib/types/exercise/exercise.types";

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
      <Grid
        item
        xs={12}
        display="flex"
        gap={theme?.spacing(2)}
        alignItems="center"
      >
        <Box display="flex" alignItems="center" flexDirection="column">
          <img
            alt={isVariant ? exercise?.variant?.name : exercise?.name}
            src={isVariant ? exercise?.variant?.image : exercise?.image}
            onClick={() => setOpenExerciseImageDialog(true)}
            style={{
              width: 50,
              height: 50,
              cursor: "pointer",
              objectFit: "contain",
              borderRadius: theme?.spacing(1),
              border: `2px solid ${theme?.colors?.border?.primary}`,
            }}
          />
          <Typography fontSize={10} fontWeight={600}>
            ver imágen
          </Typography>
        </Box>
        <Box>
          <Typography
            fontSize={{ xs: 13, md: 15 }}
            fontWeight={600}
            color={exercise?.superset ? theme?.colors.brand.primary : ""}
          >
            {isVariant ? exercise?.variant?.name : exercise?.name}{" "}
            {exercise?.superset ? "- super serie" : ""}
          </Typography>
          <Typography fontWeight={400} fontSize={13}>
            {exercise?.description}
          </Typography>
        </Box>
      </Grid>
      <ExerciseImageDialog
        open={openExerciseImageDialog}
        close={() => setOpenExerciseImageDialog(false)}
        image={isVariant ? exercise?.variant?.image : exercise?.image}
      />
    </React.Fragment>
  );
}
