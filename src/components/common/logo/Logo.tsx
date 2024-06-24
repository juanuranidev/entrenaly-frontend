import ENV from "lib/utils/env";
import LogoImage from "../../../../public/Logo.png";
import { Chip, Stack } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  showVersion?: boolean;
};

export default function Logo({ showVersion = false }: Props) {
  const { theme } = useThemeContext();

  return (
    <Stack spacing={theme?.spacing(1)} direction="row" alignItems="center">
      <img src={LogoImage} width={60} height="100%" />
      {showVersion ? (
        <Chip
          size="small"
          label={`v${ENV.APP_VERSION}`}
          sx={{
            fontWeight: 500,
            color: theme?.colors?.text?.primary,
            backgroundColor: theme?.colors?.background?.tertiary,
            "& .MuiChip-label": { fontSize: "0.55rem" },
          }}
        />
      ) : null}
    </Stack>
  );
}
