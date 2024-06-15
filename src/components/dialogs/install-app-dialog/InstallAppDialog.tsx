import { Dialog, Box, Tabs, Tab, Typography, Grid } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useState } from "react";

type Props = {
  open: boolean;
  close: () => void;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {children}
        </Grid>
      )}
    </Box>
  );
}

export default function InstallAppDialog({ open, close }: Props) {
  const { theme } = useThemeContext();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <Dialog open={open} onClose={close} maxWidth="sm">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Navegador" {...a11yProps(0)} />
          <Tab label="Celular" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Box height={{ xs: "18rem", sm: "22rem", md: "28rem" }} overflow="auto">
        <CustomTabPanel value={value} index={0}>
          <Grid item xs={12}>
            <Typography fontSize={{ xs: 12, md: 14 }} fontWeight={500}>
              Para instalar Entrenaly en tu navegador dirigite al lado derecho
              de la url y hace click en el botón con forma de monitor, luego le
              das a instalar.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: theme?.spacing(1),
              }}
              src="https://res.cloudinary.com/dhodvztdx/image/upload/v1718331309/entrenaly/entrenaly-install-app-desktop_guzqvs.png"
            />
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid item xs={12}>
            <Typography fontSize={{ xs: 12, md: 14 }} fontWeight={500}>
              Para instalar Entrenaly en tu celular dirigite al botón de
              compartir, ahí vas a encontrar la opción "Añadir a la pantalla de
              inicio", cuando selecciones la opción y te salga el paso final le
              das en "agregar".
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%", borderRadius: theme?.spacing(1) }}
              src="https://res.cloudinary.com/dhodvztdx/image/upload/v1718332132/entrenaly/entrenaly_install_app_mobile_1_fufzej.jpg"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%", borderRadius: theme?.spacing(1) }}
              src="https://res.cloudinary.com/dhodvztdx/image/upload/v1718332124/entrenaly/entrenaly_install_app_mobile_2_yozbcx.jpg"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%", borderRadius: theme?.spacing(1) }}
              src="https://res.cloudinary.com/dhodvztdx/image/upload/v1718332105/entrenaly/entrenaly_install_app_mobile_3_l42yhi.jpg"
            />
          </Grid>
        </CustomTabPanel>
      </Box>
    </Dialog>
  );
}
