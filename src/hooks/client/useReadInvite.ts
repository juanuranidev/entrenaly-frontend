import { Invite } from "lib/types/client/client.types";
import { readInviteService } from "services/client/client.services";
import { useState, useEffect } from "react";

export const useReadInvite = () => {
  const [invite, setInvite] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadInvite = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: Invite = await readInviteService();

      setInvite(response.id);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleReadInvite();
  }, []);

  return { invite, isLoading };
};
