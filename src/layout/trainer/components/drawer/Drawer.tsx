import { useTheme } from "@mui/material/styles";
import { DrawerStyles } from "./Styles";
import { Box, List, useMediaQuery } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LogoWithVersion from "components/common/logo-with-version/LogoWithVersion";
import PersonIcon from "@mui/icons-material/Person";
import NavbarItem from "../navbar-item/NavbarItem";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";

export default function Drawer({ isDrawerOpen, setIsDrawerOpen }: any) {
  const theme: any = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const icons = {
    home: <HomeIcon fontSize="medium" />,
    person: <PersonIcon fontSize="medium" />,
    feed: <FeedIcon fontSize="medium" />,
    fitness: <FitnessCenterIcon fontSize="medium" />,
  };

  const navbarItems = [
    {
      title: "Clientes",
      url: "/clients",
      icon: icons.person,
    },
    {
      title: "Planes",
      url: "/plans",
      icon: icons.feed,
    },
    {
      title: "Ejercicios",
      url: "/exercises",
      icon: icons.fitness,
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
              key={item.url}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          ))}
        </List>
        <Box />
      </Box>
    </DrawerStyles>
  );
}
