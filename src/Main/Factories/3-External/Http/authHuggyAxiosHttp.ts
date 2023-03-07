import { AxiosHttpClient } from "@/4-External/Http";

export const makeHuggyAxiosHttp = (): AxiosHttpClient => {
  const baseURL = "https://auth.huggy.app/";
  return new AxiosHttpClient({ baseURL, headers: {}, data: {} });
};
