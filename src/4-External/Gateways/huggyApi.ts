import { Huggy, TokenAuthHuggy } from "@/1-Entities";

import {
  HttpPostClient,
  HttpPutClient,
  HttpGetClient,
  HttpDeleteClient,
} from "../Http";

export class HuggyApi implements Huggy {
  constructor(
    private readonly httpClient: HttpPostClient &
      HttpPutClient &
      HttpGetClient &
      HttpDeleteClient
  ) {}

  async getToken(
    params: TokenAuthHuggy.Input
  ): Promise<{ data: TokenAuthHuggy.Output; error?: unknown }> {
    const url = "/oauth/access_token";
    return this.httpClient
      .post<{ data: TokenAuthHuggy.Output }>({
        url,
        data: params,
      })
      .then((response) => ({
        ...response,
      }))
      .catch((error) => ({ data: undefined, error, params }));
  }
}
