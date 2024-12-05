import { createConnection, Connection } from "mysql2/promise";
import { configDotenv } from "dotenv";
import { EnvironmentVariables } from "../types";

configDotenv();
const { DB, HOST, DB_PORT, USERNAME, PASSWORD } = <EnvironmentVariables>process.env;

const connection: Connection = await createConnection({
    database: DB,
    user: USERNAME,
    password: PASSWORD,
    port: parseInt(DB_PORT),
    host: HOST
});


export default connection;