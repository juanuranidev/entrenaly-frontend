import React, { useState, useRef } from "react";
import {
  List,
  Card,
  Button,
  Popper,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ClickAwayListener,
} from "@mui/material";
import { useGetAllPlansTypes } from "hooks/useGetAllPlansTypes";
import { PLANS_CONSTANTS } from "lib/constants/plans.constants";
import { useThemeContext } from "contexts/Theme";
import { useNavigate } from "react-router-dom";
import PageTitle from "components/common/page-title/PageTitle";
import Icons from "lib/utils/icons";

export default function MainTitle() {
  const navigate = useNavigate();
  const anchorRef = useRef<any>(null);

  const [open, setOpen] = useState(false);

  const { theme } = useThemeContext();
  const { plansTypes } = useGetAllPlansTypes();

  const handleGetUrlByPlanType = (planType: string) => {
    if (planType === PLANS_CONSTANTS.TYPES.WEEKLY) {
      return "/trainer/plans/new/weekly";
    }
    return "";
  };

  return (
    <PageTitle
      title="Planes"
      action={
        <React.Fragment>
          <Button
            ref={anchorRef}
            variant="contained"
            startIcon={<Icons.add />}
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            Agregar nuevo
          </Button>
          <Popper open={open} placement="bottom" anchorEl={anchorRef?.current}>
            <Card
              sx={{ width: 200, padding: 0, borderRadius: theme?.spacing(1) }}
            >
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <List sx={{ padding: theme?.spacing(1) }}>
                  {plansTypes.map((planType: any) => (
                    <ListItemButton
                      key={planType?.id}
                      disabled={
                        planType?.name === PLANS_CONSTANTS.TYPES.CIRCUIT
                      }
                      onClick={() =>
                        navigate(handleGetUrlByPlanType(planType?.name))
                      }
                      sx={{
                        "& .MuiListItemIcon-root, & .MuiTypography-root": {
                          fontSize: 12,
                        },
                      }}
                    >
                      <ListItemIcon>
                        <Icons.pdfs style={{ fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText>{planType?.name}</ListItemText>
                    </ListItemButton>
                  ))}
                </List>
              </ClickAwayListener>
            </Card>
          </Popper>
        </React.Fragment>
      }
    />
  );
}
