import {
  Box,
  Stack,
  Avatar,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useReadInviteInformation } from "hooks/client/useReadInviteInformation";

type Props = {
  invite: string | null;
};

export default function InviteInformation({ invite }: Props) {
  const { theme } = useThemeContext();
  const { inviteInformation, isLoading } = useReadInviteInformation(invite);

  if (isLoading) return <CircularProgress />;
  if (!isLoading && !inviteInformation) return null;

  return (
    <Stack direction="row" alignItems="center" gap={theme?.spacing(2)}>
      <Box>
        <Typography fontWeight={500} fontSize={12}>
          Te ha invitado
        </Typography>
        <Typography fontWeight={600} fontSize={16}>
          {inviteInformation?.trainerName}
        </Typography>
      </Box>
      <Avatar
        sx={{ width: 40, height: 40 }}
        alt={inviteInformation?.trainerName ?? ""}
        src={inviteInformation?.trainerImage ?? ""}
      />
    </Stack>
  );
}
