import { Box, Card, Stack, Typography, Divider } from "@mui/material";
import { useThemeContext } from "contexts/theme/Theme";
import { useNavigate } from "react-router-dom";
import { Plan } from "lib/types/plan/plan.types";
import Icons from "lib/utils/icons/icons";

type Props = {
  plan: Plan;
};

export default function PlanCard({ plan }: Props) {
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  return (
    <Card
      sx={{
        cursor: "pointer",
        padding: theme?.spacing(2),
        width: {
          xs: "100%",
          sm: `calc(50% - ${theme?.spacing(2)})`,
          md: "100%",
          lg: `calc(33.33% - ${theme?.spacing(2)})`,
          xl: `calc(25% - ${theme?.spacing(2)})`,
        },
        "&:hover": {
          backgroundColor: theme?.colors?.background?.secondary,
          transition: "ease 0.4s",
        },
      }}
      onClick={() => navigate(`/client/plans/view/weekly/${plan?.id}`)}
    >
      <Box display="flex" flexDirection="column" gap={theme?.spacing(2)}>
        <Stack flexDirection="row" alignItems="center" gap={theme?.spacing(2)}>
          <Icons.plans color="primary" style={{ fontSize: 35 }} />
          <Typography fontWeight={600} fontSize={{ xs: 16, md: 20 }}>
            {plan?.name}
          </Typography>
        </Stack>
        <Stack
          flexDirection="row"
          alignItems="center"
          gap={theme?.spacing(0.5)}
        >
          <Icons.dumbbell color="primary" style={{ fontSize: 20 }} />
          <Typography fontWeight={500} fontSize={{ xs: 12, md: 14 }}>
            {plan?.category?.name}
          </Typography>
        </Stack>
        <Stack
          flexDirection="row"
          alignItems="center"
          gap={theme?.spacing(0.5)}
        >
          <Icons.calendar color="primary" style={{ fontSize: 20 }} />
          <Typography fontWeight={500} fontSize={{ xs: 12, md: 14 }}>
            {plan?.type?.name}
          </Typography>
        </Stack>
        <Divider />
        <Typography fontWeight={600} fontSize={14} textAlign="center">
          Ver plan
        </Typography>
      </Box>
    </Card>
  );
}
