import { Box, Typography, useTheme, Card, Grid, Alert } from "@mui/material";
import ClientsTable from "./components/ClientsTable";
import MainTitle from "./components/MainTitle";

export default function Clients() {
  const theme: any = useTheme();

  const clients = [
    {
      name: "juan",
    },
    {
      name: "Jose",
    },
    {
      name: "Diego",
    },
  ];

  return (
    <Box>
      <MainTitle />
      <Card>
        <Grid container spacing={theme.spacing(3)}>
          <Grid item xs={12}>
            <Alert severity="info">
              <Typography fontSize={15}>
                Acá vas a ver todos tus clientes que se registraran con el link
                que generes
              </Typography>
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <ClientsTable clients={clients} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
