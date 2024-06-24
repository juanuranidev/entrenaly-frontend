import { Box, Card, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useThemeContext } from "contexts/theme/Theme";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import LoginForm from "components/forms/login-form/LoginForm";
import RegisterForm from "components/forms/register-form/RegisterForm";
import Logo from "components/common/logo/Logo";
import InviteInformation from "./components/invite-information/InviteInformation";

export default function Login() {
  const { theme } = useThemeContext();
  const [params] = useSearchParams();
  const invite: any = params.get("invite");

  const [registerView, setRegisterView] = useState(invite ? true : false);

  return (
    <Box
      display="flex"
      minWidth="100%"
      minHeight="100dvh"
      flexDirection="column"
      justifyContent="space-between"
      bgcolor={theme?.colors?.background?.secondary}
    >
      <Stack
        alignItems="center"
        p={theme?.spacing(4)}
        gap={theme?.spacing(2)}
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent={invite ? "space-between" : "center"}
      >
        <Logo />
        {invite ? <InviteInformation invite={invite} /> : null}
      </Stack>
      <Box width="100%" display="flex" justifyContent="center" margin="auto">
        <Card
          sx={{
            display: "flex",
            gap: theme?.spacing(4),
            flexDirection: "column",
            maxWidth: { base: "100%", sm: "30rem" },
            padding: { base: theme?.spacing(4), sm: theme?.spacing(5) },
          }}
        >
          <Typography textAlign="left" fontWeight={600} fontSize={25}>
            {registerView ? "Registrarse" : "Ingresar"}
          </Typography>
          {registerView ? (
            <RegisterForm invite={invite} />
          ) : (
            <LoginForm invite={invite} />
          )}
          <Box display="flex" justifyContent="center">
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
                ? "¿Ya tienes una cuenta? Entrar"
                : "¿No tienes una cuenta? Registrarse"}
            </Typography>
          </Box>
        </Card>
      </Box>
      <Footer />
    </Box>
  );
}
