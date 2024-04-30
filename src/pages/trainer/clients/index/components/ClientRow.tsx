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
import { useNavigate } from "react-router-dom";
import Icons from "lib/utils/icons";
import UpdateMedicalInformationForm from "components/forms/update-medical-informacion/UpdateMedicalInformationForm";

type Props = {
  client: any;
};

export default function ClientRow({ client }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modalUpdateMedicalInformation, setModalUpdateMedicalInformation] =
    useState<boolean>(false);

  const navigate = useNavigate();
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
      tabIndex={-1}
      role="checkbox"
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
          <Typography>{client?.name}</Typography>
        </Stack>
      </TableCell>
      <TableCell align="right">
        <IconButton
          id="basic-button"
          aria-haspopup="true"
          onClick={handleClick}
          aria-expanded={open ? "true" : undefined}
          aria-controls={open ? "basic-menu" : undefined}
        >
          <Icons.more />
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
          <MenuItem onClick={() => navigate(`/clients/profile/${client?.id}`)}>
            Ver perfil
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              setModalUpdateMedicalInformation(true);
            }}
          >
            Editar ficha médica
          </MenuItem>
        </Menu>
      </TableCell>
      <UpdateMedicalInformationForm
        clientSelected={client}
        open={modalUpdateMedicalInformation}
        onClose={() => setModalUpdateMedicalInformation(false)}
      />
    </TableRow>
  );
}
