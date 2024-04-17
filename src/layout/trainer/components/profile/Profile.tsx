import {
  Box,
  List,
  Paper,
  Stack,
  Avatar,
  Popper,
  Divider,
  useTheme,
  ButtonBase,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ClickAwayListener,
} from "@mui/material";
import { useRef, useState } from "react";
import { useAuthContext } from "contexts/Auth";
import { signOutService } from "services/user/user.services";
import { useNavigate } from "react-router-dom";
import Icons from "lib/utils/icons";

export default function Profile() {
  const theme: any = useTheme();
  const navigate = useNavigate();
  const anchorRef = useRef<any>(null);
  const { userData } = useAuthContext();

  const [open, setOpen] = useState(false);

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
    <Box>
      <Stack direction="row" spacing={theme?.spacing(1)} alignItems="center">
        <Divider orientation="vertical" flexItem />
        <ButtonBase
          ref={anchorRef}
          aria-haspopup="true"
          aria-label="open profile"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          aria-controls={open ? "profile-grow" : undefined}
          sx={{
            p: theme.spacing(1),
            borderRadius: theme?.spacing(1),
            "&:hover": {
              backgroundColor: theme?.colors?.backgroundHover?.primary,
            },
          }}
        >
          <Typography
            fontSize={15}
            mr={theme?.spacing(1)}
            sx={{ fontWeight: 600 }}
          >
            Hola, {userData?.name}
          </Typography>
          <Avatar
            alt={userData?.name}
            src={userData?.image}
            sx={{ width: 30, height: 30 }}
          />
        </ButtonBase>
      </Stack>
      <Popper
        open={open}
        disablePortal
        role={undefined}
        placement="bottom"
        sx={{ zIndex: 10000 }}
        anchorEl={anchorRef.current}
      >
        <Paper
          sx={{
            width: 200,
            boxShadow: theme.shadows[1],
          }}
        >
          <ClickAwayListener onClickAway={handleClose}>
            <List sx={{ padding: theme?.spacing(1) }} dense>
              <ListItemButton
                sx={{
                  "& .MuiListItemIcon-root, & .MuiTypography-root": {
                    fontSize: 12,
                    fontWeight: 500,
                  },
                }}
                onClick={() => {}}
              >
                <ListItemIcon>
                  <Icons.person style={{ fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText>Perfil</ListItemText>
              </ListItemButton>
              <ListItemButton
                onClick={handleSignOut}
                sx={{
                  "& .MuiListItemIcon-root, & .MuiTypography-root": {
                    fontSize: 12,
                    fontWeight: 500,
                  },
                }}
              >
                <ListItemIcon>
                  <Icons.power style={{ fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText>Cerrar sesion</ListItemText>
              </ListItemButton>
            </List>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Box>
  );
}
