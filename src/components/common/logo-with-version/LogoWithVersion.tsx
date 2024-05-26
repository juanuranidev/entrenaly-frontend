import ENV from "lib/utils/env";
import Logo from "../../../assets/icons/Logo.png";
import { Chip, Stack } from "@mui/material";
import { useThemeContext } from "contexts/Theme";

type Props = {
  hideVersion?: boolean;
};

export default function LogoWithVersion({ hideVersion = false }: Props) {
  const { theme } = useThemeContext();

  return (
    <Stack spacing={theme?.spacing(1)} direction="row" alignItems="center">
      <img src={Logo} width={60} height="100%" />
      {!hideVersion ? (
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
