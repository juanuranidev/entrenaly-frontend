import { useState, useEffect } from "react";
import { readDaysOfWeekService } from "services/plan/plan.services";

export const useReadDaysOfWeek = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  const handleReadDaysOfWeek = async () => {
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
    handleReadDaysOfWeek();
  }, []);

  return { daysOfWeek, isLoading };
};
