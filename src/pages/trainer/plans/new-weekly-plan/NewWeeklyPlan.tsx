import { Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WeeklyPlanForm from "components/forms/weekly-plan-form/WeeklyPlanForm";
import PageTitle from "components/common/page-title/PageTitle";

export default function NewWeeklyPlan() {
  const navigate = useNavigate();

  const handleSubmitPlanForm = () => {
    navigate("/plans");
  };

  return (
    <Box>
      <PageTitle title="Nuevo plan semanal" />
      <Card>
        <WeeklyPlanForm onSubmit={handleSubmitPlanForm} />
      </Card>
    </Box>
  );
}
