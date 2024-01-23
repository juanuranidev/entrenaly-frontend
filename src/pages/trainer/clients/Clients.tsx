import { Box, Typography, Stack, useTheme, Button } from "@mui/material";
import { useState } from "react";
import ClientsTable from "./components/ClientsTable";
import AddClientDrawer from "./components/AddClientDrawer";

export default function Clients() {
  const theme: any = useTheme();

  console.log(theme.backgrounds);

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
        close={() => setOpenAddClientDrawer(false)}
      />
    </Box>
  );
}
