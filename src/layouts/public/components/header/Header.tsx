import { useSearchParams } from "react-router-dom";
import { useThemeContext } from "contexts/theme/Theme";
import InviteInformation from "layouts/public/components/invite-information/InviteInformation";
import { Stack } from "@mui/material";
import Logo from "components/common/logo/Logo";

export default function Header() {
  const { theme } = useThemeContext();
  const [params] = useSearchParams();
  const invite: string | null = params.get("invite");
  const isRegisterView = window.location.pathname === "/register";
  const isUpdatesView = window.location.pathname === "/updates";

  return (
    <Stack
      alignItems="center"
      p={theme?.spacing(4)}
      gap={theme?.spacing(2)}
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent={isRegisterView && invite ? "space-between" : "center"}
    >
      <Logo showVersion={isUpdatesView} />
      {isRegisterView ? <InviteInformation invite={invite} /> : null}
    </Stack>
  );
}
