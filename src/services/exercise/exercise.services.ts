import request from "services/request";

export const createExerciseService = async (exercise: any) => {
  const response = await request({
    method: "POST",
    url: "/exercise/v1/create",
    data: {
      data: exercise,
    },
  });

  return response.data;
};
export const createVariantService = async (variant: any) => {
  const response = await request({
    method: "POST",
    url: "/exercise/v1/create/variant",
    data: {
      data: variant,
    },
  });

  return response.data;
};
export const createExerciseDescriptionService = async (description: string) => {
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
) => {
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
export const readExercisesCategoriesService = async () => {
  const response = await request({
    method: "GET",
    url: "/exercise/v1/get/categories",
  });

  return response.data;
};
export const readExercisesDescriptionsService = async () => {
  const response = await request({
    method: "GET",
    url: "/exercise/v1/get/exercises-descriptions",
  });

  return response.data;
};
export const updateVariantService = async (variant: any) => {
  const response = await request({
    method: "POST",
    url: "/exercise/v1/update/variant",
    data: {
      data: variant,
    },
  });

  return response.data;
};
