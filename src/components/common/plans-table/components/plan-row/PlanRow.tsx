import {
  Menu,
  Stack,
  TableRow,
  MenuItem,
  TableCell,
  Typography,
  IconButton,
} from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { PLAN_CONSTANTS } from "lib/constants/plan/plan.constants";
import { downloadPdfLib } from "lib/utils/download-pdf/DownloadPdf";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Plan } from "lib/types/plan/plan.types";
import moment from "moment";
import Icons from "lib/utils/icons/icons";
import React from "react";

type Props = {
  plan: Plan;
};

export default function PlanRow({ plan }: Props) {
  const { theme } = useThemeContext();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleRenderPlanEditUrl = (plan: Plan): string => {
    switch (plan?.type?.name) {
      case PLAN_CONSTANTS.TYPES.WEEKLY:
        return `/trainer/plans/edit/weekly/${plan?.id}`;

      case PLAN_CONSTANTS.TYPES.CIRCUIT:
        return `/trainer/plans/edit/circuit/${plan?.id}`;

      default:
        return "";
    }
  };

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
      <TableCell align="center">{plan?.type?.name}</TableCell>
      <TableCell align="center">{plan?.category?.name}</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setAnchorEl(e.currentTarget)
          }
        >
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
            onClick={() => {
              downloadPdfLib(PLAN_CONSTANTS.TYPES.WEEKLY, plan?.id);
              setAnchorEl(null);
            }}
          >
            Descargar pdf
          </MenuItem>
          <MenuItem onClick={() => navigate(handleRenderPlanEditUrl(plan))}>
            Editar
          </MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
}
