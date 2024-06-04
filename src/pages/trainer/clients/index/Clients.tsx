import MainTitle from "./components/main-title/MainTitle";
import ClientsTable from "./components/clients-table/ClientsTable";
import ClientsTableLoading from "./components/clients-table-loading/ClientsTableLoading";
import { Box, Typography, useTheme, Card, Grid, Alert } from "@mui/material";
import { useReadClients } from "hooks/client/useReadClients";

export default function Clients() {
  const theme: any = useTheme();
  const { clients, isLoading } = useReadClients();

  const handleRenderContent = () => {
    if (isLoading) {
      return <ClientsTableLoading />;
    }

    if (!isLoading && !clients.length) {
      return (
        <Box display="flex" justifyContent="center" py={theme?.spacing(35)}>
          <Typography fontSize={25} fontWeight={500}>
            ¡No tienes clientes!
          </Typography>
        </Box>
      );
    }

    return <ClientsTable clients={clients} />;
  };

  return (
    <Grid container spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <MainTitle />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Grid container spacing={theme?.spacing(3)}>
            <Grid item xs={12}>
              <Alert severity="info">
                Acá podrás ver todos tus clientes y la información de cada uno
                de ellos, presiona en "Agregar Nuevo" para generar un link de
                invitación y agregar nuevos clientes.
              </Alert>
            </Grid>
            <Grid item xs={12}>
              {handleRenderContent()}
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
