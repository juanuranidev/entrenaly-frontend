import { Box } from "@mui/material";
import { PullerStyled } from "./Styles";
import { useThemeContext } from "contexts/theme/Theme";

export default function Puller() {
  const { theme } = useThemeContext();

  return (
    <Box display="flex" justifyContent="center" m={1}>
      <PullerStyled theme={theme} />
    </Box>
  );
}
