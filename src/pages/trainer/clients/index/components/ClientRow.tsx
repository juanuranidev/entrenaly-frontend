import { useState } from "react";
import {
  Menu,
  Stack,
  Avatar,
  MenuItem,
  TableRow,
  TableCell,
  IconButton,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

type Props = {
  client: any;
};

export default function ClientRow({ client }: Props) {
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
      key={client.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">
        <Stack direction="row" alignItems="center" gap={1}>
          <Avatar
            alt={client?.name}
            src={client?.image}
            sx={{ width: 30, height: 30 }}
          />
          <Typography>{client.name}</Typography>
        </Stack>
      </TableCell>
      {/* <TableCell align="center">Musculacion</TableCell>
      <TableCell align="center">Musculacion Diciembre</TableCell> */}
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
