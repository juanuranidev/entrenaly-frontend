import { toast } from "sonner";

export const createSuccessToastLib = (message: string): any => {
  return toast.success(message);
};

export const createErrorToastLib = (message: string): any => {
  return toast.error(message);
};
