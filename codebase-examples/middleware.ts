export function buildTokenValidationContext(
  organizationServiceClientFactory: () => Promise<ReturnType<typeof organizationServiceClient>>
) {
  function validateApiTokenFactory(
    organizationServiceClientFactory: () => Promise<ReturnType<typeof organizationServiceClient>>,
    allowJwt: boolean
  ): (
    jwtKey: string,
    token: string,
    rawReq: unknown
  ) => Promise<ApiUserAccountContext | undefined> {
    return async function validateApiToken(jwtKey: string, token: string, rawReq: unknown) {
      const req = rawReq as Request;
      if (req.headers["x-api-key"] && req.headers["x-api-secret"]) {
        const rawApiKey = req.headers["x-api-key"];
        const apiKey = Array.isArray(rawApiKey) ? rawApiKey[0] : rawApiKey;
        const rawApiSecret = req.headers["x-api-secret"];
        const apiSecret = Array.isArray(rawApiSecret) ? rawApiSecret[0] : rawApiSecret;
        const result = await (await organizationServiceClientFactory()).validateApiKey({
          type: "validate-api-key",
          correlationId: createUuid(),
          apiKey,
          secret: apiSecret,
        });
        if (result.type !== "response" || !result.valid || !result.accountContext) {
          return undefined;
        }
        return result.accountContext;
      } else if (allowJwt) {
        return rawValidateApiToken(jwtKey, token);
      }
      return undefined;
    };
  }
}