import { Box, Stack, useTheme, IconButton, Typography } from "@mui/material";
import PageTitle from "components/common/page-title/PageTitle";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DayCard from "./DayCard";

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

  const handleSelectDay = (day: string) => {
    onSubmit(day);
    onClose();
  };

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
        <Box>
          <Typography fontWeight={600} fontSize={15} pb={2}>
            Selecciona el día
          </Typography>
          <Box height="calc(100% - 10rem)" overflow="auto">
            <Stack
              width="100%"
              direction="row"
              flexWrap="wrap"
              alignItems="center"
              gap={theme.spacing(2)}
              justifyContent="center"
            >
              {days.map((day: any) => (
                <DayCard
                  key={day}
                  day={day}
                  daysAlreadyAdded={daysAlreadyAdded}
                  handleSelectDay={handleSelectDay}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </BaseDrawer>
  );
}
