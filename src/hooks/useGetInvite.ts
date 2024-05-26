import { useState, useEffect } from "react";
import { getInviteService } from "services/client/client.services";

export const useGetInvite = () => {
  const [invite, setInvite] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetInvite = async () => {
    setIsLoading(true);
    try {
      const response = await getInviteService();

      setInvite(response.id);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetInvite();
  }, []);

  return { invite, isLoading };
};
