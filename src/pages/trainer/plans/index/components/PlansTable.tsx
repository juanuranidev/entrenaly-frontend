import {
  Table,
  TableRow,
  useTheme,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
import Icons from "lib/utils/icons";
import PlanRow from "./PlanRow";

type Props = {
  plans: any;
};

export default function PlansTable({ plans }: Props) {
  const theme: any = useTheme();
  return (
    <TableContainer
      sx={{
        borderRadius: theme?.spacing(2),
        "& td, & th": { whiteSpace: "nowrap" },
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="center">Fecha de creación</TableCell>
            <TableCell align="center">Tipo</TableCell>
            <TableCell align="center">Categoría</TableCell>
            <TableCell align="right">
              <Icons.more sx={{ marginRight: theme?.spacing(0.8) }} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plans.map((plan: any) => (
            <PlanRow key={plan.id} plan={plan} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
