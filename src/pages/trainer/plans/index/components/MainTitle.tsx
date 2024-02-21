import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PageTitle from "components/common/page-title/PageTitle";

type Props = {};

const icons = {
  add: AddIcon,
};

export default function MainTitle({}: Props) {
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
            id="basic-button"
            variant="contained"
            aria-haspopup="true"
            onClick={handleClick}
            startIcon={<icons.add />}
            aria-expanded={open ? "true" : undefined}
            aria-controls={open ? "basic-menu" : undefined}
          >
            Agregar nuevo
          </Button>
          <Menu
            open={open}
            elevation={2}
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
