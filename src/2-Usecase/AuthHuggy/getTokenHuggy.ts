import { Crypto, Huggy, AccessToken } from "@/1-Entities";

export type GetTokenHuggy = (params: {
  client_id: string;
  client_secret: string;
  code: string;
  redirect_uri: string;
  grant_type: string;
}) => Promise<AccessToken>;

type Setup = (huggy: Huggy, crypto: Crypto) => GetTokenHuggy;

export const setupGetTokenHuggy: Setup = (huggy, crypto) => async (params) => {
  const { client_id, code, redirect_uri, client_secret, grant_type } = params;
  const clientId = crypto.decrypted({
    keyCrypto: process.env.KEY_CRYPTO,
    keySecret: client_id,
  });

  const clientSecret = crypto.decrypted({
    keyCrypto: process.env.KEY_CRYPTO,
    keySecret: client_secret,
  });
  const token = new AccessToken(
    await huggy.getToken({
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      redirect_uri: redirect_uri,
      grant_type: grant_type,
    })
  );

  return token;
};
