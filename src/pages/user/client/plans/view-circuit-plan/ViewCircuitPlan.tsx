import { Button, Grid, IconButton, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useReadCircuitPlan } from "hooks/plan/useReadCircuitPlan";
import { useThemeContext } from "contexts/theme/Theme";
import { PLAN_CONSTANTS } from "lib/constants/plan/plan.constants";
import { downloadPdfLib } from "lib/utils/download-pdf/DownloadPdf";
import { PlanDay } from "lib/types/plan/plan.types";
import Icons from "lib/utils/icons/icons";
import PageTitle from "components/common/page-title/PageTitle";
import WeeklyPlanDay from "components/common/view-plan-day/ViewPlanDay";

export default function ViewCircuitPlan() {
  const { planId } = useParams();
  const { theme } = useThemeContext();
  const { plan } = useReadCircuitPlan(planId);

  const navigate = useNavigate();

  return (
    <Grid container spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <PageTitle
          title={plan?.name ?? ""}
          action={
            <Stack
              flexDirection="row"
              alignItems="center"
              gap={theme?.spacing(2)}
              justifyContent="space-between"
            >
              <IconButton
                onClick={() =>
                  downloadPdfLib(PLAN_CONSTANTS.TYPES.CIRCUIT, planId)
                }
              >
                <Icons.download />
              </IconButton>
              <Button
                variant="outlined"
                startIcon={<Icons.undo />}
                onClick={() => navigate("/client/plans")}
              >
                Volver
              </Button>
            </Stack>
          }
        />
      </Grid>
      {plan?.days?.length
        ? plan?.days?.map((day: PlanDay) => (
            <WeeklyPlanDay key={day?.dayOfWeek?.id} day={day} hasCircuits />
          ))
        : null}
    </Grid>
  );
}
