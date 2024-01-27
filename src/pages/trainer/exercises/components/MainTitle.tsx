import React, { useState } from "react";
import PageTitle from "components/common/page-title/PageTitle";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import AddExerciseDrawer from "components/drawers/add-exercise-drawer/AddExerciseDrawer";

type Props = {};

export default function MainTitle({}: Props) {
  const [openDrawerAddExercise, setOpenDrawerAddExercise] = useState(false);

  const addExerciseFormik = useFormik({
    initialValues: {
      name: "",
      video: "",
      format: "",
      muscularGroup: "",
    },
    onSubmit(values) {
      console.log(values);
      setOpenDrawerAddExercise(false);
    },
  });

  return (
    <React.Fragment>
      <PageTitle
        title="Ejercicios"
        action={
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenDrawerAddExercise(true)}
          >
            Agregar nuevo
          </Button>
        }
      />
      <AddExerciseDrawer
        formik={addExerciseFormik}
        open={openDrawerAddExercise}
        onClose={() => setOpenDrawerAddExercise(false)}
      />
    </React.Fragment>
  );
}
