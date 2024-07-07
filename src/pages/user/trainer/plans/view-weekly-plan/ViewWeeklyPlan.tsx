import { useNavigate, useParams } from "react-router-dom";
import { useThemeContext } from "contexts/theme/Theme";
import { useReadWeeklyPlan } from "hooks/plan/useReadWeeklyPlan";
import { Button, Grid } from "@mui/material";
import { PlanDay } from "lib/types/plan/plan.types";
import Icons from "lib/utils/icons/icons";
import PageTitle from "components/common/page-title/PageTitle";
import WeeklyPlanDay from "components/common/weekly-plan-day/WeeklyPlanDay";

export default function ViewWeeklyPlan() {
  const { planId } = useParams();
  const { theme } = useThemeContext();
  const { plan } = useReadWeeklyPlan(planId);

  const navigate = useNavigate();

  return (
    <Grid container spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <PageTitle
          title={plan?.name ?? ""}
          action={
            <Button
              variant="outlined"
              startIcon={<Icons.undo />}
              onClick={() => navigate("/trainer/plans")}
            >
              Volver
            </Button>
          }
        />
      </Grid>

      {plan?.days?.length
        ? plan?.days?.map((day: PlanDay) => (
            <WeeklyPlanDay key={day?.dayOfWeek?.id} day={day} />
          ))
        : null}
    </Grid>
  );
}
