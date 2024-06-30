import { Box, Card, Stack, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import LoginForm from "components/forms/login-form/LoginForm";
import Footer from "components/common/footer/Footer";
import Logo from "components/common/logo/Logo";

export default function Login() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  return (
    <Box
      display="flex"
      minHeight="100dvh"
      flexDirection="column"
      bgcolor={theme?.colors?.background?.secondary}
    >
      <Stack alignItems="center" p={theme?.spacing(4)}>
        <Logo />
      </Stack>
      <Card
        sx={{
          margin: "auto",
          display: "flex",
          gap: theme?.spacing(4),
          flexDirection: "column",
          maxWidth: { base: "100%", sm: "30rem" },
          padding: theme?.spacing(5),
        }}
      >
        <Typography textAlign="left" fontWeight={600} fontSize={25}>
          Ingresar
        </Typography>
        <LoginForm />
        <Box display="flex" justifyContent="center">
          <Typography
            color="primary"
            onClick={() => navigate("/register")}
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            ¿No tienes una cuenta? Registrarse
          </Typography>
        </Box>
      </Card>
      <Footer />
    </Box>
  );
}
