import { Box, Stack } from "@mui/material";
import { navbarItem } from "layouts/user/lib/types";
import { useThemeContext } from "contexts/theme/Theme";
import MobileNavbarItem from "./components/mobile-navbar-item/MobileNavbarItem";

type Props = {
  navbarItems: navbarItem[] | [];
};

export default function MobileNavbar({ navbarItems }: Props) {
  const { theme } = useThemeContext();

  return (
    <Box
      style={{
        bottom: 0,
        width: "100%",
        position: "fixed",
        backgroundColor: theme?.colors?.background?.primary,
      }}
    >
      <Stack flexDirection="row" justifyContent="center" alignItems="center">
        {navbarItems.length
          ? navbarItems.map((navbarItem: navbarItem) => (
              <MobileNavbarItem navbarItem={navbarItem} />
            ))
          : null}
      </Stack>
    </Box>
  );
}
