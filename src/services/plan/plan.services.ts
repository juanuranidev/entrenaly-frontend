import {
  DayOfWeek,
  Plan,
  PlanCategory,
  PlanType,
} from "lib/types/plan/plan.types";
import request from "services/request";
import { CreateCircuitPlan } from "./types";

export const createWeeklyPlanService = async (data: any): Promise<Plan> => {
  const response = await request({
    method: "POST",
    url: "/plan/v1/create/weekly-plan",
    data: {
      data,
    },
  });

  return response.data;
};

export const createCircuitPlanService = async (
  data: CreateCircuitPlan
): Promise<Plan> => {
  const response = await request({
    method: "POST",
    url: "/plan/v1/create/circuit-plan",
    data: {
      data,
    },
  });

  return response.data;
};

export const readPlansTypesService = async (): Promise<PlanType[] | []> => {
  const response = await request({
    method: "GET",
    url: "/plan/v1/read/plans-types",
  });

  return response.data;
};

export const readDaysOfWeekService = async (): Promise<DayOfWeek[] | []> => {
  const response = await request({
    method: "GET",
    url: "/plan/v1/read/days-of-week",
  });

  return response.data;
};

export const readPlansCategoriesService = async (): Promise<
  PlanCategory[] | []
> => {
  const response = await request({
    method: "GET",
    url: "/plan/v1/read/plan-categories",
  });

  return response.data;
};

export const readPlansByUserIdService = async (): Promise<Plan[] | []> => {
  const response = await request({
    method: "GET",
    url: "/plan/v1/read/plans-by-user-id",
  });

  return response.data;
};

export const readPlansByClientIdService = async (
  clientId: string
): Promise<Plan[] | []> => {
  const response = await request({
    method: "GET",
    url: "/plan/v1/read/plans-by-client-id",
    params: {
      clientId,
    },
  });

  return response.data;
};

export const readWeeklyPlanService = async (planId: string): Promise<Plan> => {
  const response = await request({
    method: "GET",
    url: "/plan/v1/read/weekly-plan",
    params: {
      planId,
    },
  });

  return response.data;
};

export const readCircuitPlanService = async (planId: string): Promise<Plan> => {
  const response = await request({
    method: "GET",
    url: "/plan/v1/read/circuit-plan",
    params: {
      planId,
    },
  });

  return response.data;
};

export const updateWeeklyPlanService = async (data: any): Promise<Plan> => {
  const response = await request({
    method: "POST",
    url: "/plan/v1/update/weekly-plan",
    data: {
      data,
    },
  });

  return response.data;
};

export const updateCircuitPlanService = async (data: any): Promise<Plan> => {
  const response = await request({
    method: "POST",
    url: "/plan/v1/update/circuit-plan",
    data: {
      data,
    },
  });

  return response.data;
};
