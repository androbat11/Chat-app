import { UserModel } from "@/types/model/userModel";
import { Request, Response } from "express";

export type RequestContext<CTX> = {
  request: Request;
  response: Response;
  data: CTX;
};

// TODO: for testing purposes
export function withoutAuthentication<CTX, RS>(
  handler: (ctx: RequestContext<CTX>) => Promise<RS>
) {
  return async (rawReq: unknown, rawRes: unknown): Promise<RS> => {
    const req = rawReq as Request;
    const res = rawRes as Response;
    const ctx = {
      request: req,
      response: res,
      data: req.body as CTX
    };

    return handler(ctx);
  };
}