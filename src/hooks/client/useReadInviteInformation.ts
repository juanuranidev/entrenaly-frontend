import { useEffect, useState } from "react";
import { readInviteInformationService } from "services/client/client.services";

export const useReadInviteInformation = (inviteId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inviteInformation, setInviteInformation] = useState(null);

  const handleReadInviteInformation = async () => {
    setIsLoading(true);
    try {
      const response = await readInviteInformationService(inviteId);

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
