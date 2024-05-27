import {
  profileNavbarItems,
  PROFILE_NAVBAR_ITEMS_NAMES,
} from "./components/Utils";
import { Grid, Card, Button } from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomTab from "components/common/custom-tab/CustomTab";
import PageTitle from "components/common/page-title/PageTitle";
import Icons from "lib/utils/icons";

type Props = {};

export default function Profile({}: Props) {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  const [currentView, setCurrentView] = useState(
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
          <Grid container spacing={theme.spacing(3)}>
            <Grid
              item
              sm={2}
              xs={12}
              container
              flexDirection="column"
              spacing={theme?.spacing(3)}
              mt={{ base: theme?.spacing(0), md: theme?.spacing(4) }}
            >
              {profileNavbarItems().map((navbarItem) => (
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
                (navbarItem: any) => navbarItem.name === currentView
              )?.view
            }
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
