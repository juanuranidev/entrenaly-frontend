import { useThemeContext } from "contexts/theme/Theme";
import { Box, Typography, useMediaQuery } from "@mui/material";

type Props = {
  title: string;
  action?: any;
};

export default function ModalTitle({ title, action }: Props) {
  const { theme } = useThemeContext();
  const isSmallScreen: boolean = useMediaQuery(
    theme?.breakpoints?.down("md") || "(max-width:900px)"
  );

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: theme?.spacing(3),
      }}
    >
      <Typography fontSize={16} fontWeight={600}>
        {title}
      </Typography>
      {action && !isSmallScreen ? <Box>{action}</Box> : null}
    </Box>
  );
}
