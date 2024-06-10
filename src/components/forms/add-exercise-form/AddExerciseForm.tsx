import {
  Box,
  Grid,
  Button,
  MenuItem,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { addExerciseFormValidations } from "./utils/validations";
import { useReadExercisesCategories } from "hooks/exercise/useReadExercisesCategories";
import {
  handleCreateErrorToast,
  handleCreateSuccessToast,
} from "lib/utils/toast";
import { createExerciseService } from "services/exercise/exercise.services";
import { useEffect, useState } from "react";
import { useThemeContext } from "contexts/theme/Theme";
import { useFormik } from "formik";
import ModalTitle from "components/common/modal-title/ModalTitle";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import Icons from "lib/utils/icons/icons";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: () => Promise<void>;
  exerciseSelected?: any;
};

export default function AddExerciseForm({ open, onClose, onSubmit }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const { theme } = useThemeContext();
  const { exercisesCategories, isLoading: isCategoriesLoading } =
    useReadExercisesCategories();

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      categoryId: "",
    },
    validationSchema: addExerciseFormValidations,
    onSubmit(values) {
      handleCreateExercise(values);
    },
  });

  const handleCreateExercise = async (exercise: any) => {
    setIsLoading(true);
    try {
      await createExerciseService(exercise);

      if (onSubmit) {
        await onSubmit();
      }

      handleCreateSuccessToast("Ejercicio creado con éxito");
      onClose();
    } catch (error) {
      console.log(error);
      handleCreateErrorToast("Error al crear ejercicio");
    }
    setIsLoading(false);
  };

  const handleSetInitialValues = () => {
    formik.setFieldValue("name", "");
    formik.setFieldValue("image", "");
    formik.setFieldValue("categoryId", "");
  };

  useEffect(() => {
    if (open) {
      handleSetInitialValues();
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
                ? exercisesCategories?.map((category: any) => (
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
