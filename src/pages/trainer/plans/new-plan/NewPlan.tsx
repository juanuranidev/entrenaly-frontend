import { Box, Card } from "@mui/material";
import PageTitle from "components/common/page-title/PageTitle";
import NewPlanForm from "components/forms/NewPlanForm";
import { useNavigate } from "react-router-dom";

export default function NewPlan() {
  const navigate = useNavigate();

  const handleSubmitPlanForm = () => {
    navigate("/plans");
  };

  return (
    <Box>
      <PageTitle title="Nuevo plan" />
      <Card>
        <NewPlanForm onSubmit={handleSubmitPlanForm} />
      </Card>
    </Box>
  );
}
