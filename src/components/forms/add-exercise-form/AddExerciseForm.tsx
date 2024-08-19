import {
  Box,
  Grid,
  Button,
  MenuItem,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { createErrorToastLib, createSuccessToastLib } from "lib/utils/toast";
import { addExerciseFormValidations } from "./lib/validations";
import { useReadExercisesCategories } from "hooks/exercise/useReadExercisesCategories";
import { Exercise, ExerciseCategory } from "lib/types/exercise/exercise.types";
import { createExerciseService } from "services/exercise/exercise.services";
import type { AddExerciseForm } from "./lib/types";
import { useEffect, useState } from "react";
import { useThemeContext } from "contexts/theme/Theme";
import { CreateExercise } from "services/exercise/lib/types";
import { useFormik } from "formik";
import ModalTitle from "components/common/modal-title/ModalTitle";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import Icons from "lib/utils/icons/icons";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: () => Promise<void>;
  exerciseSelected?: Exercise | null;
};

export default function AddExerciseForm({ open, onClose, onSubmit }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { theme } = useThemeContext();
  const { exercisesCategories, isLoading: isCategoriesLoading } =
    useReadExercisesCategories();

  const formik = useFormik<AddExerciseForm>({
    initialValues: {
      name: "",
      image: "",
      categoryId: null,
    },
    validationSchema: addExerciseFormValidations,
    onSubmit(values) {
      handleCreateExercise(values);
    },
  });

  const handleCreateExercise = async (
    exercise: CreateExercise
  ): Promise<void> => {
    setIsLoading(true);
    try {
      await createExerciseService(exercise);

      if (onSubmit) {
        await onSubmit();
      }

      createSuccessToastLib("Ejercicio creado con éxito");
      onClose();
    } catch (error) {
      console.log(error);
      createErrorToastLib("Error al crear ejercicio");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (open) {
      formik.resetForm();
    }
  }, [open]);

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <ModalTitle
        title="Añadir ejercicio"
        action={
          <IconButton onClick={onClose}>
            <Icons.close />
          </IconButton>
        }
      />
      <Box height="calc(100% - 10rem)" overflow="auto">
        <Grid container spacing={theme?.spacing(4)}>
          <Grid item xs={12}>
            <Typography fontWeight={600} fontSize={15}>
              Informacion principal
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              name="name"
              label="Nombre del circuito"
              onBlur={formik?.handleBlur}
              value={formik?.values?.name || ""}
              onChange={formik?.handleChange}
              error={
                Boolean(formik?.touched?.name) && Boolean(formik?.errors?.name)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              name="categoryId"
              label="Grupo muscular"
              onBlur={formik?.handleBlur}
              disabled={isCategoriesLoading}
              onChange={formik?.handleChange}
              value={formik?.values?.categoryId || ""}
              error={
                Boolean(formik?.touched?.categoryId) &&
                Boolean(formik?.errors?.categoryId)
              }
            >
              {exercisesCategories?.length > 0
                ? exercisesCategories?.map((category: ExerciseCategory) => (
                    <MenuItem key={category?.id} value={category?.id}>
                      {category?.name}
                    </MenuItem>
                  ))
                : null}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight={600} fontSize={15} mb={-1}>
              Imágen/GIF
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              name="image"
              label="Link de la imágen o gif"
              onBlur={formik?.handleBlur}
              value={formik?.values?.image || ""}
              onChange={formik?.handleChange}
              error={
                Boolean(formik?.touched?.image) &&
                Boolean(formik?.errors?.image)
              }
            />
          </Grid>
          {formik?.values?.image ? (
            <Grid item xs={12} sm={12}>
              <img
                alt="Ejercicio"
                src={formik?.values?.image}
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "auto",
                  objectFit: "contain",
                  aspectRatio: "16/12",
                }}
              />
            </Grid>
          ) : null}
        </Grid>
      </Box>
      <Box py={theme?.spacing(4)} bgcolor={theme?.colors?.background?.primary}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          disabled={isLoading}
          onClick={() => formik.handleSubmit()}
        >
          Guardar
        </Button>
      </Box>
    </BaseDrawer>
  );
}
