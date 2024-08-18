import {
  Exercise,
  ExerciseCategory,
  ExerciseDescription,
} from "lib/types/exercise/exercise.types";
import request from "services/request";
import { CreateExercise, createVariant, updateVariant } from "./lib/types";

export const createExerciseService = async (
  exercise: CreateExercise
): Promise<Exercise> => {
  const response = await request({
    method: "POST",
    url: "/exercise/v1/create",
    data: {
      data: exercise,
    },
  });

  return response.data;
};

export const createVariantService = async (
  variant: createVariant
): Promise<Exercise> => {
  const response = await request({
    method: "POST",
    url: "/exercise/v1/create/variant",
    data: {
      data: variant,
    },
  });

  return response.data;
};

export const createExerciseDescriptionService = async (
  description: string
): Promise<ExerciseDescription> => {
  const response = await request({
    method: "POST",
    url: "/exercise/v1/post/exercise-description",
    data: {
      data: description,
    },
  });

  return response.data;
};

export const readExercisesService = async (
  name?: string,
  exerciseCategoryId?: number | null
): Promise<Exercise[] | []> => {
  const response = await request({
    method: "GET",
    url: "/exercise/v1/get",
    params: {
      name,
      exerciseCategoryId,
    },
  });

  return response.data;
};

export const readExercisesCategoriesService = async (): Promise<
  ExerciseCategory[] | []
> => {
  const response = await request({
    method: "GET",
    url: "/exercise/v1/get/categories",
  });

  return response.data;
};

export const readExercisesDescriptionsService = async (): Promise<
  ExerciseDescription[] | []
> => {
  const response = await request({
    method: "GET",
    url: "/exercise/v1/get/exercises-descriptions",
  });

  return response.data;
};

export const updateVariantService = async (variant: updateVariant) => {
  const response = await request({
    method: "POST",
    url: "/exercise/v1/update/variant",
    data: {
      data: variant,
    },
  });

  return response.data;
};
