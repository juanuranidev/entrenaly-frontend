import { Typography, Grid, Button } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import Icons from "lib/utils/icons/icons";

const updates = [
  {
    version: "1.1.0",
    features: ["Se agregó un nuevo filtro de ejercicios por categoria"],
  },
  {
    version: "1.0.0",
    features: [
      "Nueva vista para agregar clientes, ver su información y editar su ficha médica.",
      "Nueva vista para crear planes de tipo semanal, verlos, editarlos y asignarlos a clientes.",
      "Nueva vista para ver ejercicios, crear nuevos y agregar variantes a los existentes.",
    ],
  },
];

export default function Updates() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  return (
    <Grid container spacing={theme?.spacing(2)}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Button
          variant="outlined"
          startIcon={<Icons.undo />}
          onClick={() => navigate("/")}
        >
          Volver
        </Button>
      </Grid>
      <Grid item xs={11} lg={6} marginX="auto">
        {updates.map((update: { version: string; features: string[] }) => (
          <Grid item xs={12} key={update?.version}>
            <Typography fontWeight={700} fontSize={16} mb={theme?.spacing(1)}>
              Versión: {update?.version}
            </Typography>
            {update.features.map((feature: string) => (
              <Typography
                fontWeight={500}
                ml={theme?.spacing(2)}
                fontSize={{ base: 12, md: 16 }}
              >
                - {feature}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
