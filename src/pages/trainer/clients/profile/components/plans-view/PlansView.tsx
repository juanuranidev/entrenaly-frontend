import PlansTable from "components/common/plans-table/PlansTable";
import { useThemeContext } from "contexts/Theme";
import { Grid, Typography } from "@mui/material";
import { useReadPlansByClientId } from "hooks/plan/useReadPlansByClientId";

type Props = {
  clientId: any;
};

export default function PlansView({ clientId }: Props) {
  const { theme } = useThemeContext();
  const { plans, isLoading } = useReadPlansByClientId(clientId);

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
