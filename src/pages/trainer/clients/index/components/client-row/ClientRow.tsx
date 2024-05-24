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
import { useThemeContext } from "contexts/Theme";
import UpdateMedicalInformationForm from "components/forms/update-medical-informacion/UpdateMedicalInformationForm";
import Icons from "lib/utils/icons";
import moment from "moment";

type Props = {
  client: any;
};

export default function ClientRow({ client }: Props) {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modalUpdateMedicalInformation, setModalUpdateMedicalInformation] =
    useState<boolean>(false);

  return (
    <TableRow hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="left">
        <Stack direction="row" alignItems="center" gap={theme?.spacing(2)}>
          <Avatar
            alt={client?.name}
            src={client?.image}
            sx={{ width: 30, height: 30 }}
          />
          <Typography>{client?.name}</Typography>
        </Stack>
      </TableCell>
      <TableCell align="center">
        <Typography>
          {moment(client?.createdAt).format("DD/MM/YYYY")}
        </Typography>
      </TableCell>
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
            onClick={() => navigate(`/trainer/clients/profile/${client?.id}`)}
          >
            Ver perfil
          </MenuItem>
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
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
