export function apiEcmController(
  organizationServiceClientFactory: () => Promise<ReturnType<typeof organizationServiceClient>>,
  ecmClientFactory: () => Promise<ReturnType<typeof ecmServiceClient>>
): HttpApiEcmService {
  const { withApiAuthToken } = buildTokenValidationContext(organizationServiceClientFactory);
  return {
    httpApiGetAllDocumentGroups: {
      method: "GET",
      route: "/unreachable-route/document-groups/all",
      type: "new",
      inputSchema: HttpApiGetOrganizationDocumentGroupsRequestSchema,
      outputSchema: HttpGetDocumentGroupsResponse$Schema,
      handler: withApiAuthToken(async (msg, ctx) => {
        const { isContentLibrary } = msg.queryParameters;
        const result = await (await ecmClientFactory()).organizationDocumentGroups({
          type: "list-organization-document-groups",
          account: ctx.account,
          correlationId: ctx.correlationId,
          isContentLibrary: isContentLibrary,
        });

        if (result.type !== "response") {
          return buildServerErrorResponse(result);
        }

        return {
          type: "response",
          statusCode: StatusCodes.OK,
          contentType: "json",
          headers: {
            "x-correlation-id": result.correlationId,
            "content-type": "application/json; charset=utf-8",
          },
          payload: {
            documentGroups: result.documentGroups,
          },
        };
      }),
    },
    httpApiCreateDocumentGroup: {
      method: "POST",
      route: "/unreachable-route/document-groups/",
      type: "new",
      inputSchema: HttpApiCreateDocumentGroupRequestSchema,
      outputSchema: HttpCreateDocumentGroupResponse$Schema,
      handler: withApiAuthToken(async (msg, ctx) => {
        const { name, description, isContentLibrary, roleToNotify } = msg.payload;
        const result = await (await ecmClientFactory()).createDocumentGroup({
          type: "create-document-group",
          account: ctx.account,
          correlationId: ctx.correlationId,
          name: name,
          description: description,
          roleToNotify: roleToNotify,
          isContentLibrary: isContentLibrary,
        });

        if (result.type !== "response") {
          return buildServerErrorResponse(result);
        }

        return {
          type: "response",
          statusCode: StatusCodes.OK,
          contentType: "json",
          headers: {
            "x-correlation-id": result.correlationId,
            "content-type": "application/json; charset=utf-8",
          },
          payload: {
            documentGroupId: result.id,
          },
        };
      }),
    }
  }
}