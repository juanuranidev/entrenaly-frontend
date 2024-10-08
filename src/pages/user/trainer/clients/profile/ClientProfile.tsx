import { profileNavbarItems, PROFILE_NAVBAR_ITEMS_NAMES } from "./lib/Utils";
import { Grid, Card, Button } from "@mui/material";
import { ProfileNavbarItem } from "./lib/Utils";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PageTitle from "components/common/page-title/PageTitle";
import CustomTab from "components/common/custom-tab/CustomTab";
import Icons from "lib/utils/icons/icons";

export default function ClientProfile() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  const [currentView, setCurrentView] = useState<string>(
    PROFILE_NAVBAR_ITEMS_NAMES.PROFILE
  );

  return (
    <Grid container spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <PageTitle
          title="Perfil"
          action={
            <Button
              variant="outlined"
              startIcon={<Icons.undo />}
              onClick={() => navigate("/trainer/clients")}
            >
              Volver
            </Button>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Grid container spacing={theme?.spacing(3)}>
            <Grid
              item
              sm={2}
              xs={12}
              container
              flexDirection="column"
              spacing={theme?.spacing(3)}
              mt={{ base: theme?.spacing(0), md: theme?.spacing(4) }}
            >
              {profileNavbarItems().map((navbarItem: ProfileNavbarItem) => (
                <CustomTab
                  key={navbarItem.name}
                  navbarItem={navbarItem}
                  currentView={currentView}
                  setCurrentView={setCurrentView}
                />
              ))}
            </Grid>
            {
              profileNavbarItems().find(
                (navbarItem: ProfileNavbarItem) =>
                  navbarItem.name === currentView
              )?.view
            }
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
