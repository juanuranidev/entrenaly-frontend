import {
  Avatar,
  Box,
  ButtonBase,
  Popper,
  Stack,
  Typography,
  ClickAwayListener,
  Card,
  Grid,
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewSharpIcon from "@mui/icons-material/PowerSettingsNewSharp";

export default function Profile() {
  const theme: any = useTheme();
  const anchorRef = useRef<any>(null);

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

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        ref={anchorRef}
        aria-haspopup="true"
        onClick={handleToggle}
        aria-label="open profile"
        aria-controls={open ? "profile-grow" : undefined}
        sx={{
          p: 0.25,
          borderRadius: 2,
          "&:hover": { bgcolor: "#eeeeee" },
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar alt="profile user" src={""} sx={{ width: 32, height: 32 }} />
          <Typography>Juan Urani</Typography>
        </Stack>
      </ButtonBase>
      <Popper
        open={open}
        disablePortal
        role={undefined}
        sx={{ zIndex: 10000 }}
        placement="bottom-end"
        anchorEl={anchorRef.current}
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 5],
              },
            },
          ],
        }}
      >
        {open ? (
          <Paper
            sx={{
              //   boxShadow: theme.customShadows.z1,
              width: 290,
              minWidth: 240,
              maxWidth: 290,
              //   [theme.breakpoints.down("md")]: {
              // maxWidth: 250,
              //   },/
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <Card
                elevation={0}
                style={{ padding: 10, boxShadow: theme.shadows[1] }}
              >
                {/* <CardContent
                  sx={{
                    p: 0,
                    "& .MuiCardContent-root:last-child": {
                      paddingBottom: 0,
                    },
                  }}
                > */}
                <Grid container alignItems="center">
                  <Grid item xs={12} p={2}>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <Avatar
                        alt="profile user"
                        src={""}
                        sx={{ width: 32, height: 32 }}
                      />
                      <Stack>
                        <Typography variant="h6">John Doe</Typography>
                        <Typography variant="body2" color="textSecondary">
                          UI/UX Designer
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} p={0}>
                    <List component="nav">
                      <ListItemButton>
                        <ListItemIcon>
                          <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Perfil" />
                      </ListItemButton>
                      <Divider />
                      <ListItemButton>
                        <ListItemIcon>
                          <PowerSettingsNewSharpIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Cerrar sesión" />
                      </ListItemButton>
                    </List>
                  </Grid>
                </Grid>
                {/* </CardContent> */}
              </Card>
            </ClickAwayListener>
          </Paper>
        ) : null}
      </Popper>
    </Box>
  );
}