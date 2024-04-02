import {
  Box,
  Grid,
  Button,
  MenuItem,
  useTheme,
  TextField,
  Typography,
} from "@mui/material";
import {
  createVariantService,
  updateVariantService,
} from "services/exercise/exercise.services";
import { useGetExerciseCategories } from "hooks/useGetExercisesCategories";
import { errorToast, successToast } from "lib/utils/toast";
import { useAuthContext } from "contexts/Auth";
import { useFormik } from "formik";
import { useState } from "react";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";

type Props = {
  open: boolean;
  exerciseId: number;
  onClose: () => void;
  onSubmit: () => void;
  exerciseSelected?: any;
};

export default function AddVariantForm({
  open,
  onClose,
  onSubmit,
  exerciseId,
  exerciseSelected,
}: Props) {
  const theme: any = useTheme();
  const isVariant = exerciseSelected?.variant;

  const { userData } = useAuthContext();
  const { exercisesCategories } = useGetExerciseCategories();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFormatInitialExerciseValues = () => {
    if (!exerciseSelected) return {};

    if (isVariant) {
      return {
        name: exerciseSelected?.variant?.name || "",
        video: exerciseSelected?.variant?.video || "",
        format: exerciseSelected?.variant?.format || "",
        variantId: exerciseSelected?.variant?.id || "",
      };
    } else {
      return {
        name: exerciseSelected?.name || "",
        video: exerciseSelected?.video || "",
        format: exerciseSelected?.format || "",
      };
    }
  };

  const formik = useFormik({
    initialValues: {
      ...handleFormatInitialExerciseValues(),
      categoryId: exerciseSelected?.category?.id || "",
      exerciseId: exerciseId,
      userId: userData?.id,
    },
    enableReinitialize: true,
    async onSubmit(values) {
      setIsLoading(true);
      try {
        if (isVariant) {
          await updateVariantService(values);
        } else {
          await createVariantService(values);
        }

        onSubmit();
        onClose();

        successToast("Variante creada con éxito");
      } catch (error) {
        console.log(error);
        errorToast("Error al crear variante intente nuevamente");
      }
      setIsLoading(false);
    },
  });

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <Grid container height="100%">
        <Grid item xs={12}>
          <Typography fontWeight={800} fontSize={20}>
            Editar ejercicio
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
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
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  Boolean(formik.touched.name) && Boolean(formik.errors.name)
                }
                helperText={
                  Boolean(formik.touched.name) && Boolean(formik.errors.name)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                name="categoryId"
                label="Categoria"
                disabled={exerciseSelected}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.categoryId}
                error={
                  Boolean(formik.touched.categoryId) &&
                  Boolean(formik.errors.categoryId)
                }
                helperText={
                  Boolean(formik.touched.categoryId) &&
                  Boolean(formik.errors.categoryId)
                }
              >
                {exercisesCategories.length
                  ? exercisesCategories.map((exerciseCategory: any) => (
                      <MenuItem value={exerciseCategory?.id}>
                        {exerciseCategory?.name}
                      </MenuItem>
                    ))
                  : null}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography fontWeight={600} fontSize={15} mb={-1}>
                Video
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                name="video"
                label="Link del video"
                value={formik.values.video}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  Boolean(formik.touched.video) && Boolean(formik.errors.video)
                }
                helperText={
                  Boolean(formik.touched.video) && Boolean(formik.errors.video)
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <img
                src={formik?.values?.video}
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
        </Grid>
        <Box
          zIndex={10}
          width="100%"
          display="flex"
          position="sticky"
          alignItems="flex-end"
          mt={theme.spacing(3)}
          justifyContent="center"
          paddingY={theme.spacing(2)}
          paddingLeft={theme.spacing(3)}
          bottom={theme.spacing(0)}
          bgcolor={theme.colors.background.primary}
        >
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
      </Grid>
    </BaseDrawer>
  );
}
