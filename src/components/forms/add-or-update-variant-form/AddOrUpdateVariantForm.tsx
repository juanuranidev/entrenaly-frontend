import {
  Box,
  Grid,
  Button,
  MenuItem,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import {
  createVariantService,
  updateVariantService,
} from "services/exercise/exercise.services";
import { createErrorToastLib, createSuccessToastLib } from "lib/utils/toast";
import { addOrUpdateVariantFormValidations } from "./lib/validations";
import { Exercise, ExerciseCategory } from "lib/types/exercise/exercise.types";
import { useReadExercisesCategories } from "hooks/exercise/useReadExercisesCategories";
import { useThemeContext } from "contexts/theme/Theme";
import { useFormik } from "formik";
import { useState } from "react";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ModalTitle from "components/common/modal-title/ModalTitle";
import Icons from "lib/utils/icons/icons";

type Props = {
  open: boolean;
  exerciseId: number | undefined | null;
  onClose: () => void;
  onSubmit?: () => Promise<void>;
  exerciseSelected?: Exercise;
};

export default function AddOrUpdateVariantForm({
  open,
  onClose,
  onSubmit,
  exerciseId,
  exerciseSelected,
}: Props) {
  const updateVariant = exerciseSelected?.variant;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { theme } = useThemeContext();
  const { exercisesCategories, isLoading: isCategoriesLoading } =
    useReadExercisesCategories();

  const handleFormatInitialExerciseValues = () => {
    if (!exerciseSelected) return { name: "", video: "", format: "" };

    if (updateVariant) {
      return {
        name: exerciseSelected?.variant?.name ?? "",
        image: exerciseSelected?.variant?.image ?? "",
        variantId: exerciseSelected?.variant?.id ?? "",
        categoryId: exerciseSelected?.category?.id ?? "",
        exerciseId: exerciseId,
      };
    } else {
      return {
        name: exerciseSelected?.name ?? "",
        image: exerciseSelected?.image ?? "",
        categoryId: exerciseSelected?.category?.id ?? "",
        exerciseId: exerciseId,
      };
    }
  };

  const formik = useFormik({
    initialValues: {
      ...handleFormatInitialExerciseValues(),
    },
    enableReinitialize: true,
    validationSchema: addOrUpdateVariantFormValidations,
    async onSubmit(values) {
      handleCreateOrUpdateVariant(values);
    },
  });

  const handleCreateOrUpdateVariant = async (variant: any) => {
    setIsLoading(true);
    try {
      if (updateVariant) {
        await updateVariantService(variant);
      } else {
        await createVariantService(variant);
      }

      if (onSubmit) {
        await onSubmit();
      }
      onClose();

      createSuccessToastLib(
        `Variante ${updateVariant ? "actualizada" : "creada"} con éxito`
      );
    } catch (error) {
      console.log(error);
      const action = updateVariant ? "actualizar" : "crear";
      createErrorToastLib(`Error al ${action} variante intente nuevamente`);
    }
    setIsLoading(false);
  };

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <ModalTitle
        title={`${updateVariant ? "Editar" : "Agregar"} variante`}
        action={
          <IconButton onClick={onClose}>
            <Icons.close />
          </IconButton>
        }
      />
      <Box height="calc(100% - 10rem)" overflow="auto">
        <Grid container spacing={theme?.spacing(4)}>
          <Grid item xs={12}>
            <Typography fontWeight={600} fontSize={15} mb={-1}>
              Informacion principal
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="Nombre del ejercicio"
              value={formik?.values?.name}
              onBlur={formik?.handleBlur}
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
              label="Categoria"
              disabled={Boolean(exerciseSelected) || isCategoriesLoading}
              onBlur={formik?.handleBlur}
              onChange={formik?.handleChange}
              value={formik?.values?.categoryId}
              error={
                Boolean(formik?.touched?.categoryId) &&
                Boolean(formik?.errors?.categoryId)
              }
            >
              {exercisesCategories?.length
                ? exercisesCategories?.map(
                    (exerciseCategory: ExerciseCategory) => (
                      <MenuItem
                        key={exerciseCategory?.id}
                        value={exerciseCategory?.id}
                      >
                        {exerciseCategory?.name}
                      </MenuItem>
                    )
                  )
                : null}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight={600} fontSize={15} mb={-1}>
              Imágen/GIF
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="image"
              label="Link del video"
              onBlur={formik?.handleBlur}
              value={formik?.values?.image}
              onChange={formik?.handleChange}
              error={
                Boolean(formik?.touched?.image) &&
                Boolean(formik?.errors?.image)
              }
            />
          </Grid>
          {formik?.values?.image ? (
            <Grid item xs={12}>
              <img
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
