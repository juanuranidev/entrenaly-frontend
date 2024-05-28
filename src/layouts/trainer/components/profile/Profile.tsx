import {
  Box,
  List,
  Card,
  Stack,
  Avatar,
  Popper,
  Divider,
  ButtonBase,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ClickAwayListener,
} from "@mui/material";
import { useRef, useState } from "react";
import { useThemeContext } from "contexts/Theme";
import { useAuthContext } from "contexts/Auth";
import { signOutService } from "services/user/user.services";
import { useNavigate } from "react-router-dom";
import Icons from "lib/utils/icons/icons";

export default function Profile() {
  const navigate = useNavigate();
  const anchorRef = useRef<any>(null);

  const { theme } = useThemeContext();
  const { userData, setUserData } = useAuthContext();

  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOutService();

      navigate("/");
      setUserData(null);
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
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          sx={{
            p: theme?.spacing(1),
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
      <Popper open={open} placement="bottom" anchorEl={anchorRef?.current}>
        <Card
          sx={{
            width: 200,
            padding: 0,
            borderRadius: theme?.spacing(1),
          }}
        >
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <List sx={{ padding: theme?.spacing(1) }}>
              <ListItemButton
                sx={{
                  "& .MuiListItemIcon-root, & .MuiTypography-root": {
                    fontSize: 12,
                  },
                }}
                onClick={() => navigate("/trainer/profile")}
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
        </Card>
      </Popper>
    </Box>
  );
}
