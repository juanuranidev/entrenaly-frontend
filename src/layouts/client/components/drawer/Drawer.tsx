import { DrawerStyles } from "./Styles";
import { useThemeContext } from "contexts/Theme";
import { Box, List, useMediaQuery } from "@mui/material";
import LogoWithVersion from "components/common/logo-with-version/LogoWithVersion";
import NavbarItem from "../navbar-item/NavbarItem";
import Icons from "lib/utils/icons";

type Props = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
};

export default function Drawer({ isDrawerOpen, setIsDrawerOpen }: Props) {
  const { theme } = useThemeContext();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const navbarItems = [
    {
      title: "Clientes",
      url: "/trainer/clients",
      icon: <Icons.person fontSize="medium" />,
    },
    {
      title: "Planes",
      url: "/trainer/plans",
      icon: <Icons.plans fontSize="medium" />,
    },
    {
      title: "Ejercicios",
      url: "/trainer/exercises",
      icon: <Icons.dumbbell fontSize="medium" />,
    },
  ];

  return (
    <DrawerStyles
      theme={theme}
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      variant={isLargeScreen ? "permanent" : "temporary"}
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
          <LogoWithVersion />
        </Box>
        <List>
          {navbarItems.map((item) => (
            <NavbarItem
              item={item}
              key={item?.title}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          ))}
        </List>
        <Box />
      </Box>
    </DrawerStyles>
  );
}
