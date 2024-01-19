import { Box, Button } from "@mui/material";
import PageTitle from "components/page-title/PageTitle";
import PlansTable from "./components/PlansTable";

export default function Plans() {
  const plans = [
    {
      createdAt: "12/11/22",
      name: "Musculacion Diciembre",
      clientsWithIt: 5,
    },
  ];

  return (
    <Box>
      <PageTitle
        title="Planes"
        action={<Button variant="contained">Test</Button>}
      />
      <PlansTable plans={plans} />
    </Box>
  );
}
