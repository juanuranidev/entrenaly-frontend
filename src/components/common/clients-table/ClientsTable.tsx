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
import Icons from "lib/utils/icons/icons";
import ClientsTableLoading from "./components/clients-table-loading/ClientsTableLoading";
import ClientRow from "./components/client-row/ClientRow";

type Props = {
  clients: any;
  isLoading: boolean;
  withBorder?: boolean;
};

export default function ClientsTable({
  clients,
  isLoading,
  withBorder,
}: Props) {
  const { theme } = useThemeContext();

  if (isLoading) {
    return <ClientsTableLoading withBorder={withBorder} />;
  }

  if (!isLoading && !clients.length) {
    return (
      <Box display="flex" justifyContent="center" py={theme?.spacing(35)}>
        <Typography fontSize={25} fontWeight={500}>
          ¡No hay clientes!
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
            <TableCell align="right">
              <Icons.more sx={{ marginRight: theme?.spacing(0.8) }} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client: any) => (
            <ClientRow key={client.id} client={client} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
