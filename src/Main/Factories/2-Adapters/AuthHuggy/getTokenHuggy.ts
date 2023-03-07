import { GetTokenHuggyController } from "@/3-Adapters/Controllers";
import { makeGetTokenHuggy } from "../../1-Usecase/AuthHuggy";

export const makeGetTokenHuggyController = () => {
  return new GetTokenHuggyController(makeGetTokenHuggy());
};
