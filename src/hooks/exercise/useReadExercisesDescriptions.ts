import { useState, useEffect } from "react";
import { readExercisesDescriptionsService } from "services/exercise/exercise.services";

export const useReadExercisesDescriptions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [exercisesDescriptions, setExercisesDescriptions] = useState([]);

  const handleReadExercisesDescriptions = async () => {
    setIsLoading(true);
    try {
      const response = await readExercisesDescriptionsService();

      setExercisesDescriptions(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleRefetchGetExercisesDescriptions = async () => {
    await handleReadExercisesDescriptions();
  };

  useEffect(() => {
    handleReadExercisesDescriptions();
  }, []);

  return {
    isLoading,
    exercisesDescriptions,
    handleRefetchGetExercisesDescriptions,
  };
};
