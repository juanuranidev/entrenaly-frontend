import { useParams } from "react-router-dom";
import { Card, Grid } from "@mui/material";
import { useGetPlanById } from "hooks/useGetPlanById";
import { useThemeContext } from "contexts/Theme";
import WeeklyPlanForm from "components/forms/weekly-plan-form/WeeklyPlanForm";
import PageTitle from "components/common/page-title/PageTitle";

type Props = {};

export default function EditWeeklyPlan({}: Props) {
  const { id: planId } = useParams();
  const { theme } = useThemeContext();
  const { plan }: any = useGetPlanById(planId);

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
