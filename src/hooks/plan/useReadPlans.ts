import { useState, useEffect } from "react";
import { readPlansByUserIdService } from "services/plan/plan.services";

export const useReadPlans = () => {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetPlansByUserId = async () => {
    setIsLoading(true);
    try {
      const response = await readPlansByUserIdService();

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
