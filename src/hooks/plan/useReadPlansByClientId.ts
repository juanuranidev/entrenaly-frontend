import { Plan } from "lib/types/plan/plan.types";
import { useState, useEffect } from "react";
import { readPlansByClientIdService } from "services/plan/plan.services";

type UseReadPlansByClientId = {
  plans: Plan[] | [];
  isLoading: boolean;
};

export const useReadPlansByClientId = (
  clientId: string | undefined
): UseReadPlansByClientId => {
  const [plans, setPlans] = useState<Plan[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadPlansByClientId = async (): Promise<void> => {
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
