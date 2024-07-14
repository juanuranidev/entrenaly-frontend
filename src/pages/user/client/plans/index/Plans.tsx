import { useReadPlansByClientId } from "hooks/plan/useReadPlansByClientId";
import { Card, Grid, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useAuthContext } from "contexts/auth/Auth";
import PageTitle from "components/common/page-title/PageTitle";
import PlanCard from "./components/plan-card/PlanCard";
import { Plan } from "lib/types/plan/plan.types";

export default function Plans() {
  const { userData } = useAuthContext();
  const { theme } = useThemeContext();
  const { plans } = useReadPlansByClientId(userData?.clientInfo?.id);

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
              gap={theme?.spacing(2)}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {plans.length ? (
                plans.map((plan: Plan) => (
                  <PlanCard plan={plan} key={plan.id} />
                ))
              ) : (
                <Typography fontWeight={600} fontSize={20}>
                  ¡No tienes planes todavía!
                </Typography>
              )}
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
