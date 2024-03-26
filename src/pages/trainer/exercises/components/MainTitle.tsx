import React, { useState } from "react";
import { Button, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PageTitle from "components/common/page-title/PageTitle";
import AddExerciseForm from "components/forms/add-exercise-form/AddExerciseForm";

export default function MainTitle() {
  const [openDrawerAddExercise, setOpenDrawerAddExercise] = useState(false);

  return (
    <React.Fragment>
      <PageTitle
        title="Ejercicios"
        action={
          <Tooltip title="Próximamente">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              // onClick={() => setOpenDrawerAddExercise(true)}
              onClick={() => {}}
            >
              Agregar nuevo
            </Button>
          </Tooltip>
        }
      />
      <AddExerciseForm
        open={openDrawerAddExercise}
        onClose={() => setOpenDrawerAddExercise(false)}
        onSubmit={() => console.log("first")}
      />
    </React.Fragment>
  );
}
