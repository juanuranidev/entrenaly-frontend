import MainTitle from "./components/MainTitle";
import ClientsTable from "./components/ClientsTable";
import ClientsTableLoading from "./components/ClientsTableLoading";
import { useEffect, useState } from "react";
import { getClientsByUserIdService } from "services/client/client.services";
import { Box, Typography, useTheme, Card, Grid, Alert } from "@mui/material";

export default function Clients() {
  const theme: any = useTheme();
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetClients = async () => {
    setIsLoading(true);
    try {
      const response = await getClientsByUserIdService();
      setClients(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleRenderContent = () => {
    if (isLoading) {
      return <ClientsTableLoading />;
    }

    if (!isLoading && !clients.length) {
      return (
        <Box display="flex" justifyContent="center" py={theme?.spacing(35)}>
          <Typography fontSize={25} fontWeight={400}>
            ¡No tienes clientes!
          </Typography>
        </Box>
      );
    }

    return <ClientsTable clients={clients} />;
  };

  useEffect(() => {
    handleGetClients();
  }, []);

  return (
    <Box>
      <MainTitle />
      <Card>
        <Grid container spacing={theme.spacing(3)}>
          <Grid item xs={12}>
            <Alert severity="info">
              <Typography fontSize={15}>
                En esta sección podrás ver todos tus clientes y la información
                de cada uno de ellos, presiona en "Agregar Nuevo" para generar
                un link de invitación y agregar nuevos clientes.
              </Typography>
            </Alert>
          </Grid>
          <Grid item xs={12}>
            {handleRenderContent()}
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
