import { Plan } from "lib/types/plan/plan.types";
import { useState, useEffect } from "react";
import { readPlansByClientIdService } from "services/plan/plan.services";

export const useReadPlansByClientId = (clientId: string | undefined) => {
  const [plans, setPlans] = useState<Plan[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleReadPlansByClientId = async (): Promise<void> => {
    if (!clientId) return;

    setIsLoading(true);
    try {
      const response: Plan[] = await readPlansByClientIdService(clientId);

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
