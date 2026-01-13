import { UserModel } from "@/types/model/userModel";
import { ApiRequestHandler, HttpCreateUserErrorResponse, HttpCreateUserSuccessResponse, HttpRequestMessage } from "./httpCore";

export type HttpCreateUserResponse =
  | HttpCreateUserSuccessResponse
  | HttpCreateUserErrorResponse;


  type HttpCreateUserRequest = HttpRequestMessage<
    "/users",
    UserModel,
    "POST",
    Record<string, unknown>,
    Record<string, unknown>
  >;

export type HttpUserService = {
  httpCreateUser: ApiRequestHandler<
    HttpCreateUserRequest,
    HttpCreateUserResponse
  >;
};