export const envs: Array<string> = [
    "DATABASE_CONNECTION",
    "DATABASE_NAME",
    "NODE_ENV",
    "PORT",
    "HOST",
];




export const databaseConfigurationFactory = {
    databaseConfiguration(): Record<string, string> {
        const uri = process.env.DATABASE_CONNECTION || 'mongodb://localhost:27017';
        const databaseName = process.env.DATABASE_NAME || 'PracticeDb';
        return { uri, databaseName };
    }
}

console.log(process.env.DATABASE_CONNECTION, "database connection")

// const envs = [process.env.NODE_ENV];
// console.log(envs.map((env) => `state of envs: ${env}`));

// const NODE_ENVS = process.env.NODE_ENV;
// console.log(`Loaded node_envs`,NODE_ENVS);




