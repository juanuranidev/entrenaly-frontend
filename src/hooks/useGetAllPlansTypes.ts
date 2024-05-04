import { useState, useEffect } from "react";
import { getPlansTypesService } from "services/plan/plan.services";

export const useGetAllPlansTypes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [plansTypes, setPlansTypes] = useState([]);

  const handleGetAllPlansTypes = async () => {
    setIsLoading(true);
    try {
      const response = await getPlansTypesService();

      setPlansTypes(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetAllPlansTypes();
  }, []);

  return { plansTypes, isLoading };
};
