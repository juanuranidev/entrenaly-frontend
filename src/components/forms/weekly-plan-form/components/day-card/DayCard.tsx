import { Grid, ListItemButton, ListItemText } from "@mui/material";
import { useThemeContext } from "contexts/Theme";

type Props = {
  day: any;
  daysAlreadyAdded: any;
  handleSelectDay: any;
};

export default function DayCard({
  day,
  daysAlreadyAdded,
  handleSelectDay,
}: Props) {
  const { theme } = useThemeContext();
  const isDayAlreadyAdded = daysAlreadyAdded.find(
    (obj: any) => obj.dayOfWeekId === day.id
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
