import { Box, styled } from "@mui/material";

type PullerStyledProps = {
  theme: any;
};

export const PullerStyled = styled(Box)<PullerStyledProps>(
  ({ theme }: any) => ({
    width: 30,
    height: 10,
    borderRadius: 3,
    backgroundColor: theme.palette.divider,
  })
);
