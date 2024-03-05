import { Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      spacing={2}
      direction={"row"}
      textAlign={"inherit"}
      justifyContent={"space-between"}
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

      <Stack direction={"row"} spacing={3} textAlign={"inherit"}>
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
