import { Client } from "../client/client.types";
import { Exercise } from "../exercise/exercise.types";
import { User } from "../user/user.types";

export type Plan = {
  id: string;
  name: string;
  type: PlanType;
  category: PlanCategory;
  createdAt: string;
  clients: Client[] | [] | string[];
  user?: User;
  days?: PlanDay[] | null;
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
  planId: string;
  dayOfWeek: DayOfWeek;
  exercises: Exercise[] | [];
  circuits?: DayCircuit[] | [];
};

export type DayCircuit = {
  id: number;
  planDayId: string;
  order: number;
  description: string;
  exercises: Exercise[] | [];
};

export type PlanExercise = {
  id: number;
  planDay: PlanDay;
  exercise: Exercise;
  description: string;
  isActive: boolean;
};
