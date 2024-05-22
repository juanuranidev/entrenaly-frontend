export const toPostWeeklyPlanDataAdapter = (data: any) => {
  return {
    name: data?.name,
    categoryId: data?.categoryId,
    clientsIds: data?.clients?.map((client: any) => client?.id),
    days: data?.days.map((day: any) => ({
      dayOfWeekId: day?.dayOfWeekId,
      exercises: day?.exercises?.map((exercise: any) => ({
        id: exercise.id,
        description: exercise.description,
      })),
    })),
  };
};

export const toPutWeeklyPlanDataAdapter = (data: any) => {
  return {
    name: data?.name,
    planId: data?.planId,
    categoryId: data?.categoryId,
    clientsIds: data?.clients?.map((client: any) => client?.id),
    days: data?.days.map((day: any) => ({
      dayOfWeekId: day?.dayOfWeekId,
      plansDayId: day?.plansDaysId,
      exercises: day?.exercises?.map((exercise: any) => ({
        id: exercise.id,
        description: exercise.description,
      })),
    })),
  };
};
