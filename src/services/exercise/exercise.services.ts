import request from "services/request";

export const getAllExercisesService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "/exercise/v1/get-all",
      params: {
        // name: "supino",
      },
    });

    console.log(response);

    return response.data;
  } catch (error) {
    throw error;
  }
};
