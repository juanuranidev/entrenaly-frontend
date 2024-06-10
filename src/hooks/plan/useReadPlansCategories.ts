import { useState, useEffect } from "react";
import { readPlansCategoriesService } from "services/plan/plan.services";

export const useReadPlansCategories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [plansCategories, setPlansCategories] = useState([]);

  const handleReadPlansCategories = async () => {
    setIsLoading(true);
    try {
      const response = await readPlansCategoriesService();

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
