import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type PageTitleProps = {
  theme: any;
};

export const PageTitleStyled = styled(Box)<PageTitleProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: theme.spacing(3),
}));
