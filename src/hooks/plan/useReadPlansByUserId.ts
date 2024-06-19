import { Plan } from "lib/types/plan/plan.types";
import { useState, useEffect } from "react";
import { readPlansByUserIdService } from "services/plan/plan.services";

export const useReadPlansByUserId = () => {
  const [plans, setPlans] = useState<Plan[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadPlansByUserId = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: Plan[] = await readPlansByUserIdService();

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
