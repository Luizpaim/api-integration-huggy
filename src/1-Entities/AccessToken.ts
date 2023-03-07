type TypeAccessToken = {
  expires_in: number;
  access_token: string;
};

export class AccessToken {
  public expires_in: number;
  public access_token: string;

  public constructor({ access_token, expires_in }: TypeAccessToken) {
    this.access_token = access_token;
    this.expires_in = this.expiresOnDate(expires_in);
  }
  private expiresOnDate(expires_in: number): number {
    const now = new Date();
    const timestamp = now.getTime();
    const hours = expires_in / 3600000;
    const millisecondsToAdd = hours * 60 * 60 * 1000;
    const newTimestamp = timestamp + millisecondsToAdd;

    return newTimestamp;
  }
}
