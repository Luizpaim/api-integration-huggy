/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface HttpGetClient {
  get: <T = any>(params: HttpGetClient.Params) => Promise<T>;
}
export interface HttpPostClient {
  post: <T = any>(params: HttpPostClient.Params) => Promise<T>;
}
export interface HttpPutClient {
  put: <T = any>(params: HttpPutClient.Params) => Promise<T>;
}
export interface HttpDeleteClient {
  delete: <T = any>(params: HttpDeleteClient.Params) => Promise<T>;
}

type BaseRequest = {
  url: string;
  config?: AxiosRequestConfig;
};

export namespace HttpGetClient {
  export type Params = BaseRequest;
}
export namespace HttpPostClient {
  export type Params = BaseRequest & {
    data?: any;
  };
}

export namespace HttpPutClient {
  export type Params = BaseRequest & {
    data?: any;
  };
}
export namespace HttpDeleteClient {
  export type Params = BaseRequest;
}

export class AxiosHttpClient
  implements HttpGetClient, HttpPostClient, HttpDeleteClient, HttpPutClient
{
  private instance: AxiosInstance;
  constructor(private readonly config?: AxiosRequestConfig) {
    this.instance = axios.create(this.config);
  }
  async post<T = any>(args: HttpPostClient.Params): Promise<T> {
    const result = await this.instance.post<T>(
      args.url,
      args.data,
      args.config
    );
    return result.data;
  }
  async put<T = any>(args: HttpPutClient.Params): Promise<T> {
    const result = await this.instance.put<T>(args.url, args.data, args.config);
    return result.data;
  }
  async get<T = any>(args: HttpGetClient.Params): Promise<T> {
    const result = await this.instance.get<T>(args.url, args.config);
    return result.data;
  }
  async delete<T = any>(args: HttpDeleteClient.Params): Promise<T> {
    const result = await this.instance.delete<T>(args.url, args.config);
    return result.data;
  }
}
