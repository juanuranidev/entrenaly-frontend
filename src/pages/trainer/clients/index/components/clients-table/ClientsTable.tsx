import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import ClientRow from "../client-row/ClientRow";
import Icons from "lib/utils/icons/icons";

type Props = {
  clients: any;
};

export default function ClientsTable({ clients }: Props) {
  const { theme } = useThemeContext();

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
            <TableCell align="right">
              <Icons.more sx={{ marginRight: theme?.spacing(0.8) }} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client: any) => (
            <ClientRow key={client?.id} client={client} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
