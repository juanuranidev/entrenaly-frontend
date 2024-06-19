export type Client = {
  id: string;
  isActive: boolean;
  userId: string;
  trainerId: string;
  createdAt: string;
  updatedAt: string;
  weight: string;
  height: string;
  goals: string;
  injuries: string;
  medicalConditions: string;
};

export type Invite = {
  id: string;
  trainerInfo: any;
};
