import { Controller } from "@/3-Adapters/Controllers";
import { AccessToken } from "@/1-Entities";
import { GetTokenHuggy } from "@/2-Usecase/AuthHuggy";
import { Response, ok, notFound } from "@/3-Adapters/Helpers";
import { Validator, ValidationBuilder } from "@/3-Adapters/Validation";
import { NoDataFoundError } from "@/1-Entities";

type HttpRequestBody = {
  client_id: string;
  client_secret: string;
  code: string;
  redirect_uri: string;
  grant_type: string;
};
type HttpRequestParams = {};
type HttpRequestQuery = {};

type Model = Error | AccessToken;

export class GetTokenHuggyController extends Controller {
  constructor(private readonly getTokenHuggy: GetTokenHuggy) {
    super();
  }

  async perform(
    requestBody: HttpRequestBody,
    requestParams: HttpRequestParams,
    resquestQuery: HttpRequestQuery
  ): Promise<Response<Model>> {
    try {
      const result = await this.getTokenHuggy({
        client_id: requestBody.client_id,
        client_secret: requestBody.client_secret,
        code: requestBody.code,
        redirect_uri: requestBody.redirect_uri,
        grant_type: requestBody.grant_type,
      });
      return ok(result);
    } catch (error) {
      if (error instanceof NoDataFoundError) return notFound(error);
      throw error;
    }
  }
  buildValidators({
    client_id,
    client_secret,
    grant_type,
    code,
    redirect_uri,
  }: HttpRequestBody): Validator[] {
    return [
      ...ValidationBuilder.of({ value: client_id, fieldName: "client_id" })
        .required()
        .build(),
      ...ValidationBuilder.of({
        value: client_secret,
        fieldName: "client_secret",
      })
        .required()
        .build(),
      ...ValidationBuilder.of({
        value: grant_type,
        fieldName: "grant_type",
      })
        .required()
        .build(),

      ...ValidationBuilder.of({
        value: code,
        fieldName: "code",
      })
        .required()
        .build(),
      ...ValidationBuilder.of({
        value: redirect_uri,
        fieldName: "redirect_uri",
      })
        .required()
        .build(),
    ];
  }
}
