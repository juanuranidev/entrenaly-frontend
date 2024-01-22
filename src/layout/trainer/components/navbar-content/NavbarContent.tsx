// type Props = {}

import {
  Stack,
  Chip,
  Typography,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FeedIcon from "@mui/icons-material/Feed";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useNavigate } from "react-router-dom";
// import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavbarContent() {
  const navigate = useNavigate();

  const icons = {
    home: <HomeIcon />,
    person: <PersonIcon />,
    feed: <FeedIcon />,
    fitness: <FitnessCenterIcon />,
  };

  const navbarItems = [
    {
      title: "Inicio",
      url: "/dashboard",
      icon: icons.home,
    },
    // {
    //   title: "Clientes",
    //   url: "/clients",
    //   icon: icons.person,
    // },
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
        <Typography fontWeight={600} fontSize={20}>
          Entrenaly
        </Typography>
        <Chip
          label="v1.0.0"
          size="small"
          sx={{
            height: 16,
            "& .MuiChip-label": { fontSize: "0.625rem", py: 0.25 },
          }}
        />
      </Stack>
      <List>
        {navbarItems.map((item) => (
          <ListItemButton
            onClick={() => navigate(item.url)}
            key={item.url}
            //   {...listItemProps}
            //   disabled={item.disabled}
            //   onClick={() => itemHandler(item.id)}
            //   selected={isSelected}
            sx={{
              zIndex: 1201,
              // pl: drawerOpen ? `${level * 28}px` : 1.5,
              // py: !drawerOpen && level === 1 ? 1.25 : 1,
              // ...(drawerOpen && {
              //   "&:hover": {
              //     bgcolor: "primary.lighter",
              //   },
              //   "&.Mui-selected": {
              //     bgcolor: "primary.lighter",
              //     borderRight: `2px solid ${theme.palette.primary.main}`,
              //     color: iconSelectedColor,
              //     "&:hover": {
              //       color: iconSelectedColor,
              //       bgcolor: "primary.lighter",
              //     },
              //   },
              // }),
              // ...(!drawerOpen && {
              //   "&:hover": {
              //     bgcolor: "transparent",
              //   },
              //   "&.Mui-selected": {
              //     "&:hover": {
              //       bgcolor: "transparent",
              //     },
              //     bgcolor: "transparent",
              //   },
              // }),
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 28,
                // color: isSelected ? iconSelectedColor : textColor,
                // ...(!drawerOpen && {
                //   borderRadius: 1.5,
                //   width: 36,
                //   height: 36,
                //   alignItems: "center",
                //   justifyContent: "center",
                //   "&:hover": {
                //     bgcolor: "secondary.lighter",
                //   },
                // }),
                // ...(!drawerOpen &&
                //   isSelected && {
                //     bgcolor: "primary.lighter",
                //     "&:hover": {
                //       bgcolor: "primary.lighter",
                //     },
                //   }),
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  variant="h6"
                  //   sx={{ color: isSelected ? iconSelectedColor : textColor }}
                >
                  {item.title}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
      <Box />
    </Box>
  );
}
