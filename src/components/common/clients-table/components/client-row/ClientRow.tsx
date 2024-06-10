import {
  Menu,
  Stack,
  Avatar,
  TableRow,
  MenuItem,
  TableCell,
  Typography,
  IconButton,
} from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import Icons from "lib/utils/icons/icons";
import UpdateMedicalInformationForm from "components/forms/update-medical-informacion/UpdateMedicalInformationForm";

type Props = {
  client: any;
};

export default function ClientRow({ client }: Props) {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

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
        {moment(client?.createdAt).format("DD/MM/YYYY")}
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
