import { Exercise } from "../exercise/exercise.types";
import { User } from "../user/user.types";

export type Plan = {
  id: string;
  createdAt: string;
  isActive: boolean;
  updatedAt: string;
  name: string;
  category: PlanCategory;
  type: PlanType;
  user?: User;
};

export type PlanCategory = {
  id: number;
  name: string;
};

export type PlanType = {
  id: number;
  name: string;
};

export type DayOfWeek = {
  id: number;
  name: string;
  order: number;
};

export type PlanDay = {
  id: number;
  plan: Plan | number;
  dayOfWeek: DayOfWeek;
  isActive: boolean;
};

export type PlanExercise = {
  id: number;
  planDay: PlanDay;
  exercise: Exercise;
  description: string;
  isActive: boolean;
};
