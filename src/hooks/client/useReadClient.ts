import { Client } from "lib/types/client/client.types";
import { readClientService } from "services/client/client.services";
import { useState, useEffect } from "react";

export const useReadClient = (clientId: string) => {
  const [client, setClient] = useState<Client | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadClient = async (): Promise<void> => {
    if (!clientId) return;

    setIsLoading(true);
    try {
      const response: Client = await readClientService(clientId);

      setClient(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleRefetchClient = async (): Promise<void> => {
    await handleReadClient();
  };

  useEffect(() => {
    handleReadClient();
  }, []);

  return { client, isLoading, handleRefetchClient };
};
