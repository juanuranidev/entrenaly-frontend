import { Box, Typography, useMediaQuery } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";

type Props = {
  title: string;
  action?: any;
};

export default function PageTitle({ title, action }: Props) {
  const { theme } = useThemeContext();
  const isLargeScreen: boolean = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      paddingLeft={isLargeScreen ? theme?.spacing(0) : theme?.spacing(4)}
      paddingRight={isLargeScreen ? theme?.spacing(0) : theme?.spacing(4)}
    >
      <Typography fontWeight={700} fontSize={20}>
        {title}
      </Typography>
      {action ? <Box>{action}</Box> : null}
    </Box>
  );
}
