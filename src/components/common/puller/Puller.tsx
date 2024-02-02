import { Box, useTheme } from "@mui/material";
import { PullerStyled } from "./Styles";

export default function Puller() {
  const theme: any = useTheme();

  return (
    <Box display="flex" justifyContent="center" m={1}>
      <PullerStyled theme={theme} />
    </Box>
  );
}
