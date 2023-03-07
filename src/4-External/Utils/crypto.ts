import CryptoJS from "crypto-js";
import { Crypto, DecryptedKeySecret } from "@/1-Entities";

export class CryptoUtils implements Crypto {
   decrypted(params: DecryptedKeySecret.Input): string {
    const secretKey = CryptoJS.enc.Hex.parse(params.keyCrypto);
    const decrypted = CryptoJS.AES.decrypt(
      params.keySecret,
      secretKey.words.toString()
    );
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
