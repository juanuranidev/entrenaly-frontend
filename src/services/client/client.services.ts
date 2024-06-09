import request from "services/request";

export const readClientService = async (clientId: string) => {
  try {
    const response = await request({
      method: "GET",
      url: "/client/v1/read/client",
      params: {
        clientId,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const readClientsService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/client/v1/read/clients",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const readInviteService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/client/v1/read/invite",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const readInviteInformationService = async (inviteId: string) => {
  try {
    const response = await request({
      method: "GET",
      url: "/client/v1/read/invite-information",
      params: { inviteId },
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
      url: "/client/v1/update/client-medical-information",
      data: {
        data: clientMedicalInformation,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
