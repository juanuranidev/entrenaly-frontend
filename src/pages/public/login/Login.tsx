import { Box, Card, Stack, Typography, useTheme, Link } from "@mui/material";
import LogoWithVersion from "components/common/logo-with-version/LogoWithVersion";
import LoginForm from "components/forms/login-form/LoginForm";
import Footer from "./components/footer/Footer";

type Props = {};

export default function Login({}: Props) {
  const theme: any = useTheme();

  return (
    <Stack
      width="100%"
      height="100vh"
      p={theme.spacing(4)}
      justifyContent="space-between"
      bgcolor={theme.colors.background.secondary}
    >
      <LogoWithVersion />
      <Box
        width="100%"
        bgcolor="blue"
        display="flex"
        justifyContent="center"
        margin="auto"
      >
        <Card
          sx={{
            padding: theme.spacing(5),
            minWidth: "30rem",
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(4),
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography textAlign="left" fontWeight={600} fontSize={25}>
              Ingresar
            </Typography>
            <Typography
              component={Link}
              href="/register"
              variant="body1"
              color="primary"
              sx={{ textDecoration: "none" }}
            >
              ¿No tienes una cuenta?
            </Typography>
          </Stack>
          <LoginForm />
        </Card>
      </Box>
      <Footer />
    </Stack>
  );
}
