import { useState, useEffect } from "react";
import { readWeeklyPlanService } from "services/plan/plan.services";

export const useReadWeeklyPlan = (planId: any) => {
  const [plan, setPlan] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadWeeklyPlan = async () => {
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
    handleReadWeeklyPlan();
  }, []);

  return { plan, isLoading };
};
