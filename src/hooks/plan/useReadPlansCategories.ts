import { useState, useEffect } from "react";
import { readPlansCategoriesService } from "services/plan/plan.services";

export const useReadPlansCategories = () => {
  const [plansCategories, setPlansCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetPlansCategories = async () => {
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
    handleGetPlansCategories();
  }, []);

  return { plansCategories, isLoading };
};
