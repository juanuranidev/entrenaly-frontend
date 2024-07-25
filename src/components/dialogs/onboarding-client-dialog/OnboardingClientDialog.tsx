import {
  Dialog,
  Typography,
  Divider,
  DialogContent,
  Button,
  Stack,
} from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useState } from "react";
import InformationStep from "./components/information-step/InformationStep";
import MedicalFormStep from "./components/medical-form-step/MedicalFormStep";

type Props = {
  open: boolean;
  close: () => void;
};

export default function OnboardingClientDialog({ open, close }: Props) {
  const { theme } = useThemeContext();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const isFirstStep = currentStep === 0;

  console.log(open, close);

  const handleRenderStep = () => {
    switch (currentStep) {
      case 0:
        return <InformationStep />;

      case 1:
        return <MedicalFormStep />;
    }
  };

  return (
    <Dialog open={open} onClose={close} fullWidth>
      <Typography fontWeight={700} mb={theme?.spacing(1.5)}>
        Completa tu perfil
      </Typography>
      <Divider />
      <DialogContent>{handleRenderStep()}</DialogContent>
      <Stack
        alignItems="center"
        flexDirection="row"
        justifyContent={isFirstStep ? "flex-end" : "space-between"}
      >
        {!isFirstStep ? (
          <Button
            variant="contained"
            onClick={() => setCurrentStep((previousValue) => previousValue - 1)}
          >
            Atras
          </Button>
        ) : null}
        <Button
          variant="contained"
          onClick={() => setCurrentStep((previousValue) => previousValue + 1)}
        >
          Siguiente
        </Button>
      </Stack>
    </Dialog>
  );
}
