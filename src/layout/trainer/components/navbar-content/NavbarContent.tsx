import { Stack, Chip, Typography, Box, List, useTheme } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";
import PersonIcon from "@mui/icons-material/Person";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import NavbarItem from "../navbar-item/NavbarItem";

export default function NavbarContent({ setIsDrawerOpen }: any) {
  const theme: any = useTheme();

  const icons = {
    home: <HomeIcon />,
    person: <PersonIcon />,
    feed: <FeedIcon />,
    fitness: <FitnessCenterIcon />,
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        overflowY: "scroll",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        py={2}
        alignItems="center"
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
          <NavbarItem item={item} setIsDrawerOpen={setIsDrawerOpen} />
        ))}
      </List>
      <Box />
    </Box>
  );
}
