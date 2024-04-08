import { useState } from "react";
import { Box, Card, Stack, Typography, useTheme } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import LogoWithVersion from "components/common/logo-with-version/LogoWithVersion";
import RegisterForm from "components/forms/register-form/RegisterForm";
import LoginForm from "components/forms/login-form/LoginForm";
import Footer from "./components/footer/Footer";

export default function Login() {
  const theme: any = useTheme();
  const [params] = useSearchParams();
  const invite = params.get("invite");

  const [registerView, setRegisterView] = useState(invite ? true : false);

  return (
    <Stack
      width="100%"
      height="100vh"
      justifyContent="space-between"
      bgcolor={theme.colors.background.secondary}
    >
      <Stack alignItems="center" justifyContent="center" p={theme.spacing(4)}>
        <LogoWithVersion />
      </Stack>
      <Box width="100%" display="flex" justifyContent="center" margin="auto">
        <Card
          sx={{
            display: "flex",
            gap: theme.spacing(4),
            flexDirection: "column",
            padding: theme.spacing(5),
            maxWidth: { base: "100%", sm: "30rem" },
            minWidth: { base: "100%", sm: "30rem" },
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
          </Stack>
          {registerView ? <RegisterForm invite={invite} /> : <LoginForm />}
          <Box display="flex" justifyContent="center" width="100%">
            <Typography
              variant="body1"
              color="primary"
              onClick={() => setRegisterView(!registerView)}
              sx={{
                cursor: "pointer",
                userSelect: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {registerView
                ? "¿Ya tienes una cuenta?"
                : "¿No tienes una cuenta?"}
            </Typography>
          </Box>
        </Card>
      </Box>
      <Footer />
    </Stack>
  );
}
