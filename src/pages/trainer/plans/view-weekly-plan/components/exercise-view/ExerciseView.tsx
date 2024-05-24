import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import ExerciseImageDialog from "components/dialogs/exercise-image-dialog/ExerciseImageDialog";

type Props = { exercise: any };

export default function ExerciseView({ exercise }: Props) {
  const { theme } = useThemeContext();
  console.log(exercise);
  const isVariant = exercise?.exerciseVariant;
  const [openExerciseImageDialog, setOpenExerciseImageDialog] = useState(false);

  return (
    <React.Fragment>
      <Grid item container>
        <Grid item xs={11}>
          <Typography fontWeight={600} fontSize={14}>
            {isVariant
              ? exercise?.exerciseVariant?.name
              : exercise?.exerciseName}
          </Typography>
          <Typography fontWeight={400} fontSize={13}>
            {exercise?.exerciseDescription}
          </Typography>
        </Grid>
        <Grid item xs={1} display="flex" justifyContent="flex-end">
          <img
            alt={
              isVariant
                ? exercise?.exerciseVariant?.name
                : exercise?.exerciseName
            }
            src={
              isVariant
                ? exercise?.exerciseVariant?.image
                : exercise?.exerciseImage
            }
            onClick={() => setOpenExerciseImageDialog(true)}
            style={{
              width: 40,
              height: 40,
              cursor: "pointer",
              objectFit: "contain",
              borderRadius: theme?.spacing(1),
              border: `2px solid ${theme?.colors?.border?.primary}`,
            }}
          />
        </Grid>
      </Grid>
      <ExerciseImageDialog
        image={
          isVariant ? exercise?.exerciseVariant?.image : exercise?.exerciseImage
        }
        open={openExerciseImageDialog}
        close={() => setOpenExerciseImageDialog(false)}
      />
    </React.Fragment>
  );
}
