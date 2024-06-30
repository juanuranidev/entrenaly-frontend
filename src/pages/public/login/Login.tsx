import { Box, Card, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import LoginForm from "components/forms/login-form/LoginForm";

export default function Login() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  return (
    <Card
      sx={{
        margin: "auto",
        display: "flex",
        gap: theme?.spacing(4),
        flexDirection: "column",
        padding: theme?.spacing(5),
        maxWidth: { base: "100%", sm: "30rem" },
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
              userSelect: "none",
              textDecoration: "underline",
            },
          }}
        >
          ¿No tienes una cuenta? Registrarse
        </Typography>
      </Box>
    </Card>
  );
}
