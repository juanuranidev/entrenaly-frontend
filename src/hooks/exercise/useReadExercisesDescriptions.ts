import { ExerciseDescription } from "lib/types/exercise/exercise.types";
import { useState, useEffect } from "react";
import { readExercisesDescriptionsService } from "services/exercise/exercise.services";

export const useReadExercisesDescriptions = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [exercisesDescriptions, setExercisesDescriptions] = useState<
    ExerciseDescription[] | []
  >([]);

  const handleReadExercisesDescriptions = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: ExerciseDescription[] =
        await readExercisesDescriptionsService();

      setExercisesDescriptions(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleRefetchExercisesDescriptions = async (): Promise<void> => {
    await handleReadExercisesDescriptions();
  };

  useEffect(() => {
    handleReadExercisesDescriptions();
  }, []);

  return {
    isLoading,
    exercisesDescriptions,
    handleRefetchExercisesDescriptions,
  };
};
