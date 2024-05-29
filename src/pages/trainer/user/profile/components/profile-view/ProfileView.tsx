import { Grid, Typography } from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import { useReadUser } from "hooks/user/useReadUser";
import UserInformation from "components/common/user-information/UserInformation";

export default function ProfileView() {
  const { theme } = useThemeContext();
  const { user } = useReadUser();

  return (
    <Grid item container xs={12} sm={10} spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <Typography fontSize={20} fontWeight={600}>
          Perfil
        </Typography>
      </Grid>
      <UserInformation user={user} />
    </Grid>
  );
}
