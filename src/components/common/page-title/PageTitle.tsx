import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { PageTitleStyled } from "./Styles";

type Props = {
  title: string;
  action?: any;
};

export default function PageTitle({ title, action }: Props) {
  const theme: any = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <PageTitleStyled theme={theme}>
      <Typography fontWeight={800} fontSize={20}>
        {title}
      </Typography>
      {action && !isSmallScreen ? <Box>{action}</Box> : null}
    </PageTitleStyled>
  );
}
