import { Box, Typography } from "@mui/material";
import { useThemeContext } from "contexts/Theme";
import { useNavigate } from "react-router-dom";
import Icons from "lib/utils/icons/icons";

type Props = {
  plan: any;
};

export default function PlanCard({ plan }: Props) {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  console.log(plan);

  return (
    <Box
      display="flex"
      boxShadow={"rgba(0, 0, 0, 0.3) 0px 20px 20px -20px;"}
      p={theme?.spacing(3)}
      gap={theme?.spacing(2)}
      sx={{ cursor: "pointer" }}
      borderRadius={theme?.spacing(1)}
      bgcolor={theme?.colors?.background?.secondary}
      onClick={() => navigate(`/client/plans/view/weekly/${plan?.id}`)}
    >
      <Icons.pdfs color="error" />
      <Typography fontWeight={500} fontSize={14}>
        {plan?.name}
      </Typography>
    </Box>
  );
}
