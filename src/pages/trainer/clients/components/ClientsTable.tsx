import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ClientRow from "./ClientRow";

type Props = {
  clients: any;
};

export default function ClientsTable({ clients }: Props) {
  return (
    <Card
      sx={{
        padding: 0,
        border: "none",
        boxShadow: "none",
      }}
    >
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
              <TableCell align="center">Categoria</TableCell>
              <TableCell align="center">Categoria</TableCell>
              <TableCell align="right">
                <MoreHorizIcon sx={{ marginRight: 1 }} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client: any) => (
              <ClientRow client={client} key={client.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
