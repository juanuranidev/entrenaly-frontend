import { useState, useEffect } from "react";
import { readInviteService } from "services/client/client.services";

export const useReadInvite = () => {
  const [invite, setInvite] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadInvite = async () => {
    setIsLoading(true);
    try {
      const response = await readInviteService();

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
