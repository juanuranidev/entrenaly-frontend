import { useState, useEffect } from "react";
import { readExercisesService } from "services/exercise/exercise.services";

export const useReadExercises = (name?: string) => {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadExercises = async () => {
    setIsLoading(true);
    try {
      const response = await readExercisesService(name);

      setExercises(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleRefetchExercises = async () => {
    await handleReadExercises();
  };

  useEffect(() => {
    handleReadExercises();
  }, [name]);

  return { exercises, isLoading, handleRefetchExercises };
};
