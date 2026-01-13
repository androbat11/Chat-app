export type ApiRequestHandler<
  T extends { method: string; route: string },
  R extends ApiRequestHandlerBaseResponse,
> = {
  method: T["method"];
  route: T["route"];
  hasFileUploads?: boolean;
} & (
  | {
      type: "new";
      inputSchema: AlteredSchema<T>;
      outputSchema: AlteredSchema<R>;
      handler: (req: unknown, res: unknown, payload: T) => Promise<ApiRequestHandlerResponse<R>>;
    }
  | {
      type: "legacy";
      mapper: (req: unknown, res: unknown) => T | HttpRequestValidationErrorResponse<unknown>;
      handler: (req: unknown, res: unknown, payload: T) => Promise<ApiRequestHandlerResponse<R>>;
    }
);

export type HttpApiCreateDocumentGroupRequest = HttpAuthenticatedApiKeyRequestMessage<
  "/unreachable-route/document-groups/",
  DocumentGroupPayload,
  "POST",
  Record<string, never>,
  Record<string, never>
>;

export type HttpCreateDocumentGroupResponse = HttpResponseMessage<{
  documentGroupId: string;
}>;

export type HttpApiEcmService = {
  httpApiCreateDocumentGroup: ApiRequestHandler<
    HttpApiCreateDocumentGroupRequest,
    HttpCreateDocumentGroupResponse
  >;
  httpApiGetAllDocumentGroups: ApiRequestHandler<
    HttpApiGetOrganizationDocumentGroupsRequest,
    HttpGetOrganizationDocumentGroupsResponse
  >;

  httpApiSaveDocumentType: ApiRequestHandler<
    HttpApiPostDocumentTypeRequest,
    HttpPostDocumentTypeResponse
  >;
}