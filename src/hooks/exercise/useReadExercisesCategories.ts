import { useState, useEffect } from "react";
import { readExercisesCategoriesService } from "services/exercise/exercise.services";

export const useReadExercisesCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [exercisesCategories, setExercisesCategories] = useState([]);

  const handleGetExercisesCategories = async () => {
    setIsLoading(true);
    try {
      const response = await readExercisesCategoriesService();

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
