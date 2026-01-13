import { userServiceFactory } from "@/core/services/userService";
import { UserModel } from "@/types/model/userModel";
import { RequestContext, withoutAuthentication } from "../middleware/auth.middleware";
import { HttpCreateUserResponse, HttpUserService } from "@/types/core/adapter/http/httpUser";

export function httpUserHandler(
  userService: () => Promise<ReturnType<typeof userServiceFactory>>,
): HttpUserService {
  // TODO: add zod in order to validate the requests
  return {
    httpCreateUser: {
      method: "POST",
      route: "/users",
      // TODO: see how the msg can maintain context without the type
      handler: withoutAuthentication<UserModel, HttpCreateUserResponse>(async (ctx: RequestContext<UserModel>) => {
        const { id, name, email, phone, password } = ctx.data;

        const result = await (await userService()).createUser({
          id: id,
          name: name,
          email: email,
          phone: phone,
          password: password,
        });

        // Check if result is an error using type discriminator
        if (result.type === "error") {
          return {
            type: "error",
            statusCode: 400,
            body: result,
            headers: {},
          };
        }
        
        return {
          type: "response",
          statusCode: 201,
          body: { userId: result.userId },
          headers: {},
        };
      }),
    },
  };
}

