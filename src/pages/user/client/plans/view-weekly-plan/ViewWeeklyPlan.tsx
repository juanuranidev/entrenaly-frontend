import { useNavigate, useParams } from "react-router-dom";
import { useReadWeeklyPlan } from "hooks/plan/useReadWeeklyPlan";
import { useThemeContext } from "contexts/theme/Theme";
import { Button, Grid, IconButton } from "@mui/material";
import WeeklyPlanDay from "components/common/weekly-plan-day/WeeklyPlanDay";
import { PlanDay } from "lib/types/plan/plan.types";
import PageTitle from "components/common/page-title/PageTitle";
import Icons from "lib/utils/icons/icons";

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
            <>
              <IconButton>
                <Icons.download />
              </IconButton>
              <Button
                variant="outlined"
                startIcon={<Icons.undo />}
                onClick={() => navigate("/client/plans")}
              >
                Volvera
              </Button>
            </>
          }
        />
      </Grid>
      {plan?.days?.map((day: PlanDay) => (
        <WeeklyPlanDay key={day?.dayOfWeek?.id} day={day} />
      ))}
    </Grid>
  );
}
