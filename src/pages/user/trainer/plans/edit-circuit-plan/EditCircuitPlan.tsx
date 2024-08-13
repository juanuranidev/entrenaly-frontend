import { useParams } from "react-router-dom";
import { Card, Grid } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useReadCircuitPlan } from "hooks/plan/useReadCircuitPlan";
import CircuitPlanForm from "components/forms/circuit-plan-form/CircuitPlanForm";
import PageTitle from "components/common/page-title/PageTitle";

export default function EditCircuitPlan() {
  const { planId } = useParams();
  const { theme } = useThemeContext();
  const { plan } = useReadCircuitPlan(planId);
  console.log(plan);

  return (
    <Grid container spacing={theme?.spacing(2)}>
      <Grid item xs={12}>
        <PageTitle title={`Editar plan ${plan?.name}`} />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CircuitPlanForm plan={plan} />
        </Card>
      </Grid>
    </Grid>
  );
}
