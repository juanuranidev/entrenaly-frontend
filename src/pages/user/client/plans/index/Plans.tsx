import { updateClientOnboardingStatusService } from "services/client/client.services";
import { useReadPlansByClientId } from "hooks/plan/useReadPlansByClientId";
import { Card, Grid, Typography } from "@mui/material";
import { createErrorToastLib } from "lib/utils/toast";
import { useThemeContext } from "contexts/theme/Theme";
import { useAuthContext } from "contexts/auth/Auth";
import { useState } from "react";
import { Plan } from "lib/types/plan/plan.types";
import PageTitle from "components/common/page-title/PageTitle";
import PlanCard from "./components/plan-card/PlanCard";
import OnboardingClientForm from "components/forms/onboarding-client-form/OnboardingClientForm";
import UpdateMedicalInformationForm from "components/forms/update-medical-informacion/UpdateMedicalInformationForm";

export default function Plans() {
  const { userData } = useAuthContext();
  const { theme } = useThemeContext();
  const { plans } = useReadPlansByClientId(userData?.clientInfo?.id);

  const [isOnboardingClientFormOpen, setIsOnboardingClientFormOpen] =
    useState<boolean>(!userData?.clientInfo?.hasCompletedOnboarding);
  const [
    isUpdateMedicalInformationFormOpen,
    setIsUpdateMedicalInformationFormOpen,
  ] = useState<boolean>(false);

  const handleUpdateClientOnboardingStatus = async () => {
    try {
      await updateClientOnboardingStatusService(userData?.clientInfo?.id, true);

      setIsOnboardingClientFormOpen(false);
      setIsUpdateMedicalInformationFormOpen(false);
    } catch (error) {
      createErrorToastLib("Error al terminar el onboarding");
      console.log(error);
    }
  };

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
      <OnboardingClientForm
        open={isOnboardingClientFormOpen}
        onSubmit={() => {
          setIsOnboardingClientFormOpen(false);
          setIsUpdateMedicalInformationFormOpen(true);
        }}
      />
      <UpdateMedicalInformationForm
        onboarding
        onClose={() => {}}
        clientSelected={userData?.clientInfo}
        open={isUpdateMedicalInformationFormOpen}
        onSubmit={() => handleUpdateClientOnboardingStatus()}
      />
    </Grid>
  );
}
