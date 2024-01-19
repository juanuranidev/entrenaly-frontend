import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { PageTitleStyled } from "./Styles";

type Props = {
  title: string;
  action: any;
};

export default function PageTitle({ title, action }: Props) {
  const theme: any = useTheme();

  return (
    <PageTitleStyled theme={theme}>
      <Typography fontWeight={600} fontSize={20}>
        {title}
      </Typography>
      <Box>{action}</Box>
    </PageTitleStyled>
  );
}
