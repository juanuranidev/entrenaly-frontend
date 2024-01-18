import { Box, Typography, Stack, useTheme, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import ClientsTable from "./components/ClientsTable";
import AddClientDrawer from "./components/AddClientDrawer";

export default function Clients() {
  const theme = useTheme();

  const [openAddClientDrawer, setOpenAddClientDrawer] =
    useState<boolean>(false);

  const clients = [
    {
      name: "juan",
    },
    {
      name: "Jose",
    },
    {
      name: "Diego",
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" pb={3}>
        <Typography fontWeight={600} fontSize={20}>
          Clientes
        </Typography>
        <Button
          variant="contained"
          onClick={() => setOpenAddClientDrawer(true)}
        >
          Nuevo cliente
        </Button>
      </Stack>
      <ClientsTable clients={clients} />
      <AddClientDrawer
        open={openAddClientDrawer}
        onClose={() => setOpenAddClientDrawer(false)}
      />
    </Box>
  );
}
