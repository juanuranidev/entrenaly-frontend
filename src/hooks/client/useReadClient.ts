import { useState, useEffect } from "react";
import { readClientService } from "services/client/client.services";

export const useReadClient = (clientId: any) => {
  const [client, setClient] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadClient = async () => {
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

  const handleRefetchClient = async () => {
    await handleReadClient();
  };

  useEffect(() => {
    handleReadClient();
  }, []);

  return { client, isLoading, handleRefetchClient };
};
