import { useState, useEffect } from "react";
import { getAllPlansByUserIdService } from "services/plan/plan.services";

export const useReadPlans = () => {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetPlansByUserId = async () => {
    setIsLoading(true);
    try {
      const response = await getAllPlansByUserIdService();

      setPlans(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetPlansByUserId();
  }, []);

  return { plans, isLoading };
};
