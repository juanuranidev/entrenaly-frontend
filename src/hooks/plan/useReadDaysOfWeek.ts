import { DayOfWeek } from "lib/types/plan/plan.types";
import { useState, useEffect } from "react";
import { readDaysOfWeekService } from "services/plan/plan.services";

export const useReadDaysOfWeek = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [daysOfWeek, setDaysOfWeek] = useState<DayOfWeek[] | []>([]);

  const handleReadDaysOfWeek = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: DayOfWeek[] = await readDaysOfWeekService();

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
