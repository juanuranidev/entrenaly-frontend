import { useState, useEffect } from "react";
import { readInviteService } from "services/client/client.services";
import { Invite } from "lib/types/client/client.types";

type UseReadInvite = {
  invite: string | null;
  isLoading: boolean;
};

export const useReadInvite = (): UseReadInvite => {
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
