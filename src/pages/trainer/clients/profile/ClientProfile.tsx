import { handleRenderNavbarItems } from "./components/Utils";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Card, Button } from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import { useState } from "react";
import PageTitle from "components/common/page-title/PageTitle";
import ViewTab from "./components/view-tab/ViewTab";
import Icons from "lib/utils/icons/icons";

export default function ClientProfile() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const { id: clientId } = useParams();

  const [currentView, setCurrentView] = useState("Perfil");

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
              {handleRenderNavbarItems({ clientId }).map((navbarItem) => (
                <ViewTab
                  key={navbarItem.name}
                  navbarItem={navbarItem}
                  currentView={currentView}
                  setCurrentView={setCurrentView}
                />
              ))}
            </Grid>
            {
              handleRenderNavbarItems({ clientId }).find(
                (navbarItem: any) => navbarItem.name === currentView
              )?.view
            }
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
