import { useNavigate, useParams } from "react-router-dom";
import { useThemeContext } from "contexts/Theme";
import { useGetPlanById } from "hooks/useGetPlanById";
import { Button, Grid } from "@mui/material";
import PageTitle from "components/common/page-title/PageTitle";
import PlanDay from "./components/plan-day/PlanDay";
import Icons from "lib/utils/icons";

export default function ViewWeeklyPlan() {
  const { planId } = useParams();
  const { theme } = useThemeContext();
  const { plan }: any = useGetPlanById(planId);

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
              onClick={() => navigate("/trainer/plans")}
            >
              Volver
            </Button>
          }
        />
      </Grid>
      {plan?.days?.map((day: any) => (
        <PlanDay key={day?.dayOfWeekId} day={day} />
      ))}
    </Grid>
  );
}
