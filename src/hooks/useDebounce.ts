import { useEffect, useState } from "react";

type UseDebounce = {
  debouncedValue: string;
};

export const useDebounce = (value: string, delay: number): UseDebounce => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue };
};
