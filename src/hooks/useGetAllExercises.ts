import { useState, useEffect } from "react";
import { getAllExercisesService } from "services/exercise/exercise.services";

export const useGetAllExercises = (name?: string) => {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetAllExercises = async () => {
    setIsLoading(true);
    try {
      const response = await getAllExercisesService(name);

      setExercises(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleRefetchGetAllExercises = async () => {
    await handleGetAllExercises();
  };

  useEffect(() => {
    handleGetAllExercises();
  }, [name]);

  return { exercises, isLoading, handleRefetchGetAllExercises };
};
