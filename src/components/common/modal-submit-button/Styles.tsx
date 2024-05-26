import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type ModalSubmitButtonBoxProps = {
  theme: any;
};

export const ModalSubmitButtonBoxStyled = styled(
  Box
)<ModalSubmitButtonBoxProps>(({ theme }) => ({
  bottom: 0,
  zIndex: 10,
  height: "100%",
  display: "flex",
  position: "sticky",
  alignItems: "flex-end",
  justifyContent: "center",
  padding: theme?.spacing(3),
  paddingRight: theme?.spacing(0),
  paddingLeft: theme?.spacing(0),
  backgroundColor: theme?.colors?.background?.primary,
}));
