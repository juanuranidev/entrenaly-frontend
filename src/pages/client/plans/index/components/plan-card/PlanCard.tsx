import { Box, Grid, Typography } from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import Icons from "lib/utils/icons/icons";
import React from "react";

type Props = {
  plan: any;
};

export default function PlanCard({ plan }: Props) {
  const { theme } = useThemeContext();
  console.log(plan);
  return (
    <Box
      display="flex"
      boxShadow={theme?.customShadows.primary}
      p={theme?.spacing(3)}
      gap={theme?.spacing(2)}
      bgcolor={theme?.colors?.background?.secondary}
      borderRadius={theme?.spacing(1)}
    >
      <Icons.pdfs color="error" />
      <Typography>{plan?.name}</Typography>
    </Box>
  );
}
