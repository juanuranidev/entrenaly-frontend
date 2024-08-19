import { toast } from "sonner";

export const createSuccessToastLib = (message: string): string | number => {
  return toast.success(message);
};

export const createErrorToastLib = (message: string): string | number => {
  return toast.error(message);
};
