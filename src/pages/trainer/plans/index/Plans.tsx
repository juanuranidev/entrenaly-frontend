import React, { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import PlansTable from "./components/PlansTable";
import PageTitle from "components/common/page-title/PageTitle";
import AddIcon from "@mui/icons-material/Add";

export default function Plans() {
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

  const plans = [
    {
      createdAt: "12/11/22",
      name: "Musculacion Diciembre",
      clientsWithIt: 5,
    },
  ];

  return (
    <Box>
      <PageTitle
        title="Planes"
        action={
          <React.Fragment>
            <Button
              sx={{
                boxShadow: `0px 2px 8px ${alpha(
                  theme.palette.grey[900],
                  0.15
                )}`,
              }}
              id="basic-button"
              variant="contained"
              aria-haspopup="true"
              onClick={handleClick}
              startIcon={<AddIcon />}
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
      <PlansTable plans={plans} />
    </Box>
  );
}
