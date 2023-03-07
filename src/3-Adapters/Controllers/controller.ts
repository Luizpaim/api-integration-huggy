import { badRequest, Response, serverError } from "@/3-Adapters/Helpers";
import { ValidationComposite, Validator } from "@/3-Adapters/Validation";

export abstract class Controller {
  abstract perform(httpRequestBody: any, httpRequestParams?: any, httpRequestQuery?: any): Promise<Response>;

  buildValidators(httpRequestBody: any, httpRequestParams?: any, httpRequestQuery?: any): Validator[] {
    return [];
  }

  async handle(httpRequestBody: any, httpRequestParams?: any, httpRequestQuery?: any): Promise<Response> {
    const error = this.validate(httpRequestParams, httpRequestBody, httpRequestQuery);
    if (error !== undefined) return badRequest(error);
    try {
      return await this.perform(httpRequestBody, httpRequestParams, httpRequestQuery);
    } catch (error) {
      console.log(httpRequestBody, httpRequestParams, httpRequestQuery);
      return serverError(error);
    }
  }

  private validate(httpRequestBody: any, httpRequestParams?: any, httpRequestQuery?: any): Error | undefined {
    const validators = this.buildValidators(httpRequestParams, httpRequestBody, httpRequestQuery);
    return new ValidationComposite(validators).validate();
  }
}
