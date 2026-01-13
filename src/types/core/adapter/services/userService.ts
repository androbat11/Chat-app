import { Id, UserModel } from "@/types/model/userModel";
import { ErrorResponse } from "../errors/serviceErrorAdapters";

export type MessageResponseBase = {
    type: "response";
    message: string;
}

export type CreateUserResponse = MessageResponseBase &{
    userId: string;
};

export type GetUserByIdentifierResponse = MessageResponseBase & {
    user: UserModel;
};



export type UserService = {
    createUser (req: UserModel): Promise<CreateUserResponse | ErrorResponse<"invalid-request">>;
    getUserByIdentifier (req: Id): Promise<GetUserByIdentifierResponse | ErrorResponse<"not-found">>;
}