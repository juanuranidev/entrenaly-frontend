import { Button, Card, Grid } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import WeeklyPlanForm from "components/forms/weekly-plan-form/WeeklyPlanForm";
import PageTitle from "components/common/page-title/PageTitle";
import Icons from "lib/utils/icons/icons";

export default function NewWeeklyPlan() {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  return (
    <Grid container spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <PageTitle
          title="Nuevo plan semanal"
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
      <Grid item xs={12}>
        <Card>
          <WeeklyPlanForm />
        </Card>
      </Grid>
    </Grid>
  );
}
