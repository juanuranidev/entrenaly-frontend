import { useState, useEffect } from "react";
import { readPlansByUserIdService } from "services/plan/plan.services";

export const useReadPlansByUserId = () => {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadPlansByUserId = async () => {
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
    handleReadPlansByUserId();
  }, []);

  return { plans, isLoading };
};
