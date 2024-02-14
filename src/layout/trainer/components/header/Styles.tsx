import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

type HeaderStyledProps = {
  isLargeScreen: boolean;
};

export const HeaderStyled = styled(Box)<HeaderStyledProps>(
  ({ theme, isLargeScreen }) => ({
    display: "flex",
    height: "5rem",
    alignItems: "center",
    padding: theme.spacing(3),
    backgroundColor: "#ffffff",
    justifyContent: isLargeScreen ? "flex-end" : "space-between",
    borderBottom: `1px solid ${theme.palette.divider}`,
  })
);
