import { Link, Stack, Typography } from "@mui/material";
import { useThemeContext } from "contexts/Theme";

export default function Footer() {
  const { theme } = useThemeContext();

  return (
    <Stack
      alignItems="center"
      p={theme.spacing(4)}
      textAlign={"inherit"}
      gap={theme?.spacing(2)}
      justifyContent="space-between"
      direction={{ base: "column", md: "row" }}
    >
      <Typography variant="subtitle2" component="span">
        &copy; Entrenaly todos los derechos reservados. By&nbsp;
        <Typography
          component={Link}
          target="_blank"
          underline="hover"
          variant="subtitle2"
          referrerPolicy="no-referrer"
          href="https://juanurani.vercel.app/"
        >
          Juan
        </Typography>
      </Typography>
      <Stack direction="row" gap={theme?.spacing(4)}>
        <Typography
          href=""
          target="_blank"
          component={Link}
          underline="hover"
          variant="subtitle2"
        >
          Política de privacidad
        </Typography>
        <Typography
          href=""
          target="_blank"
          component={Link}
          underline="hover"
          variant="subtitle2"
        >
          Soporte
        </Typography>
      </Stack>
    </Stack>
  );
}
