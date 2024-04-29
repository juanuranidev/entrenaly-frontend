import request from "services/request";

export const getAllPlansCategoriesService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/plan/v1/get/plan-categories",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
