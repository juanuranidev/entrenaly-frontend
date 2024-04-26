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

export const getClientByIdService = async (clientId: string) => {
  try {
    const response = await request({
      method: "GET",
      url: "/client/v1/get-client-by-id",
      params: {
        clientId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateClientMedicalInformationService = async (
  clientMedicalInformation: any
) => {
  try {
    const response = await request({
      method: "POST",
      url: "/client/v1/update-client-medical-information",
      data: {
        data: clientMedicalInformation,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
