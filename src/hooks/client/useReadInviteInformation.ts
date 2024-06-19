import { Invite } from "lib/types/client/client.types";
import { useEffect, useState } from "react";
import { readInviteInformationService } from "services/client/client.services";

export const useReadInviteInformation = (inviteId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inviteInformation, setInviteInformation] = useState<Invite | null>(
    null
  );

  const handleReadInviteInformation = async (): Promise<void> => {
    if (!inviteId) return;

    setIsLoading(true);
    try {
      const response: Invite = await readInviteInformationService(inviteId);

      setInviteInformation(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleReadInviteInformation();
  }, []);

  return { inviteInformation, isLoading };
};
