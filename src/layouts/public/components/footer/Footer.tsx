import { Link, Stack, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  return (
    <Stack
      alignItems="center"
      p={theme?.spacing(4)}
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
      <Stack direction="row" gap={theme?.spacing(2)}>
        <Typography
          component={Link}
          underline="hover"
          variant="subtitle2"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("updates")}
        >
          Actualizaciones
        </Typography>
        <Typography
          target="_blank"
          component={Link}
          underline="hover"
          variant="subtitle2"
          href="https://juanurani.vercel.app/"
        >
          Soporte
        </Typography>
      </Stack>
    </Stack>
  );
}
