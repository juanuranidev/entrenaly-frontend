import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlansTable from "./components/PlansTable";
import PageTitle from "components/common/page-title/PageTitle";
import React, { useState } from "react";
import { alpha, useTheme } from "@mui/material/styles";

export default function Plans() {
  const theme = useTheme();
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
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="contained"
            >
              Nueva plantilla
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => navigate("/plans/new")}>
                Plan mensual
              </MenuItem>
              <MenuItem onClick={() => navigate("/plans/new/v2")}>
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
