import {
  Box,
  Card,
  Grid,
  List,
  Paper,
  Stack,
  Avatar,
  Popper,
  useTheme,
  ButtonBase,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ClickAwayListener,
} from "@mui/material";
import { useRef, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewSharpIcon from "@mui/icons-material/PowerSettingsNewSharp";
import { signOutService } from "services/user/user.services";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "contexts/Auth";

export default function Profile() {
  const theme: any = useTheme();
  const navigate = useNavigate();
  const anchorRef = useRef<any>(null);
  const { userData } = useAuthContext();
  console.log(userData.image);

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (!anchorRef) {
      return;
    }

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleSignOut = async () => {
    try {
      await signOutService();

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        ref={anchorRef}
        aria-haspopup="true"
        onClick={handleToggle}
        aria-label="open profile"
        aria-controls={open ? "profile-grow" : undefined}
        sx={{
          borderRadius: 2,
          p: theme.spacing(1),
          "&:hover": { bgcolor: theme.colors.brand.primaryHover },
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar src={userData?.image} sx={{ width: 32, height: 32 }} />
          <Typography variant="h6" fontSize={15} sx={{ fontWeight: 500 }}>
            {userData?.name}
          </Typography>
        </Stack>
      </ButtonBase>
      <Popper
        open={open}
        disablePortal
        role={undefined}
        sx={{ zIndex: 10000 }}
        placement="bottom-end"
        anchorEl={anchorRef.current}
      >
        {open ? (
          <Paper
            sx={{
              width: 150,
              padding: 0,
              boxShadow: theme.customShadows.primary,
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <Card
                elevation={0}
                style={{ padding: 0, boxShadow: theme.shadows[1] }}
              >
                <Grid container alignItems="center">
                  <Grid item xs={12} p={0}>
                    <List sx={{ padding: 0 }}>
                      <ListItemButton
                        color="primary"
                        sx={{
                          padding: theme.spacing(1),
                          "& .MuiListItemIcon-root, & .MuiTypography-root": {
                            color: false ? theme.colors.brand.primary : "",
                          },
                        }}
                        onClick={() => {
                          console.log("A");
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: "2rem" }}>
                          <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              fontSize={12}
                              sx={{ fontWeight: 600 }}
                            >
                              Perfil
                            </Typography>
                          }
                        />
                      </ListItemButton>
                      <ListItemButton
                        color="primary"
                        sx={{
                          padding: theme.spacing(1),
                          "& .MuiListItemIcon-root, & .MuiTypography-root": {
                            color: false ? theme.colors.brand.primary : "",
                          },
                        }}
                        onClick={handleSignOut}
                      >
                        <ListItemIcon sx={{ minWidth: "2rem" }}>
                          <PowerSettingsNewSharpIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              fontSize={12}
                              sx={{ fontWeight: 600 }}
                            >
                              Cerrar sesion
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </List>
                  </Grid>
                </Grid>
              </Card>
            </ClickAwayListener>
          </Paper>
        ) : null}
      </Popper>
    </Box>
  );
}
