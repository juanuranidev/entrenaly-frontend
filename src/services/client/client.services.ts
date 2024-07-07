import request from "services/request";

export const readClientService = async (clientId: string) => {
  const response = await request({
    method: "GET",
    url: "/client/v1/read/client",
    params: {
      clientId,
    },
  });

  return response.data;
};
export const readClientsService = async () => {
  const response = await request({
    method: "GET",
    url: "/client/v1/read/clients",
  });

  return response.data;
};
export const readInviteService = async () => {
  const response = await request({
    method: "GET",
    url: "/client/v1/read/invite",
  });

  return response.data;
};
export const readInviteInformationService = async (inviteId: string) => {
  const response = await request({
    method: "GET",
    url: "/client/v1/read/invite-information",
    params: { inviteId },
  });

  return response.data;
};
export const updateClientMedicalInformationService = async (
  clientMedicalInformation: any
) => {
  const response = await request({
    method: "POST",
    url: "/client/v1/update/client-medical-information",
    data: {
      data: clientMedicalInformation,
    },
  });

  return response.data;
};
