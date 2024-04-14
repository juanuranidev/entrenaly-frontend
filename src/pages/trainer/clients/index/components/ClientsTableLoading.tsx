import {
  Card,
  Table,
  TableRow,
  Skeleton,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function ClientsTableLoading() {
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
                <MoreHorizIcon sx={{ marginRight: 1 }} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((client: any) => (
              <TableRow
                hover
                key={client}
                tabIndex={-1}
                role="checkbox"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                </TableCell>
                <TableCell align="right">
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
