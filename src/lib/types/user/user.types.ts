export type User = {
  id: string;
  name: string;
  email: string;
  image?: string;
  authId?: string;
  createdAt: string;
  updatedAt: string;
  role: Role;
  subscriptionPlan: SubscriptionPlan;
};

export type Role = {
  id: number;
  name: string;
};

export type SubscriptionPlan = {
  id: number;
  name: string;
};

export type AppRelease = {
  id: number;
  date: Date;
  version: string;
  description: string;
};
