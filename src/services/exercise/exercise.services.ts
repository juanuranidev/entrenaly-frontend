import request from "services/request";

export const getAllExercisesService = async (name?: string) => {
  try {
    const response = await request({
      method: "GET",
      url: "/exercise/v1/get-all",
      params: {
        name,
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
      url: "/exercise/v1/create-variant",
      data: {
        data: variant,
      },
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
      url: "/exercise/v1/update-variant",
      data: {
        data: variant,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllExercisesCategoriesService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/exercise/v1/get-categories",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllExercisesDescriptionsService = async () => {
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

export const postExerciseDescriptionService = async (description: string) => {
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
