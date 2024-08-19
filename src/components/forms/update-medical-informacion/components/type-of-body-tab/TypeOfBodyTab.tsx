import { Typography, Grid } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { CLIENT_CONSTANTS } from "lib/constants/client/client.constants";

type Props = {
  formik: any;
};

export default function TypeOfBodyTab({ formik }: Props) {
  const { theme } = useThemeContext();

  const isSelected = (type: string) => {
    const typeOfBodySelected: string = formik.values.typeOfBody;

    return typeOfBodySelected === type;
  };

  return (
    <Grid container>
      {CLIENT_CONSTANTS.MEDICAL_INFORMATION.TYPES_OF_BODIES_LIST.map(
        (typeOfBody: { type: string; description: string }) => (
          <Grid
            item
            xs={12}
            key={typeOfBody?.type}
            onClick={() => formik.setFieldValue("typeOfBody", typeOfBody.type)}
            sx={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: theme?.spacing(1),
              marginBottom: theme?.spacing(4),
              border: `3px solid ${isSelected(typeOfBody.type) ? theme?.colors?.brand?.primary : theme?.colors?.border?.primary}`,
              backgroundColor: isSelected(typeOfBody.type)
                ? "#fafafa"
                : "#fffff",
            }}
          >
            <Typography fontWeight={600} fontSize={18} mb={theme?.spacing(1)}>
              {typeOfBody.type}
            </Typography>
            <Typography fontWeight={500} fontSize={14}>
              {typeOfBody.description}
            </Typography>
          </Grid>
        )
      )}
    </Grid>
  );
}
