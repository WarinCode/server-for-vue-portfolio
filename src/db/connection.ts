import { createConnection, Connection } from "mysql2/promise";
import { configDotenv } from "dotenv";
import { EnvironmentVariables } from "../types";

configDotenv();
const { DB, HOST, PORT, USER, PASSWORD } = <EnvironmentVariables>process.env;

const connection: Connection = await createConnection({
    database: DB,
    user: USER,
    password: PASSWORD,
    port: parseInt(PORT),
    host: HOST
});


export default connection;