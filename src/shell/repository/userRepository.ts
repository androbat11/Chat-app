import { UserRepository } from "@/types/core/adapter/repository/userRepository";
import { Id, UserModel } from "@/types/model/userModel";
import { Collection, ObjectId } from "mongodb";

// TODO: Have to update in order to manage ObjectId instead of string

export function userRepositoryFactory(collection: Collection<UserModel>): UserRepository {
    async function createUser(user: UserModel): Promise<string> {
        const resutlt = await collection.insertOne(user);
        return resutlt.insertedId.toString();
    }

    // TODO: Avoid using unknown as type conversion
    async function getUserByIdentifier(id: ObjectId): Promise<UserModel> {
        const result = await collection.findOne({ _id: id});
        return result as unknown as UserModel;
    }

    return { createUser, getUserByIdentifier };
}
