import {
  Typography,
  Stack,
  TableCell,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

type Props = {
  plan: any;
};

export default function PlanRow({ plan }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={plan.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">
        <Stack direction="row" alignItems="center" gap={1}>
          <PictureAsPdfIcon />
          <Typography>{plan.name}</Typography>
        </Stack>
      </TableCell>
      <TableCell align="center">{plan.createdAt}</TableCell>
      <TableCell align="center">{plan.clientsWithIt}</TableCell>
      <TableCell align="right">
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          elevation={2}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Ver perfil</MenuItem>
          <MenuItem onClick={handleClose}>Editar</MenuItem>
          <MenuItem onClick={handleClose}>Eliminar</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
}
