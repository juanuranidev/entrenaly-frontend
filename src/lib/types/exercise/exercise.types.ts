export type Exercise = {
  id: number;
  name: string;
  category: ExerciseCategory;
  hasUser?: boolean;
  video?: string;
  image?: string;
  variant?: Variant | null;
  description?: string | null;
  superset?: boolean;
};

export type Variant = {
  id: number;
  name: string;
  category: ExerciseCategory;
  video?: string;
  image?: string;
};

export type ExerciseCategory = {
  id: number;
  name: string;
};

export type ExerciseDescription = {
  id: number;
  description: string;
};
