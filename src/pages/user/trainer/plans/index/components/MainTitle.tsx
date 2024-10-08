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
import { useReadPlansTypes } from "hooks/plan/useReadPlansTypes";
import { PLAN_CONSTANTS } from "lib/constants/plan/plan.constants";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import { PlanType } from "lib/types/plan/plan.types";
import PageTitle from "components/common/page-title/PageTitle";
import Icons from "lib/utils/icons/icons";

export default function MainTitle() {
  const navigate = useNavigate();
  const anchorRef = useRef<any>(null);

  const [open, setOpen] = useState<boolean>(false);

  const { theme } = useThemeContext();
  const { plansTypes } = useReadPlansTypes();

  const handleGetUrlByPlanType = (planType: string): string => {
    if (planType === PLAN_CONSTANTS.TYPES.WEEKLY) {
      return "/trainer/plans/new/weekly";
    } else if (planType === PLAN_CONSTANTS.TYPES.CIRCUIT) {
      return "/trainer/plans/new/circuit";
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
                  {plansTypes.map((planType: PlanType) => (
                    <ListItemButton
                      key={planType?.id}
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
