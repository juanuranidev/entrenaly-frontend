import * as yup from "yup";

export const weeklyPlanFormValidations = yup.object({
  name: yup.string().required(),
  categoryId: yup.number().required(),
});
