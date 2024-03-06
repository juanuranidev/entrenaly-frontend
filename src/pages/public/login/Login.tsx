import { useState } from "react";
import { Box, Card, Stack, Typography, useTheme } from "@mui/material";
import LogoWithVersion from "components/common/logo-with-version/LogoWithVersion";
import LoginForm from "components/forms/login-form/LoginForm";
import Footer from "./components/footer/Footer";
import RegisterForm from "components/forms/register-form/RegisterForm";

type Props = {};

export default function Login({}: Props) {
  const theme: any = useTheme();
  const [registerView, setRegisterView] = useState(false);

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
            maxWidth: "30rem",
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
              {registerView ? "Registrarse" : "Ingresar"}
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              onClick={() => setRegisterView(!registerView)}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {registerView
                ? "¿Ya tienes una cuenta?"
                : "  ¿No tienes una cuenta?"}
            </Typography>
          </Stack>
          {registerView ? <RegisterForm /> : <LoginForm />}
        </Card>
      </Box>
      <Footer />
    </Stack>
  );
}
