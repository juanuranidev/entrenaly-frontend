import { Client, Invite } from "lib/types/client/client.types";
import request from "services/request";
import { UpdateClientMedicalInformation } from "./types";

export const readClientService = async (clientId: string): Promise<Client> => {
  const response = await request({
    method: "GET",
    url: "/client/v1/read/client",
    params: {
      clientId,
    },
  });

  return response.data;
};

export const readClientsService = async (): Promise<Client[]> => {
  const response = await request({
    method: "GET",
    url: "/client/v1/read/clients",
  });

  return response.data;
};

export const readInviteService = async (): Promise<Invite> => {
  const response = await request({
    method: "GET",
    url: "/client/v1/read/invite",
  });

  return response.data;
};

export const readInviteInformationService = async (
  inviteId: string
): Promise<Invite> => {
  const response = await request({
    method: "GET",
    url: "/client/v1/read/invite-information",
    params: { inviteId },
  });

  return response.data;
};

export const updateClientMedicalInformationService = async (
  clientMedicalInformation: UpdateClientMedicalInformation
): Promise<Client> => {
  const response = await request({
    method: "POST",
    url: "/client/v1/update/client-medical-information",
    data: {
      data: clientMedicalInformation,
    },
  });

  return response.data;
};

export const updateClientOnboardingStatusService = async (
  clientId: string,
  onboardingStatus: boolean
) => {
  const response = await request({
    method: "POST",
    url: "/client/v1/update/client-onboarding-status",
    params: {
      clientId,
      onboardingStatus,
    },
  });

  return response.data;
};
