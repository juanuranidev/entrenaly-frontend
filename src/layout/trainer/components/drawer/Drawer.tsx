import { useTheme } from "@mui/material/styles";
import { DrawerStyles } from "./Styles";
import {
  Box,
  Chip,
  List,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
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
    // {
    //   title: "Inicio",
    //   url: "/dashboard",
    //   icon: icons.home,
    // },
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
        <Stack
          mt={2}
          py={2}
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Typography fontWeight={700} fontSize={20}>
            Entrenaly
          </Typography>
          <Chip
            label="v1.0.0"
            size="small"
            sx={{
              height: 20,
              fontWeight: 800,
              color: theme.colors.general.white,
              backgroundColor: theme.colors.brand.primary,
              "& .MuiChip-label": { fontSize: "0.625rem", py: 0.25 },
            }}
          />
        </Stack>
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
