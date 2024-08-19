export type updateVariant = {
  name: string;
  image?: string;
  variantId?: number | null;
  categoryId?: number | null;
  exerciseId?: number | null;
};

export type createVariant = {
  name: string;
  image?: string;
  variantId?: number | null;
  categoryId?: number | null;
  exerciseId?: number | null;
};

export type CreateExercise = {
  name: string;
  image: string;
  categoryId: number | null | undefined;
};
