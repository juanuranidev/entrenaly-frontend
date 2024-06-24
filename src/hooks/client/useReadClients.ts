import { Client } from "lib/types/client/client.types";
import { readClientsService } from "services/client/client.services";
import { useState, useEffect } from "react";

type UseReadClients = {
  clients: Client[] | [];
  isLoading: boolean;
};

export const useReadClients = (): UseReadClients => {
  const [clients, setClients] = useState<Client[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadClients = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: Client[] = await readClientsService();

      setClients(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleReadClients();
  }, []);

  return { clients, isLoading };
};
