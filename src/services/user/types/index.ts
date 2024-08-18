export type LoginWithEmail = {
  email: string;
  password: string;
};

export type RegisterWithEmail = {
  name: string;
  email: string;
  password: string;
  invite: string | null;
};
