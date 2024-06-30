import { useNavigate, useParams } from "react-router-dom";
import { useReadWeeklyPlan } from "hooks/plan/useReadWeeklyPlan";
import { useThemeContext } from "contexts/theme/Theme";
import { Button, Grid } from "@mui/material";
import WeeklyPlanDay from "components/common/weekly-plan-day/WeeklyPlanDay";
import PageTitle from "components/common/page-title/PageTitle";
import Icons from "lib/utils/icons/icons";

export default function ViewWeeklyPlan() {
  const { planId } = useParams();
  const { theme } = useThemeContext();
  const { plan }: any = useReadWeeklyPlan(planId);

  const navigate = useNavigate();

  return (
    <Grid container spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <PageTitle
          title={plan?.name}
          action={
            <Button
              variant="outlined"
              startIcon={<Icons.undo />}
              onClick={() => navigate("/client/plans")}
            >
              Volver
            </Button>
          }
        />
      </Grid>
      {plan?.days?.map((day: any) => (
        <WeeklyPlanDay key={day?.dayOfWeekId} day={day} />
      ))}
    </Grid>
  );
}