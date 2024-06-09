import { useState, useEffect } from "react";
import { readDaysOfWeekService } from "services/plan/plan.services";

export const useReadDaysOfWeek = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  const handleGetExercisesCategories = async () => {
    setIsLoading(true);
    try {
      const response = await readDaysOfWeekService();

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
