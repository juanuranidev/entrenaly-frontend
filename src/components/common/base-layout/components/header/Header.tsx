import Icons from "lib/utils/icons/icons";
import Profile from "../profile/Profile";
import { useThemeContext } from "contexts/theme/Theme";
import { IconButton, useMediaQuery, Box } from "@mui/material";

type Props = {
  setIsDrawerOpen: (value: boolean) => void;
  profileItems: any;
};

export default function Header({ setIsDrawerOpen, profileItems }: Props) {
  const { theme } = useThemeContext();
  const isLargeScreen: boolean = useMediaQuery(
    theme?.breakpoints?.up("md") || "(min-width:900px)"
  );

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        padding: theme?.spacing(1.5),
        backgroundColor: theme?.colors?.background?.primary,
        borderBottom: `2px solid ${theme?.colors?.border?.primary}`,
        justifyContent: isLargeScreen ? "flex-end" : "space-between",
      }}
    >
      {!isLargeScreen ? (
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <Icons.menu />
        </IconButton>
      ) : null}
      <Profile profileItems={profileItems} />
    </Box>
  );
}
