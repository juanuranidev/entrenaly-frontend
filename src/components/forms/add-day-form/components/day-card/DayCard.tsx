import { Grid, ListItemButton, ListItemText } from "@mui/material";
import { DayOfWeek, PlanDay } from "lib/types/plan/plan.types";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  day: DayOfWeek;
  daysAlreadyAdded: PlanDay[] | [];
  handleSelectDay: (value: DayOfWeek) => void;
};

export default function DayCard({
  day,
  daysAlreadyAdded,
  handleSelectDay,
}: Props) {
  const { theme } = useThemeContext();
  const isDayAlreadyAdded = daysAlreadyAdded.find(
    (obj: PlanDay) => obj.dayOfWeek.id === day.id
  );

  return (
    <Grid item xs={12}>
      <ListItemButton
        color="primary"
        sx={{
          padding: theme?.spacing(2),
          color: theme?.colors?.text?.secondary,
          opacity: isDayAlreadyAdded ? "0.4" : "1",
          cursor: isDayAlreadyAdded ? "not-allowed" : "pointer",
          backgroundColor: theme?.colors?.background?.secondary,
          "&:hover": {
            "& .MuiListItemIcon-root, & .MuiTypography-root": {
              color: isDayAlreadyAdded
                ? theme?.colors?.text?.secondary
                : theme?.colors?.text?.primary,
            },
            backgroundColor: isDayAlreadyAdded
              ? theme?.colors?.background?.secondary
              : theme?.colors?.backgroundHover?.tertiary,
          },
        }}
        onClick={() => (isDayAlreadyAdded ? null : handleSelectDay(day))}
      >
        <ListItemText>{day?.name}</ListItemText>
      </ListItemButton>
    </Grid>
  );
}
