import {
  Table,
  Stack,
  TableRow,
  Skeleton,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
} from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import Icons from "lib/utils/icons/icons";

type Props = {
  withBorder?: boolean;
};

export default function PlansTableLoading({ withBorder }: Props) {
  const { theme } = useThemeContext();

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
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((client: number) => (
            <TableRow hover key={client}>
              <TableCell align="left">
                <Stack direction="row" alignItems="center">
                  <Icons.pdfs
                    color="error"
                    sx={{ marginRight: theme?.spacing(1) }}
                  />
                  <Skeleton width="100%" />
                </Stack>
              </TableCell>
              <TableCell align="center">
                <Skeleton />
              </TableCell>
              <TableCell align="center">
                <Skeleton />
              </TableCell>
              <TableCell align="center">
                <Skeleton />
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
