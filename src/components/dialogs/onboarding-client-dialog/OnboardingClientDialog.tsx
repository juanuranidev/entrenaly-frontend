import { Dialog, DialogTitle, Typography } from "@mui/material";
// import { useState } from "react";

type Props = {
  open: boolean;
  close: () => void;
};

export default function OnboardingClientDialog({ open, close }: Props) {
  // const [currentStep, setCurrentStep] = useState<number>(0);

  console.log(open, close);
  return (
    <Dialog open={open} onClose={close} fullWidth>
      <DialogTitle display="flex" justifyContent="flex-end">
        <Typography>Completa tu perfil</Typography>
      </DialogTitle>
    </Dialog>
  );
}
