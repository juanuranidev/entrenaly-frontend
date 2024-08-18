import { Client } from "lib/types/client/client.types";
import { PlanDay } from "lib/types/plan/plan.types";

export type WeeklyPlanForm = {
  days: PlanDay[] | [];
  clients: Client[] | [];
  name: string;
  categoryId: number | null;
  planId: string | null;
};
