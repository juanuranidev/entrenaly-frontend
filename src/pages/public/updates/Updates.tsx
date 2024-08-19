import { Typography, Grid, Button, Box } from "@mui/material";
import { useReadAppReleases } from "hooks/user/useReadAppReleases";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import { AppRelease } from "lib/types/user/user.types";
import Icons from "lib/utils/icons/icons";
import moment from "moment";
import ReleaseDescription from "./components/release-description/ReleaseDescription";

export default function Updates() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const { appReleases } = useReadAppReleases();
  const reversedAppReleases = [...appReleases].reverse();

  return (
    <Grid container spacing={theme?.spacing(4)} pr={theme?.spacing(2)}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Button
          variant="outlined"
          startIcon={<Icons.undo />}
          onClick={() => navigate("/")}
        >
          Volver
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {reversedAppReleases.length
          ? reversedAppReleases.map((appRelease: AppRelease) => (
              <Box
                width={{ xs: "90%", md: "40%" }}
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                key={appRelease.version}
                sx={{
                  marginBottom: theme?.spacing(4),
                }}
              >
                <Grid
                  item
                  xs={12}
                  mb={theme?.spacing(1)}
                  gap={theme?.spacing(1)}
                >
                  <Typography textAlign="left" fontSize={18} fontWeight={600}>
                    Versión {appRelease.version}
                  </Typography>
                  <Typography
                    fontSize={14}
                    fontWeight={600}
                    sx={{ opacity: 0.6 }}
                  >
                    ({moment(appRelease.date).format("DD-MM-YYYY")})
                  </Typography>
                </Grid>
                <ReleaseDescription description={appRelease.description} />
              </Box>
            ))
          : null}
      </Grid>
    </Grid>
  );
}
