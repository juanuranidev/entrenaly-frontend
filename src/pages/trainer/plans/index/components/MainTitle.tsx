import React, { useState } from "react";
import { Button, Menu, MenuItem, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import PageTitle from "components/common/page-title/PageTitle";

type Props = {};

const icons = {
  add: AddIcon,
};

export default function MainTitle({}: Props) {
  const theme: any = useTheme();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <PageTitle
      title="Planes"
      action={
        <React.Fragment>
          <Button
            sx={{
              boxShadow: `0px 2px 8px ${alpha(theme.palette.grey[900], 0.15)}`,
            }}
            id="basic-button"
            variant="contained"
            aria-haspopup="true"
            onClick={handleClick}
            startIcon={<icons.add />}
            aria-expanded={open ? "true" : undefined}
            aria-controls={open ? "basic-menu" : undefined}
          >
            Nuevo
          </Button>
          <Menu
            open={open}
            elevation={4}
            id="basic-menu"
            anchorEl={anchorEl}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => navigate("/plans/new/weekly")}>
              Plan mensual
            </MenuItem>
            <MenuItem onClick={() => navigate("/plans/new/circuit")}>
              Circuito
            </MenuItem>
          </Menu>
        </React.Fragment>
      }
    />
  );
}
