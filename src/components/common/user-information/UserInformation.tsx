import moment from "moment";
import { Box, Card, Grid, Avatar, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useAuthContext } from "contexts/auth/Auth";

export default function UserInformation() {
  const { theme } = useThemeContext();
  const { userData } = useAuthContext();

  return (
    <Grid item xs={12}>
      <Card sx={{ display: "flex", gap: theme?.spacing(5) }}>
        <Avatar
          alt={userData?.name}
          src={userData?.image}
          sx={{ width: 65, height: 65 }}
        />
        <Box>
          <Typography fontSize={16} fontWeight={600} mb={theme?.spacing(0.5)}>
            {userData?.name}
          </Typography>
          <Typography fontSize={12} fontWeight={500} sx={{ opacity: 0.8 }}>
            {userData?.email}
          </Typography>
          <Typography fontSize={12} fontWeight={500} sx={{ opacity: 0.8 }}>
            Creado en {moment(userData?.createdAt).format("DD/MM/YYYY")}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
}
