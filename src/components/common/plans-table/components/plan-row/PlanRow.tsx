import {
  Menu,
  Stack,
  TableRow,
  MenuItem,
  TableCell,
  Typography,
  IconButton,
} from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import Icons from "lib/utils/icons/icons";

type Props = {
  plan: any;
};

export default function PlanRow({ plan }: Props) {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <TableRow hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="left">
        <Stack direction="row" alignItems="center" gap={theme?.spacing(1)}>
          <Icons.pdfs color="error" />
          <Typography>{plan?.name}</Typography>
        </Stack>
      </TableCell>
      <TableCell align="center">
        {moment(plan?.createdAt).format("DD/MM/YYYY")}
      </TableCell>
      <TableCell align="center">{plan?.type}</TableCell>
      <TableCell align="center">{plan?.category}</TableCell>
      <TableCell align="right">
        <IconButton onClick={(e: any) => setAnchorEl(e.currentTarget)}>
          <Icons.more />
        </IconButton>
        <Menu
          elevation={2}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem
            onClick={() => navigate(`/trainer/plans/view/weekly/${plan?.id}`)}
          >
            Ver plan
          </MenuItem>
          <MenuItem
            onClick={() => navigate(`/trainer/plans/edit/weekly/${plan?.id}`)}
          >
            Editar
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Eliminar</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
}
