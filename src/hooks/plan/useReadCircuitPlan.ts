import { Plan } from "lib/types/plan/plan.types";
import { useState, useEffect } from "react";
import { readCircuitPlanService } from "services/plan/plan.services";

type UseReadCircuitPlan = {
  plan: Plan | null;
  isLoading: boolean;
};

export const useReadCircuitPlan = (
  planId: string | undefined
): UseReadCircuitPlan => {
  const [plan, setPlan] = useState<Plan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadWeeklyPlan = async (): Promise<void> => {
    if (!planId) return;

    setIsLoading(true);
    try {
      const response = await readCircuitPlanService(planId);

      setPlan(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleReadWeeklyPlan();
  }, []);

  return { plan, isLoading };
};
