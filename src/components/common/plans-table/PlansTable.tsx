import {
  Box,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
} from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import PlansTableLoading from "./components/plans-table-loading/PlansTableLoading";
import PlanRow from "./components/plan-row/PlanRow";
import Icons from "lib/utils/icons/icons";

type Props = {
  plans: any;
  isLoading: boolean;
  withBorder?: boolean;
};

export default function PlansTable({ plans, isLoading, withBorder }: Props) {
  const { theme } = useThemeContext();

  if (isLoading) {
    return <PlansTableLoading withBorder={withBorder} />;
  }

  if (!isLoading && !plans.length) {
    return (
      <Box display="flex" justifyContent="center" py={theme?.spacing(35)}>
        <Typography fontSize={25} fontWeight={500}>
          ¡No hay planes!
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer
      sx={{
        borderRadius: theme?.spacing(2),
        "& td, & th": { whiteSpace: "nowrap" },
        border: withBorder ? `2px solid ${theme?.colors?.border?.primary}` : "",
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
