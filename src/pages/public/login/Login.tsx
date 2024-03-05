import { Box, Card, Chip, Stack, Typography, useTheme } from "@mui/material";

type Props = {};

export default function Login({}: Props) {
  const theme: any = useTheme();

  return (
    <Stack
      width="100%"
      height="100vh"
      px={theme.spacing(5)}
      justifyContent="space-between"
    >
      <Stack
        mt={2}
        py={2}
        spacing={1}
        direction="row"
        alignItems="center"
        bgcolor="red"
        justifyContent="flex-start"
      >
        <Typography fontWeight={700} fontSize={20}>
          Entrenaly
        </Typography>
        <Chip
          label="v1.0.0"
          size="small"
          sx={{
            height: 20,
            fontWeight: 800,
            color: theme.colors.general.white,
            backgroundColor: theme.colors.brand.primary,
            "& .MuiChip-label": { fontSize: "0.625rem", py: 0.25 },
          }}
        />
      </Stack>
      <Box
        width="100%"
        bgcolor="blue"
        display="flex"
        justifyContent="center"
        margin="auto"
      >
        <Card>awd</Card>
      </Box>
      <Box bgcolor="green">awdadawn</Box>
    </Stack>
  );
}
