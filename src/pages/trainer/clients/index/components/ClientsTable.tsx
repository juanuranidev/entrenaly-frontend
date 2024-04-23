import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
import Icons from "lib/utils/icons";
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
          display: "block",
          maxWidth: "100%",
          overflowX: "auto",
          position: "relative",
          "& td, & th": { whiteSpace: "nowrap" },
        }}
      >
        <Table size="small" aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">
                <Icons.more sx={{ marginRight: 1 }} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client: any) => (
              <ClientRow client={client} key={client} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
