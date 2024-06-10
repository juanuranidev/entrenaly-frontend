import { useState, useEffect } from "react";
import { readClientsService } from "services/client/client.services";

export const useReadClients = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReadClients = async () => {
    setIsLoading(true);
    try {
      const response = await readClientsService();

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
