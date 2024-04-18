import { Chip, Stack, Typography, useTheme } from "@mui/material";

type Props = {
  hideVersion?: boolean;
};

export default function LogoWithVersion({ hideVersion = false }: Props) {
  const theme: any = useTheme();

  return (
    <Stack spacing={1} direction="row" alignItems="center">
      <Typography fontWeight={700} fontSize={20}>
        Entrenaly
      </Typography>
      {!hideVersion ? (
        <Chip
          label="v1.0.0"
          size="small"
          sx={{
            height: 25,
            fontWeight: 600,
            color: theme?.colors?.text?.primary,
            backgroundColor: theme.colors.background.tertiary,
            "& .MuiChip-label": { fontSize: "0.625rem", py: 0.25 },
          }}
        />
      ) : null}
    </Stack>
  );
}
