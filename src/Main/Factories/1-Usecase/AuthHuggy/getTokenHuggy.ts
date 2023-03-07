import { GetTokenHuggy, setupGetTokenHuggy } from "@/2-Usecase/AuthHuggy";
import { makeHuggyApi } from "../../3-External/Gateways/authHuggyApi";
import { makeCryptoUtils } from "../../3-External/Utils/creypto";

export const makeGetTokenHuggy = (): GetTokenHuggy => {
  return setupGetTokenHuggy(makeHuggyApi(), makeCryptoUtils());
};
