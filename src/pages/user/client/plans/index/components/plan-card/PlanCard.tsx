import { Box, Typography } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import Icons from "lib/utils/icons/icons";

type Props = {
  plan: any;
};

export default function PlanCard({ plan }: Props) {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  return (
    <Box
      display="flex"
      flexDirection="column"
      px={theme?.spacing(6)}
      pt={theme?.spacing(4)}
      gap={theme?.spacing(2)}
      sx={{ cursor: "pointer" }}
      borderRadius={theme?.spacing(1)}
      bgcolor={theme?.colors?.background?.secondary}
      boxShadow={"rgba(0, 0, 0, 0.3) 0px 20px 20px -20px;"}
      onClick={() => navigate(`/client/plans/view/weekly/${plan?.id}`)}
    >
      <Icons.pdfs color="error" style={{ fontSize: 100 }} />
      <Typography fontWeight={500} fontSize={14} textAlign="center">
        {plan?.name}
      </Typography>
      <Typography
        fontWeight={700}
        fontSize={16}
        textAlign="center"
        mb={theme?.spacing(3)}
      >
        Ver Plan
      </Typography>
    </Box>
  );
}
