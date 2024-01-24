import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import SelectExercisesView from "./SelectExercisesView";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SelectDayView from "./SelectDayView";
import PageTitle from "components/common/page-title/PageTitle";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (day: any) => void;
  daysAlreadyAdded: any;
  view?: number;
};

const days = [
  "Lunes",
  "Mártes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export default function AddDayDrawer({
  open,
  view = 1,
  onClose,
  onSubmit,
  daysAlreadyAdded,
}: Props) {
  const [step, setStep] = useState(view);
  const [daySelected, setDaySelected] = useState<string | null>(null);

  const handleSelectDay = (day: string) => {
    setDaySelected(day);
    setStep(2);
  };

  const handleSubmitExercises = (exercises: any) => {
    onSubmit({ exercises, name: daySelected });
    onClose();
  };

  const handleRenderView = (step: any) => {
    switch (step) {
      case 1:
        return (
          <SelectDayView
            days={days}
            daysAlreadyAdded={daysAlreadyAdded}
            handleSelectDay={handleSelectDay}
          />
        );
      case 2:
        return (
          <SelectExercisesView
            onSubmit={(exercises: any) => handleSubmitExercises(exercises)}
          />
        );
    }
  };

  useEffect(() => {
    setStep(view);
  }, [open]);

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <Box>
        <PageTitle
          title="Nuevo día"
          action={
            <IconButton onClick={onClose}>
              <HighlightOffIcon />
            </IconButton>
          }
        />
        {handleRenderView(step)}
      </Box>
    </BaseDrawer>
  );
}
