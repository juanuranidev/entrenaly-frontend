import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type ModalTitleProps = {
  theme: any;
};

export const ModalTitleStyled = styled(Box)<ModalTitleProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: theme.spacing(3),
}));
