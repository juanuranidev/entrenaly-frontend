import { useState, useEffect } from "react";
import { readPlansTypesService } from "services/plan/plan.services";

export const useReadPlansTypes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [plansTypes, setPlansTypes] = useState([]);

  const handleReadPlansTypes = async () => {
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
