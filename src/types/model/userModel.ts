import { ObjectId } from "mongodb"

export type Id = ObjectId;
export type UserModel = {
    id: Id,
    name: string,
    email: string,
    phone: string,
    password: string,

}



