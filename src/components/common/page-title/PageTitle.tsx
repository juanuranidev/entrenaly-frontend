import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { PageTitleStyled } from "./Styles";

type Props = {
  title: string;
  action?: any;
};

export default function PageTitle({ title, action }: Props) {
  const theme: any = useTheme();

  return (
    <PageTitleStyled theme={theme}>
      <Typography fontWeight={800} fontSize={20}>
        {title}
      </Typography>
      {action ? <Box>{action}</Box> : null}
    </PageTitleStyled>
  );
}
