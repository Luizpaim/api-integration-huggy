import { HuggyApi } from "@/4-External/Gateways";
import { makeHuggyAxiosHttp } from "../Http";

export const makeHuggyApi = (): HuggyApi => {
  return new HuggyApi(makeHuggyAxiosHttp());
};
