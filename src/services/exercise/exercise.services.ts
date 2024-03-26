import request from "services/request";

export const getAllExercisesService = async (name: string) => {
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
