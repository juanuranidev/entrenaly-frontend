import Logo from "components/common/logo/Logo";
import Profile from "./components/profile/Profile";
import { navbarItem } from "layouts/user/lib/types";
import { useThemeContext } from "contexts/theme/Theme";
import { useMediaQuery, Box } from "@mui/material";

type Props = {
  profileItems: navbarItem[] | [];
};

export default function Header({ profileItems }: Props) {
  const { theme } = useThemeContext();
  const isSmallScreen: boolean = useMediaQuery(
    theme?.breakpoints?.down("md") || "(max-width:600px)"
  );

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        padding: theme?.spacing(1.5),
        backgroundColor: theme?.colors?.background?.primary,
        borderBottom: `2px solid ${theme?.colors?.border?.primary}`,
        justifyContent: isSmallScreen ? "space-between" : "flex-end",
      }}
    >
      {isSmallScreen ? <Logo /> : null}
      <Profile profileItems={profileItems} />
    </Box>
  );
}
