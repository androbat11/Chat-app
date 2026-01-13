import { ErrorResponse } from "../errors/serviceErrorAdapters";
export type HttpRequestMessage<
  ROUTE,
  BODY,
  METHOD = "GET" | "POST" | "PUT" | "DELETE",
  ROUTE_PARAMS = Record<string, unknown>,
  QUERY_PARAMS = Record<string, unknown>,
> = {
  route: ROUTE;
  body: BODY;
  method: METHOD;
  routeParams?: ROUTE_PARAMS;
  queryParams?: QUERY_PARAMS;
};


export type ApiRequestHandler<T extends { method: string; route: string }, R> = {
  method: T["method"];
  route: T["route"];
  handler: (req: Request, res: Response) => Promise<R>;
};

export type HttpStatusCodedResponseMessage<
  STATUS_CODE,
  BODY,
  Z = "response",
  HEADERS extends NonNullable<unknown> = {},
> = {
  type: Z;
  statusCode: STATUS_CODE;
  body: BODY;
  headers: HEADERS;
};

// type HttpResponseMessage<
//   BODY,
//   Z = "response",
//   HEADERS extends NonNullable<unknown> = {},
// > = HttpStatusCodedResponseMessage<200, BODY, Z, HEADERS>;

export type HttpCreateUserSuccessResponse = HttpStatusCodedResponseMessage<
  201,
  { userId: string },
  "response",
  {}
>;

export type HttpCreateUserErrorResponse = HttpStatusCodedResponseMessage<
  400,
  ErrorResponse<"invalid-request">,
  "error",
  {}
>;