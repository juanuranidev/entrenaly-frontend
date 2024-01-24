import { Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircuitPlanForm from "components/forms/circuit-plan-form/CircuitPlanForm";
import PageTitle from "components/common/page-title/PageTitle";

export default function NewCircuitPlan() {
  const navigate = useNavigate();

  const handleSubmitPlanForm = () => {
    alert("a");
    navigate("/plans");
  };

  return (
    <Box>
      <PageTitle title="Nuevo circuito" />
      <Card>
        <CircuitPlanForm onSubmit={handleSubmitPlanForm} />
      </Card>
    </Box>
  );
}
