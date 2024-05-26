import { useState, useEffect } from "react";
import { getClientByIdService } from "services/client/client.services";

export const useGetClientById = (clientId: string) => {
  const [client, setClient] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleGetClientById = async () => {
    if (!clientId) return;

    setIsLoading(true);
    try {
      const response = await getClientByIdService(clientId);

      setClient(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleRefetchGetClientById = async () => {
    await handleGetClientById();
  };

  useEffect(() => {
    handleGetClientById();
  }, []);

  return { client, isLoading, handleRefetchGetClientById };
};
