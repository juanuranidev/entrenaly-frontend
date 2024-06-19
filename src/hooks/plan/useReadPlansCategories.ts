import { PlanCategory } from "lib/types/plan/plan.types";
import { useState, useEffect } from "react";
import { readPlansCategoriesService } from "services/plan/plan.services";

export const useReadPlansCategories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [plansCategories, setPlansCategories] = useState<PlanCategory[] | []>(
    []
  );

  const handleReadPlansCategories = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: PlanCategory[] = await readPlansCategoriesService();

      setPlansCategories(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleReadPlansCategories();
  }, []);

  return { plansCategories, isLoading };
};
