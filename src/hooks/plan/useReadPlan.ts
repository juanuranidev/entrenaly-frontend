import { useState, useEffect } from "react";
import { readWeeklyPlanService } from "services/plan/plan.services";

export const useReadPlan = (planId: string | undefined) => {
  const [plan, setPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetPlanById = async () => {
    if (!planId) return;

    setIsLoading(true);
    try {
      const response = await readWeeklyPlanService(planId);

      setPlan(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetPlanById();
  }, []);

  return { plan, isLoading };
};
