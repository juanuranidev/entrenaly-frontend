import React, { useState } from "react";
import { Button } from "@mui/material";
import Icons from "lib/utils/icons/icons";
import PageTitle from "components/common/page-title/PageTitle";
import AddExerciseForm from "components/forms/add-exercise-form/AddExerciseForm";

type Props = {
  handleRefetchReadExercises: () => Promise<void>;
};

export default function MainTitle({ handleRefetchReadExercises }: Props) {
  const [openDrawerAddExercise, setOpenDrawerAddExercise] = useState(false);

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
        onSubmit={() => handleRefetchReadExercises()}
        onClose={() => setOpenDrawerAddExercise(false)}
      />
    </React.Fragment>
  );
}
