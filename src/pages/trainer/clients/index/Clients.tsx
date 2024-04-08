import {
  Box,
  Typography,
  useTheme,
  Card,
  Grid,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getClientsByUserIdService } from "services/client/client.services";
import ClientsTable from "./components/ClientsTable";
import MainTitle from "./components/MainTitle";

export default function Clients() {
  const theme: any = useTheme();
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
            {isLoading ? (
              <Box
                width="100%"
                height="20rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <CircularProgress />
              </Box>
            ) : (
              <ClientsTable clients={clients} />
            )}
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
