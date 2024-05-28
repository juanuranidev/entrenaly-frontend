import { IconButton, Typography, Grid } from "@mui/material";
import { useGetAllDaysOfWeek } from "hooks/useGetAllDaysOfWeek";
import { useThemeContext } from "contexts/Theme";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ModalTitle from "components/common/modal-title/ModalTitle";
import DayCard from "../day-card/DayCard";
import Icons from "lib/utils/icons/icons";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (day: any) => void;
  daysAlreadyAdded: any;
};

export default function AddDayDrawer({
  open,
  onClose,
  onSubmit,
  daysAlreadyAdded,
}: Props) {
  const { theme } = useThemeContext();
  const { daysOfWeek } = useGetAllDaysOfWeek();

  const handleSelectDay = (day: string) => {
    onSubmit(day);
    onClose();
  };

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <Grid container spacing={theme?.spacing(3)}>
        <Grid item xs={12}>
          <ModalTitle
            title="Agregar día"
            action={
              <IconButton>
                <Icons.close />
              </IconButton>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight={500} fontSize={15}>
            Selecciona el día
          </Typography>
        </Grid>
        <Grid item container xs={12} display="flex" spacing={theme?.spacing(3)}>
          {daysOfWeek.length
            ? daysOfWeek?.map((day: any) => (
                <DayCard
                  day={day}
                  key={day?.id}
                  handleSelectDay={handleSelectDay}
                  daysAlreadyAdded={daysAlreadyAdded}
                />
              ))
            : null}
        </Grid>
      </Grid>
    </BaseDrawer>
  );
}
