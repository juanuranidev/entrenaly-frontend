import { Exercise } from "lib/types/exercise/exercise.types";
import { useState, useEffect } from "react";
import { readExercisesService } from "services/exercise/exercise.services";

export const useReadExercises = (name?: string) => {
  const [exercises, setExercises] = useState<Exercise[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadExercises = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: Exercise[] = await readExercisesService(name);

      setExercises(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleRefetchExercises = async (): Promise<void> => {
    await handleReadExercises();
  };

  useEffect(() => {
    handleReadExercises();
  }, [name]);

  return { exercises, isLoading, handleRefetchExercises };
};
