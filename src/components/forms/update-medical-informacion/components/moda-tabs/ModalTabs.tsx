import { Tab, Tabs } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  tabValue: number;
  setTabValue: (value: number) => void;
};

export default function ModalTabs({ tabValue, setTabValue }: Props) {
  const { theme } = useThemeContext();

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Tabs
      value={tabValue}
      variant="fullWidth"
      onChange={handleChange}
      aria-label="basic tabs example"
      sx={{ marginBottom: theme?.spacing(3) }}
    >
      <Tab label="Información general" {...a11yProps(0)} />
      <Tab label="Tipo de cuerpo" {...a11yProps(1)} />
    </Tabs>
  );
}
