import * as dotenv  from "dotenv";



const envs = [process.env.NODE_ENV];
console.log(process.env.DATABASE_CONNECTION);

(function setEnvironmentConfigurationAccess(){
    dotenv.config({ path: '../.env' });
})();
