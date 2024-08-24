import axios, { AxiosResponse } from "axios";
import ENV from "../lib/utils/env";

type Props = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  params?: any;
  data?: any;
};

const request = async ({ method, url, params, data }: Props) => {
  try {
    const response: AxiosResponse<any, any> = await axios({
      url: url,
      data: data,
      method: method,
      params: params,
      baseURL: ENV.BACKEND_BASE_URL,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default request;
