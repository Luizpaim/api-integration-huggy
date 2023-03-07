import { AccessToken } from "@/1-Entities/AccessToken";

export namespace TokenAuthHuggy {
  export type Input = {
    client_id: string;
    client_secret: string;
    code: string;
    redirect_uri: string;
    grant_type: string;
  };
  export type Output = AccessToken;
}

export interface Huggy {
  getToken: (
    params: TokenAuthHuggy.Input
  ) => Promise<TokenAuthHuggy.Output | any>;
}
