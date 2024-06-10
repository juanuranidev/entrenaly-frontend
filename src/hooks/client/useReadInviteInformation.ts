import { useEffect, useState } from "react";
import { readInviteInformationService } from "services/client/client.services";

export const useReadInviteInformation = (inviteId: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inviteInformation, setInviteInformation] = useState(null);

  const handleReadInviteInformation = async () => {
    if (!inviteId) return;

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
