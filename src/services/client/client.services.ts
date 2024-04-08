import request from "services/request";

export const getInviteService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/client/v1/get-invite",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getClientsByUserIdService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/client/v1/get-clients-by-user-id",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
