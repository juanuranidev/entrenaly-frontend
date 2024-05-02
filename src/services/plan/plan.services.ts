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

export const getAllDaysOfWeekService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/plan/v1/get/days-of-week",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postWeeklyPlanService = async (data: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "/plan/v1/create/weekly-plan",
      data: {
        data,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllPlansByUserIdService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/plan/v1/get/plans-by-user-id",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllPlansByClientIdService = async (clientId: string) => {
  try {
    const response = await request({
      method: "GET",
      url: "/plan/v1/get/plans-by-client-id",
      params: {
        clientId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
