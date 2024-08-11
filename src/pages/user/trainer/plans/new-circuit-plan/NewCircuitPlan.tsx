import { Button, Card, Grid } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import Icons from "lib/utils/icons/icons";
import PageTitle from "components/common/page-title/PageTitle";
import CircuitPlanForm from "components/forms/circuit-plan-form/CircuitPlanForm";

export default function NewCircuitPlan() {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  return (
    <Grid container spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <PageTitle
          title="Nuevo plan de circuitos"
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
          <CircuitPlanForm />
        </Card>
      </Grid>
    </Grid>
  );
}
