import request from "services/request";

export const createWeeklyPlanService = async (data: any) => {
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
export const readPlansTypesService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/plan/v1/read/plans-types",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const readDaysOfWeekService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/plan/v1/read/days-of-week",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const readPlansCategoriesService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/plan/v1/read/plan-categories",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const readPlansByUserIdService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/plan/v1/read/plans-by-user-id",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const readPlansByClientIdService = async (clientId: string) => {
  try {
    const response = await request({
      method: "GET",
      url: "/plan/v1/read/plans-by-client-id",
      params: {
        clientId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const readWeeklyPlanService = async (planId: string) => {
  try {
    const response = await request({
      method: "GET",
      url: "/plan/v1/read/weekly-plan",
      params: {
        planId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateWeeklyPlanService = async (data: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "/plan/v1/update/weekly-plan",
      data: {
        data,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
