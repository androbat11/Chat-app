import { configHashFactory } from "@/common/hash";
import { ErrorResponse } from "@/types/core/adapter/errors/serviceErrorAdapters";
import { UserRepository } from "@/types/core/adapter/repository/userRepository";
import { CreateUserResponse, GetUserByIdentifierResponse, UserService } from "@/types/core/adapter/services/userService";
import { Id, UserModel } from "@/types/model/userModel";
import { ObjectId } from "mongodb";

type CreateUserServiceResponse = CreateUserResponse | ErrorResponse<"invalid-request">;
type GetUserByIdentifierServiceResponse = GetUserByIdentifierResponse | ErrorResponse<"not-found">;

export function userServiceFactory(userServiceCollection: UserRepository): UserService {
    // TODO: missing business logic validation.
    async function createUser(req: UserModel): Promise<CreateUserServiceResponse> {
        const hashedPassword = await configHashFactory.hash(req.password);
        const user: UserModel = {
            id: new ObjectId(),
            name: req.name,
            email: req.email,
            phone: req.phone,
            password: hashedPassword,

        };
        const result = await userServiceCollection.createUser(user);


        if (!result){
            return {
                type: "error",
                errorCode: "invalid-request",
                message: "Invalid request" // TODO: be more descriptive about the error
            }
        }
        return {
            type: "response",
            message: "User created successfully",
            userId: result
        };
    }

    async function getUserByIdentifier(req: Id): Promise<GetUserByIdentifierServiceResponse> {
        const result = await userServiceCollection.getUserByIdentifier(req);

        if (!result){
            return {
                type: "error",
                errorCode: "not-found",
                message: "User not found"
            };
        }
        return {
            type: "response",
            message: "User found successfully",
            user: result
        };
    }

    return { createUser, getUserByIdentifier };
}