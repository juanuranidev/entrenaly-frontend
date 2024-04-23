import { Box, Card, Button, Grid, useTheme } from "@mui/material";
import { handleRenderNavbarItems } from "./components/Utils";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import PageTitle from "components/common/page-title/PageTitle";
import ViewTab from "./components/view-tab/ViewTab";
import Icons from "lib/utils/icons";

export default function ClientProfile() {
  const theme: any = useTheme();
  const navigate = useNavigate();
  const { id: clientId } = useParams();

  const [currentView, setCurrentView] = useState("Perfil");

  return (
    <Box>
      <PageTitle
        title="Perfil"
        action={
          <Button
            variant="outlined"
            startIcon={<Icons.undo />}
            onClick={() => navigate("/clients")}
          >
            Volver
          </Button>
        }
      />
      <Card sx={{ minHeight: "80dvh" }}>
        <Grid container spacing={theme.spacing(3)} alignItems="flex-start">
          <Grid
            item
            xs={2}
            container
            display="flex"
            flexDirection="column"
            mt={theme?.spacing(4)}
            spacing={theme?.spacing(2)}
          >
            {handleRenderNavbarItems({ clientId }).map((navbarItem) => (
              <ViewTab
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
    </Box>
  );
}
