import { Box, Typography, Card, useTheme, Stack } from "@mui/material";

type Props = {
  days: any;
  daysAlreadyAdded: any;
  handleSelectDay: (day: any) => void;
};

export default function SelectDayView({
  days,
  daysAlreadyAdded,
  handleSelectDay,
}: Props) {
  const theme: any = useTheme();

  return (
    <Box>
      <Typography fontWeight={600} fontSize={15} pb={2}>
        Selecciona el día
      </Typography>
      <Stack direction="column" spacing={2}>
        {days
          .filter(
            (day: any) =>
              !daysAlreadyAdded.some((addedDay: any) => addedDay.name === day)
          )
          .map((day: any) => (
            <Card
              key={day}
              onClick={() => handleSelectDay(day)}
              sx={{
                cursor: "pointer",
                backgroundColor: theme.colors.backgrounds.secondary,
              }}
            >
              {day}
            </Card>
          ))}
      </Stack>
    </Box>
  );
}
