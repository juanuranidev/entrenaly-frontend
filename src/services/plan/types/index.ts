import { Client } from "lib/types/client/client.types";
import { PlanDay } from "lib/types/plan/plan.types";

export type CreateWeeklyPlan = {
  days: PlanDay[] | [];
  clients: Client[] | [];
  name: string;
  categoryId: number | null;
};

export type UpdateWeeklyPlan = {
  days: PlanDay[] | [];
  clients: Client[] | [];
  name: string;
  planId: string | null | undefined;
  categoryId: number | null;
};

export type CreateCircuitPlan = {
  days: PlanDay[] | [];
  clients: Client[] | [];
  name: string;
  categoryId: number | null;
};

export type UpdateCircuitPlan = {
  days: PlanDay[] | [];
  clients: Client[] | [];
  name: string;
  planId: string | null;
  categoryId: number | null;
};
