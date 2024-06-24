import { useParams } from "react-router-dom";
import { Card, Grid } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useReadWeeklyPlan } from "hooks/plan/useReadWeeklyPlan";
import WeeklyPlanForm from "components/forms/weekly-plan-form/WeeklyPlanForm";
import PageTitle from "components/common/page-title/PageTitle";

export default function EditWeeklyPlan() {
  const { planId } = useParams();
  const { theme } = useThemeContext();
  const { plan } = useReadWeeklyPlan(planId);

  return (
    <Grid container spacing={theme?.spacing(2)}>
      <Grid item xs={12}>
        <PageTitle title={`Editar plan ${plan?.name}`} />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <WeeklyPlanForm plan={plan} />
        </Card>
      </Grid>
    </Grid>
  );
}
