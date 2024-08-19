import { Plan } from "lib/types/plan/plan.types";
import { useState, useEffect } from "react";
import { readWeeklyPlanService } from "services/plan/plan.services";

type UseReadWeeklyPlan = {
  plan: Plan | null;
  isLoading: boolean;
};

export const useReadWeeklyPlan = (
  planId: string | undefined
): UseReadWeeklyPlan => {
  const [plan, setPlan] = useState<Plan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadWeeklyPlan = async (): Promise<void> => {
    if (!planId) return;

    setIsLoading(true);
    try {
      const response: Plan = await readWeeklyPlanService(planId);

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
