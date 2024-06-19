import { User } from "../user/user.types";

export type Exercise = {
  id: string;
  name: string;
  video?: string;
  image?: string;
  category: ExerciseCategory;
  user?: User;
  isActive: boolean;
};

export type Variant = {
  id: string;
  name: string;
  video?: string;
  image?: string;
  category: ExerciseCategory;
  exercise: Exercise;
  user?: User;
  isActive: boolean;
};

export type ExerciseCategory = {
  id: number;
  name: string;
};

export type ExerciseDescription = {
  id: number;
  description: string;
  user: null;
};
