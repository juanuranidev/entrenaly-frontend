import request from "services/request";

export const createExerciseService = async (exercise: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "/exercise/v1/create",
      data: {
        data: exercise,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createVariantService = async (variant: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "/exercise/v1/create/variant",
      data: {
        data: variant,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createExerciseDescriptionService = async (description: string) => {
  try {
    const response = await request({
      method: "POST",
      url: "/exercise/v1/post/exercise-description",
      data: {
        data: description,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const readExercisesService = async (name?: string) => {
  try {
    const response = await request({
      method: "GET",
      url: "/exercise/v1/get",
      params: {
        name,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const readExercisesCategoriesService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/exercise/v1/get/categories",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const readExercisesDescriptionsService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/exercise/v1/get/exercises-descriptions",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateVariantService = async (variant: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "/exercise/v1/update/variant",
      data: {
        data: variant,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
