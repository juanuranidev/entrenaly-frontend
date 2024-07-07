import { IconButton, Typography, Box, Stack } from "@mui/material";
import { useReadDaysOfWeek } from "hooks/plan/useReadDaysOfWeek";
import { useThemeContext } from "contexts/theme/Theme";
import { DayOfWeek, PlanDay } from "lib/types/plan/plan.types";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ModalTitle from "components/common/modal-title/ModalTitle";
import DayCard from "./components/day-card/DayCard";
import Icons from "lib/utils/icons/icons";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (day: DayOfWeek) => void;
  daysAlreadyAdded: PlanDay[];
};

export default function AddDayForm({
  open,
  onClose,
  onSubmit,
  daysAlreadyAdded,
}: Props) {
  const { theme } = useThemeContext();
  const { daysOfWeek } = useReadDaysOfWeek();

  const handleSelectDay = (day: DayOfWeek) => {
    onSubmit(day);
    onClose();
  };

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <ModalTitle
        title="Agregar día"
        action={
          <IconButton>
            <Icons.close />
          </IconButton>
        }
      />
      <Typography fontWeight={600} fontSize={15} mb={theme?.spacing(2)}>
        Selecciona el día
      </Typography>
      <Box height="calc(100% - 10rem)" overflow="auto" py={theme?.spacing(3)}>
        <Stack gap={theme?.spacing(3)}>
          {daysOfWeek.length
            ? daysOfWeek?.map((day: DayOfWeek) => (
                <DayCard
                  day={day}
                  key={day?.id}
                  handleSelectDay={handleSelectDay}
                  daysAlreadyAdded={daysAlreadyAdded}
                />
              ))
            : null}
        </Stack>
      </Box>
    </BaseDrawer>
  );
}
