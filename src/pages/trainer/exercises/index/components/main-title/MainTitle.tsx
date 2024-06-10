import React, { useState } from "react";
import { Button } from "@mui/material";
import Icons from "lib/utils/icons/icons";
import PageTitle from "components/common/page-title/PageTitle";
import AddExerciseForm from "components/forms/add-exercise-form/AddExerciseForm";

type Props = {
  handleRefetchExercises: () => Promise<void>;
};

export default function MainTitle({ handleRefetchExercises }: Props) {
  const [openDrawerAddExercise, setOpenDrawerAddExercise] =
    useState<boolean>(false);

  return (
    <React.Fragment>
      <PageTitle
        title="Ejercicios"
        action={
          <Button
            variant="contained"
            startIcon={<Icons.add />}
            onClick={() => setOpenDrawerAddExercise(true)}
          >
            Agregar nuevo
          </Button>
        }
      />
      <AddExerciseForm
        open={openDrawerAddExercise}
        onSubmit={() => handleRefetchExercises()}
        onClose={() => setOpenDrawerAddExercise(false)}
      />
    </React.Fragment>
  );
}
