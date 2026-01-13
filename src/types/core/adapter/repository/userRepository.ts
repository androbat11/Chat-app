import { UserModel } from "@/types/model/userModel";
import { ObjectId } from "mongodb";

// TODO: Probobly wouldn't need to return a user repository.
export interface UserRepository {
    createUser(user: UserModel): Promise<string>;
    getUserByIdentifier(identifier: ObjectId): Promise<UserModel>;
    // TODO: implement the other operatiosn
}