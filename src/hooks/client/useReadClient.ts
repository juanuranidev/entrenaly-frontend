import { useState, useEffect } from "react";
import { readClientService } from "services/client/client.services";

export const useReadClient = (clientId: any) => {
  const [client, setClient] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleGetClientById = async () => {
    if (!clientId) return;

    setIsLoading(true);
    try {
      const response = await readClientService(clientId);

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
