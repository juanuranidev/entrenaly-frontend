import { Typography, Grid, Button } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomTab from "components/common/custom-tab/CustomTab";
import Icons from "lib/utils/icons/icons";

export default function Updates() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  const [currentView, setCurrentView] = useState<string>("Versión 1.5.0");

  const profileNavbarItems = () => {
    return [
      {
        name: "Versión 1.5.0",
        view: (
          <Grid
            item
            container
            xs={12}
            md={6}
            lg={9}
            spacing={theme?.spacing(2)}
          >
            <Grid item xs={12}>
              <Typography fontSize={18} fontWeight={600}>
                Fecha: 28/07/2024
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Nueva barra de navegación para dispositivos móviles.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Ahora tus clientes pueden cargar su ficha médica cuando entran
                por primera vez en la aplicación.
              </Typography>
            </Grid>
          </Grid>
        ),
      },
      {
        name: "Versión 1.4.0",
        view: (
          <Grid
            item
            container
            xs={12}
            md={6}
            lg={9}
            spacing={theme?.spacing(2)}
          >
            <Grid item xs={12}>
              <Typography fontSize={18} fontWeight={600}>
                Fecha: 14/07/2024
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Ahora se puede descargar un plan en formato pdf.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Se actualizó la pantalla de planes para los clientes.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Ahora se pueden ver los ejercicios que se están seleccionado
                para agregarlos a un plan.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Se arreglaron bugs y se hicieron varias mejoras visuales.
              </Typography>
            </Grid>
          </Grid>
        ),
      },
      {
        name: "Versión 1.3.0",
        view: (
          <Grid
            item
            container
            xs={12}
            md={6}
            lg={9}
            spacing={theme?.spacing(2)}
          >
            <Grid item xs={12}>
              <Typography fontSize={18} fontWeight={600}>
                Fecha: 07/07/2024
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Se actualizó la pantalla de actualizaciones.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Se actualizó la arquitectura del código.
              </Typography>
            </Grid>
          </Grid>
        ),
      },
      {
        name: "Versión 1.2.0",
        view: (
          <Grid
            item
            container
            xs={12}
            md={6}
            lg={9}
            spacing={theme?.spacing(2)}
          >
            <Grid item xs={12}>
              <Typography fontSize={18} fontWeight={600}>
                Fecha: 06/07/2024
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Se agregaron más de 50 ejercicios nuevos.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Se agregó la posibilidad de incluir varios ejercicios en una
                super serie.
              </Typography>
            </Grid>
          </Grid>
        ),
      },
      {
        name: "Versión 1.1.0",
        view: (
          <Grid
            item
            container
            xs={12}
            md={6}
            lg={9}
            spacing={theme?.spacing(2)}
          >
            <Grid item xs={12}>
              <Typography fontSize={18} fontWeight={600}>
                Fecha: 02/07/2024
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Se agregó un nuevo filtro de ejercicios por categoria.
              </Typography>
            </Grid>
          </Grid>
        ),
      },
      {
        name: "Versión 1.0.0",
        view: (
          <Grid
            item
            container
            xs={12}
            md={6}
            lg={9}
            spacing={theme?.spacing(2)}
          >
            <Grid item xs={12}>
              <Typography fontSize={18} fontWeight={600}>
                Fecha: 01/07/2024
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Se agregó una nueva vista para agregar clientes, ver su
                información y editar su ficha médica.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Se agregó una nueva vista para crear planes de tipo semanal,
                verlos, editarlos y asignarlos a clientes.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 14, lg: 16 }}>
                Se agregó una nueva vista para ver ejercicios, crear nuevos y
                agregar variantes a los existentes.
              </Typography>
            </Grid>
          </Grid>
        ),
      },
    ];
  };

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
        container
        xs={12}
        lg={6}
        marginX="auto"
        alignItems="flex-start"
        spacing={theme?.spacing(4)}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          container
          flexDirection="column"
          spacing={theme?.spacing(4)}
        >
          {profileNavbarItems().map((navbarItem: any) => (
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
    </Grid>
  );
}
