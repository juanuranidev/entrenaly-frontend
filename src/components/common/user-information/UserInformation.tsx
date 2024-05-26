import moment from "moment";
import { Box, Card, Grid, Avatar, Typography } from "@mui/material";
import { useThemeContext } from "contexts/Theme";

type Props = {
  user: any;
};

export default function UserInformation({ user }: Props) {
  const { theme } = useThemeContext();

  return (
    <Grid item xs={12}>
      <Card sx={{ display: "flex", gap: theme?.spacing(5) }}>
        <Avatar
          alt={user?.name}
          src={user?.image}
          sx={{ width: 65, height: 65 }}
        />
        <Box>
          <Typography fontSize={16} fontWeight={600} mb={theme?.spacing(0.5)}>
            {user?.name}
          </Typography>
          <Typography fontSize={12} fontWeight={500} sx={{ opacity: 0.8 }}>
            {user?.email}
          </Typography>
          <Typography fontSize={12} fontWeight={500} sx={{ opacity: 0.8 }}>
            Creado en {moment(user?.createdAt).format("DD/MM/YYYY")}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
}
