import { User } from "../user/user.types";

export type Client = {
  id: string;
  name: string;
  user: User;
  image: string;
  email: string;
  isActive: boolean;
  userId: string;
  trainerId: string;
  createdAt: string;
  updatedAt: string;
  weight?: string;
  height?: string;
  goals?: string;
  injuries?: string;
  medicalConditions?: string;
};

export type Invite = {
  id: string;
  trainerName?: string | null;
  trainerImage?: string | null;
};
