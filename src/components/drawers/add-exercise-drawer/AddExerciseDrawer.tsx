import { Box, Button, Grid, useTheme } from "@mui/material";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import PageTitle from "components/common/page-title/PageTitle";
import AddExerciseForm from "components/forms/add-exercise-form/AddExerciseForm";

type Props = {
  formik: any;
  open: boolean;
  onClose: () => void;
};

export default function AddExerciseDrawer({ formik, open, onClose }: Props) {
  const theme: any = useTheme();
  return (
    <BaseDrawer open={open} onClose={onClose}>
      <Grid container spacing={3} height="100%">
        <Grid item xs={12}>
          <PageTitle title="Añadir ejercicio propio" />
        </Grid>
        <Grid item xs={12}>
          <AddExerciseForm formik={formik} removeSubmitButton />
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
          bgcolor={theme.backgrounds.primary}
        >
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={() => formik.handleSubmit()}
          >
            Guardar
          </Button>
        </Box>
      </Grid>
    </BaseDrawer>
  );
}
