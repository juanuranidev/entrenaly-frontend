import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type HeaderStyledProps = {
  theme: any;
  isLargeScreen: boolean;
};

export const HeaderStyled = styled(Box)<HeaderStyledProps>(
  ({ theme, isLargeScreen }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5),
    backgroundColor: "#ffffff",
    borderBottom: `1px solid ${theme?.colors?.border?.primary}`,
    justifyContent: isLargeScreen ? "flex-end" : "space-between",
  })
);
