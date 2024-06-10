import { useState, useEffect } from "react";
import { readPlansByClientIdService } from "services/plan/plan.services";

export const useReadPlansByClientId = (clientId: string) => {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleReadPlansByClientId = async () => {
    if (!clientId) return;

    setIsLoading(true);
    try {
      const response = await readPlansByClientIdService(clientId);

      setPlans(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleReadPlansByClientId();
  }, []);

  return { plans, isLoading };
};
