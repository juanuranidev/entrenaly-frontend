import { Grid, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  description: string;
};

export default function ReleaseDescription({ description }: Props) {
  const { theme } = useThemeContext();

  const formattedDescription = description.split(".").map((sentence, index) => (
    <Typography
      key={index}
      fontSize={14}
      fontWeight={600}
      ml={theme?.spacing(1)}
    >
      {sentence.trim()}
      {index < description.split(".").length - 1 ? "." : ""}
    </Typography>
  ));

  return (
    <Grid item xs={12}>
      {formattedDescription}
    </Grid>
  );
}
