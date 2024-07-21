import { Box, List, Drawer as MUIDrawer } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { navbarItem } from "layouts/user/lib/types";
import NavbarItem from "./components/navbar-item/NavbarItem";
import Logo from "components/common/logo/Logo";

type Props = {
  navbarItems: navbarItem[] | [];
};

export default function Navbar({ navbarItems }: Props) {
  const { theme } = useThemeContext();

  return (
    <MUIDrawer
      variant="permanent"
      style={{ width: "14rem" }}
      PaperProps={{
        style: {
          width: "14rem",
          padding: theme?.spacing(1),
          borderRight: `2px solid ${theme?.colors?.border?.primary}`,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" justifyContent="center" p={theme?.spacing(2)}>
          <Logo showVersion />
        </Box>
        <List>
          {navbarItems.map((item: navbarItem) => (
            <NavbarItem item={item} key={item?.title} />
          ))}
        </List>
        <Box />
      </Box>
    </MUIDrawer>
  );
}
