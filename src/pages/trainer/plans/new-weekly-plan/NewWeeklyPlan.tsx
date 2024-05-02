import { Box, Card } from "@mui/material";
import PageTitle from "components/common/page-title/PageTitle";
import WeeklyPlanForm from "components/forms/weekly-plan-form/WeeklyPlanForm";

export default function NewWeeklyPlan() {
  return (
    <Box>
      <PageTitle title="Nuevo plan semanal" />
      <Card>
        <WeeklyPlanForm />
      </Card>
    </Box>
  );
}
