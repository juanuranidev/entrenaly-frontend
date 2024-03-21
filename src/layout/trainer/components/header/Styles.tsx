import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "5rem",
  alignItems: "center",
  padding: theme.spacing(3),
  backgroundColor: "#ffffff",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
