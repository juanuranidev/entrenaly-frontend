import { Card, Grid, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { USER_CONSTANTS } from "lib/constants/user/user.constants";

export default function SubscriptionView() {
  const { theme } = useThemeContext();

  return (
    <Grid item container xs={12} sm={10} spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <Typography fontSize={20} fontWeight={600}>
          Suscripción
        </Typography>
      </Grid>
      {USER_CONSTANTS.SUBSCRIPTION_PLANS.ARRAY.map(
        (subscriptionPlan: { NAME: string }) => (
          <Grid item xs={12} lg={4} key={subscriptionPlan.NAME}>
            <Card
              sx={{
                padding: theme?.spacing(2),
                border:
                  subscriptionPlan.NAME ===
                  USER_CONSTANTS.SUBSCRIPTION_PLANS.NAMES.INITIAL
                    ? `2px solid ${theme?.colors?.brand?.primary}`
                    : `2px solid ${theme?.colors?.border?.primary}`,
              }}
            >
              <Typography fontSize={18} fontWeight={600}>
                {subscriptionPlan?.NAME}
              </Typography>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
}
