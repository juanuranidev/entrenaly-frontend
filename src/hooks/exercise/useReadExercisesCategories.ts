import { useState, useEffect } from "react";
import { getAllExercisesCategoriesService } from "services/exercise/exercise.services";

export const useReadExercisesCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [exercisesCategories, setExercisesCategories] = useState([]);

  const handleGetExercisesCategories = async () => {
    setIsLoading(true);
    try {
      const response = await getAllExercisesCategoriesService();

      setExercisesCategories(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetExercisesCategories();
  }, []);

  return { exercisesCategories, isLoading };
};
