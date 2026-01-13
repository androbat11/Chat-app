import { MongoClient } from "mongodb";
import { databaseConfigurationFactory } from "./config";
import { tryCatch } from "../../../../common/tryCatch";
import { DatabaseErrorMessage } from "@/types/shell/database/connectionResponse";


async function ensureDatabaseConnection(client: MongoClient): Promise<boolean> {
    return (await client.connect()) ? true : false
}

async function client(client: MongoClient) {
    return await client.connect();
}

// TODO: find what's the return type of all the nested functions
// TODO: The returned type shouldn't be `unknown` since
// we already know the following function could return:
// 1. Either the connection
// 2. Or an erro while trying to connect

// Check should be an `|` when error is returned. The message should be aligned
// with the error message
export async function databaseFactory(): Promise<MongoClient | Error | DatabaseErrorMessage> {
    const db = databaseConfigurationFactory.databaseConfiguration();
    return tryCatch(
        async (): Promise<MongoClient | Error> => {
            const connection = await client(new MongoClient("mongodb+srv://Manuel:Manuel@practicedb.be4triv.mongodb.net/?retryWrites=true&w=majority&appName=PracticeDb"));
            if (!(await ensureDatabaseConnection(connection))){
                // TODO: not telling why it failed =>
                // At the moment to debug, it will harder to the programmer
                // if I don't handle the <Most> known database connection
                // error cases.
                return new Error(`database connection failed: check your connection string or db access credentials`);
            }

            console.log(`Connected to database: ${db.databaseName} successufully`);
            return connection;
        }, 
        (error) => ({ message: (error as Error).message })
    )
}





databaseFactory().then((value: any) => console.log(value)) as Promise<unknown>;