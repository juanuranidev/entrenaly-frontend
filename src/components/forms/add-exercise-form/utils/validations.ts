import * as yup from "yup";

export const addExerciseFormValidations = yup.object().shape({
  name: yup.string().required("Requerido"),
  categoryId: yup.number().required("Requerido"),
});
