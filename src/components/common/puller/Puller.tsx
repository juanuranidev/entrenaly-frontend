import { Box } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";

export default function Puller() {
  const { theme } = useThemeContext();

  return (
    <Box display="flex" justifyContent="center" m={1}>
      <Box
        style={{
          width: 30,
          height: 10,
          borderRadius: 3,
          backgroundColor: theme?.palette.divider,
        }}
      />
    </Box>
  );
}
