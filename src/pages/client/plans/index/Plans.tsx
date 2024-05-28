import { useGetAllPlansByClientId } from "hooks/useGetAllPlansByClientId";
import { Card, Grid, Alert } from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import { useAuthContext } from "contexts/Auth";
import PlansTable from "components/common/plans-table/PlansTable";
import MainTitle from "./components/MainTitle";

export default function Plans() {
  const { userData } = useAuthContext();
  const { theme } = useThemeContext();
  const { plans, isLoading } = useGetAllPlansByClientId(
    userData?.clientInfo?.id
  );
  console.log(plans);
  console.log(userData?.clientInfo?.id);

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
                Acá podrás crear nuevos planes de entrenamiento tanto de tipo
                semanal como de circuito. Además podrás verlos, editarlos y
                asignarlos a tus clientes.
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <PlansTable plans={plans} isLoading={isLoading} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
