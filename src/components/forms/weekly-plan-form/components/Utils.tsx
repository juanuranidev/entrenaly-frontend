import * as yup from "yup";

export const weeklyPlanFormValidations = yup.object({
  name: yup.string().required(),
  categoryId: yup.string().required(),
  clients: yup
    .array()
    .of(
      yup.object({
        id: yup.string().required(),
      })
    )
    .min(1),
});

// WeeklyPlanForm.tsx
export const handleFormatDays = (data: any) => {
  if (!data || !data.length) return [];

  let formattedData: any = [];

  data.forEach((day: any) => {
    let formattedDay: any = {
      dayOfWeekId: day.dayOfWeekId,
      dayOfWeekName: day.dayOfWeekName,
      plansDaysId: day.plansDaysId,
      dayOfWeekOrder: day.dayOfWeekOrder,
      exercises: [],
    };

    day.exercises.forEach((exercise: any) => {
      let formattedExercise: any = {
        id: exercise.exerciseId,
        name: exercise.exerciseName,
        image: exercise.exerciseImage,
        variant: null,
        description: exercise.exerciseDescription,
      };

      formattedDay.exercises.push(formattedExercise);
    });

    formattedData.push(formattedDay);
  });

  return formattedData;
};
// WeeklyPlanForm.tsx
