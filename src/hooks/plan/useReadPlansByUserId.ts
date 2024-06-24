import { Plan } from "lib/types/plan/plan.types";
import { useState, useEffect } from "react";
import { readPlansByUserIdService } from "services/plan/plan.services";

type UseReadPlansByUserId = {
  plans: Plan[] | [];
  isLoading: boolean;
};

export const useReadPlansByUserId = (): UseReadPlansByUserId => {
  const [plans, setPlans] = useState<Plan[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadPlansByUserId = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await readPlansByUserIdService();

      setPlans(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleReadPlansByUserId();
  }, []);

  return { plans, isLoading };
};
