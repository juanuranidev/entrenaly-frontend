import { useReadPlansByClientId } from "hooks/plan/useReadPlansByClientId";
import { useThemeContext } from "contexts/theme/Theme";
import { useAuthContext } from "contexts/auth/Auth";
import { Card, Grid } from "@mui/material";
import PageTitle from "components/common/page-title/PageTitle";
import PlanCard from "./components/plan-card/PlanCard";

export default function Plans() {
  const { userData } = useAuthContext();
  const { theme } = useThemeContext();
  const { plans }: any = useReadPlansByClientId(userData?.clientInfo?.id);

  return (
    <Grid container spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <PageTitle title="Planes" />
      </Grid>
      <Grid item xs={12}>
        <Card
          style={{
            minHeight: "50dvh",
          }}
        >
          <Grid container spacing={theme?.spacing(3)}>
            <Grid
              item
              xs={12}
              display="flex"
              flexWrap="wrap"
              flexDirection="row"
              alignItems="center"
              gap={theme?.spacing(3)}
            >
              {plans.length
                ? plans.map((plan: any) => (
                    <PlanCard plan={plan} key={plan.id} />
                  ))
                : null}
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
