import { useState, useEffect } from "react";
import { getAllExercisesDescriptionsService } from "services/exercise/exercise.services";

export const useGetAllExercisesDescriptions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [exercisesDescriptions, setExercisesDescriptions] = useState([]);

  const handleGetAllExercisesDescriptions = async () => {
    setIsLoading(true);
    try {
      const response = await getAllExercisesDescriptionsService();

      setExercisesDescriptions(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleRefetchGetExercisesDescriptions = async () => {
    await handleGetAllExercisesDescriptions();
  };

  useEffect(() => {
    handleGetAllExercisesDescriptions();
  }, []);

  return {
    isLoading,
    exercisesDescriptions,
    handleRefetchGetExercisesDescriptions,
  };
};
