import { Card, Grid, Alert } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useReadClients } from "hooks/client/useReadClients";
import ClientsTable from "components/common/clients-table/ClientsTable";
import MainTitle from "./components/main-title/MainTitle";

export default function Clients() {
  const { theme } = useThemeContext();
  const { clients, isLoading } = useReadClients();

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
              <ClientsTable clients={clients} isLoading={isLoading} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
