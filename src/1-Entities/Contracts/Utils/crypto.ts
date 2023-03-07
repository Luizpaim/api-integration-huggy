export interface Crypto {
  decrypted: (
    params: DecryptedKeySecret.Input
  ) => DecryptedKeySecret.Output;
}

export namespace DecryptedKeySecret {
  export type Input = { keySecret: string; keyCrypto: string };
  export type Output = string;
}
