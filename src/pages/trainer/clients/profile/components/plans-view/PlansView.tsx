import { useReadPlansByClientId } from "hooks/plan/useReadPlansByClientId";
import { Grid, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useParams } from "react-router-dom";
import { Plan } from "lib/types/plan/plan.types";
import PlansTable from "components/common/plans-table/PlansTable";

type UseReadPlansByClientId = {
  plans: Plan[];
  isLoading: boolean;
};

export default function PlansView() {
  const { theme } = useThemeContext();
  const { clientId } = useParams();
  const { plans, isLoading }: UseReadPlansByClientId =
    useReadPlansByClientId(clientId);

  return (
    <Grid item container xs={12} sm={10} spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <Typography fontSize={20} fontWeight={600}>
          Planes
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <PlansTable plans={plans} isLoading={isLoading} withBorder />
      </Grid>
    </Grid>
  );
}
