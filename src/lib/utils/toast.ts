import { toast } from "sonner";

export const createSuccessToastLib = (message: string) => {
  return toast.success(message);
};

export const createErrorToastLib = (message: string) => {
  return toast.error(message);
};
