import { useState, useEffect } from "react";
import { getAllExercisesService } from "services/exercise/exercise.services";

export const useGetAllExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetClientsByUserId = async () => {
    setIsLoading(true);
    try {
      const response = await getAllExercisesService();

      setExercises(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetClientsByUserId();
  }, []);

  return { exercises, isLoading };
};
