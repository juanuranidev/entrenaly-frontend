import {
  Alert,
  Box,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlanRow from "./components/PlanRow";
import MainTitle from "./components/MainTitle";

export default function Plans() {
  const theme: any = useTheme();
  const plans = [
    {
      createdAt: "12/11/22",
      name: "Musculacion Diciembre",
      clientsWithIt: 5,
    },
  ];

  return (
    <Box>
      <MainTitle />
      <Card>
        <Grid container spacing={theme.spacing(3)}>
          <Grid item xs={12}>
            <Alert severity="info">
              <Typography fontSize={15}>
                Acá podrás ver y crear crear tanto planes semanales como de tipo
                circuito asi como también asignarlos a tus clientes
              </Typography>
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <TableContainer
              sx={{
                width: "100%",
                overflowX: "auto",
                position: "relative",
                display: "block",
                maxWidth: "100%",
                "& td, & th": { whiteSpace: "nowrap" },
              }}
            >
              <Table size="medium" aria-labelledby="{lanes">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="center">Fecha</TableCell>
                    <TableCell align="center">Clientes asignados</TableCell>
                    <TableCell align="right">
                      <MoreHorizIcon sx={{ marginRight: 1 }} />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {plans.map((plan: any) => (
                    <PlanRow plan={plan} key={plan.name} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
