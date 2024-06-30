import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Card, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import RegisterForm from "components/forms/register-form/RegisterForm";

export default function Register() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  const [params] = useSearchParams();
  const invite: string | null = params.get("invite");

  return (
    <Card
      sx={{
        margin: "auto",
        display: "flex",
        gap: theme?.spacing(4),
        flexDirection: "column",
        maxWidth: { base: "100%", sm: "30rem" },
        padding: { base: theme?.spacing(4), sm: theme?.spacing(5) },
      }}
    >
      <Typography textAlign="left" fontWeight={600} fontSize={25}>
        Registrarse
      </Typography>
      <RegisterForm invite={invite} />
      <Box display="flex" justifyContent="center">
        <Typography
          variant="body1"
          color="primary"
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
            userSelect: "none",
            "&:hover": {
              userSelect: "none",
              textDecoration: "underline",
            },
          }}
        >
          ¿Ya tienes una cuenta? Ingresar
        </Typography>
      </Box>
    </Card>
  );
}
