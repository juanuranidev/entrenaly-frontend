import {
  Stack,
  Table,
  Avatar,
  TableRow,
  Skeleton,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import Icons from "lib/utils/icons/icons";

export default function ClientsTableLoading() {
  const { theme } = useThemeContext();

  return (
    <TableContainer
      sx={{
        borderRadius: theme?.spacing(2),
        "& td, & th": { whiteSpace: "nowrap" },
      }}
    >
      <Table size="small" aria-labelledby="tableTitle">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Fecha de creación</TableCell>
            <TableCell align="right">
              <Icons.more sx={{ marginRight: theme?.spacing(0.8) }} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((client: any) => (
            <TableRow hover key={client}>
              <TableCell align="left">
                <Stack direction="row" alignItems="center">
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      marginRight: theme?.spacing(1),
                    }}
                  />
                  <Skeleton width="100%" />
                </Stack>
              </TableCell>
              <TableCell align="right">
                <Skeleton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
