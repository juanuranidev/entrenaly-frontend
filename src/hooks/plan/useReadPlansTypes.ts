import { PlanType } from "lib/types/plan/plan.types";
import { useState, useEffect } from "react";
import { readPlansTypesService } from "services/plan/plan.services";

type UseReadPlansTypes = {
  plansTypes: PlanType[] | [];
  isLoading: boolean;
};

export const useReadPlansTypes = (): UseReadPlansTypes => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [plansTypes, setPlansTypes] = useState<PlanType[] | []>([]);

  const handleReadPlansTypes = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await readPlansTypesService();

      setPlansTypes(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleReadPlansTypes();
  }, []);

  return { plansTypes, isLoading };
};
