import { ExerciseCategory } from "lib/types/exercise/exercise.types";
import { useState, useEffect } from "react";
import { readExercisesCategoriesService } from "services/exercise/exercise.services";

type UseReadExercisesCategories = {
  exercisesCategories: ExerciseCategory[] | [];
  isLoading: boolean;
};

export const useReadExercisesCategories = (): UseReadExercisesCategories => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [exercisesCategories, setExercisesCategories] = useState<
    ExerciseCategory[] | []
  >([]);

  const handleReadExercisesCategories = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: ExerciseCategory[] =
        await readExercisesCategoriesService();

      setExercisesCategories(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleReadExercisesCategories();
  }, []);

  return { exercisesCategories, isLoading };
};
