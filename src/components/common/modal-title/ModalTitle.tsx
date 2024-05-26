import { useThemeContext } from "contexts/Theme";
import { ModalTitleStyled } from "./Styles";
import { Box, Typography, useMediaQuery } from "@mui/material";

type Props = {
  title: string;
  action?: any;
};

export default function ModalTitle({ title, action }: Props) {
  const { theme } = useThemeContext();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ModalTitleStyled theme={theme}>
      <Typography fontSize={16} fontWeight={600}>
        {title}
      </Typography>
      {action && !isMobileScreen ? <Box>{action}</Box> : null}
    </ModalTitleStyled>
  );
}
