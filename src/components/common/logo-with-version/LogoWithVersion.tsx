import { Chip, Stack, Typography, useTheme } from "@mui/material";

export default function LogoWithVersion() {
  const theme: any = useTheme();

  return (
    <Stack spacing={1} direction="row" alignItems="center">
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
  );
}
