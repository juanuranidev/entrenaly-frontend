import { useState, useEffect } from "react";
import { getAllPlansCategoriesService } from "services/plan/plan.services";

export const useGetPlansCategories = () => {
  const [plansCategories, setPlansCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetPlansCategories = async () => {
    setIsLoading(true);
    try {
      const response = await getAllPlansCategoriesService();

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
