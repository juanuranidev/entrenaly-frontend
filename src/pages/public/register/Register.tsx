import { Box, Card, Stack, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useThemeContext } from "contexts/theme/Theme";
import InviteInformation from "pages/public/register/components/invite-information/InviteInformation";
import RegisterForm from "components/forms/register-form/RegisterForm";
import Footer from "components/common/footer/Footer";
import Logo from "components/common/logo/Logo";

export default function Register() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const [params] = useSearchParams();
  const invite: string | null = params.get("invite");

  return (
    <Box
      display="flex"
      minHeight="100dvh"
      flexDirection="column"
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
                textDecoration: "underline",
              },
            }}
          >
            ¿Ya tienes una cuenta? Ingresar
          </Typography>
        </Box>
      </Card>
      <Footer />
    </Box>
  );
}
