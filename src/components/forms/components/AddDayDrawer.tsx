import {
  Box,
  Card,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import PageTitle from "components/common/page-title/PageTitle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import SelectExercisesView from "./SelectExercisesView";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (day: any) => void;
  daysAlreadyAdded: any;
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
  onClose,
  onSubmit,
  daysAlreadyAdded,
}: Props) {
  const theme: any = useTheme();

  const [step, setStep] = useState(1);
  const [daySelected, setDaySelected] = useState<string | null>(null);

  const handleSelectDay = (day: string) => {
    setDaySelected(day);
    setStep(2);
  };

  const handleSubmitExercises = (exercises: any) => {
    onSubmit({ exercises, name: daySelected });
    onClose();
  };

  useEffect(() => {
    setStep(1);
  }, [open]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          display: "flex",
          direction: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <PageTitle
          title="Nuevo día"
          action={
            <IconButton onClick={onClose}>
              <HighlightOffIcon />
            </IconButton>
          }
        />
        {step === 1 ? (
          <Box>
            <Typography fontWeight={600} fontSize={15} pb={2}>
              Selecciona el día
            </Typography>
            <Stack direction="column" spacing={2}>
              {days
                .filter(
                  (day) =>
                    !daysAlreadyAdded.some(
                      (addedDay: any) => addedDay.name === day
                    )
                )
                .map((day) => (
                  <Card
                    key={day}
                    onClick={() => handleSelectDay(day)}
                    sx={{
                      backgroundColor: theme.backgrounds.secondary,
                      cursor: "pointer",
                    }}
                  >
                    {day}
                  </Card>
                ))}
            </Stack>
          </Box>
        ) : (
          <SelectExercisesView
            onSubmit={(exercises: any) => handleSubmitExercises(exercises)}
          />
        )}
      </Box>

      {/* <Button variant="contained">Siguiente</Button> */}
    </Drawer>
  );
}
