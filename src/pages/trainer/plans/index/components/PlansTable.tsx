import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlanRow from "./PlanRow";

type Props = {
  plans: any;
};

export default function PlansTable({ plans }: Props) {
  return (
    <Card>
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
        <Table size="small" aria-labelledby="tableTitle">
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
    </Card>
  );
}
