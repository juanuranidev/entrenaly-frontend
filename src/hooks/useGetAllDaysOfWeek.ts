import { useState, useEffect } from "react";
import { getAllDaysOfWeekService } from "services/plan/plan.services";

export const useGetAllDaysOfWeek = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  const handleGetExercisesCategories = async () => {
    setIsLoading(true);
    try {
      const response = await getAllDaysOfWeekService();

      setDaysOfWeek(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetExercisesCategories();
  }, []);

  return { daysOfWeek, isLoading };
};
