import { Grid, TextField, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  onboarding?: boolean;
  formik: any;
};

export default function MedicalInformationTab({ formik, onboarding }: Props) {
  const { theme } = useThemeContext();

  return (
    <Grid container spacing={theme?.spacing(4)}>
      {onboarding ? (
        <Grid item xs={12}>
          <Typography fontSize={15} fontWeight={500}>
            Completa tu ficha médica así tu entrenador tendrá más información
            acerca de ti.
          </Typography>
        </Grid>
      ) : null}
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="weight"
          label="Peso"
          onBlur={formik?.handleBlur}
          value={formik?.values?.weight}
          onChange={formik?.handleChange}
          sx={{ marginTop: theme?.spacing(1) }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          name="height"
          label="Altura"
          onBlur={formik?.handleBlur}
          value={formik?.values?.height}
          onChange={formik?.handleChange}
          sx={{ marginTop: theme?.spacing(1) }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          minRows={4}
          maxRows={4}
          name="goals"
          label="Objetivos"
          onBlur={formik?.handleBlur}
          value={formik?.values?.goals}
          onChange={formik?.handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          minRows={4}
          maxRows={4}
          name="injuries"
          label="Lesiones"
          onBlur={formik?.handleBlur}
          value={formik?.values?.injuries}
          onChange={formik?.handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          minRows={4}
          maxRows={4}
          name="medicalConditions"
          label="Condiciones médicas"
          onBlur={formik?.handleBlur}
          value={formik?.values?.medicalConditions}
          onChange={formik?.handleChange}
        />
      </Grid>
    </Grid>
  );
}
