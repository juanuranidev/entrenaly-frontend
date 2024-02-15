import { Card, useTheme } from "@mui/material";

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
  const theme: any = useTheme();
  const isDayAlreadyAdded = daysAlreadyAdded.find(
    (obj: any) => obj.name === day
  );

  return (
    <Card
      key={day}
      onClick={() => (isDayAlreadyAdded ? null : handleSelectDay(day))}
      sx={{
        width: "100%",
        backgroundColor: isDayAlreadyAdded
          ? "lightgray"
          : theme.colors.backgrounds.secondary,
        cursor: isDayAlreadyAdded ? "not-allowed" : "pointer",
      }}
    >
      {day}
    </Card>
  );
}
