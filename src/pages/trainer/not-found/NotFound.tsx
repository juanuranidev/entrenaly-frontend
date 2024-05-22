import { Box, Typography, Button } from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import { useNavigate } from "react-router-dom";
import Icons from "lib/utils/icons";

export default function NotFound() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography
        fontWeight={600}
        mb={theme?.spacing(2)}
        fontSize={theme?.typography?.h1}
      >
        ¡Ups! Página no encontrada
      </Typography>
      <Button
        variant="contained"
        startIcon={<Icons.home />}
        onClick={() => navigate("/trainer/clients")}
      >
        Inicio
      </Button>
    </Box>
  );
}
