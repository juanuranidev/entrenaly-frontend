import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type HeaderStyledProps = {
  theme: any;
};

export const HeaderStyled = styled(Box)<HeaderStyledProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme?.spacing(1.5),
  backgroundColor: theme?.colors?.background?.primary,
  borderBottom: `2px solid ${theme?.colors?.border?.primary}`,
}));
